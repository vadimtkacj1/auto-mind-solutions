"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, TrendingUp, Workflow } from "lucide-react";
import { RevealCSS as Reveal } from "../ui/RevealCSS";
import { Button } from "../ui/Button/Button";
import { SmartVideo } from "../ui/SmartVideo";

const services = [
  {
    tag: "פיתוח ועיצוב אתרים",
    title: "פיתוח ועיצוב אתרים",
    description:
      "בניית אתרים ומערכות בהתאמה אישית מלאה, הכוללת אינטגרציות API מורכבות וארכיטקטורה סקילבילית (ניתנת להרחבה). אנו שמים דגש על ביצועים מקסימליים מהיום הראשון, כדי להבטיח חווית משתמש חלקה שעומדת בעומסי תנועה ובסטנדרטים הטכנולוגיים הגבוהים ביותר.",
    icon: Code2,
    color: "#1e40af",
    video: "/videos/GIF_DEV.mp4",
    link: "/services/web-development",
  },
  {
    tag: "קידום אתרים (SEO)",
    title: "קידום אתרים (SEO)",
    description:
      "אנחנו דואגים שהלקוחות ימצאו אתכם בדיוק כשהם מחפשים. השירות כולל מחקר מילות מפתח מעמיק, אופטימיזציה טכנית (Technical SEO), שיפור יחס המרה (CRO) וניהול אסטרטגיית תוכן חכמה. הכל מבוסס על דאטה ויעדים עסקיים מדידים כדי להביא תנועה אורגנית איכותית.",
    icon: TrendingUp,
    color: "#4f46e5",
    video: "/videos/GIF_SEO.mp4",
    link: "/services/seo-marketing",
  },
  {
    tag: "קידום ממומן ואוטומציה",
    title: "קידום ממומן ואוטומציה",
    description:
      "אוטומציה עסקית וחיבור מערכות (PPC & Tech), מקסום תקציבי הפרסום שלכם באמצעות קמפיינים ממומנים מבוססי תוצאות, תוך חיבור מלא למערכות ה-CRM/ERP של העסק. אנחנו יוצרים תהליכי מכירה ודיווח אוטומטיים שהופכים תנועה ללידים ולעסקאות, ללא עבודה ידנית מיותרת ובדיוק מקסימלי.",
    icon: Workflow,
    color: "#059669",
    video: "/videos/GIF_PPC.mp4",
    link: "/services/automation",
  },
];

export const Services = React.memo(function Services() {
  return (
    <section
      id="services"
      dir="rtl"
      style={{
        position: "relative",
        zIndex: 30,
        background: "linear-gradient(185deg, #f1f5f9 0%, #f8fafc 3%, #fefefe 10%, #ffffff 18%, #ffffff 100%)",
        borderRadius: "48px 48px 0 0",
        paddingTop: "80px",
        paddingBottom: "80px",
        overflow: "hidden",
        marginTop: "-20px",
        boxShadow:
          "0 -2px 0 rgba(255,255,255,0.8) inset, 0 2px 0 rgba(0,0,0,0.04), 0 -6px 12px -3px rgba(0,0,0,0.08), 0 -16px 32px -8px rgba(0,0,0,0.12), 0 -32px 64px -16px rgba(0,0,0,0.18)",
        isolation: "isolate",
        transform: "translateZ(0)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center px-4 mb-16">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter text-center">
              מערכת <span className="text-blue-600">360°</span> לצמיחה דיגיטלית
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="mt-6 text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              אנו מלווים אתכם בכל שלבי המחזור הדיגיטלי – מאסטרטגיה ו-UX ועד פיתוח, הטמעה וצמיחה. המטרה שלנו היא להפוך את
              הנכסים הדיגיטליים שלכם למנוע הכנסות עוצמתי, ולא רק ל&ldquo;עוד אתר&rdquo; ברשת.
            </h2>
          </Reveal>
        </div>

        <div className="space-y-10 md:space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <Reveal key={service.title}>
                <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center`}>
                  <div className="w-full md:w-1/2">
                    <div className="relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                      <SmartVideo
                        src={service.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-auto object-contain"
                        aria-label={service.title}
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 text-center md:text-right">
                    <div className="space-y-6">
                      <h3 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-orange-500 via-pink-500 to-rose-600 bg-clip-text text-transparent tracking-tight leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium max-w-xl mx-auto md:mx-0">
                        {service.description}
                      </p>
                      <Button asChild variant="brand" size="pill">
                        <Link href={service.link}>
                          למידע נוסף
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
});
