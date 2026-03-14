"use client";

import { useEffect, useRef } from "react";
import styles from "./SpaceBackground.module.css";

interface Star {
  x: number;
  y: number;
  r: number;
  opacity: number;
  twinkle: number;
  phase: number;
}

export default function SpaceBackground({ enabled = true, fps }: { enabled?: boolean; fps?: number }) {
  const starsCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!enabled) {
      const starsCanvas = starsCanvasRef.current;
      const sCtx = starsCanvas?.getContext("2d");
      if (starsCanvas && sCtx) sCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
      return;
    }

    const starsCanvas = starsCanvasRef.current;
    if (!starsCanvas) return;

    const sCtx = starsCanvas.getContext("2d");
    if (!sCtx) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    const effectiveFps = fps ?? (isMobile ? 15 : 24);

    let frame = 0;
    let animId: number;
    let lastDraw = 0;
    const stars: Star[] = [];

    const init = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mobile = w < 1024;
      starsCanvas.width = w;
      starsCanvas.height = h;
      stars.length = 0;
      const starCount = mobile ? 50 : 100;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random(),
          y: Math.random(),
          r: Math.random() * 1.3,
          opacity: Math.random(),
          twinkle: 0.004 + Math.random() * 0.008,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const render = (time: number) => {
      const frameBudget = 1000 / Math.max(1, effectiveFps);
      if (time - lastDraw < frameBudget) {
        animId = requestAnimationFrame(render);
        return;
      }
      lastDraw = time;

      const sw = starsCanvas.width;
      const sh = starsCanvas.height;
      frame++;

      sCtx.clearRect(0, 0, sw, sh);
      stars.forEach((s) => {
        const alpha = s.opacity * (0.3 + 0.7 * Math.sin(frame * s.twinkle + s.phase));
        sCtx.fillStyle = `rgba(255,255,255,${alpha})`;
        sCtx.beginPath();
        sCtx.arc(s.x * sw, s.y * sh, s.r, 0, Math.PI * 2);
        sCtx.fill();
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
  }, [enabled, fps]);

  return (
    <canvas
      ref={starsCanvasRef}
      className={styles.canvas}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
        background: "#020617",
        display: "block",
        pointerEvents: "none",
      }}
      aria-hidden
    />
  );
}
