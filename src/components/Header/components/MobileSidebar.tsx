"use client";

import type { MobileSidebarProps } from "../types";
import Link from "next/link";
import { MAIN_NAV_ITEMS } from "@/lib/navigation";
import { X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { HeaderNavLink } from "./HeaderNavLink";
import { cn } from "../../ui/utils";
import { CONTACT_INFO } from "@/lib/constants";

export function MobileSidebar({ pathname, isOpen, onClose }: MobileSidebarProps) {
  return (
    <aside
      dir="rtl"
      className={cn(
        "fixed top-4 right-4 bottom-4 w-[340px] max-w-[calc(100vw-2rem)] bg-white z-[9998] transform transition-transform duration-300 ease-in-out lg:hidden border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.18)] rounded-[28px] overflow-hidden",
        isOpen ? "translate-x-0" : "translate-x-[120%]",
      )}
    >
      <div className="p-8 flex flex-col h-full">
        {/* Top bar */}
        <div className="flex items-center justify-between" dir="ltr">
          <BrandLogo className="z-[1]" />
          <button
            type="button"
            onClick={onClose}
            className="h-10 w-10 rounded-2xl border border-slate-200 text-slate-900 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center justify-center"
            aria-label="סגירת תפריט"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Label */}
        <div className="mt-8 text-[11px] font-black tracking-[0.28em] uppercase text-slate-400" dir="ltr">
          תפריט
        </div>

        {/* Main nav */}
        <nav className="mt-4 flex flex-col">
          {MAIN_NAV_ITEMS.map((item) => (
            <HeaderNavLink
              key={item.href}
              item={item}
              pathname={pathname}
              onClick={onClose}
              className="py-2 text-3xl font-black tracking-tight text-slate-900 w-fit"
              activeClassName="underline underline-offset-8 decoration-2 decoration-[var(--color-primary)]"
              inactiveClassName="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[var(--color-primary)]"
            />
          ))}
        </nav>

        {/* Bottom */}
        <div className="mt-auto pt-10">
          <div className="text-[11px] font-black tracking-[0.28em] uppercase text-slate-400" dir="ltr">
            צור קשר
          </div>
          <div className="mt-4 flex items-center justify-between gap-6" dir="ltr">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-sm font-extrabold text-slate-900 underline underline-offset-4 hover:text-[var(--color-primary)] transition-colors"
            >
              {CONTACT_INFO.email}
            </a>
            <Link
              href="/about"
              onClick={onClose}
              className="text-sm font-extrabold text-slate-900 underline underline-offset-4 hover:text-[var(--color-primary)] transition-colors"
            >
              אודותינו
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

