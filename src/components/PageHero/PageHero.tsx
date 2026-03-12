import Link from "next/link";
import { Button } from "../ui/Button/Button";

export function PageHero({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = "dark",
}: {
  badge: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "dark" | "light";
}) {
  const isLight = variant === "light";

  return (
    <section
      className={`relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24 ${isLight ? "bg-white" : "bg-[#080a0c]"}`}
      dir="rtl"
    >
      {!isLight ? (
        <>
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
        </>
      ) : (
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-black tracking-[3px] uppercase ${
            isLight
              ? "bg-slate-100 border border-slate-200 text-slate-500"
              : "bg-white/[0.06] border border-white/10 text-white/60"
          }`}
        >
          {badge}
        </div>

        <h1
          className={`mt-7 text-4xl md:text-7xl font-black tracking-tight leading-[1.03] ${
            isLight ? "text-slate-900" : "text-white"
          }`}
        >
          {title}
        </h1>

        <p
          className={`mt-7 text-lg md:text-2xl leading-relaxed font-medium max-w-4xl ${
            isLight ? "text-slate-600" : "text-white/70"
          }`}
        >
          {subtitle}
        </p>

        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {primaryCta ? (
              <Button asChild variant="cta" size="hero">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            ) : null}

            {secondaryCta ? (
              <Button asChild variant={isLight ? "brandOutline" : "brandGlass"} size="hero">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}

