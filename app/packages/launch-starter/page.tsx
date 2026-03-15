import type { Metadata } from "next";
import { buildCanonical } from "@/src/lib/seo";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { PageHero } from "@/src/components/PageHero/PageHero";
import { ContactCTA } from "@/src/components/CTA/ContactCTA";
import { Check } from "lucide-react";
import { PageBreadcrumbs } from "@/src/components/ui/Breadcrumb/PageBreadcrumbs";
import { InternalLinksBlock } from "@/src/components/InternalLinksBlock";

const PACKAGE_BACKLINKS = [
  { label: "Growth Landing System", href: "/packages/growth-landing-system" },
  { label: "Digital Commerce Elite", href: "/packages/digital-commerce-elite" },
  { label: "Business Presence Pro", href: "/packages/business-presence-pro" },
  { label: "כל החבילות", href: "/packages" },
  { label: "שירותים", href: "/services" },
  { label: "צור קשר", href: "/contact" },
];

export const metadata: Metadata = {
  title: "Launch Starter - פתרון מהיר להתחלה | Aiterra",
  description: "דף נחיתה ממיר מקצועי לעסקים שרוצים להתחיל להביא לידים. מבנה שיווקי ממוקד המרות.",
  alternates: { canonical: buildCanonical("/packages/launch-starter") },
};

const features = [
  "דף נחיתה ממיר מקצועי",
  "מבנה שיווקי ממוקד המרות",
  "התאמה מלאה לקמפיינים ממומנים",
  "3 גרפיקות סטטיות מקצועיות למודעות",
  "עיצוב מודרני ואופטימיזציה בסיסית",
];

export default function LaunchStarterPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main>
        <PageHero
          badge="LAUNCH STARTER • Aiterra"
          title={
            <>
              פתרון מהיר <span className="text-[var(--color-primary)]">להתחלה</span>
            </>
          }
          subtitle={<>פתרון מהיר לעסקים שרוצים להתחיל להביא לידים עם דף נחיתה ממיר מקצועי</>}
          primaryCta={{ label: "קבלו הצעת מחיר", href: "/contact" }}
          secondaryCta={{ label: "כל החבילות", href: "/packages" }}
        />
        <PageBreadcrumbs
          items={[{ label: "חבילות", href: "/packages" }, { label: "Launch Starter" }]}
          className="py-6 bg-[#080a0c]"
          variant="dark"
        />

        <section className="px-6 py-14 md:py-20 bg-[#080a0c]" dir="rtl">
          <div className="mx-auto max-w-6xl">
            <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 md:p-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8">מה כלול בחבילה</h2>

              <ul className="space-y-6 mb-12">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-full bg-emerald-500/20 shrink-0">
                      <Check className="text-emerald-400" size={20} strokeWidth={3} />
                    </div>
                    <span className="text-white text-xl font-bold leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20">
                <h3 className="text-2xl font-black text-emerald-400 mb-4">למי זה מתאים?</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  חבילה זו מתאימה לעסקים קטנים ובינוניים שרוצים להתחיל להביא לידים במהירות. אידיאלי למי שמתכנן להריץ
                  קמפיינים ממומנים ב-Google או Facebook/Instagram וצריך דף נחיתה מקצועי שממיר.
                </p>
              </div>
            </div>
          </div>
        </section>

        <InternalLinksBlock title="חבילות וקישורים נוספים" links={PACKAGE_BACKLINKS} variant="light" />

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
