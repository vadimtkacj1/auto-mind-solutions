import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "../../src/components/Header/Header";
import { Footer } from "../../src/components/Footer/Footer";
import { ContactCTA } from "../../src/components/CTA/ContactCTA";
import { ContactCTA } from "../../src/components/CTA/ContactCTA";

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
    canonical: "https://aiterra.agency/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "מדיניות פרטיות | Aiterra",
    description: "מדיניות הפרטיות של Aiterra",
    url: "https://aiterra.agency/privacy",
    type: "website",
    locale: "he_IL",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main>
        <div className="pt-24">
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
