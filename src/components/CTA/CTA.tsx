import Link from "next/link";
import { Button } from "../ui/Button/Button";

export function CTA({
  title = "מוכנים להעלות את הבשלות הדיגיטלית שלכם?",
  description = "ביחד ניצור לכם אסטרטגיה מנצחת שתעלה אתכם לפסגה",
  contactCTA = "",
  primaryCta = { label: "צרו קשר", href: "/contact" },
  secondaryCta = { label: "השאירו פרטים", href: "/contact" },
  variant = "dark",
}: {
  title?: string;
  description?: string;
  contactCTA?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "dark" | "light" | "packages" | "minimal";
}) {
  const isDark = variant === "dark";
  const isPackages = variant === "packages";
  const isMinimal = variant === "minimal";

  if (isMinimal) {
    return (
      <section
        className="relative overflow-hidden py-8 md:py-10"
        style={{ background: "linear-gradient(180deg, #e8f4fc 0%, #d4ebf7 100%)" }}
        dir="rtl"
      >
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="heading-no-break text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800 leading-[1.3]">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          {contactCTA && (
            <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700 max-w-2xl mx-auto">
              {contactCTA}
            </p>
          )}
          <div className="mt-4 flex justify-center">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base transition-all duration-300 hover:shadow-lg border-2 border-transparent"
            >
              {primaryCta.label}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative overflow-hidden py-16 md:py-24 ${
        isPackages ? "bg-[#050a15]" : isDark ? "bg-[#080a0c]" : "bg-white"
      }`}
      dir="rtl"
    >
      {(isDark || isPackages) && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isPackages
              ? "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,112,255,0.12), transparent 65%), radial-gradient(ellipse 50% 40% at 60% 60%, rgba(0,230,144,0.08), transparent 60%)"
              : "radial-gradient(circle at 20% 10%, rgba(59,130,246,0.25), transparent 55%), radial-gradient(circle at 80% 70%, rgba(16,185,129,0.18), transparent 55%)",
            opacity: isPackages ? 1 : 0.6,
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div
          className={`rounded-[3rem] p-10 md:p-14 ${
            isPackages
              ? "border border-white/15 bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)]"
              : isDark
                ? "border border-slate-200 bg-white shadow-2xl"
                : "bg-white"
          }`}
        >
          <div className="max-w-3xl">
            <div
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-black tracking-[3px] uppercase ${
                isPackages
                  ? "bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-primary)]/30 text-[var(--color-primary)]"
                  : isDark
                    ? "bg-slate-100 border border-slate-200 text-slate-600"
                    : "bg-slate-50 border border-slate-200 text-slate-500"
              }`}
            >
              {isPackages ? "PACKAGES • Aiterra" : "Strategic Consulting • Aiterra"}
            </div>
            <h2
              className={`heading-no-break mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05] ${
                isPackages ? "text-slate-900" : isDark ? "text-slate-900" : "text-slate-900"
              }`}
            >
              {title}
            </h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed font-medium text-slate-600">
              {description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="cta" size="hero">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              <Button asChild variant={isPackages ? "brand" : isDark ? "brandOutline" : "brandOutline"} size="hero">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

