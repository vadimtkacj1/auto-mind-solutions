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

const SERVICE_BACKLINKS = [
  { label: "פרסום ממומן PPC", href: "/services/ppc" },
  { label: "בניית אתרים", href: "/services/web-development" },
  { label: "אוטומציה עסקית", href: "/services/automation" },
  { label: "כל השירותים", href: "/services" },
  { label: "חבילות", href: "/packages" },
  { label: "צור קשר", href: "/contact" },
];

export const metadata: Metadata = {
  title: "שירותי קידום אתרים: להגיע למקום הראשון עם קידום אורגני",
  description:
    "שירותי SEO מקצועיים שמביאים תוצאות. שילוב של מומחיות טכנית בקידום אתרים עם ידע בפיתוח לדירוגים אורגניים שמניעים צמיחה עסקית אמיתית.",
  alternates: { canonical: buildCanonical("/services/seo-marketing") },
  openGraph: {
    title: "שירותי קידום אתרים SEO",
    description: "שירותי SEO מקצועיים שמביאים תוצאות. קידום אורגני שמניע צמיחה עסקית.",
    url: buildCanonical("/services/seo-marketing"),
    type: "website",
    siteName: BRAND_NAME,
    images: [{ url: getAbsoluteOgImage(DEFAULT_OG_IMAGE.url), width: DEFAULT_OG_IMAGE.width, height: DEFAULT_OG_IMAGE.height, alt: DEFAULT_OG_IMAGE.alt }],
  },
  twitter: { card: "summary_large_image", title: "שירותי קידום אתרים SEO", description: "שירותי SEO מקצועיים שמביאים תוצאות." },
};

const SEO_IMAGES = {
  code: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  dashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  keywords: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600",
  technical: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
  links: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600",
  local: "https://images.unsplash.com/photo-1524660988542-c440de9c0fde?w=600",
};

const serviceSchema = getProfessionalServicePageSchema({
  name: "שירותי קידום אתרים SEO",
  description: "שירותי SEO מקצועיים שמביאים תוצאות. קידום אורגני שמניע צמיחה עסקית.",
  url: buildCanonical("/services/seo-marketing"),
  serviceType: "SEO",
});

