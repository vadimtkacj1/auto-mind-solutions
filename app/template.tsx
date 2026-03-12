"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "/";

  return (
    <motion.div
      key={pathname}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}


