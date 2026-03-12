"use client";

import { useEffect, useRef } from "react";
import styles from "../hero/SpaceBackground.module.css";

interface Star {
  x: number;
  y: number;
  r: number;
  opacity: number;
  twinkle: number;
  phase: number;
}

export function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let animId: number;
    const stars: Star[] = [];

    // Детерминированная генерация звёзд (как в Hero)
    const seededRandom = (seed: number) => {
      const a = Math.sin(seed * 127.1) * 43758.5453;
      return a - Math.floor(a);
    };

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      stars.length = 0;
      for (let i = 0; i < 220; i++) {
        stars.push({
          x: seededRandom(i * 7.3),
          y: seededRandom(i * 11.7),
          r: seededRandom(i * 3.1) * 1.3,
          opacity: seededRandom(i * 5.9),
          twinkle: 0.004 + seededRandom(i * 13.2) * 0.008,
          phase: seededRandom(i * 19.4) * Math.PI * 2,
        });
      }
    };

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      frame++;

      ctx.clearRect(0, 0, w, h);
      stars.forEach((s) => {
        const alpha = s.opacity * (0.3 + 0.7 * Math.sin(frame * s.twinkle + s.phase));
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    init();
    render();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#020617",
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}

