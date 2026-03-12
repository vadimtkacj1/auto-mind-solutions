"use client";

import type { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

export function AnimatePresenceProvider({ children }: { children: ReactNode }) {
  // Important: children must be a single keyed motion element (we do this in app/template.tsx).
  return (
    <AnimatePresence mode="wait" initial={false}>
      {children}
    </AnimatePresence>
  );
}


