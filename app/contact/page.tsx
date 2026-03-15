import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageBreadcrumbs } from "@/src/components/ui/Breadcrumb/PageBreadcrumbs";
import { StructuredData, getBreadcrumbSchema } from "@/src/components/StructuredData";
import { buildCanonical, getAbsoluteOgImage, DEFAULT_OG_IMAGE, BRAND_NAME } from "@/src/lib/seo";

const Header = dynamic(() => import("@/src/components/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/src/components/Footer/Footer").then(m => ({ default: m.Footer })), { ssr: false });
const Contact = dynamic(() => import("@/src/components/Contact/Contact").then(m => ({ default: m.Contact })), { ssr: false, loading: () => <div className="min-h-screen bg-white" /> });

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Let's innovate together. Contact us for web development, SEO, and business automation services.",
  alternates: { canonical: buildCanonical("/contact") },
  openGraph: {
    title: "Contact Us - Get in Touch",
    description: "Let's innovate together. Contact us for web development, SEO, and business automation services.",
    url: buildCanonical("/contact"),
    type: "website",
    siteName: BRAND_NAME,
    images: [{ url: getAbsoluteOgImage(DEFAULT_OG_IMAGE.url), width: DEFAULT_OG_IMAGE.width, height: DEFAULT_OG_IMAGE.height, alt: DEFAULT_OG_IMAGE.alt }],
  },
  twitter: { card: "summary_large_image", title: "Contact Us", description: "Get in touch for web development, SEO, and business automation." },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "ראשי", item: "/" },
  { name: "צור קשר", item: "/contact" },
]);

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main id="main-content" className="flex-1 bg-white">
        <PageBreadcrumbs items={[{ label: "צור קשר" }]} className="pt-24 pb-4" variant="light" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
