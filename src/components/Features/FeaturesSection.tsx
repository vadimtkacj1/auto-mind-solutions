"use client";

import { FeatureBlock } from "./FeatureBlock";

// ─────────────────────────────────────────────────────────
// МАССИВ ДАННЫХ (из Services)
// ─────────────────────────────────────────────────────────
const features = [
  {
    title: "הנדסת תוכנה ואתרים",
    description:
      "בניית אתרים ומערכות בהתאמה אישית מלאה, הכוללת אינטגרציות API מורכבות וארכיטקטורה סקילבילית (ניתנת להרחבה). אנו שמים דגש על ביצועים מקסימליים מהיום הראשון, כדי להבטיח חווית משתמש חלקה שעומדת בעומסי תנועה ובסטנדרטים הטכנולוגיים הגבוהים ביותר.",
    buttonText: "למידע נוסף",
    video: "/videos/GIF_DEV.mp4",
    link: "/services/web-development",
  },
  {
    title: "Growth Marketing & SEO",
    description:
      "אנחנו דואגים שהלקוחות ימצאו אתכם בדיוק כשהם מחפשים. השירות כולל מחקר מילות מפתח מעמיק, אופטימיזציה טכנית (Technical SEO), שיפור יחס המרה (CRO) וניהול אסטרטגיית תוכן חכמה. הכל מבוסס על דאטה ויעדים עסקיים מדידים כדי להביא תנועה אורגנית איכותית.",
    buttonText: "למידע נוסף",
    video: "/videos/GIF_SEO.mp4",
    link: "/services/seo-marketing",
  },
  {
    title: "אוטומציה עסקית וחיבור מערכות (PPC & Tech)",
    description:
      "מקסום תקציבי הפרסום שלכם באמצעות קמפיינים ממומנים מבוססי תוצאות, תוך חיבור מלא למערכות ה-CRM/ERP של העסק. אנחנו יוצרים תהליכי מכירה ודיווח אוטומטיים שהופכים תנועה ללידים ולעסקאות, ללא עבודה ידנית מיותרת ובדיוק מקסימלי.",
    buttonText: "למידע נוסף",
    video: "/videos/GIF_PPC.mp4",
    link: "/services/automation",
  },
] as const;

// ─────────────────────────────────────────────────────────
// КОМПОНЕНТ РОДИТЕЛЯ
// ─────────────────────────────────────────────────────────
export function FeaturesSection() {
  return (
    <section
      id="features"
      dir="rtl"
      className="relative bg-gradient-to-b from-slate-50 to-white py-20 md:py-32 overflow-hidden"
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-20 text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 leading-tight">
          מערכת <span className="text-blue-600">360°</span> לצמיחה דיגיטלית
        </h2>
        <p className="mt-6 text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
          אנו מלווים אתכם בכל שלבי המחזור הדיגיטלי – מאסטרטגיה ו-UX ועד פיתוח, הטמעה וצמיחה. המטרה שלנו היא להפוך את
          הנכסים הדיגיטליים שלכם למנוע הכנסות עוצמתי, ולא רק ל&ldquo;עוד אתר&rdquo; ברשת.
        </p>
      </div>

      {/* ZIGZAG FEATURE BLOCKS */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-24 md:space-y-32">
        {features.map((feature, index) => (
          <FeatureBlock
            key={index}
            index={index}
            title={feature.title}
            description={feature.description}
            buttonText={feature.buttonText}
            video={feature.video}
            link={feature.link}
          />
        ))}
      </div>
    </section>
  );
}
