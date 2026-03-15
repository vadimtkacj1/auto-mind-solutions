"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/** Plain div — no framer-motion for faster TBT/LCP. */
export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "/";
  return <div key={pathname}>{children}</div>;
}


