import dynamic from 'next/dynamic';
import Header from "@/app/landing/components/Header";
import Hero from "@/app/landing/components/Hero";

const LeadFormSection = dynamic(() => import("@/app/landing/components/LeadFormSection"), {
  loading: () => null,
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
});
const LeadFormCard = dynamic(() => import("@/app/landing/components/LeadFormCard"), {
  loading: () => null,
});
const Footer = dynamic(() => import("@/app/landing/components/Footer"), {
  loading: () => null,
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
