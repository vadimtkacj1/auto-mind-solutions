"use client";

import Image from "next/image";
import Link from "next/link";
import type { BrandLogoProps } from "../types";
import { cn } from "../../ui/utils";

const VARIANTS = {
  default: {
    src: "/images/Aiterra.svg",
    width: 140,
    height: 36,
    imageClassName: "h-8 sm:h-9 w-[100px] sm:w-[120px] md:w-[140px] object-contain",
  },
  white: {
    src: "/images/AiterraWH.svg",
    width: 180,
    height: 48,
    imageClassName: "h-12 w-auto object-contain",
  },
} as const;

export function BrandLogo({ variant = "default", className }: BrandLogoProps) {
  const v = VARIANTS[variant];

  return (
    <Link href="/" className={cn("relative z-[10001] flex items-center", className)}>
      <Image
        src={v.src}
        alt="Aiterra Logo"
        width={v.width}
        height={v.height}
        priority
        className={v.imageClassName}
      />
    </Link>
  );
}

