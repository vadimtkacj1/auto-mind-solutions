"use client";

import Link from "next/link";
import { ElasticLine } from "../ui/ElasticLine";
import { Button } from "../ui/Button/Button";

const services = [
  {
    tag: "אתרים ופלטפורמות",
    title: "אתרים ומערכות שמרגישים פרימיום",
    description:
      "בניית אתרים ומערכות בהתאמה אישית מלאה, הכוללת אינטגרציות API מורכבות וארכיטקטורה סקילבילית. אנו שמים דגש על ביצועים מקסימליים מהיום הראשון, כדי להבטיח חווית משתמש חלקה שעומדת בעומסי תנועה ובסטנדרטים הטכנולוגיים הגבוהים ביותר.",
    link: "/services/web-development",
  },
  {
    tag: "SEO וצמיחה",
    title: "מנוע צמיחה אורגני שמביא לקוחות",
    description:
      "אנחנו דואגים שהלקוחות ימצאו אתכם בדיוק כשהם מחפשים. השירות כולל מחקר מילות מפתח מעמיק, אופטימיזציה טכנית, שיפור יחס המרה וניהול אסטרטגיית תוכן חכמה — הכל מבוסס על דאטה ויעדים עסקיים מדידים.",
    link: "/services/seo-marketing",
  },
  {
    tag: "פרסום ממומן",
    title: "פרסום בגוגל וניהול קמפיינים",
    description:
      "שיווק דיגיטלי שמביא לידים חמים. ניהול קמפיין בגוגל אדס, פרסום בפייסבוק ואינסטגרם, דפי נחיתה והמרות, וחיבור ל-CRM. כל שקל חוזר עם רווח.",
    link: "/services/ppc",
  },
] as const;

export function ServicesElastic() {
  return (
    <section id="services" dir="rtl" className="bg-white">

      {/* ── ALL CONTENT IN ONE WHITE BLOCK ─────────────────────────────────── */}
      <div className="pt-24 px-6 sm:px-10 lg:px-16">
        <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-14 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 leading-[0.92]">
              השירותים שלנו
            </h1>
            <p className="mt-6 text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              שלושה פילרים. מערכת אחת. Engineering, Growth ו-PPC שעובדים יחד סביב KPI ברורים.
            </p>
          </div>

          {/* top line */}
          <div className="text-slate-300">
            <ElasticLine className="w-full cursor-pointer" height={56} strokeWidth={1.5} />
          </div>

          {/* Service cards - stacked inside same white block */}
          {services.map((service) => {
            return (
              <div key={service.link}>
                <div className="py-8 md:py-10 border-slate-200 last:border-b-0">
                  <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 lg:gap-16 items-start">
                    <p className="text-[11px] font-black tracking-[0.28em] uppercase text-slate-400 lg:pt-2">
                      {service.tag}
                    </p>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 leading-snug">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
                        {service.description}
                      </p>
                      <div className="mt-8">
                        <Button asChild variant="brandOutline" size="pill">
                          <Link href={service.link}>קרא עוד</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* line between items (not after last) */}
                {service.link !== services[services.length - 1].link && (
                  <div className="text-slate-300">
                    <ElasticLine className="w-full cursor-pointer" height={56} strokeWidth={1.5} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
