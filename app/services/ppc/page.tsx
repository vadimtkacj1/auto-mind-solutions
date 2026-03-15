import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { AboutHero } from "@/src/components/AboutAiterra/AboutHero";
import { FAQ } from "@/src/components/FAQ/FAQ";
import { ContactCTA } from "@/src/components/CTA/ContactCTA";
import { PageBreadcrumbs } from "@/src/components/ui/Breadcrumb/PageBreadcrumbs";
import { StructuredData, getProfessionalServicePageSchema } from "@/src/components/StructuredData";
import { InternalLinksBlock } from "@/src/components/InternalLinksBlock";
import { buildCanonical, getAbsoluteOgImage, DEFAULT_OG_IMAGE, BRAND_NAME } from "@/src/lib/seo";
import { CTA } from "@/src/components/CTA/CTA";

const SERVICE_BACKLINKS = [
  { label: "קידום אתרים SEO", href: "/services/seo-marketing" },
  { label: "בניית אתרים", href: "/services/web-development" },
  { label: "אוטומציה עסקית", href: "/services/automation" },
  { label: "כל השירותים", href: "/services" },
  { label: "חבילות", href: "/packages" },
  { label: "צור קשר", href: "/contact" },
];

export const metadata: Metadata = {
  title: "פרסום בגוגל וניהול קמפיינים | שיווק דיגיטלי",
  description:
    "פרסום ממומן בגוגל וברשתות החברתיות שמביא לידים חמים. אסטרטגיית שיווק דיגיטלי, דפי נחיתה מהירים וחיבור CRM. ROI חיובי.",
  alternates: { canonical: buildCanonical("/services/ppc") },
  openGraph: {
    title: "פרסום ממומן PPC | שיווק דיגיטלי",
    description: "פרסום ממומן בגוגל וברשתות החברתיות שמביא לידים חמים. ROI חיובי.",
    url: buildCanonical("/services/ppc"),
    type: "website",
    siteName: BRAND_NAME,
    images: [{ url: getAbsoluteOgImage(DEFAULT_OG_IMAGE.url), width: DEFAULT_OG_IMAGE.width, height: DEFAULT_OG_IMAGE.height, alt: DEFAULT_OG_IMAGE.alt }],
  },
  twitter: { card: "summary_large_image", title: "פרסום ממומן PPC", description: "פרסום ממומן בגוגל וברשתות שמביא לידים חמים." },
};

const PPC_IMAGES = {
  google: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  social: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800",
  landing: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
};

const serviceSchema = getProfessionalServicePageSchema({
  name: "פרסום ממומן PPC",
  description: "פרסום ממומן בגוגל וברשתות החברתיות שמביא לידים חמים. ROI חיובי.",
  url: buildCanonical("/services/ppc"),
  serviceType: "PPC",
});

