import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/src/components/Header/Header";
import { PageBreadcrumbs } from "@/src/components/ui/Breadcrumb/PageBreadcrumbs";
import { StructuredData, getBreadcrumbSchema } from "@/src/components/StructuredData";
import { buildCanonical, getAbsoluteOgImage, DEFAULT_OG_IMAGE, BRAND_NAME } from "@/src/lib/seo";

const Packages = dynamic(
  () => import("@/src/components/Packages/Packages").then((m) => ({ default: m.Packages })),
  { ssr: true }
);

const ContactCTA = dynamic(
  () => import("@/src/components/CTA/ContactCTA").then((m) => ({ default: m.ContactCTA })),
  { ssr: false, loading: () => <div className="min-h-[40vh]" aria-hidden /> }
);

const Footer = dynamic(
  () => import("@/src/components/Footer/Footer").then((m) => ({ default: m.Footer })),
  { ssr: false, loading: () => <div className="min-h-[30vh]" aria-hidden /> }
);

export const metadata: Metadata = {
  title: "חבילות שיווק דיגיטלי - Packages",
  description: "חבילות שיווק דיגיטלי מותאמות לכל עסק - מדפי נחיתה פשוטים ועד מערכות מסחר מלאות.",
  alternates: { canonical: buildCanonical("/packages") },
  openGraph: {
    title: "חבילות שיווק דיגיטלי - Packages",
    description: "חבילות שיווק דיגיטלי מותאמות לכל עסק - מדפי נחיתה פשוטים ועד מערכות מסחר מלאות.",
    url: buildCanonical("/packages"),
    type: "website",
    siteName: BRAND_NAME,
    images: [{ url: getAbsoluteOgImage(DEFAULT_OG_IMAGE.url), width: DEFAULT_OG_IMAGE.width, height: DEFAULT_OG_IMAGE.height, alt: DEFAULT_OG_IMAGE.alt }],
  },
  twitter: { card: "summary_large_image", title: "חבילות שיווק דיגיטלי", description: "חבילות שיווק דיגיטלי מותאמות לכל עסק." },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "ראשי", item: "/" },
  { name: "חבילות", item: "/packages" },
]);

export default function PackagesPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed bg-[#080a0c]">
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main id="main-content" className="bg-[#080a0c] pt-20">
        <div className="bg-white">
          <PageBreadcrumbs
            items={[{ label: "ראשי", href: "/" }, { label: "חבילות" }]}
            className="py-6 bg-white"
            variant="light"
          />
          <Packages />
        </div>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
