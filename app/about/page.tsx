import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { AboutPageLayout } from "@/src/components/AboutAiterra/AboutPageLayout";
import { AboutHeroShell } from "@/src/components/AboutAiterra/AboutHeroShell";
import { PageBreadcrumbs } from "@/src/components/ui/Breadcrumb/PageBreadcrumbs";
import { StructuredData, getBreadcrumbSchema } from "@/src/components/StructuredData";
import { buildCanonical, getAbsoluteOgImage, DEFAULT_OG_IMAGE, BRAND_NAME } from "@/src/lib/seo";

const Header = dynamic(() => import("@/src/components/Header/Header"), { ssr: false });
const AboutAiterra = dynamic(
  () => import("@/src/components/AboutAiterra/AboutAiterra").then((m) => ({ default: m.AboutAiterra })),
  { ssr: false, loading: () => <div className="min-h-[60vh] bg-white" aria-hidden /> }
);
const ContactCTA = dynamic(
  () => import("@/src/components/CTA/ContactCTA").then((m) => ({ default: m.ContactCTA })),
  { ssr: false, loading: () => <div className="min-h-[30vh]" aria-hidden /> }
);
const Footer = dynamic(
  () => import("@/src/components/Footer/Footer").then((m) => ({ default: m.Footer })),
  { ssr: false, loading: () => <footer className="min-h-[40vh] bg-[#080a0c]" aria-hidden /> }
);

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Leading tech agency for automation and artificial intelligence. Bridging the gap between complex technology and business growth.",
  alternates: { canonical: buildCanonical("/about") },
  openGraph: {
    title: "About Us",
    description: "Leading tech agency for automation and artificial intelligence. Bridging the gap between complex technology and business growth.",
    url: buildCanonical("/about"),
    type: "website",
    siteName: BRAND_NAME,
    images: [{ url: getAbsoluteOgImage(DEFAULT_OG_IMAGE.url), width: DEFAULT_OG_IMAGE.width, height: DEFAULT_OG_IMAGE.height, alt: DEFAULT_OG_IMAGE.alt }],
  },
  twitter: { card: "summary_large_image", title: "About Us", description: "Leading tech agency for automation and artificial intelligence." },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "ראשי", item: "/" },
  { name: "אודות", item: "/about" },
]);

export default function AboutPage() {
  return (
    <AboutPageLayout>
      <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
        <StructuredData data={breadcrumbSchema} />
        <Header />
        <main id="main-content" className="bg-transparent">
          <AboutHeroShell />
          <PageBreadcrumbs items={[{ label: "אודות" }]} className="py-6 bg-white" />
          <AboutAiterra />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </AboutPageLayout>
  );
}