export default function PpcPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed" dir="rtl">
      <StructuredData data={serviceSchema} />
      <Header />
      <main className="bg-white">
        <AboutHero
          title="פרסום בגוגל וניהול קמפיינים: שיווק דיגיטלי שמביא לידים חמים"
          subtitle="אתם משקיעים כסף, אבל האם אתם באמת רואים תוצאות? בתור משרד פרסום טכנולוגי, הגישה שלנו ב-Aiterra היא פשוטה: כל שקל שיוצא על פרסום חייב לחזור אליכם עם רווח. בעוד שקידום אורגני בונה סמכות לטווח הארוך, תהליך מקצועי של פרסום ממומן בגוגל או ברשתות החברתיות נועד להביא לידים לעסקים כאן ועכשיו. אנחנו בונים אסטרטגיית שיווק דיגיטלי לעסקים שעוצרת את הדימום התקציבי, ממקסמת את אחוזי ההמרה, והופכת את תקציב השיווק שלכם למנוע צמיחה."
          hideCtas
        />
        <PageBreadcrumbs
          items={[{ label: "שירותים", href: "/services" }, { label: "פרסום ממומן PPC" }]}
          className="py-6 bg-white"
        />

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                גוגל אדס מול רשתות חברתיות: איפה הלקוחות שלכם נמצאים?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                כדי לייצר קמפיין ממומן רווחי, חובה להבין את המסע של הלקוח שלכם. אנחנו מתאימים את הפלטפורמה במדויק ליעדים העסקיים שלכם:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl overflow-hidden border border-slate-100">
                <div className="relative h-48">
                  <Image
                    src={PPC_IMAGES.google}
                    alt="ניהול קמפיין בגוגל Google Ads"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">ניהול קמפיין בגוגל (Google Ads)</h3>
                  <p className="text-slate-600 leading-relaxed">
                    המקום המושלם לתפוס גולשים עם &quot;כוונת רכישה&quot;. כשהלקוח כבר מחפש את השירות שלכם באופן אקטיבי, אנחנו נדאג שהמודעה שלכם תהיה התוצאה הראשונה שהוא יראה.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden border border-slate-100">
                <div className="relative h-48">
                  <Image
                    src={PPC_IMAGES.social}
                    alt="פרסום בפייסבוק ובאינסטגרם"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">פרסום בפייסבוק ופרסום באינסטגרם</h3>
                  <p className="text-slate-600 leading-relaxed">
                    כשאנחנו רוצים לייצר את הביקוש, לעורר צורך ולהגיע לקהלים חדשים, הרשתות החברתיות מאפשרות לנו לטרגט גולשים בדיוק לפי הגיל, תחומי העניין והמיקום שלהם.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  הסוד של Aiterra: מחברים את הממומן לטכנולוגיה
                </h2>
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p>
                    להביא את הגולש לאתר זו רק חצי מהעבודה; לגרום לו להשאיר פרטים זו האמנות האמיתית. רוב הסוכנויות עוצרות בשלב הקליק, אבל בתור סוכנות פרסום דיגיטלית שמגיעה מעולמות הפיתוח, אנחנו מספקים מעטפת מלאה:
                  </p>
                  <p>
                    כאשר גולש מקליק על המודעה שלכם, הוא מגיע אל דף נחיתה סופר-מהיר שבנינו במיוחד עבורו, עם מסרים חדים ועיצוב ממוקד-המרות. במקביל, אנחנו מטמיעים מערכות של אוטומציה שיווקית מתקדמת, כך שכל פנייה מנותבת מיד למערכת ניהול הלקוחות (CRM) שלכם ולסמארטפון של איש המכירות.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p className="font-bold text-slate-900 leading-relaxed">
                      אף ליד לא נופל בין הכיסאות.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={PPC_IMAGES.landing}
                    alt="דף נחיתה ואוטומציה שיווקית"
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA
        variant = "minimal"
        title="תפסיקו לממן את המתחרים שלכם"
        description="הגיע הזמן לעבור לניהול קמפיינים חכם, שקוף ומבוסס דאטה."
        contactCTA="רוצים לדעת כמה יעלה להביא את הלקוח הבא שלכם? השאירו פרטים למטה, והמומחים שלנו ב-Aiterra יבנו לכם תחזית ביצועים מותאמת אישית."
        />

        <FAQ
          title="שאלות נפוצות לפני שמתחילים"
          items={[
            {
              question: "כמה עולה לפרסם (פרסום בגוגל מחירים)?",
              answer:
                "התקציב מורכב מתשלום לפלטפורמה (גוגל/מטא) ומתשלום על ניהול המדיה. אנו נתאים את התקציב לגודל העסק כדי להבטיח החזר השקעה (ROI) חיובי.",
            },
            {
              question: "האם אני חייב משרד פרסום דיגיטלי?",
              answer:
                "מערכות הפרסום היום הן מורכבות במיוחד. ניהול עצמאי ללא ניסיון מוביל לרוב לבזבוז אלפי שקלים על קליקים לא רלוונטיים.",
            },
            {
              question: "תוך כמה זמן רואים תוצאות?",
              answer:
                "בניגוד ל-SEO, פרסום ממומן מספק תוצאות מיידיות. ברגע שהקמפיין באוויר, הלידים מתחילים לזרום.",
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
