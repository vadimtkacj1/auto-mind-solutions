"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function getRouteKey(pathname: string) {
  return pathname;
}

function isModifiedClick(e: MouseEvent) {
  return e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
}

function shouldSkipAnchor(anchor: HTMLAnchorElement) {
  if (anchor.hasAttribute("download")) return true;
  if (anchor.getAttribute("target") && anchor.getAttribute("target") !== "_self") return true;
  if (anchor.dataset.noViewTransition === "true") return true;
  if (anchor.getAttribute("rel")?.includes("external")) return true;
  return false;
}

function getInternalHref(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute("href");
  if (!href) return null;
  if (href.startsWith("#")) return null; // hash navigation on the same page
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return null;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return null;

  return `${url.pathname}${url.search}${url.hash}`;
}

export function ViewTransitionsProvider() {
  const router = useRouter();
  const pathname = usePathname() ?? "/";

  const currentKey = useMemo(() => getRouteKey(pathname), [pathname]);

  const pendingRef = useRef<{
    toKey: string;
    resolve: () => void;
    timeoutId: number;
  } | null>(null);

  useEffect(() => {
    const pending = pendingRef.current;
    if (!pending) return;
    if (currentKey !== pending.toKey) return;

    window.clearTimeout(pending.timeoutId);
    pending.resolve();
    pendingRef.current = null;
  }, [currentKey]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (isModifiedClick(e)) return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (shouldSkipAnchor(anchor)) return;

      const href = getInternalHref(anchor);
      if (!href) return;

      const url = new URL(href, window.location.href);
      const toKey = getRouteKey(url.pathname);

      // If it's the same route, don't interfere (hash links, same-page navigations, etc).
      if (toKey === currentKey) return;

      e.preventDefault();

      const navigate = () => {
        router.push(href);
      };

      const canUseViewTransition = typeof (document as unknown as { startViewTransition?: unknown }).startViewTransition === "function" && !prefersReducedMotion();
      if (!canUseViewTransition) {
        navigate();
        return;
      }

      const navigationDone = new Promise<void>((resolve) => {
        // In case the route key never matches (edge cases), don't hang the transition.
        const timeoutId = window.setTimeout(resolve, 1200);
        pendingRef.current = { toKey, resolve, timeoutId };
      });

      document.startViewTransition(() => {
        navigate();
        return navigationDone;
      });
    };

    // Capture phase so we run before Next's Link handler.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router, currentKey]);

  return null;
}


