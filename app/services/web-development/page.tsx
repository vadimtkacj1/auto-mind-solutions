import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { AboutHero } from "@/src/components/AboutAiterra/AboutHero";
import { TechStack } from "@/src/components/TechStack/TechStack";
import { WebDevServices } from "@/src/components/Services/WebDevServices";
import { WebDevProcess } from "@/src/components/Services/WebDevProcess";
import { FAQ } from "@/src/components/FAQ/FAQ";
import { CTA } from "@/src/components/CTA/CTA";
import { WEB_DEV_FAQ_ITEMS } from "@/src/components/Services/WebDevFAQ";
import { PageBreadcrumbs } from "@/src/components/ui/Breadcrumb/PageBreadcrumbs";
import { StructuredData, getProfessionalServicePageSchema } from "@/src/components/StructuredData";
import { InternalLinksBlock } from "@/src/components/InternalLinksBlock";
import { buildCanonical, getAbsoluteOgImage, DEFAULT_OG_IMAGE, BRAND_NAME } from "@/src/lib/seo";

const SERVICE_BACKLINKS = [
  { label: "קידום אתרים SEO", href: "/services/seo-marketing" },
  { label: "פרסום ממומן PPC", href: "/services/ppc" },
  { label: "אוטומציה עסקית", href: "/services/automation" },
  { label: "כל השירותים", href: "/services" },
  { label: "חבילות", href: "/packages" },
  { label: "צור קשר", href: "/contact" },
];

export const metadata: Metadata = {
  title: "בניית אתרים | שירותי בניית אתרים לעסק | פיתוח אתרים מקצועי",
  description:
    "בניית אתרים מקצועית: אתרי תדמית, בניית אתר מכירות (איקומרס), חנות וירטואלית ופיתוח Custom. בניית אתר אינטרנט עם UX מנצחת, קידום אורגני ואחסון אתרים. מחיר בניית אתר שקוף. בניית אתרים לעסקים קטנים וגדולים.",
  alternates: { canonical: buildCanonical("/services/web-development") },
  openGraph: {
    title: "בניית אתרים מקצועית | שירותי בניית אתרים לעסק",
    description: "בניית אתרים בהתאמה אישית: אתרי תדמית, איקומרס, מערכות ניהול. פיתוח אתר אינטרנט עם טכנולוגיות מתקדמות.",
    url: buildCanonical("/services/web-development"),
    type: "website",
    locale: "he_IL",
    siteName: BRAND_NAME,
    images: [{ url: getAbsoluteOgImage(DEFAULT_OG_IMAGE.url), width: DEFAULT_OG_IMAGE.width, height: DEFAULT_OG_IMAGE.height, alt: DEFAULT_OG_IMAGE.alt }],
  },
  twitter: { card: "summary_large_image", title: "בניית אתרים מקצועית", description: "בניית אתרים בהתאמה אישית: אתרי תדמית, איקומרס, מערכות ניהול." },
};

const serviceSchema = getProfessionalServicePageSchema({
  name: "בניית אתרים ופיתוח אתרים",
  description: "בניית אתרים בהתאמה אישית: אתרי תדמית, איקומרס, מערכות ניהול. פיתוח אתר אינטרנט עם טכנולוגיות מתקדמות.",
  url: buildCanonical("/services/web-development"),
  serviceType: "Web Development",
});

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <StructuredData data={serviceSchema} />
      <Header />
      <main className="bg-transparent">
        <AboutHero
          title="בניית אתרים: שירותי בניית אתרים לעסק ופיתוח טכנולוגי מתקדם"
          subtitle="האתר שלכם הוא איש המכירות היחיד שעובד 24/7. כשהוא איטי, מיושן או לא מותאם למובייל, אתם מפסידים לקוחות למתחרים בכל שנייה שעוברת. ב-Aiterra, בתור חברה לבניית אתרים וסוכנות טכנולוגית, אנחנו לא רק מעצבים עמודים יפים – אנחנו בונים תשתיות לצמיחה. תהליך בניית אתר אינטרנט אצלנו משלב טכנולוגיות צד-שרת מתקדמות, חוויית משתמש (UX) מנצחת והכנה מושלמת לקידום במנועי החיפוש. באמצעות עיצוב ובניית אתרים ברמה הגבוהה ביותר, נהפוך את הנוכחות הדיגיטלית שלכם לנכס המכניס ביותר בחברה."
          hideCtas
        />
        <PageBreadcrumbs
          items={[{ label: "שירותים", href: "/services" }, { label: "בניית אתרים" }]}
          className="py-6 bg-white"
        />

        <WebDevServices />
        <WebDevProcess />

        <section className="bg-white">
          <TechStack />
        </section>

        <CTA
          variant="minimal"
          title="אל תתפשרו על הנוכחות הדיגיטלית שלכם"
          description="תהליך חכם של בניית אתרים בהתאמה אישית הוא הצעד הראשון להפיכת העסק שלכם למעצמה דיגיטלית שמייצרת עבודה באופן שוטף."
          contactCTA="מוכנים להעלות הילוך? השאירו פרטים למטה, והצוות שלנו יחזור אליכם לשיחת ייעוץ מקצועית ולתכנון האתר החדש שלכם."
          primaryCta={{ label: "צרו קשר", href: "/contact" }}
        />
        <FAQ items={WEB_DEV_FAQ_ITEMS} title="שאלות נפוצות" />

      </main>
      <Footer />
    </div>
  );
}

