import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { PageHero } from "@/src/components/PageHero/PageHero";
import { CTA } from "@/src/components/CTA/CTA";
import { TechStack } from "@/src/components/TechStack/TechStack";
import { FAQ } from "@/src/components/FAQ/FAQ";

export const metadata: Metadata = {
  title: "Web Development - הנדסת תוכנה ואתרים | Aiterra",
  description:
    "בניית אתרים ומערכות בהתאמה אישית מלאה, הכוללת אינטגרציות API מורכבות וארכיטקטורה סקילבילית. ביצועים מקסימליים מהיום הראשון.",
  alternates: { canonical: "https://aiterra.agency/services/web-development" },
};

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main>
        <PageHero
          badge="WEB DEVELOPMENT • Aiterra"
          title={
            <>
              הנדסת תוכנה <span className="text-[var(--color-primary)]">ואתרים</span>
            </>
          }
          subtitle={
            <>
              בניית אתרים ומערכות בהתאמה אישית מלאה, הכוללת אינטגרציות API מורכבות וארכיטקטורה סקילבילית (ניתנת
              להרחבה). אנו שמים דגש על ביצועים מקסימליים מהיום הראשון, כדי להבטיח חווית משתמש חלקה שעומדת בעומסי תנועה
              ובסטנדרטים הטכנולוגיים הגבוהים ביותר.
            </>
          }
          primaryCta={{ label: "התחל פרויקט", href: "/contact" }}
          secondaryCta={{ label: "צפו בפורטפוליו", href: "/portfolio" }}
        />

        <section className="px-6 py-14 md:py-20 bg-[#f8fafc]" dir="rtl">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12 text-center">מה אנחנו מציעים</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "אתרים מותאמים אישית",
                  desc: "פיתוח אתרי אינטרנט מותאמים בצורה מושלמת לצרכי העסק שלך, עם עיצוב ייחודי וקוד נקי.",
                  gradient: "from-blue-600 to-cyan-500",
                },
                {
                  title: "אינטגרציות API",
                  desc: "חיבור מלא למערכות חיצוניות - CRM, ERP, תשלומים, משלוחים ועוד.",
                  gradient: "from-purple-600 to-pink-500",
                },
                {
                  title: "ארכיטקטורה סקילבילית",
                  desc: "מבנה טכני שמאפשר צמיחה וגדילה ללא הגבלות, מוכן לעתיד.",
                  gradient: "from-green-600 to-teal-500",
                },
                {
                  title: "ביצועים מקסימליים",
                  desc: "אופטימיזציה מלאה למהירות טעינה, SEO טכני וחוויית משתמש מושלמת.",
                  gradient: "from-orange-600 to-red-500",
                },
              ].map((item) => (
                <div key={item.title} className="p-8">
                  <h3 className={`text-2xl font-black mb-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl">
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 text-center">
                הטכנולוגיות שאנחנו משתמשים בהן
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "AWS"].map(
                  (tech) => (
                    <div key={tech} className="p-4 bg-slate-50 rounded-xl">
                      <span className="text-lg font-bold text-slate-700">{tech}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        <TechStack />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
