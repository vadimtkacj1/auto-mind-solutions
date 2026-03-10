import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { ArticlesGrid } from "@/src/components/Insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles, playbooks and technical deep-dives from Aiterra.",
  alternates: { canonical: "https://aiterra.agency/insights" },
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main className="pt-20">
        <Suspense fallback={<div className="min-h-[500px]" />}>
          <ArticlesGrid showHeader={true} />
        </Suspense>
        {/* <StrategicCTA /> */}
      </main>
      <Footer />
    </div>
  );
}
