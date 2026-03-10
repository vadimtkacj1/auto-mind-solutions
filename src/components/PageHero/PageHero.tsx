import Link from "next/link";

export function PageHero({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: {
  badge: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-[#080a0c] pt-28 pb-16 md:pt-32 md:pb-24" dir="rtl">
      {/* Glows */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(circle at 18% 20%, rgba(0,112,255,0.35), transparent 55%), radial-gradient(circle at 80% 55%, rgba(0,230,144,0.22), transparent 55%), radial-gradient(circle at 50% 120%, rgba(255,255,255,0.08), transparent 55%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/10 px-4 py-2 text-[11px] font-black tracking-[3px] uppercase text-white/60">
          {badge}
        </div>

        <h1 className="mt-7 text-4xl md:text-7xl font-black tracking-tight text-white leading-[1.03]">{title}</h1>

        <p className="mt-7 text-lg md:text-2xl text-white/70 leading-relaxed font-medium max-w-4xl">{subtitle}</p>

        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-2xl px-8 py-5 font-black text-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white transition-all shadow-lg shadow-blue-500/20 active:scale-95"
              >
                {primaryCta.label}
              </Link>
            ) : null}

            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-2xl px-8 py-5 font-black text-lg bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/15 transition-all active:scale-95"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
