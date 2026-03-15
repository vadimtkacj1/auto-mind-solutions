import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { ArticlesGrid } from "@/src/components/Insights";
import { ContactCTA } from "@/src/components/CTA/ContactCTA";
import { StructuredData, getBreadcrumbSchema } from "@/src/components/StructuredData";
import { buildCanonical, getAbsoluteOgImage, DEFAULT_OG_IMAGE, BRAND_NAME, SITE_URL } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "תובנות",
  description: "מאמרים, פלייבוקים ותובנות מעשיות על צמיחה, SEO, אוטומציה והנדסה.",
  alternates: {
    canonical: buildCanonical("/insights"),
    types: { "application/rss+xml": `${SITE_URL}/feed.xml` },
  },
  openGraph: {
    title: "תובנות",
    description: "מאמרים, פלייבוקים ותובנות מעשיות על צמיחה, SEO, אוטומציה והנדסה.",
    url: buildCanonical("/insights"),
    type: "website",
    siteName: BRAND_NAME,
    images: [{ url: getAbsoluteOgImage(DEFAULT_OG_IMAGE.url), width: DEFAULT_OG_IMAGE.width, height: DEFAULT_OG_IMAGE.height, alt: DEFAULT_OG_IMAGE.alt }],
  },
  twitter: { card: "summary_large_image", title: "תובנות", description: "מאמרים ותובנות על צמיחה, SEO, אוטומציה והנדסה." },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "ראשי", item: "/" },
  { name: "תובנות", item: "/insights" },
]);

export default function InsightsPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main id="main-content" className="pt-24 bg-white min-h-screen">
        <Suspense fallback={<div className="min-h-[500px]" />}>
          <ArticlesGrid showHeader={true} />
        </Suspense>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
