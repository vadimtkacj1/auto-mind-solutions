"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { LenisProvider } from "./LenisContext";
import { CUBERTO_EASING } from "./constants";

/** Cubic-bezier easing function from Cuberto curve [0.76, 0, 0.24, 1] */
function cubicBezier(_c1: number, c2: number, _c3: number, c4: number) {
  return (t: number): number => {
    const t2 = t * t;
    const t3 = t2 * t;
    const mt = 1 - t;
    const mt2 = mt * mt;
    return 3 * mt2 * t * c2 + 3 * mt * t2 * c4 + t3;
  };
}

const cubertoEasing = cubicBezier(...CUBERTO_EASING);

export interface SmoothScrollLayoutProps {
  children: ReactNode;
  /** Включить Lenis (по умолчанию true) */
  enabled?: boolean;
  /** Отключить на мобильных (по умолчанию true) */
  disableOnMobile?: boolean;
  /** Брейкпоинт для мобильных (по умолчанию 1024) */
  mobileBreakpoint?: number;
}

export function SmoothScrollLayout({
  children,
  enabled = true,
  disableOnMobile = true,
  mobileBreakpoint = 1024,
}: SmoothScrollLayoutProps) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < mobileBreakpoint;
    if (disableOnMobile && isMobile) return;

    const reduceMotion = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const connection = typeof navigator !== "undefined" ? (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection : undefined;
    const saveData = connection?.saveData ?? false;
    const effectiveType = connection?.effectiveType ?? "";
    const slowConnection = effectiveType === "slow-2g" || effectiveType === "2g";

    if (reduceMotion || saveData || slowConnection) return;

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      easing: cubertoEasing,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      infinite: false,
      autoResize: true,
    });

    setLenisInstance(lenis);

    let rafId: number | null = null;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onVisibilityChange = () => {
      if (document.hidden && rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      } else if (!document.hidden && rafId == null) {
        rafId = requestAnimationFrame(raf);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    (window as unknown as { lenis?: Lenis }).lenis = lenis;
    document.documentElement.classList.add("lenis", "lenis-smooth");

    return () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      lenis.destroy();
      setLenisInstance(null);
      delete (window as unknown as { lenis?: Lenis }).lenis;
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, [enabled, disableOnMobile, mobileBreakpoint]);

  return <LenisProvider value={lenisInstance}>{children}</LenisProvider>;
}
