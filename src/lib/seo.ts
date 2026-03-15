/**
 * Central SEO config for Next.js Metadata API.
 * Use for canonical URLs, Open Graph defaults, and sitemap/robots.
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aiterra.agency";
export const BRAND_NAME = "Aiterra";

export const DEFAULT_OG_IMAGE = {
  url: "/images/Aittera_2.png",
  width: 1200,
  height: 630,
  alt: `${BRAND_NAME} Logo`,
} as const;

/** Build absolute canonical URL for a path (e.g. "/services", "/insights/my-slug"). */
export function buildCanonical(path: string): string {
  const pathname = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${pathname}`;
}

/** Resolve OG image URL to absolute for metadata. */
export function getAbsoluteOgImage(path: string = DEFAULT_OG_IMAGE.url): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}
