'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Отключить Lenis на мобильных устройствах для лучшей производительности
    const isMobile = window.innerWidth < 1024;
    if (isMobile) return;

    // Отложить инициализацию Lenis до полной загрузки страницы
    const initLenis = () => {
      // Инициализация Lenis для плавного скроллинга (только на десктопе)
      const lenis = new Lenis({
        duration: 0.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        infinite: false,
        autoResize: true,
        lerp: 0.1,
      });

      // Анимационный цикл с requestAnimationFrame
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Expose lenis to window for external control
      (window as any).lenis = lenis;

      // Добавляем класс к html для стилизации
      document.documentElement.classList.add('lenis', 'lenis-smooth');

      return () => {
        lenis.destroy();
        document.documentElement.classList.remove('lenis', 'lenis-smooth');
      };
    };

    // Инициализировать после полной загрузки страницы или после задержки
    let cleanup: (() => void) | undefined;

    if (document.readyState === 'complete') {
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

      window.addEventListener('load', handleLoad);

      return () => {
        window.removeEventListener('load', handleLoad);
        cleanup?.();
      };
    }
  }, []);

  return <>{children}</>;
}
