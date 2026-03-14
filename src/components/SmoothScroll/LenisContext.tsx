"use client";

import { createContext, useContext, type ReactNode } from "react";
import type Lenis from "lenis";

export type LenisContextValue = Lenis | null;

const LenisContext = createContext<LenisContextValue>(null);

export function LenisProvider({ value, children }: { value: LenisContextValue; children: ReactNode }) {
  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}

export function useLenisContext(): LenisContextValue {
  return useContext(LenisContext);
}
