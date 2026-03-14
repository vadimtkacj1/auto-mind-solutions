import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { PageHero } from "@/src/components/PageHero/PageHero";
import { ContactCTA } from "@/src/components/CTA/ContactCTA";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Growth Landing System - מערכת דפי נחיתה | Aiterra",
  description: "מערכת דפי נחיתה לבדיקת קמפיינים והגדלת לידים. 3 דפי נחיתה שונים + 9 מודעות מקצועיות.",
  alternates: { canonical: "https://aiterra.agency/packages/growth-landing-system" },
};

const features = [
  "3 דפי נחיתה שונים לקמפיינים שונים",
  "3 גרפיקות מקצועיות לכל דף נחיתה (סה״כ 9 מודעות)",
  "מבנה מותאם לפרסום בפייסבוק ואינסטגרם",
  "עיצוב ממוקד המרות",
  "פתרון שיווקי מתקדם במחיר נגיש",
];

export default function GrowthLandingSystemPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main>
        <PageHero
          badge="GROWTH LANDING SYSTEM • Aiterra"
          title={
            <>
              מערכת דפי <span className="text-[var(--color-primary)]">נחיתה</span>
            </>
          }
          subtitle={<>מערכת דפי נחיתה לבדיקת קמפיינים והגדלת לידים - 3 דפים שונים למקסימום תוצאות</>}
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {["דף נחיתה 1", "דף נחיתה 2", "דף נחיתה 3"].map((title, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl p-6 border border-emerald-500/20">
                    <h3 className="text-xl font-black text-emerald-400 mb-3">{title}</h3>
                    <p className="text-white/70 text-sm">+ 3 מודעות מקצועיות</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20">
                <h3 className="text-2xl font-black text-emerald-400 mb-4">למי זה מתאים?</h3>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  חבילה זו מתאימה לעסקים שרוצים לבדוק מספר גרסאות של דפי נחיתה כדי למצוא את הנוסחה הכי משתלמת.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  עם 3 דפים שונים ו-9 מודעות, תוכלו להריץ A/B testing מתקדם ולמצוא את השילוב המנצח שמביא הכי הרבה לידים
                  במחיר הנמוך ביותר.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
