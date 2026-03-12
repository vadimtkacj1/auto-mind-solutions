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

interface Floater {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  va: number;
  size: number;
  bobPhase: number;
}

function drawRider(ctx: CanvasRenderingContext2D, f: Floater, w: number, h: number, t: number) {
  const px = f.x * w,
    py = f.y * h;
  const s = f.size;
  const bob = Math.sin(t * 0.035 + f.bobPhase) * s * 0.06;

  ctx.save();
  ctx.translate(px, py + bob);
  ctx.rotate(f.angle);

  // Satellite body
  ctx.fillStyle = "#c8d4e8";
  ctx.beginPath();
  ctx.roundRect(-s * 0.9, -s * 0.55, s * 1.8, s * 1.1, s * 0.2);
  ctx.fill();
  ctx.fillStyle = "rgba(0,0,0,0.18)";
  ctx.beginPath();
  ctx.roundRect(-s * 0.9, s * 0.1, s * 1.8, s * 0.45, [0, 0, s * 0.2, s * 0.2]);
  ctx.fill();

  // Solar panels
  [
    [-s * 3.1, s * 2.0],
    [s * 1.1, s * 2.0],
  ].forEach(([px2, pw]) => {
    ctx.fillStyle = "#1e3a6e";
    ctx.beginPath();
    ctx.roundRect(px2, -s * 0.4, pw, s * 0.8, s * 0.07);
    ctx.fill();
    ctx.strokeStyle = "rgba(60,140,255,0.5)";
    ctx.lineWidth = 0.7;
    for (let i = 1; i < 4; i++) {
      const lx = px2 + i * (pw / 4);
      ctx.beginPath();
      ctx.moveTo(lx, -s * 0.4);
      ctx.lineTo(lx, s * 0.4);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(px2, 0);
    ctx.lineTo(px2 + pw, 0);
    ctx.stroke();
  });
  ctx.fillStyle = "#8899aa";
  ctx.fillRect(-s * 1.1, -s * 0.08, s * 0.22, s * 0.16);
  ctx.fillRect(s * 0.88, -s * 0.08, s * 0.22, s * 0.16);

  // Antenna
  ctx.strokeStyle = "#aabbcc";
  ctx.lineWidth = 0.9;
  ctx.beginPath();
  ctx.arc(0, -s * 0.68, s * 0.34, Math.PI, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.54);
  ctx.lineTo(0, -s * 0.3);
  ctx.stroke();

  // Engine glow
  const g = ctx.createRadialGradient(s * 0.95, 0, 0, s * 0.95, 0, s * 0.5);
  g.addColorStop(0, "rgba(120,200,255,0.28)");
  g.addColorStop(1, "rgba(120,200,255,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.ellipse(s * 0.95, 0, s * 0.5, s * 0.24, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function spawnRider(): Floater {
  const size = 18 + Math.random() * 10;
  const speed = 0.00011 + Math.random() * 0.00007;
  // y is a fraction of the STRIP height (not full screen)
  const y = 0.2 + Math.random() * 0.55;
  return {
    x: -0.18,
    y,
    vx: speed,
    vy: (Math.random() - 0.5) * 0.00003,
    angle: 0,
    va: (Math.random() - 0.5) * 0.00015,
    size,
    bobPhase: Math.random() * Math.PI * 2,
  };
}

// Height of the top strip as fraction of viewport height — above the globe
const STRIP_FRACTION = 0.18;

export default function SpaceBackground({ enabled = true, fps }: { enabled?: boolean; fps?: number }) {
  const starsCanvasRef = useRef<HTMLCanvasElement>(null);
  const floatCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!enabled) {
      // If disabled, clear any previous frame and skip RAF loop.
      const starsCanvas = starsCanvasRef.current;
      const floatCanvas = floatCanvasRef.current;
      const sCtx = starsCanvas?.getContext("2d");
      const fCtx = floatCanvas?.getContext("2d");
      if (starsCanvas && sCtx) sCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
      if (floatCanvas && fCtx) fCtx.clearRect(0, 0, floatCanvas.width, floatCanvas.height);
      return;
    }

    const starsCanvas = starsCanvasRef.current;
    const floatCanvas = floatCanvasRef.current;
    if (!starsCanvas || !floatCanvas) return;

    const sCtx = starsCanvas.getContext("2d");
    const fCtx = floatCanvas.getContext("2d");
    if (!sCtx || !fCtx) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    const effectiveFps = fps ?? (isMobile ? 15 : 24);

    let frame = 0;
    let animId: number;
    let lastDraw = 0;
    const stars: Star[] = [];
    // Exactly ONE rider, starts immediately
    let rider: Floater | null = null;
    let nextRiderIn = 0;

    const init = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mobile = w < 1024;
      starsCanvas.width = w;
      starsCanvas.height = h;
      floatCanvas.width = w;
      floatCanvas.height = Math.round(h * STRIP_FRACTION);
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
      // Cap FPS to reduce CPU usage.
      const frameBudget = 1000 / Math.max(1, effectiveFps);
      if (time - lastDraw < frameBudget) {
        animId = requestAnimationFrame(render);
        return;
      }
      lastDraw = time;

      const sw = starsCanvas.width,
        sh = starsCanvas.height;
      const fw = floatCanvas.width,
        fh = floatCanvas.height;
      frame++;

      // Stars (full screen)
      sCtx.clearRect(0, 0, sw, sh);
      stars.forEach((s) => {
        const alpha = s.opacity * (0.3 + 0.7 * Math.sin(frame * s.twinkle + s.phase));
        sCtx.fillStyle = `rgba(255,255,255,${alpha})`;
        sCtx.beginPath();
        sCtx.arc(s.x * sw, s.y * sh, s.r, 0, Math.PI * 2);
        sCtx.fill();
      });

      // Rider — only inside the top strip canvas
      fCtx.clearRect(0, 0, fw, fh);
      if (!rider) {
        nextRiderIn--;
        if (nextRiderIn <= 0) {
          rider = spawnRider();
          // Long cooldown — only 1 rider at a time, no queue
          nextRiderIn = 99999;
        }
      } else {
        rider.x += rider.vx;
        rider.y += rider.vy;
        rider.angle += rider.va;
        // Draw using strip canvas dimensions
        drawRider(fCtx, rider, fw, fh, frame);
        // Once rider exits, allow next one after a delay
        if (rider.x > 1.28) {
          rider = null;
          nextRiderIn = 180 + Math.random() * 200;
        }
      }

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
    <>
      {/* Stars — behind everything, full screen */}
      <canvas
        ref={starsCanvasRef}
        className={styles.canvas}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background: "#020617",
          display: "block",
          pointerEvents: "none",
        }}
      />
      {/* Rider — strictly top strip only, above globe */}
      <canvas
        ref={floatCanvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: `${STRIP_FRACTION * 100}%`,
          zIndex: 5,
          background: "transparent",
          display: "block",
          pointerEvents: "none",
        }}
      />
    </>
  );
}
