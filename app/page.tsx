import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { WebVitals } from "@/app/web-vitals";
import Header from "@/src/components/Header/Header";

// Hero with optimizations
const Hero = dynamic(() => import("@/src/components/hero/Hero"), {
  ssr: false,
  loading: () => null,
});

// Ultra-aggressive lazy loading - load ONLY when visible
const Services = dynamic(
  () => import("@/src/components/Services/Services").then((m) => ({ default: m.Services })),
  {
    ssr: false,
    loading: () => <div className="min-h-[50vh] bg-[#0a0a0a]" aria-hidden />,
  }
);

const PortfolioCarousel = dynamic(
  () => import("@/src/components/Portfolio/PortfolioCarousel").then((m) => ({ default: m.PortfolioCarousel })),
  { ssr: false, loading: () => <div className="min-h-[120vh] bg-white" aria-hidden /> }
);

const TechStack = dynamic(
  () => import("@/src/components/TechStack/TechStack").then((m) => ({ default: m.TechStack })),
  { ssr: false, loading: () => <div className="min-h-[40vh] bg-white" aria-hidden /> }
);

const FAQ = dynamic(
  () => import("@/src/components/FAQ/FAQ").then((m) => ({ default: m.FAQ })),
  { ssr: false, loading: () => <div className="min-h-[30vh] bg-[#0a0a0a]" aria-hidden /> }
);

const PackagesCTA = dynamic(
  () => import("@/src/components/PackagesCTA/PackagesCTA").then((m) => ({ default: m.PackagesCTA })),
  { ssr: false, loading: () => <div className="min-h-[60vh] bg-[#050a15]" aria-hidden /> }
);

const Footer = dynamic(
  () => import("@/src/components/Footer/Footer").then((m) => ({ default: m.Footer })),
  { ssr: false, loading: () => <footer className="min-h-[40vh] bg-[#0a0a0a]" aria-hidden /> }
);

const CookiePopup = dynamic(() => import("@/src/components/CookiePopup/CookiePopup"), { ssr: false });

import { SITE_URL, BRAND_NAME, buildCanonical, getAbsoluteOgImage, DEFAULT_OG_IMAGE } from "@/src/lib/seo";
import { StructuredData, getFAQPageSchema } from "@/src/components/StructuredData";
import { HOME_FAQ_ITEMS } from "@/src/data/faqData";
import { HeroShell } from "@/src/components/hero/HeroShell";

export const metadata: Metadata = {
  title: `${BRAND_NAME} - עיצוב אתרים, SEO ופיתוח דיגיטלי מוביל בישראל`,
  description:
    "סוכנות עיצוב ו-SEO מובילה בישראל. בונים חוויות דיגיטליות מתקדמות עם React, Next.js, TypeScript. שירותי פיתוח אתרים, אוטומציה שיווקית ופרסום דיגיטלי.",
  keywords: [
    "עיצוב אתרים בישראל",
    "SEO ישראל",
    "פיתוח אתרים",
    "שיווק דיגיטלי",
    "בניית אתרים",
    "אוטומציה שיווקית",
    "פרסום ממומן",
    "React",
    "Next.js",
    "TypeScript",
    "web design Israel",
    "digital marketing",
  ],
  alternates: { canonical: buildCanonical("/") },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} - עיצוב אתרים, SEO ופיתוח דיגיטלי מוביל בישראל`,
    description: "סוכנות עיצוב ו-SEO מובילה בישראל. בונים חוויות דיגיטליות מתקדמות עם React, Next.js, TypeScript.",
    images: [
      {
        url: getAbsoluteOgImage(DEFAULT_OG_IMAGE.url),
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
        alt: `${BRAND_NAME} - Web Design & SEO`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} - עיצוב אתרים, SEO ופיתוח דיגיטלי`,
    description: "סוכנות עיצוב ו-SEO מובילה בישראל.",
    images: [getAbsoluteOgImage(DEFAULT_OG_IMAGE.url)],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${BRAND_NAME} - עיצוב אתרים, SEO ופיתוח דיגיטלי`,
    description: "סוכנות עיצוב ו-SEO מובילה בישראל",
    url: SITE_URL,
    inLanguage: "he",
    isPartOf: {
      "@type": "WebSite",
      name: "Aiterra",
      url: "https://aiterra.agency",
    },
    about: {
      "@type": "Service",
      serviceType: ["Web Design", "SEO", "Digital Marketing", "Web Development"],
    },
    provider: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
    },
  };

  const faqSchema = getFAQPageSchema(HOME_FAQ_ITEMS, SITE_URL);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StructuredData data={faqSchema} />
      <WebVitals />
      <Header />
      <div className="min-h-screen text-[var(--color-dark)] leading-relaxed" style={{ background: "#0a0a0a" }}>
        <main id="main-content" tabIndex={-1} itemScope itemType="https://schema.org/WebPage">
          {/* Static hero shell for instant LCP — visible in initial HTML without JS */}
          <div className="relative min-h-[100svh]">
            <div className="absolute inset-0 z-[1]" aria-hidden="true">
              <HeroShell />
            </div>
            <div className="absolute inset-0 z-[2]">
              <Hero />
            </div>
          </div>

          <div style={{ position: "relative", zIndex: 30 }}>
            <Services />
            <PortfolioCarousel />
            <TechStack />
            <PackagesCTA />
            <FAQ />
          </div>
        </main>
        <Footer />
        <CookiePopup />
      </div>
    </>
  );
}
