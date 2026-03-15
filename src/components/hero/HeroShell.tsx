/**
 * Static hero shell for instant LCP — renders in initial HTML without JS.
 * Replaced by animated Hero when it loads.
 */
export function HeroShell() {
  const words = ["שיווק", "דיגיטלי", "שמביא", "ביצועים"];
  const accentWords = ["דיגיטלי", "ביצועים"];
  const subtitle =
    "החברה שלנו משלבת בניית ועיצוב אתרים, קידום אתרים וקמפיינים. הכל במקום אחד.";

  return (
    <section
      className="min-h-[100vh] min-h-[100svh] relative flex flex-col items-center justify-center bg-[#0a0e1a]"
      aria-label="Hero"
    >
      <div
        className="relative z-2 w-full max-w-[1600px] mx-auto px-[6%] flex flex-col justify-center min-h-full"
        style={{ direction: "rtl" }}
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] text-center text-white"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.35em",
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          {words.map((w) => (
            <span
              key={w}
              className={
                accentWords.includes(w)
                  ? "bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                  : ""
              }
            >
              {w}
            </span>
          ))}
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl text-white/80 text-center mt-4 max-w-2xl mx-auto"
          style={{ direction: "rtl" }}
        >
          {subtitle}
        </p>
        <div
          className="flex flex-wrap gap-4 justify-center mt-8"
          style={{ direction: "rtl" }}
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors"
          >
            צרו קשר
          </a>
          <a
            href="#contact"
            className="inline-block px-10 py-4 border-2 border-white/40 text-white font-bold rounded-full hover:border-white/60 transition-colors"
          >
            השאירו פרטים
          </a>
        </div>
      </div>
    </section>
  );
}
