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
      <section id="contact">
        <LeadFormSection />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <RealResults />
      </section>
      <section id="why-us">
        <WhyUs />
      </section>
      <section id="follow">
        <SocialFollow />
      </section>
      <LeadFormCard />
      <Footer />
    </main>
  );
}
