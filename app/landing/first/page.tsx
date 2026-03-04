import dynamic from 'next/dynamic';
import Header from "@/app/landing/components/Header";
import Hero from "@/app/landing/components/Hero";

// Динамические импорты для компонентов ниже первого экрана (lazy loading)
const LeadFormSection = dynamic(() => import("@/app/landing/components/LeadFormSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Services = dynamic(() => import("@/app/landing/components/Services"), {
  loading: () => <div className="min-h-[600px]" />,
});
const RealResults = dynamic(() => import("@/app/landing/components/RealResults"), {
  loading: () => <div className="min-h-[500px]" />,
});
const WhyUs = dynamic(() => import("@/app/landing/components/WhyUs"), {
  loading: () => <div className="min-h-[400px]" />,
});
const SocialFollow = dynamic(() => import("@/app/landing/components/SocialFollow"), {
  loading: () => <div className="min-h-[400px]" />,
});
const LeadFormCard = dynamic(() => import("@/app/landing/components/LeadFormCard"), {
  loading: () => <div className="min-h-[300px]" />,
});
const Footer = dynamic(() => import("@/app/landing/components/Footer"), {
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
