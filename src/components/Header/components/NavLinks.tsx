"use client";

import { MAIN_NAV_ITEMS } from "@/lib/navigation";
import type { NavLinksProps } from "../types";
import { HeaderNavLink } from "./HeaderNavLink";

const STYLES = {
  desktop: {
    className: "text-lg font-bold transition-colors",
    activeClassName: "text-white font-extrabold",
    inactiveClassName: "text-white/80 hover:text-white",
  },
  mobile: {
    className: "text-3xl font-bold transition-colors",
    activeClassName: "text-[#3b82f6]",
    inactiveClassName: "text-white/90 active:text-[#3b82f6]",
  },
} as const;

export function NavLinks({ pathname, items = MAIN_NAV_ITEMS, variant }: NavLinksProps) {
  const styles = STYLES[variant];

  return (
    <>
      {items.map((item) => (
        <HeaderNavLink
          key={item.href}
          item={item}
          pathname={pathname}
          className={styles.className}
          activeClassName={styles.activeClassName}
          inactiveClassName={styles.inactiveClassName}
        />
      ))}
    </>
  );
}

