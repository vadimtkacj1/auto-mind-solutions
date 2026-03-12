"use client";

import { useEffect, useRef } from "react";

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
  const y = 0.15 + Math.random() * 0.35;
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

export default function SatelliteOnly({ enabled = true }: { enabled?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!enabled) {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    const fps = isMobile ? 15 : 24;

    let frame = 0;
    let animId: number;
    let lastDraw = 0;
    let rider: Floater | null = null;
    let nextRiderIn = 0;

    const init = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    const render = (time: number) => {
      const frameBudget = 1000 / Math.max(1, fps);
      if (time - lastDraw < frameBudget) {
        animId = requestAnimationFrame(render);
        return;
      }
      lastDraw = time;

      const w = canvas.width;
      const h = canvas.height;
      frame++;

      ctx.clearRect(0, 0, w, h);

      if (!rider) {
        nextRiderIn--;
        if (nextRiderIn <= 0) {
          rider = spawnRider();
          nextRiderIn = 99999;
        }
      } else {
        rider.x += rider.vx;
        rider.y += rider.vy;
        rider.angle += rider.va;
        drawRider(ctx, rider, w, h, frame);
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
  }, [enabled]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "transparent",
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}
