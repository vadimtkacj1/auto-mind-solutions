"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds a CSS class to <html> and <body> based on the current route.
 * - main site: `site-main`
 * - landing (/landing/first): `landing-first`
 */
export function BodyClassController() {
  const pathname = usePathname();

  useEffect(() => {
    const isLanding = pathname?.startsWith("/landing/first");
    const html = document.documentElement;
    const body = document.body;

    if (isLanding) {
      html.classList.add("landing-first");
      body.classList.add("landing-first");
      html.classList.remove("site-main");
      body.classList.remove("site-main");
    } else {
      html.classList.add("site-main");
      body.classList.add("site-main");
      html.classList.remove("landing-first");
      body.classList.remove("landing-first");
    }
  }, [pathname]);

  return null;
}
