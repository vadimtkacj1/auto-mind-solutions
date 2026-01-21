'use client';

import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

// Динамическая загрузка 3D сцены только когда компонент виден
const OptimizedScene = dynamic(() => import('./OptimizedScene'), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Track scroll progress for parallax effects
   */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transformations
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  /**
   * Smoothly scroll the viewport to the Services section
   */
  const handleScrollDown = (e?: React.MouseEvent<HTMLElement>) => {
    if (e) e.preventDefault();
    const target = document.getElementById('services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.mainWrapper} ref={containerRef}>
      <section className={styles.container}>
        <motion.div style={{ opacity: opacity }}>
          <OptimizedScene />
        </motion.div>

        <motion.div
          className={styles.contentContainer}
          style={{ opacity, scale, y }}
        >
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

        {/* Scroll Mouse Icon */}
        <motion.button
          className={styles.scrollIndicator}
          onClick={handleScrollDown}
          aria-label="Scroll to services"
          style={{ opacity }}
        >
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
          <span className={styles.scrollText}>גללו למטה</span>
        </motion.button>
      </section>
    </div>
  );
}