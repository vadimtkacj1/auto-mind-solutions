import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/src/components/Header/Header";
import { PortfolioGrid } from "@/src/components/Portfolio/PortfolioGrid";
import { Footer } from "@/src/components/Footer/Footer";
import { StrategicCTA } from "@/src/components/CTA/StrategicCTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio projects by Aiterra",
  alternates: { canonical: "https://aiterra.agency/portfolio" },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main className="pt-20">
        <Suspense fallback={<div className="min-h-[500px]" />}>
          <PortfolioGrid showHeader={true} />
        </Suspense>
        <StrategicCTA />
      </main>
      <Footer />
    </div>
  );
}
