import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageBreadcrumbs } from "@/src/components/ui/Breadcrumb/PageBreadcrumbs";
import { StructuredData, getProfessionalServicePageSchema } from "@/src/components/StructuredData";
import { InternalLinksBlock } from "@/src/components/InternalLinksBlock";
import { buildCanonical, getAbsoluteOgImage, DEFAULT_OG_IMAGE, BRAND_NAME } from "@/src/lib/seo";

const Header = dynamic(() => import("@/src/components/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/src/components/Footer/Footer").then(m => ({ default: m.Footer })), { ssr: false });
const AboutHero = dynamic(() => import("@/src/components/AboutAiterra/AboutHero").then(m => ({ default: m.AboutHero })), { ssr: false });
const FAQ = dynamic(() => import("@/src/components/FAQ/FAQ").then(m => ({ default: m.FAQ })), { ssr: false });
const ContactCTA = dynamic(() => import("@/src/components/CTA/ContactCTA").then(m => ({ default: m.ContactCTA })), { ssr: false });

const SERVICE_BACKLINKS = [
  { label: "קידום אתרים SEO", href: "/services/seo-marketing" },
  { label: "פרסום ממומן PPC", href: "/services/ppc" },
  { label: "בניית אתרים", href: "/services/web-development" },
  { label: "כל השירותים", href: "/services" },
  { label: "חבילות", href: "/packages" },
  { label: "צור קשר", href: "/contact" },
];

export const metadata: Metadata = {
  title: "Business Automation - אוטומציה עסקית",
  description:
    "מקסום תקציבי הפרסום שלכם באמצעות קמפיינים ממומנים מבוססי תוצאות, תוך חיבור מלא למערכות ה-CRM/ERP. תהליכי מכירה ודיווח אוטומטיים.",
  alternates: { canonical: buildCanonical("/services/automation") },
  openGraph: {
    title: "אוטומציה עסקית וחיבור מערכות",
    description: "חיבור מלא ל-CRM/ERP, תהליכי מכירה ודיווח אוטומטיים.",
    url: buildCanonical("/services/automation"),
    type: "website",
    siteName: BRAND_NAME,
    images: [{ url: getAbsoluteOgImage(DEFAULT_OG_IMAGE.url), width: DEFAULT_OG_IMAGE.width, height: DEFAULT_OG_IMAGE.height, alt: DEFAULT_OG_IMAGE.alt }],
  },
  twitter: { card: "summary_large_image", title: "אוטומציה עסקית", description: "חיבור מלא ל-CRM/ERP, תהליכי מכירה ודיווח אוטומטיים." },
};

const serviceSchema = getProfessionalServicePageSchema({
  name: "אוטומציה עסקית וחיבור מערכות",
  description: "חיבור מלא ל-CRM/ERP, תהליכי מכירה ודיווח אוטומטיים.",
  url: buildCanonical("/services/automation"),
  serviceType: "Business Automation",
});

export default function AutomationPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <StructuredData data={serviceSchema} />
      <Header />
      <main className="bg-transparent">
        <AboutHero
          title={
            <>
              אוטומציה עסקית <span className="text-[var(--color-primary)]">וחיבור מערכות</span>
            </>
          }
          subtitle="מקסום תקציבי הפרסום שלכם באמצעות קמפיינים ממומנים מבוססי תוצאות, תוך חיבור מלא למערכות ה-CRM/ERP של העסק. אנחנו יוצרים תהליכי מכירה ודיווח אוטומטיים שהופכים תנועה ללידים ולעסקאות, ללא עבודה ידנית מיותרת ובדיוק מקסימלי."
          hideCtas
        />
        <PageBreadcrumbs
          items={[{ label: "שירותים", href: "/services" }, { label: "אוטומציה" }]}
          className="py-6 bg-white"
        />

        <section className="px-6 py-14 md:py-20 bg-[#f8fafc]" dir="rtl">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12 text-center">
              אוטומציה מלאה לעסק שלך
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "PPC & פרסום ממומן",
                  desc: "קמפיינים ממומנים ב-Google Ads, Meta, LinkedIn ועוד. מבוסס תוצאות עם מעקב מלא ואופטימיזציה שוטפת.",
                  gradient: "from-blue-600 to-sky-500",
                },
                {
                  title: "חיבור CRM/ERP",
                  desc: "אינטגרציה מלאה בין האתר למערכות הניהול העסקיות - Salesforce, HubSpot, Monday ועוד.",
                  gradient: "from-purple-600 to-fuchsia-500",
                },
                {
                  title: "תהליכי מכירה אוטומטיים",
                  desc: "מעקב אחר הלידים מרגע הכניסה לאתר ועד לסגירת העסקה, כולל נורטורינג אוטומטי.",
                  gradient: "from-green-600 to-lime-500",
                },
                {
                  title: "דיווח ואנליטיקה",
                  desc: "דשבורדים מתקדמים המציגים את כל הנתונים במקום אחד - מהתנועה באתר ועד להכנסות.",
                  gradient: "from-orange-600 to-yellow-500",
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

            <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl mb-16">
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 text-center">
                תהליך העבודה שלנו
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "מיפוי תהליכים", desc: "הבנת התהליכים הקיימים והזיהוי הזדמנויות לאוטומציה" },
                  {
                    step: "02",
                    title: "תכנון אסטרטגי",
                    desc: "בניית תוכנית מפורטת לחיבור המערכות ואוטומציה",
                  },
                  { step: "03", title: "הטמעה", desc: "חיבור טכני של כל המערכות ובדיקות מקיפות" },
                  { step: "04", title: "אופטימיזציה", desc: "ניטור ושיפור מתמשך של התהליכים האוטומטיים" },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="text-5xl font-black text-blue-600 mb-4">{item.step}</div>
                    <h4 className="text-xl font-black text-slate-900 mb-3">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-[2.5rem] p-10 md:p-16 text-white text-center shadow-2xl">
              <h3 className="text-3xl md:text-5xl font-black mb-6">חסכו זמן, הגדילו רווחים</h3>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                אוטומציה נכונה משחררת את הצוות שלכם לעבודה משמעותית ומגדילה את הרווחיות
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl font-black mb-2">70%</div>
                  <div className="text-lg opacity-80">חיסכון בזמן עבודה ידנית</div>
                </div>
                <div>
                  <div className="text-5xl font-black mb-2">2x</div>
                  <div className="text-lg opacity-80">שיפור ביעילות תהליכי המכירה</div>
                </div>
                <div>
                  <div className="text-5xl font-black mb-2">24/7</div>
                  <div className="text-lg opacity-80">עבודה רציפה ללא הפסקות</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />

        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
