'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { smoothScrollTo } from '@/src/utils/smoothScroll';

type LenisLike = {
  scrollTo?: (target: Element | string | number, options?: { offset?: number; duration?: number }) => void;
};

export function HashScrollHandler({
  offset = 80,
  delay = 80,
}: {
  offset?: number;
  delay?: number;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const run = () => {
      const hash = window.location.hash;
      if (!hash) return;

      window.setTimeout(() => {
        const el = document.querySelector(hash);
        if (!el) return;

        const lenis = (window as unknown as { lenis?: LenisLike }).lenis;
        if (lenis?.scrollTo) {
          lenis.scrollTo(el, { offset: -offset, duration: 0.9 });
          return;
        }

        smoothScrollTo(hash, offset);
      }, delay);
    };

    run();
    window.addEventListener('hashchange', run);
    return () => window.removeEventListener('hashchange', run);
  }, [pathname, offset, delay]);

  return null;
}


