"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { UseHeaderStateResult } from "./types";

export function useHeaderState(): UseHeaderStateResult {
  const pathname = usePathname() ?? "/";
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

  // Prevent body scrolling when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return {
    pathname,
    mobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
}
