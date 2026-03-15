"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button/Button";

const StarsBackground = dynamic(
  () => import("./StarsBackground").then((m) => ({ default: m.StarsBackground })),
  { ssr: false }
);

const SatelliteScene = dynamic(
  () => import("./SatelliteScene").then((m) => ({ default: m.SatelliteScene })),
  { ssr: false }
);

export function PackagesCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [effectsEnabled, setEffectsEnabled] = useState(false);

  const canRunEffects = useMemo(() => {
    if (typeof window === "undefined") return false;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const connection = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const saveData = connection?.saveData ?? false;
    const effectiveType = connection?.effectiveType ?? "";
    const slowConnection = effectiveType === "slow-2g" || effectiveType === "2g";
    return !(reduceMotion || saveData || slowConnection);
  }, []);

  useEffect(() => {
    if (!canRunEffects) return;
    const el = sectionRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setEffectsEnabled(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setEffectsEnabled(entry.isIntersecting),
      { threshold: 0.05, rootMargin: "250px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [canRunEffects]);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax эффекты для звёзд, спутника и контента
  const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const satelliteY = useTransform(scrollYProgress, [0, 1], ["-15%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={sectionRef}
      id="packages"
      dir="rtl"
      className="relative overflow-hidden bg-[#050a15] min-h-[60vh]"
    >
      {/* ── Stars background с parallax ── */}
      {canRunEffects && effectsEnabled && (
        <motion.div className="absolute inset-0 z-0" style={{ y: starsY }}>
          <StarsBackground />
        </motion.div>
      )}

      {/* ── Спутник с parallax ── */}
      {canRunEffects && effectsEnabled && (
        <motion.div className="absolute inset-0 z-[1]" style={{ y: satelliteY }}>
          <SatelliteScene />
        </motion.div>
      )}

      {/* ── Subtle blue glow at centre ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(0,112,255,0.14), transparent 70%)",
        }}
      />

      {/* ── Content с parallax ── */}
      <motion.div
        className="relative z-[3] flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 md:py-32 text-center"
        style={{ y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px 80px 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
            מוכנים להתחיל את{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--color-primary-light), var(--color-accent))",
              }}
            >
              המסע הדיגיטלי?
            </span>
          </h2>

          <p className="mt-6 text-white/60 text-lg md:text-xl leading-relaxed font-medium max-w-xl mx-auto">
            בואו נדבר על הפרויקט שלכם ונמצא את הפתרון המושלם עבורכם
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px 80px 0px" }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <Button asChild variant="cta" size="hero">
            <Link href="/contact" className="flex items-center gap-2">
              <span>בואו נתחיל</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
