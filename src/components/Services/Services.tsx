"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button/Button";
import { SmartVideo } from "../ui/SmartVideo";

const services = [
  {
    title: "הנדסת תוכנה ואתרים",
    description:
      "בניית אתרים ומערכות בהתאמה אישית מלאה, הכוללת אינטגרציות API מורכבות וארכיטקטורה סקילבילית (ניתנת להרחבה). אנו שמים דגש על ביצועים מקסימליים מהיום הראשון, כדי להבטיח חווית משתמש חלקה שעומדת בעומסי תנועה ובסטנדרטים הטכנולוגיים הגבוהים ביותר.",
    video: "/videos/GIF_DEV.mp4",
    link: "/services/web-development",
  },
  {
    title: "Growth Marketing & SEO",
    description:
      "אנחנו דואגים שהלקוחות ימצאו אתכם בדיוק כשהם מחפשים. השירות כולל מחקר מילות מפתח מעמיק, אופטימיזציה טכנית (Technical SEO), שיפור יחס המרה (CRO) וניהול אסטרטגיית תוכן חכמה. הכל מבוסס על דאטה ויעדים עסקיים מדידים כדי להביא תנועה אורגנית איכותית.",
    video: "/videos/GIF_SEO.mp4",
    link: "/services/seo-marketing",
  },
  {
    title: "אוטומציה עסקית וחיבור מערכות (PPC & Tech)",
    description:
      "מקסום תקציבי הפרסום שלכם באמצעות קמפיינים ממומנים מבוססי תוצאות, תוך חיבור מלא למערכות ה-CRM/ERP של העסק. אנחנו יוצרים תהליכי מכירה ודיווח אוטומטיים שהופכים תנועה ללידים ולעסקאות, ללא עבודה ידנית מיותרת ובדיוק מקסימלי.",
    video: "/videos/GIF_PPC.mp4",
    link: "/services/automation",
  },
] as const;

export function Services({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="services"
      dir="rtl"
      style={{
        position: "relative",
        zIndex: 20,
        background: "#fcfcfd",
        borderRadius: standalone ? "0" : "48px 48px 0 0",
        paddingTop: "64px",
        paddingBottom: "64px",
        overflow: "hidden",
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
                    <motion.div whileHover={{ scale: 1.02 }} className="relative overflow-hidden">
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
                    </motion.div>
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
                          <ArrowLeft className="w-4 h-4" />
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
}
