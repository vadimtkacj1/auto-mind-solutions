import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { AboutHero } from "@/src/components/AboutAiterra/AboutHero";
import { TechStackInline } from "@/src/components/TechStack/TechStackInline";
import { WebDevServices } from "@/src/components/Services/WebDevServices";
import { WebDevProcess } from "@/src/components/Services/WebDevProcess";
import { FAQ } from "@/src/components/FAQ/FAQ";
import { ContactCTA } from "@/src/components/CTA/ContactCTA";
import { WEB_DEV_FAQ_ITEMS } from "@/src/components/Services/WebDevFAQ";

export const metadata: Metadata = {
  title: "בניית אתרים | שירותי בניית אתרים לעסק | פיתוח אתרים מקצועי - Aiterra",
  description:
    "בניית אתרים מקצועית: אתרי תדמית, בניית אתר מכירות (איקומרס), חנות וירטואלית ופיתוח Custom. בניית אתר אינטרנט עם UX מנצחת, קידום אורגני ואחסון אתרים. מחיר בניית אתר שקוף. בניית אתרים לעסקים קטנים וגדולים.",
  alternates: { canonical: "https://aiterra.agency/services/web-development" },
  openGraph: {
    title: "בניית אתרים מקצועית | שירותי בניית אתרים לעסק - Aiterra",
    description: "בניית אתרים בהתאמה אישית: אתרי תדמית, איקומרס, מערכות ניהול. פיתוח אתר אינטרנט עם טכנולוגיות מתקדמות.",
    type: "website",
    locale: "he_IL",
  },
};

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main className="bg-transparent">
        <AboutHero
          title="בניית אתרים: שירותי בניית אתרים לעסק ופיתוח טכנולוגי מתקדם"
          subtitle="האתר שלכם הוא איש המכירות היחיד שעובד 24/7. כשהוא איטי, מיושן או לא מותאם למובייל, אתם מפסידים לקוחות למתחרים בכל שנייה שעוברת. ב-Aiterra, בתור חברה לבניית אתרים וסוכנות טכנולוגית, אנחנו לא רק מעצבים עמודים יפים – אנחנו בונים תשתיות לצמיחה. תהליך בניית אתר אינטרנט אצלנו משלב טכנולוגיות צד-שרת מתקדמות, חוויית משתמש (UX) מנצחת והכנה מושלמת לקידום במנועי החיפוש. באמצעות עיצוב ובניית אתרים ברמה הגבוהה ביותר, נהפוך את הנוכחות הדיגיטלית שלכם לנכס המכניס ביותר בחברה."
          hideCtas
        />

        <WebDevServices />
        <WebDevProcess />

        <section className="py-20 md:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <TechStackInline />
          </div>
        </section>

        <ContactCTA />
        <FAQ items={WEB_DEV_FAQ_ITEMS} title="שאלות נפוצות" />

      </main>
      <Footer />
    </div>
  );
}

