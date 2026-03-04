import dynamic from 'next/dynamic';
import Header from "@/app/landing/components/Header";
import Hero from "@/app/landing/components/Hero";

const LeadFormSection = dynamic(() => import("@/app/landing/components/LeadFormSection"), {
  loading: () => null,
  ssr: false,
});
const Services = dynamic(() => import("@/app/landing/components/Services"), {
  loading: () => null,
});
const RealResults = dynamic(() => import("@/app/landing/components/RealResults"), {
  loading: () => null,
});
const WhyUs = dynamic(() => import("@/app/landing/components/WhyUs"), {
  loading: () => null,
});
const SocialFollow = dynamic(() => import("@/app/landing/components/SocialFollow"), {
  loading: () => null,
  ssr: false,
});
const LeadFormCard = dynamic(() => import("@/app/landing/components/LeadFormCard"), {
  loading: () => null,
  ssr: false,
});
const Footer = dynamic(() => import("@/app/landing/components/Footer"), {
  loading: () => null,
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen">
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
