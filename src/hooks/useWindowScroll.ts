import { useState, useEffect } from "react";

export function useWindowScroll(fps: number = 60) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollY = () => {
      setScrollY(window.scrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollY);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScrollY();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [fps]);

  return scrollY;
}

