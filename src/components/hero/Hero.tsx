"use client";

import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";

// Dynamic import to prevent hydration mismatch for Three.js
const OptimizedScene = dynamic(() => import("./OptimizedScene"), {
  ssr: false,
});

const SpaceBackground = dynamic(() => import("./SpaceBackground"), {
  ssr: false,
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);

  // Parallax: each layer moves at a different speed (stars slowest, content fastest)
  const starsY  = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const globeY  = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Smooth scroll logic to the services section
  const handleScrollDown = () => {
    const target = document.getElementById("services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.mainWrapper} ref={containerRef}>
      <section className={styles.container}>

        {/* Cosmic starfield background — moves slowest (far away) */}
        <motion.div style={{ position: 'absolute', inset: 0, y: starsY }}>
          {isMounted && <SpaceBackground />}
        </motion.div>

        {/* Top Visual: Globe — medium parallax */}
        <motion.div className={styles.sceneWrapper} style={{ opacity, y: globeY }}>
           {isMounted && <OptimizedScene />}
        </motion.div>

        {/* Bottom Content: Text and Buttons — moves fastest (foreground) */}
        <motion.div className={styles.contentContainer} style={{ opacity, y: contentY }}>
          <div className={styles.textBox}>
            <h1 className={styles.title}>המעטפת המלאה שלך לנוכחות דיגיטלית</h1>
            <p className={styles.subtitle}>
              פתרון דיגיטלי מקיף לעסקים: בניית אתרים ודפי נחיתה • אוטומציות מתקדמות • חיבור מערכות • שיווק אורגני וממומן.
            </p>

            <div className={styles.buttonRow}>
              <button className={styles.btnMain} onClick={handleScrollDown}>מחירון</button>
              <button className={styles.btnAlt}>צרו קשר</button>
            </div>
          </div>
        </motion.div>

        {/* Interaction: Scroll Indicator */}
        <motion.button 
          className={styles.scrollIndicator} 
          onClick={handleScrollDown} 
          style={{ opacity }}
          aria-label="Scroll to services"
        >
          <div className={styles.mouse}><div className={styles.wheel}></div></div>
          <span className={styles.scrollText}>גללו למטה</span>
        </motion.button>
      </section>
    </div>
  );
}