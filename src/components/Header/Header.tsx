"use client";

import { HeaderView } from "./HeaderView";
import { useHeaderState } from "./useHeaderState";

export default function Header() {
  const { pathname, isScrolled, mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useHeaderState();

  return (
    <HeaderView
      pathname={pathname}
      isScrolled={isScrolled}
      mobileMenuOpen={mobileMenuOpen}
      onToggleMobileMenu={toggleMobileMenu}
      onCloseMobileMenu={closeMobileMenu}
    />
  );
}
