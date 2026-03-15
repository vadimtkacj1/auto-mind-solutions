/**
 * Static hero shell for /about — instant LCP, no JS.
 */
import Link from "next/link";

export function AboutHeroShell() {
  return (
    <section
      className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center bg-[#0a0e1a]"
      aria-label="About Hero"
    >
      <div className="relative z-10 w-full pt-24 pb-16 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 w-full text-center" dir="rtl">
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] sm:leading-[1.05]">
            אנחנו הופכים{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">
              טכנולוגיה מורכבת
            </span>{" "}
            לצמיחה עסקית
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto px-2">
            מאז 2010 אנחנו בונים אתרים ומוצרים דיגיטליים שמחברים אסטרטגיה, עיצוב וטכנולוגיה לתוצאות מדידות.
            אנחנו מגשרים על הפער בין אוטומציה, בינה מלאכותית ותוצאות עסקיות אמיתיות.
          </p>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors"
            >
              צרו קשר
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-bold rounded-full hover:border-white/60 transition-colors"
            >
              השירותים שלנו
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
