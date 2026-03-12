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
    tag: "אוטומציה וחיבור מערכות",
    title: "תהליכים חכמים שמוכרים לבד",
    description:
      "מקסום תקציבי הפרסום באמצעות קמפיינים ממומנים מבוססי תוצאות, תוך חיבור מלא למערכות CRM/ERP. אנחנו יוצרים תהליכי מכירה ודיווח אוטומטיים שהופכים תנועה ללידים ולעסקאות.",
    link: "/services/automation",
  },
] as const;

export function ServicesElastic() {
  return (
    <section id="services" dir="rtl" className="bg-[#fcfcfd]">

      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <div className="pt-32 pb-14 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto text-center">
        <h1 className="text-6xl sm:text-7xl md:text-[90px] font-black tracking-tight text-slate-900 leading-[0.92]">
          השירותים שלנו
        </h1>
        <p className="mt-6 text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          שלושה פילרים. מערכת אחת. Engineering, Growth ו-Automation שעובדים יחד סביב KPI ברורים.
        </p>
      </div>

      {/* ── SERVICE LIST WITH STACKING CARDS ────────────────────────────────── */}
      <div className="relative px-6 sm:px-10 lg:px-16 pb-20">

        {/* top line */}
        <div className="max-w-6xl mx-auto text-slate-300">
          <ElasticLine className="w-full cursor-pointer" height={56} strokeWidth={1.5} />
        </div>

        {services.map((service, index) => {
          return (
            <div
              key={service.link}
            >
              {/* Card */}
              <div className="bg-[#fcfcfd]">
                <div className="max-w-6xl mx-auto">
                  {/* row content */}
                  <div className="py-10 md:py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 lg:gap-16 items-start">

                      {/* LEFT: tag */}
                      <p className="text-[11px] font-black tracking-[0.28em] uppercase text-slate-400 lg:pt-2">
                        {service.tag}
                      </p>

                      {/* RIGHT: content */}
                      <div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 leading-snug">
                          {service.title}
                        </h2>
                        <p className="mt-4 text-slate-500 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
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

                  {/* bottom line */}
                  <div className="text-slate-300">
                    <ElasticLine className="w-full cursor-pointer" height={56} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
}
