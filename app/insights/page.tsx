import type { Metadata } from 'next';
import Header from '@/src/components/Header/Header';
import { StrategicCTA } from '@/src/components/CTA/StrategicCTA';
import { Footer } from '@/src/components/Footer/Footer';
import { PageHero } from '@/src/components/PageHero/PageHero';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Articles, playbooks and technical deep-dives from Aiterra.',
  alternates: { canonical: 'https://aiterra.agency/insights' },
};

const topics = [
  { title: 'Technical SEO', desc: 'Indexing, CWV, JS rendering, structured data.' },
  { title: 'Conversion & UX', desc: 'Messaging, friction, persuasion, experiments.' },
  { title: 'Automation', desc: 'CRM, pipelines, integrations, ops efficiency.' },
  { title: 'Engineering', desc: 'Architecture, performance, reliability, security.' },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main>
        <PageHero
          badge="INSIGHTS • Aiterra"
          title={
            <>
              תובנות שבונות <span className="text-[var(--color-primary)]">יתרון</span>
            </>
          }
          subtitle={
            <>
              Deep-dives, playbooks וכלים פרקטיים לצמיחה דיגיטלית — מ-Technical SEO ועד Automation. (העמוד כרגע במצב soft-launch,
              התוכן יתווסף בהדרגה.)
            </>
          }
          primaryCta={{ label: 'Capabilities Deck', href: '/capabilities' }}
          secondaryCta={{ label: 'קביעת שיחת אסטרטגיה', href: '/#contact' }}
        />

        <section className="px-6 py-16 md:py-24 bg-[#f8fafc]" dir="rtl">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics.map((t) => (
                <div
                  key={t.title}
                  className="group rounded-[2.8rem] border border-slate-100 bg-white p-10 shadow-[0_30px_60px_rgba(15,23,42,0.06)] overflow-hidden relative"
                >
                  <div
                    className="absolute -top-16 -left-16 h-48 w-48 rounded-full blur-[70px] opacity-40 group-hover:opacity-60 transition-opacity"
                    style={{ background: 'rgba(0,112,255,0.16)' }}
                    aria-hidden="true"
                  />
                  <div className="text-[11px] font-black tracking-[3px] uppercase text-slate-400">
                    Topic • Coming soon
                  </div>
                  <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    {t.title}
                  </h2>
                  <p className="mt-4 text-slate-600 text-lg font-medium leading-relaxed">
                    {t.desc}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-100 px-4 py-2 text-sm font-black text-slate-700">
                    Read time: 6–10 min
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StrategicCTA />
      </main>
      <Footer />
    </div>
  );
}


