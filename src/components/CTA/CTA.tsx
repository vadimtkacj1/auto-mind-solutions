import Link from "next/link";
import { Button } from "../ui/Button/Button";

export function CTA({
  title = "מוכנים להעלות את הבשלות הדיגיטלית שלכם?",
  description = "בואו נבדוק יחד איפה הכסף “נוזל” בפאנל, איפה הטכנולוגיה מעכבת, ואיך הופכים דיגיטל למנוע הכנסות.",
  primaryCta = { label: "קביעת שיחת אסטרטגיה", href: "/contact" },
  secondaryCta = { label: "צפו בחבילות", href: "/packages" },
  variant = "dark",
}: {
  title?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "dark" | "light";
}) {
  const isDark = variant === "dark";

  return (
    <section
      className={`relative overflow-hidden py-16 md:py-24 ${isDark ? "bg-[#080a0c]" : "bg-white"}`}
      dir="rtl"
    >
      {isDark ? (
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 20% 10%, rgba(59,130,246,0.25), transparent 55%), radial-gradient(circle at 80% 70%, rgba(16,185,129,0.18), transparent 55%)",
          }}
          aria-hidden="true"
        />
      ) : null}

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div
          className={`rounded-[3rem] p-10 md:p-14 shadow-2xl ${
            isDark
              ? "border border-white/10 bg-white/[0.03] backdrop-blur-md"
              : "border border-slate-200 bg-white"
          }`}
        >
          <div className="max-w-3xl">
            <div
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-black tracking-[3px] uppercase ${
                isDark
                  ? "bg-white/[0.06] border border-white/10 text-white/60"
                  : "bg-slate-50 border border-slate-200 text-slate-500"
              }`}
            >
              Strategic Consulting • Aiterra
            </div>
            <h2
              className={`mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05] ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {title}
            </h2>
            <p className={`mt-6 text-lg md:text-xl leading-relaxed font-medium ${isDark ? "text-white/70" : "text-slate-600"}`}>
              {description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="cta" size="hero">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              <Button asChild variant={isDark ? "brandGlass" : "brandOutline"} size="hero">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

