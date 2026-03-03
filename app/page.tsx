import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Динамические импорты для компонентов ниже первого экрана (lazy loading)
const LeadFormSection = dynamic(() => import("@/components/LeadFormSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="min-h-[600px]" />,
});
const RealResults = dynamic(() => import("@/components/RealResults"), {
  loading: () => <div className="min-h-[500px]" />,
});
const WhyUs = dynamic(() => import("@/components/WhyUs"), {
  loading: () => <div className="min-h-[400px]" />,
});
const SocialFollow = dynamic(() => import("@/components/SocialFollow"), {
  loading: () => <div className="min-h-[400px]" />,
});
const LeadFormCard = dynamic(() => import("@/components/LeadFormCard"), {
  loading: () => <div className="min-h-[300px]" />,
});
const SocialProof = dynamic(() => import("@/components/SocialProof"), {
  loading: () => <div className="min-h-[200px]" />,
});
const FinalLead = dynamic(() => import("@/components/FinalLead"), {
  loading: () => <div className="min-h-[300px]" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[200px]" />,
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
