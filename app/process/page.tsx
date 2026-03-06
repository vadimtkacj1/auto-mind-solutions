import type { Metadata } from 'next';
import Header from '@/src/components/Header/Header';
import { StrategicCTA } from '@/src/components/CTA/StrategicCTA';
import { Footer } from '@/src/components/Footer/Footer';
import { PageHero } from '@/src/components/PageHero/PageHero';

export const metadata: Metadata = {
  title: 'Process',
  description: 'Discovery → Strategy → Agile delivery → Growth optimization.',
  alternates: { canonical: 'https://aiterra.agency/process' },
};

const phases = [
  {
    title: 'Discovery & Audit',
    subtitle: 'הבנה עמוקה של העסק והמצב הטכנולוגי',
    bullets: [
      'מטרות עסקיות, KPI, קהלי יעד ופאנל המרות',
      'מיפוי Tech Debt / בעיות ביצועים / UX friction',
      'המלצות חדות עם סדרי עדיפויות',
    ],
  },
  {
    title: 'Strategy & UX',
    subtitle: 'תכנון שמחבר חוויית משתמש לתוצאות',
    bullets: [
      'מסע משתמש, היררכיית תוכן ו-Information Architecture',
      'תכנון אנליטיקה ואירועים (GA4 / Pixel / CRM)',
      'תיעדוף MVP מול שלבים מתקדמים',
    ],
  },
  {
    title: 'Agile Development',
    subtitle: 'דיליברי בספרינטים עם שקיפות מלאה',
    bullets: [
      'ספרינטים, דמו תקופתי, ודוחות התקדמות',
      'בדיקות, QA, נגישות וביצועים',
      'אינטגרציות: API, CRM, תשלומים, אוטומציות',
    ],
  },
  {
    title: 'Growth & Optimization',
    subtitle: 'אחרי ההשקה מתחילה העבודה האמיתית',
    bullets: [
      'ניטור, A/B, CRO ושיפורי פאנל',
      'Technical SEO + תוכן שמביא Intent גבוה',
      'סקייל לקמפיינים וערוצים חדשים',
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main>
        <PageHero
          badge="PROCESS • Aiterra"
          title={
            <>
              תהליך ברור. <span className="text-[var(--color-primary)]">תוצאות מדידות.</span>
            </>
          }
          subtitle={
            <>
              לקוחות high-ticket לא קונים “קסם” — הם קונים מערכת. כך אנחנו הופכים אסטרטגיה + UX + Engineering + Growth
              למנוע צמיחה אמיתי.
            </>
          }
          primaryCta={{ label: 'קביעת שיחת אסטרטגיה', href: '/#contact' }}
          secondaryCta={{ label: 'Capabilities Deck', href: '/capabilities' }}
        />

        <section className="px-6 py-16 md:py-24 bg-[#f8fafc]" dir="rtl">
          <div className="mx-auto max-w-6xl">
            <div className="relative">
              <div
                className="hidden md:block absolute right-7 top-6 bottom-6 w-px bg-gradient-to-b from-blue-200 via-slate-200 to-emerald-200"
                aria-hidden="true"
              />

              <div className="space-y-6">
                {phases.map((p, idx) => (
                  <div
                    key={p.title}
                    className="relative rounded-[2.8rem] border border-slate-100 bg-white p-10 md:p-12 shadow-[0_30px_60px_rgba(15,23,42,0.06)] overflow-hidden"
                  >
                    <div
                      className="absolute -top-16 -left-16 h-48 w-48 rounded-full blur-[70px] opacity-50"
                      style={{ background: idx % 2 === 0 ? 'rgba(0,112,255,0.18)' : 'rgba(0,230,144,0.14)' }}
                      aria-hidden="true"
                    />

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                      <div className="max-w-3xl">
                        <div className="text-[11px] font-black tracking-[3px] uppercase text-slate-400">
                          Phase {idx + 1}
                        </div>
                        <h2 className="mt-3 text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                          {p.title}
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                          {p.subtitle}
                        </p>

                        <ul className="mt-8 space-y-3 text-slate-700 font-semibold">
                          {p.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-3">
                              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
                              <span className="leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-3">
                        <div className="h-14 w-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black text-xl tabular-nums">
                          {idx + 1}
                        </div>
                        <div className="text-sm font-black tracking-widest uppercase text-slate-400">Step</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <StrategicCTA />
      </main>
      <Footer />
    </div>
  );
}


