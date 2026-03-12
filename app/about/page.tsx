import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { PageHero } from "@/src/components/PageHero/PageHero";
import { AboutAiterra } from "@/src/components/AboutAiterra/AboutAiterra";
import { CTA } from "@/src/components/CTA/CTA";

export const metadata: Metadata = {
  title: "אודותינו - Aiterra",
  description: "סוכנות מובילה לאוטומציה ובינה מלאכותית. מגשרים על הפער בין טכנולוגיה מורכבת לצמיחה עסקית.",
  alternates: { canonical: "https://aiterra.agency/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main>
        <PageHero
          badge="ABOUT US • Aiterra"
          title={
            <>
              אודותינו. <span className="text-[var(--color-primary)]">מי אנחנו.</span>
            </>
          }
          subtitle={
            <>
              מאז 2010 אנחנו בונים אתרים ומוצרים דיגיטליים שמחברים אסטרטגיה, עיצוב וטכנולוגיה לתוצאות מדידות.
            </>
          }
          primaryCta={{ label: "צור קשר", href: "/contact" }}
          secondaryCta={{ label: "השירותים שלנו", href: "/services" }}
        />
        <AboutAiterra />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
