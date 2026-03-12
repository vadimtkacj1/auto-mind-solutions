"use client";

import type { MobileMenuToggleButtonProps } from "../types";
import { cn } from "../../ui/utils";

export function MobileMenuToggleButton({ isOpen, onToggle }: MobileMenuToggleButtonProps) {
  return (
    <button onClick={onToggle} className="lg:hidden relative z-[10001] p-2" aria-label="Toggle Menu">
      <div className="w-9 space-y-2">
        <span
          className={cn(
            "block h-1.5 w-9 bg-white transition-all duration-300",
            isOpen && "rotate-45 translate-y-3.5",
          )}
        />
        <span className={cn("block h-1.5 w-9 bg-white transition-all duration-300", isOpen && "opacity-0")} />
        <span
          className={cn(
            "block h-1.5 w-9 bg-white transition-all duration-300",
            isOpen && "-rotate-45 -translate-y-3.5",
          )}
        />
      </div>
    </button>
  );
}

