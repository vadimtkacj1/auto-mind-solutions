import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "../../src/components/Header/Header";
import { Footer } from "../../src/components/Footer/Footer";
import { ContactCTA } from "../../src/components/CTA/ContactCTA";
import { PageBreadcrumbs } from "@/src/components/ui/Breadcrumb/PageBreadcrumbs";
import { buildCanonical } from "@/src/lib/seo";

const Terms = dynamic(() => import("../../src/components/Terms/Terms").then((mod) => ({ default: mod.Terms })), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "תנאי שימוש | Aiterra",
  description: "תנאי השימוש באתר Aiterra - הכללים וההתחייבויות לשימוש בשירותים שלנו.",
  alternates: {
    canonical: buildCanonical("/terms"),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "תנאי שימוש",
    description: "תנאי השימוש באתר Aiterra - הכללים וההתחייבויות לשימוש בשירותים שלנו.",
    url: buildCanonical("/terms"),
    type: "website",
    locale: "he_IL",
    siteName: "Aiterra",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main>
        <div className="pt-24">
          <PageBreadcrumbs items={[{ label: "תנאי שימוש" }]} className="py-6" />
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <Terms />
          </Suspense>
        </div>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
