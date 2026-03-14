"use client";

import { AboutPageBackground } from "./AboutPageBackground";

export function AboutPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-visible">
      <AboutPageBackground />
      <div className="relative z-10 overflow-visible">{children}</div>
    </div>
  );
}
