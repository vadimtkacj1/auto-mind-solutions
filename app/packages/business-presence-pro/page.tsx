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
  { label: "Launch Starter", href: "/packages/launch-starter" },
  { label: "Growth Landing System", href: "/packages/growth-landing-system" },
  { label: "Digital Commerce Elite", href: "/packages/digital-commerce-elite" },
  { label: "כל החבילות", href: "/packages" },
  { label: "שירותים", href: "/services" },
  { label: "צור קשר", href: "/contact" },
];

export const metadata: Metadata = {
  title: "Business Presence Pro - אתר עסקי מלא | Aiterra",
  description: "אתר עסקי מלא + מערכת שיווק. סרטוני AI, SEO, קמפיין Facebook & Instagram ועוד.",
  alternates: { canonical: buildCanonical("/packages/business-presence-pro") },
};

const features = [
  "אתר תדמית מקצועי לעסק",
  "סרטוני AI להצגת השירותים",
  "4 מאמרי SEO לקידום בגוגל",
  "ניהול קמפיין Facebook & Instagram",
  "תוכנית SEO אסטרטגית",
  "3 מודעות סטטיות מקצועיות",
];

export default function BusinessPresenceProPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main>
        <PageHero
          badge="BUSINESS PRESENCE PRO • פופולרי"
          title={
            <>
              אתר עסקי <span className="text-[var(--color-primary)]">מלא</span>
            </>
          }
          subtitle={<>אתר עסקי מקצועי + מערכת שיווק משולבת - הפתרון המושלם לעסקים שרוצים נוכחות דיגיטלית חזקה</>}
          primaryCta={{ label: "קבלו הצעת מחיר", href: "/contact" }}
          secondaryCta={{ label: "כל החבילות", href: "/packages" }}
        />
        <PageBreadcrumbs
          items={[{ label: "חבילות", href: "/packages" }, { label: "Business Presence Pro" }]}
          className="py-6 bg-[#080a0c]"
          variant="dark"
        />

        <section className="px-6 py-14 md:py-20 bg-[#080a0c]" dir="rtl">
          <div className="mx-auto max-w-6xl">
            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-[2.5rem] p-10 md:p-16 shadow-[0_0_60px_rgba(16,185,129,0.2)]">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-400 text-black text-sm font-black px-6 py-2 rounded-full mb-8">
                החבילה הכי פופולרית שלנו
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white mb-8">מה כלול בחבילה</h2>

              <ul className="space-y-6 mb-12">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-full bg-emerald-500/30 shrink-0">
                      <Check className="text-emerald-400" size={20} strokeWidth={3} />
                    </div>
                    <span className="text-white text-xl font-bold leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white/[0.05] rounded-2xl p-6 border border-emerald-500/20">
                  <h3 className="text-xl font-black text-emerald-400 mb-3">תוכן וידאו AI</h3>
                  <p className="text-white/80 leading-relaxed">סרטונים מקצועיים שמציגים את השירותים שלכם בצורה מושכת</p>
                </div>
                <div className="bg-white/[0.05] rounded-2xl p-6 border border-emerald-500/20">
                  <h3 className="text-xl font-black text-emerald-400 mb-3">SEO מובנה</h3>
                  <p className="text-white/80 leading-relaxed">4 מאמרים + תוכנית אסטרטגית לקידום בגוגל</p>
                </div>
                <div className="bg-white/[0.05] rounded-2xl p-6 border border-emerald-500/20">
                  <h3 className="text-xl font-black text-emerald-400 mb-3">שיווק ממומן</h3>
                  <p className="text-white/80 leading-relaxed">ניהול קמפיין מקצועי ב-Facebook & Instagram</p>
                </div>
                <div className="bg-white/[0.05] rounded-2xl p-6 border border-emerald-500/20">
                  <h3 className="text-xl font-black text-emerald-400 mb-3">עיצוב מודעות</h3>
                  <p className="text-white/80 leading-relaxed">3 מודעות סטטיות מקצועיות</p>
                </div>
              </div>

              <div className="bg-black/30 rounded-2xl p-8 border border-emerald-500/30">
                <h3 className="text-2xl font-black text-emerald-400 mb-4">למי זה מתאים?</h3>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  החבילה המושלמת לעסקים שרוצים נוכחות דיגיטלית מקצועית ומשולבת. משלבת אתר תדמיתי איכותי עם אסטרטגיית
                  שיווק מלאה.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  אידיאלי לעסקים שרוצים להתחיל נכון - עם אתר מקצועי, תוכן איכותי, קידום אורגני וממומן במקביל.
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
