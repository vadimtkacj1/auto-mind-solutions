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
  onToggleMobileMenuAction,
  onCloseMobileMenuAction,
  underHeaderSlot,
}: HeaderViewProps) {
  const isSolid = isScrolled || mobileMenuOpen || pathname !== "/";
  const HEADER_HEIGHT = 80;
  const motionState = isHidden ? "hidden" : "shown";

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[10100]"
        initial={false}
        animate={motionState}
        variants={{
          shown: { y: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
          hidden: { y: -HEADER_HEIGHT, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
        }}
      >
        <header
          dir="rtl"
          style={{
            backgroundColor: isSolid ? "rgba(5, 10, 21, 0.95)" : "transparent",
          }}
          className={cn(
            "w-full transition-all duration-500 ease-in-out pointer-events-auto",
            isSolid ? "backdrop-blur-md border-b border-white/10 shadow-2xl" : "border-b border-transparent shadow-none",
          )}
        >
          <div className="h-20 flex items-center">
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

                <MobileMenuToggleButton isOpen={mobileMenuOpen} onToggle={onToggleMobileMenuAction} />
              </div>
            </div>
          </div>

          {underHeaderSlot && <div className="w-full relative z-[10051]">{underHeaderSlot}</div>}
        </header>
      </motion.div>

      {/* MOBILE OVERLAY */}
      <MobileMenuOverlay isOpen={mobileMenuOpen} onClose={onCloseMobileMenuAction} />

      {/* MOBILE SIDEBAR */}
      <MobileSidebar pathname={pathname} isOpen={mobileMenuOpen} onClose={onCloseMobileMenuAction} />
    </>
  );
}
