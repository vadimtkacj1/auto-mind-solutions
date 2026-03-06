"use client";

import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import styles from "./Hero.module.css";
import { smoothScrollTo } from "@/src/utils/smoothScroll";

const OptimizedScene  = dynamic(() => import("./OptimizedScene"),  { ssr: false });
const SpaceBackground = dynamic(() => import("./SpaceBackground"), { ssr: false });

function AnimatedTitle({ className, accentClass }: { className: string; accentClass: string }) {
  const accentWords = ["הנדסה", "דיגיטלית"];
  const words = ["הנדסה", "דיגיטלית", "מונעת", "ביצועים"];

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
    hidden:  { opacity: 0, y: 40, rotateX: -60, filter: "blur(8px)" },
    visible: {
      opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)",
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
        gap: isMobile ? "0.15em" : "0.28em", 
        justifyContent: isMobile ? "center" : "flex-end",
        alignItems: "baseline",
        textAlign: isMobile ? "center" : "right",
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
  const text =
    "Aiterra משלבת פיתוח מותאם אישית עם Growth Marketing ו-SEO. אנחנו לא רק בונים אתרים — אנחנו בונים מנועי הכנסות.";

  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.85 } },
  };
  const wordVariant = {
    hidden:  { opacity: 0, y: 8 },
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
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        direction: "rtl",
        textAlign: isMobile ? "center" : "left",
        display: "block",
      }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={wordVariant}
          style={{ display: "inline", whiteSpace: "pre-wrap" }}
        >
          {w}{i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const opacity   = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const starsY    = useTransform(scrollYProgress, [0, 1], ["0px",  "-80px"]);
  const globeY    = useTransform(scrollYProgress, [0, 1], ["0px", "-170px"]);
  const titleY    = useTransform(scrollYProgress, [0, 1], ["0px", "-270px"]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], ["0px", "-240px"]);

  const rawMX = useMotionValue(0);
  const rawMY = useMotionValue(0);
  const mx = useSpring(rawMX, { stiffness: 55, damping: 18 });
  const my = useSpring(rawMY, { stiffness: 55, damping: 18 });

  const titleMX = useTransform(mx, [-1,1], ["-20px","20px"]);
  const titleMY = useTransform(my, [-1,1], ["-12px","12px"]);
  const subMX   = useTransform(mx, [-1,1], ["-12px","12px"]);
  const subMY   = useTransform(my, [-1,1], ["-7px", "7px"]);
  const btnMX   = useTransform(mx, [-1,1], ["-7px", "7px"]);
  const btnMY   = useTransform(my, [-1,1], ["-4px", "4px"]);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      rawMX.set((e.clientX / window.innerWidth  - 0.5) * 2);
      rawMY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, [rawMX, rawMY]);

  const handleScrollDown = () => {
    smoothScrollTo("#services", 80);
  };

  const handlePrimaryCta = () => {
    smoothScrollTo("#contact", 80);
  };

  const handleSecondaryCta = () => {
    router.push("/portfolio");
  };

  const popIn = {
    hidden:  { opacity: 0, scale: 0.86, y: 14 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.65, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number], delay: 1.6 } },
  };

  return (
    <div className={styles.mainWrapper} ref={containerRef} style={{ position: "relative", zIndex: 10 }}>
      <section className={styles.container} style={isMobile ? { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingTop: "60px" } : undefined}>

        {/* Stars background — full screen */}
        <motion.div style={{ position: "absolute", inset: 0, y: starsY }}>
          {isMounted && <SpaceBackground />}
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
                marginBottom: "-30px",
              }}
            >
              {isMounted && <OptimizedScene />}
            </motion.div>

            {/* Text + buttons — below globe */}
            <div
              className={styles.contentContainer}
              style={{ position: "relative", zIndex: 3 }}
            >
              <div className={styles.textBox}>
                <motion.div style={{ y: titleY }}>
                  <AnimatedTitle className={styles.title} accentClass={styles.titleAccent} />
                </motion.div>

                <motion.div style={{ y: subtitleY }}>
                  <AnimatedSubtitle className={styles.subtitle} />
                </motion.div>

                <motion.div
                  className={styles.buttonRow}
                  variants={popIn}
                  initial="hidden"
                  animate="visible"
                >
                  <button className={styles.btnMain} onClick={handlePrimaryCta}>קביעת שיחת אסטרטגיה</button>
                  <button className={styles.btnAlt} onClick={handleSecondaryCta}>צפו בפורטפוליו</button>
                </motion.div>
              </div>
            </div>
          </>
        ) : (
          /* ── DESKTOP LAYOUT: original behaviour ── */
          <>
            <motion.div className={styles.sceneWrapper} style={{ opacity, y: globeY }}>
              {isMounted && <OptimizedScene />}
            </motion.div>

            <div className={styles.contentContainer}>
              <div className={styles.textBox}>

                <motion.div style={{ y: titleY, x: titleMX, translateY: titleMY }}>
                  <AnimatedTitle className={styles.title} accentClass={styles.titleAccent} />
                </motion.div>

                <motion.div style={{ y: subtitleY, x: subMX, translateY: subMY }}>
                  <AnimatedSubtitle className={styles.subtitle} />
                </motion.div>

                <motion.div
                  className={styles.buttonRow}
                  style={{ x: btnMX, translateY: btnMY }}
                  variants={popIn}
                  initial="hidden"
                  animate="visible"
                >
                  <button className={styles.btnMain} onClick={handlePrimaryCta}>קביעת שיחת אסטרטגיה</button>
                  <button className={styles.btnAlt} onClick={handleSecondaryCta}>צפו בפורטפוליו</button>
                </motion.div>

              </div>
            </div>
          </>
        )}

        <motion.button
          className={styles.scrollIndicator}
          onClick={handleScrollDown}
          style={{
            opacity,
            ...(isMobile && {
              position: "fixed",
              bottom: "24px",
              zIndex: 20,
            }),
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          aria-label="Scroll to services"
        >
          <div className={styles.mouse}><div className={styles.wheel} /></div>
          <span className={styles.scrollText}>גללו למטה</span>
        </motion.button>

      </section>
    </div>
  );
}