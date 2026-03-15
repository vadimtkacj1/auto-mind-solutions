"use client";

import type { ReactNode } from "react";

/** Passthrough — no AnimatePresence for faster TBT (was ~6s blocking). */
export function AnimatePresenceProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}


