import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { portfolioItems } from "@/src/components/Portfolio/portfolioData";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio projects by Aiterra",
  alternates: { canonical: "https://aiterra.agency/portfolio" },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6" dir="rtl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {portfolioItems.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 rounded-[2rem] overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-[2rem] border border-slate-100 shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
