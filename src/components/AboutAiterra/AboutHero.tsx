"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "../ui/Button/Button";

const SpaceBackground = dynamic(() => import("@/src/components/hero/SpaceBackground"), { ssr: false });

const textReveal = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

type HeroProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  hideCtas?: boolean;
};

const defaultTitle = (
  <>
    We turn complex{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
      technology
    </span>{" "}
    into business growth
  </>
);

const defaultSubtitle =
  "Since 2010, we've been building websites and digital products that connect strategy, design, and technology for measurable results. We bridge the gap between automation, AI, and real-world business outcomes.";

export function AboutHero({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  primaryCta = { label: "Get in touch", href: "/contact" },
  secondaryCta = { label: "Our services", href: "/services" },
  hideCtas = false,
}: HeroProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(sectionRef, { amount: 0.1, once: true });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Hero content moves up and fades as you scroll
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  // Background parallax - moves slower (depth effect)
  const bgY = useTransform(scrollYProgress, [0, 0.6], [0, 80]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.4]);

  return (
    <section ref={sectionRef} className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center">
      {/* Stars background - full screen */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          transform: "translateZ(0)",
        }}
        aria-hidden
      >
        {isHeroInView && <SpaceBackground enabled />}
      </motion.div>

      {/* Solid dark background overlay (subtle grid) - parallax layer */}
      <motion.div
        style={{ y: bgY, opacity: bgOpacity }}
        className="absolute inset-0 -z-10"
        aria-hidden
      >
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-multiply"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </motion.div>

      {/* Hero content with parallax */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 w-full pt-24 pb-16 md:pt-36 md:pb-28"
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-6 w-full text-center" dir="rtl">
        <motion.h1
          initial={textReveal.initial}
          animate={textReveal.animate}
          transition={{ ...textReveal.transition, delay: 0.2 }}
          className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] sm:leading-[1.05]"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={textReveal.initial}
          animate={textReveal.animate}
          transition={{ ...textReveal.transition, delay: 0.35 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto px-2"
        >
          {subtitle}
        </motion.p>

          {!hideCtas && (
            <motion.div
              initial={textReveal.initial}
              animate={textReveal.animate}
              transition={{ ...textReveal.transition, delay: 0.5 }}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            >
              <Button asChild variant="cta" size="hero">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              <Button asChild variant="brandGlass" size="hero">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
