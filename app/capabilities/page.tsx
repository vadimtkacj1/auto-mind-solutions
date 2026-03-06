import type { Metadata } from 'next';
import Header from '@/src/components/Header/Header';
import { Footer } from '@/src/components/Footer/Footer';
import { RequestDeckForm } from '@/src/components/CapabilitiesDeck/RequestDeckForm';
import { StrategicCTA } from '@/src/components/CTA/StrategicCTA';
import { PageHero } from '@/src/components/PageHero/PageHero';

export const metadata: Metadata = {
  title: 'Capabilities Deck',
  description: 'Request Aiterra’s capabilities deck.',
  alternates: { canonical: 'https://aiterra.agency/capabilities' },
};

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main>
        <PageHero
          badge="CAPABILITIES • Aiterra"
          title={
            <>
              קבלו את ה-Deck <span className="text-[var(--color-primary)]">שלנו</span>
            </>
          }
          subtitle={
            <>
              מסמך קצר שמסביר מה אנחנו עושים, איך אנחנו עובדים, ומה הסטנדרט הטכנולוגי/שיווקי שאתם יכולים לצפות לו.
            </>
          }
          primaryCta={{ label: 'שלחו לי את ה-Deck', href: '#request' }}
          secondaryCta={{ label: 'קביעת שיחת אסטרטגיה', href: '/#contact' }}
        />

        <section id="request" className="relative overflow-hidden bg-[#080a0c] py-16 md:py-24" dir="rtl">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-[3rem] border border-white/10 bg-white/[0.03] p-10 md:p-14 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div
                className="absolute -top-16 -left-16 h-64 w-64 rounded-full blur-[90px] opacity-40"
                style={{ background: 'rgba(0,112,255,0.28)' }}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full blur-[90px] opacity-30"
                style={{ background: 'rgba(0,230,144,0.2)' }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="text-[11px] font-black tracking-[3px] uppercase text-white/50">What you’ll get</div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { t: 'Service Pillars', d: 'Engineering, Growth & Automation — בצורה ברורה.' },
                    { t: 'Process', d: 'Discovery → Strategy → Delivery → Optimization.' },
                    { t: 'Stack & Standards', d: 'Performance, security, accessibility, analytics.' },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-8 text-white"
                    >
                      <div className="text-lg font-black">{x.t}</div>
                      <div className="mt-3 text-white/70 font-medium leading-relaxed">{x.d}</div>
                    </div>
                  ))}
                </div>

                <RequestDeckForm />
              </div>
            </div>
          </div>
        </section>

        <StrategicCTA
          title="רוצים לדלג ישר לשיחה?"
          description="אם אתם כבר בשלב של בחירת שותף — נקבע שיחת אסטרטגיה קצרה ונבין אם יש התאמה."
          secondaryCta={{ label: 'צפו בפורטפוליו', href: '/portfolio' }}
        />
      </main>
      <Footer />
    </div>
  );
}


