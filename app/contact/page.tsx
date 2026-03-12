import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { Contact } from "@/src/components/Contact/Contact";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Aiterra",
  description: "Let's innovate together. Contact Aiterra for web development, SEO, and business automation services.",
  alternates: { canonical: "https://aiterra.agency/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
