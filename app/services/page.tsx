import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { ServicesElastic } from "@/src/components/Services/ServicesElastic";
import { ContactCTA } from "@/src/components/CTA/ContactCTA";

export const metadata: Metadata = {
  title: "שירותים | Aiterra",
  description: "השירותים שלנו: אתרים ופלטפורמות, SEO וצמיחה, אוטומציה וחיבור מערכות.",
  alternates: { canonical: "https://aiterra.agency/services" },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main className="bg-white">
        <ServicesElastic />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
