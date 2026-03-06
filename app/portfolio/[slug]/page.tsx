import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/src/components/Header/Header';
import { Footer } from '@/src/components/Footer/Footer';
import { StrategicCTA } from '@/src/components/CTA/StrategicCTA';
import { portfolioItems } from '@/src/components/Portfolio/portfolioData';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return portfolioItems.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = portfolioItems.find((p) => p.slug === params.slug);
  if (!item) return { title: 'Case Study' };

  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `https://aiterra.agency/portfolio/${item.slug}` },
    openGraph: {
      title: item.title,
      description: item.description,
      images: [{ url: item.image }],
    },
  };
}

export default function PortfolioCaseStudyPage({ params }: Props) {
  const item = portfolioItems.find((p) => p.slug === params.slug);
  if (!item) notFound();

  const tags = item.tags ?? [];

  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main className="pt-24">
        <section className="px-6 bg-[#f8fafc]" dir="rtl">
          <div className="mx-auto max-w-6xl py-12 md:py-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-5 py-1.5 text-[var(--color-primary)] text-xs sm:text-sm font-bold shadow-sm uppercase tracking-widest">
              CASE STUDY • Aiterra
            </div>

            <h1 className="mt-8 text-4xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
              {item.title}
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-slate-600 leading-relaxed font-medium max-w-4xl">
              {item.description}
            </p>

            {tags.length ? (
              <div className="mt-10 flex flex-wrap gap-2" dir="ltr">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white border border-slate-200 px-4 py-2 text-[11px] font-black tracking-widest uppercase text-slate-700 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        <section className="px-6 py-10 md:py-14 bg-[#f8fafc]" dir="rtl">
          <div className="mx-auto max-w-6xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded-[2.8rem] border border-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.10)]"
              loading="eager"
            />
          </div>
        </section>

        <section className="px-6 py-16 md:py-24" dir="rtl">
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-[2.8rem] border border-slate-100 bg-white p-10 md:p-12 shadow-[0_30px_60px_rgba(15,23,42,0.06)]">
              <div className="text-[11px] font-black tracking-[3px] uppercase text-slate-400">Summary</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                מה עשינו בפועל
              </h2>
              <p className="mt-6 text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                כאן ייכנסו הפרטים המלאים של הקייס (Strategy → UX → Engineering → Growth). כרגע זה תבנית — ואתה תוכל להחליף את הטקסטים
                לפי כל פרויקט.
              </p>
              <ul className="mt-10 space-y-3 text-slate-700 font-semibold">
                {[
                  'Discovery: מטרות + KPI + פאנל',
                  'UX: היררכיה, נקודות אמון, מסע משתמש',
                  'Engineering: ביצועים, אינטגרציות, סקייל',
                  'Growth: SEO/CRO/Tracking',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-[2.8rem] border border-slate-100 bg-white p-10 md:p-12 shadow-[0_30px_60px_rgba(15,23,42,0.06)]">
              <div className="text-[11px] font-black tracking-[3px] uppercase text-slate-400">Results</div>
              <h3 className="mt-3 text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                תוצאות
              </h3>

              {item.results?.length ? (
                <div className="mt-8 grid grid-cols-2 gap-3" dir="ltr">
                  {item.results.slice(0, 4).map((r) => (
                    <div key={r.label} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                      <div className="text-[11px] font-black tracking-[3px] uppercase text-slate-400">{r.label}</div>
                      <div className="mt-1 text-lg font-black text-slate-900">{r.value}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-6 text-slate-600 font-medium leading-relaxed">
                  נוסיף כאן KPI/ROI ברגע שהנתונים יהיו מוכנים.
                </p>
              )}
            </aside>
          </div>
        </section>

        <StrategicCTA />
      </main>
      <Footer />
    </div>
  );
}



