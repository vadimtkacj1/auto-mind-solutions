"use client";

import { motion } from "framer-motion";
import { cn } from "../ui/utils";
import type { HeaderViewProps } from "./types";
import {
  DesktopNav,
  BrandLogo,
  MobileMenuOverlay,
  MobileMenuToggleButton,
  MobileSidebar,
  PrimaryCtaLink,
} from "./components";

export function HeaderView({
  pathname,
  isScrolled,
  isHidden,
  mobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
}: HeaderViewProps) {
  const isSolid = isScrolled || mobileMenuOpen || pathname !== "/";
  const motionState = isHidden ? "hidden" : "shown";

  return (
    <>
      <motion.header
        dir="rtl"
        initial={false}
        animate={motionState}
        variants={{
          // Show faster (snappier) on scroll up
          shown: { y: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
          // Hide a bit slower (more premium) on scroll down
          hidden: { y: "-100%", transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
        }}
        style={{
          backgroundColor: isSolid ? "rgba(5, 10, 21, 0.95)" : "transparent",
        }}
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-500 ease-in-out h-20 flex items-center pointer-events-auto",
          isSolid ? "backdrop-blur-md border-b border-white/10 shadow-2xl" : "border-b border-transparent shadow-none",
        )}
      >
        {/* Use LTR for layout so left/right are visually stable even inside RTL page */}
        <div
          className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full flex items-center justify-between"
          dir="ltr"
        >
          {/* LEFT: Logo */}
          <BrandLogo />

          {/* CENTER: Nav */}
          <DesktopNav pathname={pathname} />

          {/* RIGHT: CTA + Mobile burger */}
          <div className="flex items-center gap-4" dir="rtl">
            <PrimaryCtaLink size="desktop" className="hidden lg:inline-flex" />

            <MobileMenuToggleButton isOpen={mobileMenuOpen} onToggle={onToggleMobileMenu} />
          </div>
        </div>
      </motion.header>

      {/* MOBILE OVERLAY */}
      <MobileMenuOverlay isOpen={mobileMenuOpen} onClose={onCloseMobileMenu} />

      {/* MOBILE SIDEBAR */}
      <MobileSidebar pathname={pathname} isOpen={mobileMenuOpen} onClose={onCloseMobileMenu} />
    </>
  );
}
