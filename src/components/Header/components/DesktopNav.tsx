"use client";

import type { DesktopNavProps } from "../types";
import { NavLinks } from "./NavLinks";

export function DesktopNav({ pathname }: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center relative z-[10000]" dir="rtl">
      <NavLinks pathname={pathname} variant="desktop" />
    </nav>
  );
}

