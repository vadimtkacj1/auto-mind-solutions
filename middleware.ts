import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  // Redirect aiterra.co.il to /in-construction (except the page itself and static assets)
  if (
    (hostname === "aiterra.co.il" || hostname === "www.aiterra.co.il") &&
    pathname !== "/in-construction" &&
    !pathname.startsWith("/_next/") &&
    !pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|avif|ico|woff|woff2|ttf|otf|eot|js|css)$/)
  ) {
    return NextResponse.redirect(new URL("/in-construction", request.url));
  }

  const response = NextResponse.next();

  // Security headers
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  // HSTS for production
  if (process.env.NODE_ENV === "production") {
    response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  }

  // Cache control for different routes
  // Static assets - aggressive caching
  if (
    pathname.startsWith("/_next/static/") ||
    pathname.startsWith("/images/") ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|avif|ico|woff|woff2|ttf|otf|eot)$/)
  ) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  }

  // API routes - no cache
  if (pathname.startsWith("/api/")) {
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
  }

  // HTML pages - short cache with revalidation
  if (pathname.endsWith(".html") || !pathname.includes(".")) {
    response.headers.set("Cache-Control", "public, max-age=0, must-revalidate");
  }

  // CORS headers (if needed)
  if (request.method === "OPTIONS") {
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    response.headers.set("Access-Control-Max-Age", "86400");
  }

  return response;
}

// Configure which routes use this middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/webpack-hmr (webpack hot reload)
     */
    "/((?!_next/webpack-hmr).*)",
  ],
};
