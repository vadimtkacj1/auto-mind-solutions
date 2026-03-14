import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { PageHero } from "@/src/components/PageHero/PageHero";
import { ContactCTA } from "@/src/components/CTA/ContactCTA";
import { CTA } from "@/src/components/CTA/CTA";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Commerce Elite - מערכת מכירה מלאה | Aiterra",
  description: "מערכת מכירה מלאה לעסקים מתקדמים. חנות אינטרנטית, CMS, סליקה, ניהול מלאי ועד 300 מוצרים.",
  alternates: { canonical: "https://aiterra.agency/packages/digital-commerce-elite" },
};

const features = [
  "אתר מתקדם עם מערכת CMS לניהול תוכן",
  "חנות אינטרנטית מלאה",
  "מערכת סליקה מאובטחת",
  "מערכת לניהול מלאי",
  "הזנת עד 300 מוצרים",
  "מודעות מקצועיות לרשתות חברתיות",
  "תשתית מלאה להגדלת מכירות אונליין",
];

export default function DigitalCommerceElitePage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main>
        <PageHero
          badge="DIGITAL COMMERCE ELITE • Aiterra"
          title={
            <>
              מערכת מכירה <span className="text-[var(--color-primary)]">מלאה</span>
            </>
          }
          subtitle={<>מערכת מכירה מתקדמת לעסקים שרוצים למכור אונליין - חנות מלאה עם כל הכלים שצריך</>}
          primaryCta={{ label: "קבלו הצעת מחיר", href: "/contact" }}
          secondaryCta={{ label: "כל החבילות", href: "/packages" }}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl p-6 border border-emerald-500/20">
                  <h3 className="text-xl font-black text-emerald-400 mb-3">מערכת CMS מתקדמת</h3>
                  <p className="text-white/80 leading-relaxed">
                    ניהול מלא של התוכן באתר - מוצרים, קטגוריות, מחירים, תמונות ועוד
                  </p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl p-6 border border-emerald-500/20">
                  <h3 className="text-xl font-black text-emerald-400 mb-3">חנות אינטרנטית</h3>
                  <p className="text-white/80 leading-relaxed">חנות מלאה עם עגלת קניות, checkout, ועד 300 מוצרים</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl p-6 border border-emerald-500/20">
                  <h3 className="text-xl font-black text-emerald-400 mb-3">סליקה מאובטחת</h3>
                  <p className="text-white/80 leading-relaxed">אינטגרציה עם כרטיסי אשראי, PayPal ואמצעי תשלום נוספים</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl p-6 border border-emerald-500/20">
                  <h3 className="text-xl font-black text-emerald-400 mb-3">ניהול מלאי</h3>
                  <p className="text-white/80 leading-relaxed">מעקב אחר מלאי, התראות על מוצרים שנגמרו ועוד</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-black text-blue-400 mb-4">למי זה מתאים?</h3>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  החבילה המתקדמת ביותר שלנו, מתאימה לעסקים שרוצים למכור מוצרים פיזיים או דיגיטליים באינטרנט.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  אידיאלי לחנויות אונליין, עסקים עם מלאי גדול, או כל מי שרוצה מערכת מכירה מקצועית ומלאה.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA
          title="מוכנים למכור אונליין?"
          description="בואו נבנה לכם חנות אינטרנטית מקצועية שמייצרת מכירות"
        />
      </main>
      <Footer />
    </div>
  );
}
