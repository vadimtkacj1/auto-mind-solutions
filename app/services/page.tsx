import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import { Services } from "@/src/components/Services/Services";
import { TechStack } from "@/src/components/TechStack/TechStack";
import { StrategicCTA } from "@/src/components/CTA/StrategicCTA";
import { Footer } from "@/src/components/Footer/Footer";
import { PageHero } from "@/src/components/PageHero/PageHero";

export const metadata: Metadata = {
  title: "Services",
  description: "Software engineering, growth marketing & automation — one integrated delivery.",
  alternates: { canonical: "https://aiterra.agency/services" },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main>
        <PageHero
          badge="SERVICES • Aiterra"
          title={
            <>
              שלושה Pillars. <span className="text-[var(--color-primary)]">מערכת אחת.</span>
            </>
          }
          subtitle={
            <>
              בנייה, שיווק וצמיחה צריכים לעבוד יחד. כשכל צוות עובד לבד — נוצרות דליפות בפאנל. אנחנו מסנכרנים Engineering
              + Growth סביב KPI ברורים, עם שקיפות מלאה.
            </>
          }
          primaryCta={{ label: "קביעת שיחת אסטרטגיה", href: "/#contact" }}
          secondaryCta={{ label: "צפו בפורטפוליו", href: "/portfolio" }}
        />

        <section className="px-6 py-14 md:py-20 bg-[#f8fafc]" dir="rtl">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Bespoke Engineering",
                  desc: "Custom builds, API integrations, performance & scalability.",
                },
                {
                  title: "Growth Marketing & SEO",
                  desc: "Technical SEO, intent-driven content, CRO & paid campaigns.",
                },
                {
                  title: "Business Automation",
                  desc: "Connect site → CRM/ERP → pipeline. Less manual work, more revenue.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-[0_30px_60px_rgba(15,23,42,0.06)]"
                >
                  <div className="text-[11px] font-black tracking-[3px] uppercase text-slate-400">Pillar</div>
                  <h2 className="mt-3 text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{c.title}</h2>
                  <p className="mt-4 text-slate-600 text-lg font-medium leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Services standalone />
        <TechStack />
        <StrategicCTA />
      </main>
      <Footer />
    </div>
  );
}
