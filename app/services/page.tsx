import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageBreadcrumbs } from "@/src/components/ui/Breadcrumb/PageBreadcrumbs";
import { StructuredData, getBreadcrumbSchema } from "@/src/components/StructuredData";
import { buildCanonical, getAbsoluteOgImage, DEFAULT_OG_IMAGE, BRAND_NAME } from "@/src/lib/seo";

const Header = dynamic(() => import("@/src/components/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/src/components/Footer/Footer").then(m => ({ default: m.Footer })), { ssr: false });
const ServicesElastic = dynamic(() => import("@/src/components/Services/ServicesElastic").then(m => ({ default: m.ServicesElastic })), { ssr: false });
const ContactCTA = dynamic(() => import("@/src/components/CTA/ContactCTA").then(m => ({ default: m.ContactCTA })), { ssr: false });

export const metadata: Metadata = {
  title: "שירותים",
  description: "השירותים שלנו: אתרים ופלטפורמות, SEO וצמיחה, אוטומציה וחיבור מערכות.",
  alternates: { canonical: buildCanonical("/services") },
  openGraph: {
    title: "שירותים",
    description: "השירותים שלנו: אתרים ופלטפורמות, SEO וצמיחה, אוטומציה וחיבור מערכות.",
    url: buildCanonical("/services"),
    type: "website",
    siteName: BRAND_NAME,
    images: [{ url: getAbsoluteOgImage(DEFAULT_OG_IMAGE.url), width: DEFAULT_OG_IMAGE.width, height: DEFAULT_OG_IMAGE.height, alt: DEFAULT_OG_IMAGE.alt }],
  },
  twitter: { card: "summary_large_image", title: "שירותים", description: "השירותים שלנו: אתרים ופלטפורמות, SEO וצמיחה, אוטומציה וחיבור מערכות." },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "ראשי", item: "/" },
  { name: "שירותים", item: "/services" },
]);

export default function ServicesPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main id="main-content" className="bg-white">
        <PageBreadcrumbs items={[{ label: "שירותים" }]} className="pt-24 pb-4" />
        <ServicesElastic />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
