"use client";

import type { MobileMenuOverlayProps } from "../types";
import { cn } from "../../ui/utils";

export function MobileMenuOverlay({ isOpen, onClose }: MobileMenuOverlayProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 bg-black/80 backdrop-blur-md lg:hidden z-[9997] transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
      onClick={onClose}
    />
  );
}

