"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { HeaderView } from "./HeaderView";
import { useHeaderState } from "./useHeaderState";

const DELTA_THRESHOLD_PX = 8;
const HIDE_AFTER_PX = 120;

export default function Header() {
  const { pathname, mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useHeaderState();
  const { scrollY } = useScroll();

  const lastY = useRef(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = lastY.current;
    lastY.current = latest;

    const atTop = latest <= 0;
    setIsTop(atTop);

    // Always visible on top and when mobile menu is open.
    if (atTop || mobileMenuOpen || latest < HIDE_AFTER_PX) {
      setIsHidden(false);
      return;
    }

    const delta = latest - prev;
    if (delta > DELTA_THRESHOLD_PX) setIsHidden(true);
    if (delta < -DELTA_THRESHOLD_PX) setIsHidden(false);
  });

  return (
    <HeaderView
      pathname={pathname}
      isScrolled={!isTop}
      isHidden={isHidden}
      mobileMenuOpen={mobileMenuOpen}
      onToggleMobileMenu={toggleMobileMenu}
      onCloseMobileMenu={closeMobileMenu}
    />
  );
}
