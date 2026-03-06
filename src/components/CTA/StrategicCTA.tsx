import Link from 'next/link';

export function StrategicCTA({
  title = 'מוכנים להעלות את הבשלות הדיגיטלית שלכם?',
  description = 'בואו נבדוק יחד איפה הכסף “נוזל” בפאנל, איפה הטכנולוגיה מעכבת, ואיך הופכים דיגיטל למנוע הכנסות.',
  primaryCta = { label: 'קביעת שיחת אסטרטגיה', href: '/#contact' },
  secondaryCta = { label: 'Capabilities Deck', href: '/capabilities' },
}: {
  title?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-[#080a0c] py-16 md:py-24" dir="rtl">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(circle at 20% 10%, rgba(59,130,246,0.25), transparent 55%), radial-gradient(circle at 80% 70%, rgba(16,185,129,0.18), transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="rounded-[3rem] border border-white/10 bg-white/[0.03] p-10 md:p-14 shadow-2xl backdrop-blur-md">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/10 px-4 py-2 text-[11px] font-black tracking-[3px] uppercase text-white/60">
              Strategic Consulting • Aiterra
            </div>
            <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.05]">
              {title}
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed font-medium">
              {description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-2xl px-8 py-5 font-black text-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white transition-all shadow-lg shadow-blue-500/20 active:scale-95"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-2xl px-8 py-5 font-black text-lg bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/15 transition-all active:scale-95"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



