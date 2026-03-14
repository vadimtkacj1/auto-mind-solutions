"use client";

import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";
import { smoothScrollTo } from "@/src/utils/smoothScroll";

const OptimizedScene = dynamic(() => import("./OptimizedScene"), { ssr: false });
const SpaceBackground = dynamic(() => import("./SpaceBackground"), { ssr: false });

function AnimatedTitle({ className, accentClass }: { className: string; accentClass: string }) {
  const accentWords = ["דיגיטלי", "ביצועים"];
  const words = ["שיווק", "דיגיטלי", "שמביא", "ביצועים"];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  };
  const word = {
    hidden: { opacity: 0, y: 40, rotateX: -60, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        perspective: 800,
        display: "flex",
        flexWrap: "wrap",
        gap: isMobile ? "0.2em" : "0.35em",
        justifyContent: "center",
        alignItems: "baseline",
        textAlign: "center",
        direction: "rtl",
      }}
    >
      {words.map((w) => (
        <motion.span
          key={w}
          variants={word}
          style={{ display: "inline-block", transformOrigin: "top center" }}
          className={accentWords.includes(w) ? accentClass : undefined}
        >
          {w}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function AnimatedSubtitle({ className }: { className: string }) {
  const text = "החברה שלנו משלבת בניית ועיצוב אתרים, קידום אתרים וקמפיינים. הכל במקום אחד.";

  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.85 } },
  };
  const wordVariant = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.p
      style={{
        gap: isMobile ? "0.2em" : "0.4em",
        direction: "rtl",
        textAlign: "center",
        display: "block",
      }}
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={wordVariant} style={{ display: "inline", whiteSpace: "pre-wrap" }}>
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHeroInView, setIsHeroInView] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => setIsHeroInView(entry.isIntersecting), {
      threshold: 0.05,
      rootMargin: "0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Optimized: fewer transforms, group similar animations
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.97]);

  // Group Y transforms by similar values to reduce calculations
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 200]); // For title, subtitle, buttons
  const globeY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Simplified mouse parallax with throttling for better performance
  const mouseParallaxRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (reduceMotion || isMobile || !isHeroInView) return;

    let rafId: number | null = null;

    const fn = (e: MouseEvent) => {
      if (rafId !== null) return; // Throttle to one update per frame

      rafId = requestAnimationFrame(() => {
        mouseParallaxRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseParallaxRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
        rafId = null;
      });
    };

    window.addEventListener("mousemove", fn, { passive: true } as AddEventListenerOptions);
    return () => {
      window.removeEventListener("mousemove", fn);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isMobile, isHeroInView]);

  const handleScrollDown = () => {
    smoothScrollTo("#services", 80);
  };

  const handlePrimaryCta = () => {
    smoothScrollTo("#contact", 80);
  };

  const handleSecondaryCta = () => {
    smoothScrollTo("#contact", 80);
  };

  const popIn = {
    hidden: { opacity: 0, scale: 0.86, y: 14 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number], delay: 1.6 },
    },
  };

  return (
    <div className={styles.mainWrapper} ref={containerRef} style={{ position: "relative", zIndex: 2 }}>
      <motion.section
        className={styles.container}
        style={{
          scale,
          ...(isMobile
            ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "40px",
                paddingBottom: "40px",
                gap: "24px",
              }
            : undefined),
        }}
      >
        {/* Stars background — full screen */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            transform: "translateZ(0)", // GPU acceleration
          }}
        >
          {isMounted && <SpaceBackground enabled={isHeroInView} />}
        </motion.div>

        {/* ── MOBILE LAYOUT: globe on top, text below ── */}
        {isMobile ? (
          <>
            {/* Globe — rendered ABOVE text on mobile */}
            <motion.div
              style={{
                opacity,
                y: globeY,
                position: "relative",
                zIndex: 2,
                width: "100%",
                height: "72vw",
                minHeight: "260px",
                maxHeight: "360px",
                flexShrink: 0,
                display: "block",
                overflow: "visible",
                marginTop: "-20px",
                marginBottom: "20px",
              }}
            >
              {isMounted && <OptimizedScene />}
            </motion.div>

            {/* Text + buttons — below globe */}
            <div className={styles.contentContainer} style={{ position: "relative", zIndex: 3 }}>
              <div className={styles.textBox}>
                <motion.div style={{ y: contentY }}>
                  <AnimatedTitle className={styles.title} accentClass={styles.titleAccent} />
                </motion.div>

                <motion.div style={{ y: contentY }}>
                  <AnimatedSubtitle className={styles.subtitle} />
                </motion.div>

                <motion.div className={styles.buttonRow} style={{ y: contentY }} variants={popIn} initial="hidden" animate="visible">
                  <button className={styles.btnMain} onClick={handlePrimaryCta}>
                    צרו קשר
                  </button>
                  <button className={styles.btnAlt} onClick={handleSecondaryCta}>
                    השאירו פרטים
                  </button>
                </motion.div>
              </div>
            </div>
          </>
        ) : (
          /* ── DESKTOP LAYOUT: optimized for performance ── */
          <>
            <motion.div
              className={styles.sceneWrapper}
              style={{
                opacity,
                y: globeY,
                transform: "translateZ(0)", // GPU acceleration
              }}
            >
              {isMounted && <OptimizedScene />}
            </motion.div>

            <div className={styles.contentContainer}>
              <div className={styles.textBox}>
                <motion.div
                  style={{
                    y: contentY,
                    willChange: isHeroInView ? "transform" : "auto",
                  }}
                >
                  <AnimatedTitle className={styles.title} accentClass={styles.titleAccent} />
                </motion.div>

                <motion.div
                  style={{
                    y: contentY,
                    willChange: isHeroInView ? "transform" : "auto",
                  }}
                >
                  <AnimatedSubtitle className={styles.subtitle} />
                </motion.div>

                <motion.div
                  className={styles.buttonRow}
                  style={{
                    y: contentY,
                    willChange: isHeroInView ? "transform" : "auto",
                  }}
                  variants={popIn}
                  initial="hidden"
                  animate="visible"
                >
                  <button className={styles.btnMain} onClick={handlePrimaryCta}>
                    צרו קשר
                  </button>
                  <button className={styles.btnAlt} onClick={handleSecondaryCta}>
                    השאירו פרטים
                  </button>
                </motion.div>
              </div>
            </div>
          </>
        )}

        <motion.button
          className={styles.scrollIndicator}
          onClick={handleScrollDown}
          style={{ opacity }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          aria-label="Scroll to services"
        >
          <div className={styles.mouse}>
            <div className={styles.wheel} />
          </div>
          <span className={styles.scrollText}>גללו למטה</span>
        </motion.button>
      </motion.section>
    </div>
  );
}
