import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { articles } from "@/src/components/Insights";
import { portfolioItems } from "@/src/components/Portfolio/portfolioData";
import { buildCanonical, BRAND_NAME } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "מפת האתר",
  description: `מפת האתר של ${BRAND_NAME} - קישורים לכל הדפים: שירותים, חבילות, תיק עבודות, תובנות וצור קשר.`,
  alternates: { canonical: buildCanonical("/site-map") },
  robots: { index: true, follow: true },
};

const MAIN_LINKS = [
  { label: "ראשי", href: "/" },
  { label: "שירותים", href: "/services" },
  { label: "חבילות", href: "/packages" },
  { label: "תיק עבודות", href: "/portfolio" },
  { label: "אודותינו", href: "/about" },
  { label: "תובנות", href: "/insights" },
  { label: "תעשיות", href: "/industries" },
  { label: "צור קשר", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "קידום אתרים SEO", href: "/services/seo-marketing" },
  { label: "פרסום ממומן PPC", href: "/services/ppc" },
  { label: "בניית אתרים", href: "/services/web-development" },
  { label: "אוטומציה עסקית", href: "/services/automation" },
];

const PACKAGE_LINKS = [
  { label: "Launch Starter", href: "/packages/launch-starter" },
  { label: "Growth Landing System", href: "/packages/growth-landing-system" },
  { label: "Digital Commerce Elite", href: "/packages/digital-commerce-elite" },
  { label: "Business Presence Pro", href: "/packages/business-presence-pro" },
];

export default function SiteMapPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main id="main-content" className="pt-24 pb-20 bg-white min-h-screen" dir="rtl">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">מפת האתר</h1>
          <p className="text-lg text-slate-600 mb-12">
            כל הקישורים החשובים באתר במקום אחד. מועיל למנועי חיפוש ולגלישה נוחה.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">דפים ראשיים</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {MAIN_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-blue-600 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">שירותים</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SERVICE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-blue-600 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">חבילות</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PACKAGE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-blue-600 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">תיק עבודות</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {portfolioItems.map((item) => (
                <li key={item.slug}>
                  <Link href={item.href} className="text-blue-600 hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">תובנות / מאמרים</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {articles.map((article) => (
                <li key={article.slug}>
                  <Link href={`/insights/${article.slug}`} className="text-blue-600 hover:underline">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">משפטי</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li>
                <Link href="/terms" className="text-blue-600 hover:underline">
                  תנאי שימוש
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  מדיניות פרטיות
                </Link>
              </li>
            </ul>
          </section>

          <p className="text-sm text-slate-500 mt-8">
            <Link href="/sitemap.xml" className="text-blue-600 hover:underline">
              Sitemap XML למכונות חיפוש
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
