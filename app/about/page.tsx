import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { AboutPageLayout } from "@/src/components/AboutAiterra/AboutPageLayout";
import { AboutHero } from "@/src/components/AboutAiterra/AboutHero";
import { AboutAiterra } from "@/src/components/AboutAiterra/AboutAiterra";
import { ContactCTA } from "@/src/components/CTA/ContactCTA";

export const metadata: Metadata = {
  title: "About Us - Aiterra",
  description:
    "Leading tech agency for automation and artificial intelligence. Bridging the gap between complex technology and business growth.",
  alternates: { canonical: "https://aiterra.agency/about" },
};

export default function AboutPage() {
  return (
    <AboutPageLayout>
      <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
        <Header />
        <main className="bg-transparent">
          <AboutHero
            title={
              <>
                אנחנו הופכים{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
                  טכנולוגיה מורכבת
                </span>{" "}
                לצמיחה עסקית
              </>
            }
            subtitle="מאז 2010 אנחנו בונים אתרים ומוצרים דיגיטליים שמחברים אסטרטגיה, עיצוב וטכנולוגיה לתוצאות מדידות. אנחנו מגשרים על הפער בין אוטומציה, בינה מלאכותית ותוצאות עסקיות אמיתיות."
            primaryCta={{ label: "צרו קשר", href: "/contact" }}
            secondaryCta={{ label: "השירותים שלנו", href: "/services" }}
          />
          <AboutAiterra />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </AboutPageLayout>
  );
}
