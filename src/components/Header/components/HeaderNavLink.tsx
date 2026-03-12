"use client";

import Link from "next/link";
import type { HeaderNavLinkProps } from "../types";
import { isNavItemActive } from "../utils";
import { cn } from "../../ui/utils";

export function HeaderNavLink({
  item,
  pathname,
  className,
  activeClassName,
  inactiveClassName,
  onClick,
}: HeaderNavLinkProps) {
  const isActive = isNavItemActive(pathname, item.href);

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "relative z-[10000] pointer-events-auto",
        className,
        isActive ? activeClassName : inactiveClassName,
      )}
    >
      {item.label}
    </Link>
  );
}

