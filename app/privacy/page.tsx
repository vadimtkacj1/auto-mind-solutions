import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "../../src/components/Header/Header";
import { Footer } from "../../src/components/Footer/Footer";
import { ContactCTA } from "../../src/components/CTA/ContactCTA";
import { PageBreadcrumbs } from "@/src/components/ui/Breadcrumb/PageBreadcrumbs";
import { buildCanonical } from "@/src/lib/seo";

const PrivacyPolicy = dynamic(
  () => import("../../src/components/PrivacyPolicy/PrivacyPolicy").then((mod) => ({ default: mod.PrivacyPolicy })),
  {
    ssr: true,
  },
);

export const metadata: Metadata = {
  title: "מדיניות פרטיות | Aiterra",
  description: "מדיניות הפרטיות של Aiterra - כל המידע על איסוף, שימוש והגנה על הנתונים האישיים שלך.",
  alternates: {
    canonical: buildCanonical("/privacy"),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "מדיניות פרטיות",
    description: "מדיניות הפרטיות של Aiterra",
    url: buildCanonical("/privacy"),
    type: "website",
    locale: "he_IL",
    siteName: "Aiterra",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main>
        <div className="pt-24">
          <PageBreadcrumbs items={[{ label: "מדיניות פרטיות" }]} className="py-6" />
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <PrivacyPolicy />
          </Suspense>
        </div>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
