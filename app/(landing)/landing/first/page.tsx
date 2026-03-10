import dynamicImport from "next/dynamic";
import Header from "@/app/(landing)/landing/components/Header";
import Hero from "@/app/(landing)/landing/components/Hero";
import PageLoader from "@/app/(landing)/landing/components/PageLoader";

export const dynamic = "force-dynamic";

const LANDING_ASSETS = [
  "/images/logo.svg",
  "/images/hero-section-opt.webp",
  "/images/Vector.svg",
  "/images/people.png",
  "/images/social-girl.svg",
  "/images/instagram.svg",
  "/images/facebook.svg",
  "/images/linkedin.svg",
  "/images/tiktok.svg",
  "/images/service1.jpg",
  "/images/service2.jpg",
  "/images/service3.jpg",
  "/images/service4.jpg",
  "/images/icon1.svg",
  "/images/icon2.svg",
  "/images/icon3.svg",
  "/images/icon4.svg",
  "/images/icon5.svg",
  "/images/icon6.svg",
  "/images/icon7.svg",
  "/images/portfolio1-opt.webp",
  "/images/portfolio2-opt.webp",
  "/images/portfolio3-opt.webp",
  "/images/portfolio4-opt.webp",
];

const LeadFormSection = dynamicImport(() => import("@/app/(landing)/landing/components/LeadFormSection"), {
  loading: () => null,
});
const Services = dynamicImport(() => import("@/app/(landing)/landing/components/Services"), {
  loading: () => null,
});
const RealResults = dynamicImport(() => import("@/app/(landing)/landing/components/RealResults"), {
  loading: () => null,
});
const WhyUs = dynamicImport(() => import("@/app/(landing)/landing/components/WhyUs"), {
  loading: () => null,
});
const SocialFollow = dynamicImport(() => import("@/app/(landing)/landing/components/SocialFollow"), {
  loading: () => null,
});
const LeadFormCard = dynamicImport(() => import("@/app/(landing)/landing/components/LeadFormCard"), {
  loading: () => null,
});
const Footer = dynamicImport(() => import("@/app/(landing)/landing/components/Footer"), {
  loading: () => null,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <PageLoader assets={LANDING_ASSETS} />
      <Header />
      <Hero />
      <LeadFormSection />
      <Services />
      <RealResults />
      <WhyUs />
      <SocialFollow />
      <LeadFormCard />
      <Footer />
    </main>
  );
}
