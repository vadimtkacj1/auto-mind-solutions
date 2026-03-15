"use client";

import type { ReactNode } from "react";
import { useRef, useState, useEffect } from "react";
import { HeaderView } from "./HeaderView";
import { useHeaderState } from "./useHeaderState";

const DELTA_THRESHOLD_PX = 8;
const HIDE_AFTER_PX = 120;

type HeaderProps = {
  underHeaderSlot?: ReactNode;
};

export default function Header({ underHeaderSlot }: HeaderProps) {
  const { pathname, mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useHeaderState();

  const lastY = useRef(0);
  const lastIsTop = useRef(true);
  const lastIsHidden = useRef(false);
  const rafId = useRef<number | null>(null);
  const [isHidden, setIsHidden] = useState(false);
  const [isTop, setIsTop] = useState(true);

  // Throttle scroll-driven state to one update per frame to prevent scroll jank
  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        rafId.current = null;
        const latest = window.scrollY;
        const prev = lastY.current;
        lastY.current = latest;
        const atTop = latest <= 0;

        if (atTop !== lastIsTop.current) {
          lastIsTop.current = atTop;
          setIsTop(atTop);
        }
        if (atTop || mobileMenuOpen || latest < HIDE_AFTER_PX) {
          if (lastIsHidden.current) {
            lastIsHidden.current = false;
            setIsHidden(false);
          }
          return;
        }
        const delta = latest - prev;
        const nextHidden =
          delta > DELTA_THRESHOLD_PX ? true : delta < -DELTA_THRESHOLD_PX ? false : lastIsHidden.current;
        if (nextHidden !== lastIsHidden.current) {
          lastIsHidden.current = nextHidden;
          setIsHidden(nextHidden);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen && lastIsHidden.current) {
      lastIsHidden.current = false;
      setIsHidden(false);
    }
  }, [mobileMenuOpen]);

  return (
    <HeaderView
      pathname={pathname}
      isScrolled={!isTop}
      isHidden={isHidden}
      mobileMenuOpen={mobileMenuOpen}
      onToggleMobileMenuAction={toggleMobileMenu}
      onCloseMobileMenuAction={closeMobileMenu}
      underHeaderSlot={underHeaderSlot}
    />
  );
}
