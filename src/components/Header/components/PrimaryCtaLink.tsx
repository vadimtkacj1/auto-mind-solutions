"use client";

import Link from "next/link";
import type { PrimaryCtaLinkProps } from "../types";
import { Button } from "../../ui/Button/Button";

export function PrimaryCtaLink({ className, size = "desktop" }: PrimaryCtaLinkProps) {
  return (
    <Button asChild variant="cta" size={size === "desktop" ? "nav" : "hero"} className={className}>
      <Link href="/contact">קביעת שיחת אסטרטגיה</Link>
    </Button>
  );
}