export default function SeoMarketingPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed" dir="rtl">
      <StructuredData data={serviceSchema} />
      <Header />
      <main className="bg-white">
        <AboutHero
          title="שירותי קידום אתרים: להגיע למקום הראשון עם קידום אורגני שמביא תוצאות"
          subtitle="בעידן שבו כולם מחפשים הכל ברשת, להחזיק אתר יפה זה פשוט לא מספיק. אם הלקוחות שלכם לא מוצאים אתכם כשהם מקלידים את השירות שלכם, אתם משאירים כסף על הרצפה. במחלקת ה-SEO של Aiterra, אנחנו לא מסתפקים בדירוגים יפים – אנחנו מתמקדים בשורת הרווח שלכם. תהליך קידום אתרים אורגני נכון הופך את האתר שלכם מנכס פסיבי למכונת לידים שעובדת 24/7. בעזרת קידום אורגני חכם, טכנולוגיה מתקדמת ואסטרטגיה מבוססת נתונים, אנחנו נדאג שהעסק שלכם ישלוט בתוצאות החיפוש. אנו מציעים שירות של קידום אתרים מקצועי שמותאם בדיוק למידות ולמטרות שלכם."
          hideCtas
        />
        <PageBreadcrumbs
          items={[{ label: "שירותים", href: "/services" }, { label: "קידום אתרים SEO" }]}
          className="py-6 bg-white"
        />

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  למה אתם חייבים חברה לקידום אתרים שמבינה גם בקוד?
                </h2>
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p>
                    הרבה חברות מציעות שירותי SEO, אבל מעטות יודעות לחבר בין התוכן לבין התשתית הטכנולוגית שעליה יושב האתר. גוגל של היום חכם מתמיד: הוא בודק את זמני הטעינה, את חוויית המשתמש ואת ניקיון הקוד שלכם. הרי בנייה וקידום אתרים הם שני צדדים של אותו מטבע.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p className="font-bold text-slate-900 leading-relaxed">
                      בתור חברה לקידום אתרים שהיא גם סוכנות פיתוח, אנחנו מעניקים לכם יתרון לא הוגן על המתחרים.
                    </p>
                  </div>
                  <p>
                    כשאנחנו מבצעים קידום אתר בגוגל, אנחנו משלבים בין אופטימיזציה טכנית (Technical SEO) עמוקה ברמת השרת, לבין יצירת תוכן סמכותי ואיכותי. התוצאה? קידום עסק בגוגל שנעשה בצורה יציבה, בטוחה, וכזו שגוגל פשוט מתגמל במיקומים ראשונים בכל מה שקשור אל קידום אתרים באינטרנט.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={SEO_IMAGES.code}
                    alt="אנליטיקס SEO ואופטימיזציה של קוד"
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                מה כוללת מעטפת הקידום שלנו ב-Aiterra?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                קידום אורגני בגוגל הוא ריצת מרתון, ואנחנו בונים לכם את תוכנית האימונים המושלמת עבור קידום אתרים במנועי חיפוש:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "מחקר מילות מפתח ואסטרטגיה", desc: "אנחנו לא מנחשים. אנחנו מנתחים בדיוק מה הלקוחות שלכם מחפשים, מה כוונת הרכישה שלהם (Search Intent), ובונים אסטרטגיית קידום אתרים שמטרגטת את הביטויים הכי רווחיים לתחום שלכם.", img: SEO_IMAGES.keywords },
                { title: "אופטימיזציה טכנית (On-Page SEO)", desc: "שיפור מהירות האתר, סידור תגיות המטא, הנגשת התוכן לסורקים של גוגל וסידור היררכיית האתר (Sitemap) – כדי שגוגל יסרוק ויאנדקס אתכם במהירות.", img: SEO_IMAGES.technical },
                { title: "יצירת סמכות (Off-Page SEO)", desc: "בניית פרופיל קישורים חזק ואיכותי מאתרים מובילים שישדר לגוגל שאתם האוטוריטה בתחום שלכם.", img: SEO_IMAGES.links },
                { title: "קידום מקומי (Local SEO)", desc: "יש לכם עסק שנותן שירות באזור מסוים? אנחנו נדאג שתשלטו בתוצאות המקומיות ובמפות של גוגל, כדי למשוך לקוחות שקרובים אליכם גיאוגרפית.", img: SEO_IMAGES.local },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl overflow-hidden">
                  <div className="relative h-48">
                    <Image src={item.img} alt={item.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={SEO_IMAGES.dashboard}
                    alt="דשבורד תוצאות SEO"
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  חברת SEO שמדברת איתכם תכל׳ס
                </h2>
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p>
                    התחום של קידום אתרים SEO מלא בהבטחות ריקות ומושגים טכניים מסובכים. הגישה שלנו ב-Aiterra שונה: שקיפות מלאה. בתור חברת SEO שמכבדת את הלקוחות שלה, אנחנו לא מסתירים נתונים. אתם תקבלו מאיתנו דוחות ברורים שמראים לא רק אילו מילים עלו בדירוג, אלא כמה טראפיק איכותי וכמה לידים חדשים התהליך של קידום אתרים אורגני ייצר עבורכם בכל חודש.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />

        <FAQ
          title="שאלות נפוצות לפני שיוצאים לדרך"
          items={[
            {
              question: "מה זה SEO?",
              answer:
                "זהו תהליך מקיף שבו מתאימים את האתר שלכם לדרישות האלגוריתם של מנוע החיפוש, כדי שיופיע בתוצאות הראשונות ללא תשלום על קליקים.",
            },
            {
              question: "כמה עולה התהליך?",
              answer:
                "לכל פרויקט יש דרישות משלו. מחיר קידום אתרים משתנה בהתאם לרמת התחרות בנישה שלכם ולמצב ההתחלתי של האתר.",
            },
            {
              question: "איך בוחרים מקדם אתרים בגוגל?",
              answer:
                "ההמלצה שלנו היא תמיד לחפש מקדם אתרים מומלץ שעובד כחלק ממעטפת דיגיטלית מלאה, ויכול להציג לכם תוצאות מוכחות לאורך זמן.",
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
