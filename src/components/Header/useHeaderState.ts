"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getLenis } from "@/lib/lenis";

type UseHeaderStateResult = {
  pathname: string;
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
};

export function useHeaderState(): UseHeaderStateResult {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  // Close mobile menu on navigation (including hash changes).
  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  useEffect(() => {
    window.addEventListener("hashchange", closeMobileMenu);
    return () => window.removeEventListener("hashchange", closeMobileMenu);
  }, [closeMobileMenu]);

  useEffect(() => {
    const isHomePage = pathname === "/";

    const handleScroll = () => {
      const lenis = getLenis();
      const scrollY = lenis?.scroll ?? window.scrollY ?? 0;
      setIsScrolled(scrollY > 40 || !isHomePage);
    };

    handleScroll();

    if (!isHomePage) return;

    window.addEventListener("scroll", handleScroll, { passive: true });

    const lenis = getLenis();
    lenis?.on?.("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis?.off?.("scroll", handleScroll);
    };
  }, [pathname]);

  // Prevent body scrolling when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return {
    pathname,
    isScrolled,
    mobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
}
