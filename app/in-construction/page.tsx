"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";

const TARGET_URL = "https://aiterra.agency";

interface Star {
  x: number;
  y: number;
  r: number;
  opacity: number;
  twinkle: number;
  phase: number;
}

function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 1024;
    const fps = isMobile ? 15 : 24;

    let frame = 0;
    let animId: number;
    let lastDraw = 0;
    const stars: Star[] = [];

    const init = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      stars.length = 0;
      const starCount = isMobile ? 100 : 200;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random(),
          y: Math.random(),
          r: Math.random() * 1.8,
          opacity: 0.3 + Math.random() * 0.7,
          twinkle: 0.003 + Math.random() * 0.006,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const render = (time: number) => {
      const frameBudget = 1000 / Math.max(1, fps);
      if (time - lastDraw < frameBudget) {
        animId = requestAnimationFrame(render);
        return;
      }
      lastDraw = time;

      const sw = canvas.width;
      const sh = canvas.height;
      frame++;

      ctx.clearRect(0, 0, sw, sh);
      stars.forEach((s) => {
        const alpha = s.opacity * (0.4 + 0.6 * Math.sin(frame * s.twinkle + s.phase));
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x * sw, s.y * sh, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    init();
    animId = requestAnimationFrame(render);
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.starsCanvas} aria-hidden />;
}

export default function InConstructionPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main className={styles.page} dir="rtl">
      <StarsBackground />
      
      {/* Space elements */}
      <div className={styles.spaceScene}>
        {/* Main planet */}
        <div className={styles.planet}>
          <div className={styles.planetGlow} />
          <div className={styles.planetSphere}>
            <div className={styles.planetSurface} />
            <div className={styles.planetShadow} />
            <div className={styles.planetAtmosphere} />
          </div>
          <div className={styles.planetRing} />
        </div>

        {/* Orbiting moons */}
        <div className={styles.orbit1}>
          <div className={styles.moon1} />
        </div>
        <div className={styles.orbit2}>
          <div className={styles.moon2} />
        </div>

        {/* Shooting stars / comets */}
        <div className={styles.comet} style={{ "--delay": "0s", "--top": "15%", "--left": "85%" } as React.CSSProperties} />
        <div className={styles.comet} style={{ "--delay": "-4s", "--top": "40%", "--left": "92%" } as React.CSSProperties} />
        <div className={styles.comet} style={{ "--delay": "-8s", "--top": "65%", "--left": "78%" } as React.CSSProperties} />

        {/* Floating asteroids */}
        <div className={styles.asteroid} style={{ "--delay": "0s", "--x": "8%", "--y": "25%" } as React.CSSProperties} />
        <div className={styles.asteroid} style={{ "--delay": "-3s", "--x": "88%", "--y": "20%" } as React.CSSProperties} />
        <div className={styles.asteroid} style={{ "--delay": "-6s", "--x": "12%", "--y": "75%" } as React.CSSProperties} />
        <div className={styles.asteroid} style={{ "--delay": "-9s", "--x": "85%", "--y": "70%" } as React.CSSProperties} />
      </div>

      <div className={styles.nebula} />
      <div className={styles.noise} />

      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
      >
        <motion.h1 variants={itemVariants} className={styles.title}>
          בונים פה משהו מטורף!
        </motion.h1>

        <motion.p variants={itemVariants} className={styles.subtitle}>
          הגעתם אלינו דרך כרטיס הביקור? איזה כיף! אנחנו ממש עכשיו משדרגים את עצמנו עם אתר חדש שיראה לכם בדיוק מה אנחנו יודעים לעשות. בקרוב מאוד נהיה באוויר.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link href={TARGET_URL} className={styles.btn}>
            לאתר הנוכחי
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.footer}>
          <span>© 2026 Aiterra Agency</span>
        </motion.div>
      </motion.div>
    </main>
  );
}
