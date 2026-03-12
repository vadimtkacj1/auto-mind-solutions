import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { ArticlesGrid } from "@/src/components/Insights";

export const metadata: Metadata = {
  title: "תובנות | Aiterra",
  description: "מאמרים, פלייבוקים ותובנות מעשיות על צמיחה, SEO, אוטומציה והנדסה.",
  alternates: { canonical: "https://aiterra.agency/insights" },
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfd] text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main className="pt-24 bg-[#fcfcfd]">
        <Suspense fallback={<div className="min-h-[500px]" />}>
          <ArticlesGrid showHeader={true} />
        </Suspense>
        {/* <CTA /> */}
      </main>
      <Footer />
    </div>
  );
}
