"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Lenis отключён — при множестве scroll-анимаций (Hero, Portfolio, PackagesCTA)
    // нативный скролл даёт лучшую производительность без лагов
    const ENABLE_LENIS = false;
    if (!ENABLE_LENIS) return;

    const isMobile = window.innerWidth < 1024;
    if (isMobile) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const connection = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const saveData = connection?.saveData ?? false;
    const effectiveType = connection?.effectiveType ?? "";
    const slowConnection = effectiveType === "slow-2g" || effectiveType === "2g";
    if (reduceMotion || saveData || slowConnection) return;

    const initLenis = () => {
      const lenis = new Lenis({
        duration: 0.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
        infinite: false,
        autoResize: true,
        lerp: 0.22,
      });

      // Анимационный цикл с requestAnimationFrame (с корректной отменой)
      let rafId: number | null = null;
      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      const onVisibilityChange = () => {
        if (document.hidden) {
          if (rafId != null) cancelAnimationFrame(rafId);
          rafId = null;
        } else if (rafId == null) {
          rafId = requestAnimationFrame(raf);
        }
      };
      document.addEventListener("visibilitychange", onVisibilityChange);

      // Expose lenis to window for external control
      (window as unknown as { lenis?: Lenis }).lenis = lenis;

      // Добавляем класс к html для стилизации
      document.documentElement.classList.add("lenis", "lenis-smooth");

      return () => {
        if (rafId != null) cancelAnimationFrame(rafId);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        lenis.destroy();
        document.documentElement.classList.remove("lenis", "lenis-smooth");
      };
    };

    // Инициализировать после полной загрузки страницы или после задержки
    let cleanup: (() => void) | undefined;

    if (document.readyState === "complete") {
      // Страница уже загружена, добавить небольшую задержку
      const timeoutId = setTimeout(() => {
        cleanup = initLenis();
      }, 500);

      return () => {
        clearTimeout(timeoutId);
        cleanup?.();
      };
    } else {
      // Подождать полной загрузки страницы
      const handleLoad = () => {
        cleanup = initLenis();
      };

      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
        cleanup?.();
      };
    }
  }, []);

  return <>{children}</>;
}
