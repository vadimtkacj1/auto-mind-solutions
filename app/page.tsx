import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LeadFormSection from "@/components/LeadFormSection";
import Services from "@/components/Services";
import RealResults from "@/components/RealResults";
import WhyUs from "@/components/WhyUs";
import SocialFollow from "@/components/SocialFollow";
import LeadFormCard from "@/components/LeadFormCard";
import SocialProof from "@/components/SocialProof";
import FinalLead from "@/components/FinalLead";
import Footer from "@/components/Footer";

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
