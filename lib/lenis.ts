export type LenisLike = {
  scroll?: number;
  on?: (event: string, cb: () => void) => void;
  off?: (event: string, cb: () => void) => void;
  scrollTo?: (target: Element | string | number, options?: { offset?: number; duration?: number }) => void;
};

export function getLenis(): LenisLike | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { lenis?: LenisLike }).lenis;
}
