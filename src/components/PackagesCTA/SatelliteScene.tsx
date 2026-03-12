"use client";

import { useEffect, useRef } from "react";

interface Satellite {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  va: number;
  size: number;
  bobPhase: number;
}

function drawSatellite(
  ctx: CanvasRenderingContext2D,
  s: Satellite,
  w: number,
  h: number,
  t: number,
) {
  const px = s.x * w;
  const py = s.y * h;
  const size = s.size;
  const bob = Math.sin(t * 0.035 + s.bobPhase) * size * 0.06;

  ctx.save();
  ctx.translate(px, py + bob);
  ctx.rotate(s.angle);

  // Satellite body
  ctx.fillStyle = "#c8d4e8";
  ctx.beginPath();
  ctx.roundRect(-size * 0.9, -size * 0.55, size * 1.8, size * 1.1, size * 0.2);
  ctx.fill();
  ctx.fillStyle = "rgba(0,0,0,0.18)";
  ctx.beginPath();
  ctx.roundRect(-size * 0.9, size * 0.1, size * 1.8, size * 0.45, [0, 0, size * 0.2, size * 0.2]);
  ctx.fill();

  // Solar panels
  [
    [-size * 3.1, size * 2.0],
    [size * 1.1, size * 2.0],
  ].forEach(([px2, pw]) => {
    ctx.fillStyle = "#1e3a6e";
    ctx.beginPath();
    ctx.roundRect(px2, -size * 0.4, pw, size * 0.8, size * 0.07);
    ctx.fill();
    ctx.strokeStyle = "rgba(60,140,255,0.5)";
    ctx.lineWidth = 0.7;
    for (let i = 1; i < 4; i++) {
      const lx = px2 + i * (pw / 4);
      ctx.beginPath();
      ctx.moveTo(lx, -size * 0.4);
      ctx.lineTo(lx, size * 0.4);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(px2, 0);
    ctx.lineTo(px2 + pw, 0);
    ctx.stroke();
  });

  ctx.fillStyle = "#8899aa";
  ctx.fillRect(-size * 1.1, -size * 0.08, size * 0.22, size * 0.16);
  ctx.fillRect(size * 0.88, -size * 0.08, size * 0.22, size * 0.16);

  // Antenna
  ctx.strokeStyle = "#aabbcc";
  ctx.lineWidth = 0.9;
  ctx.beginPath();
  ctx.arc(0, -size * 0.68, size * 0.34, Math.PI, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.54);
  ctx.lineTo(0, -size * 0.3);
  ctx.stroke();

  // Engine glow
  const g = ctx.createRadialGradient(size * 0.95, 0, 0, size * 0.95, 0, size * 0.5);
  g.addColorStop(0, "rgba(120,200,255,0.28)");
  g.addColorStop(1, "rgba(120,200,255,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.ellipse(size * 0.95, 0, size * 0.5, size * 0.24, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function spawnSatellite(): Satellite {
  const size = 28 + Math.random() * 16;
  const speed = 0.00015 + Math.random() * 0.0001;
  const y = 0.2 + Math.random() * 0.4;
  return {
    x: -0.15,
    y,
    vx: speed,
    vy: (Math.random() - 0.5) * 0.00004,
    angle: 0,
    va: (Math.random() - 0.5) * 0.00018,
    size,
    bobPhase: Math.random() * Math.PI * 2,
  };
}

export function SatelliteScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Polyfill для roundRect если нужно
    type RoundRect = (x: number, y: number, w: number, h: number, r: number | number[]) => void;
    const ctxWithRoundRect = ctx as CanvasRenderingContext2D & { roundRect?: RoundRect };

    if (!ctxWithRoundRect.roundRect) {
      ctxWithRoundRect.roundRect = function (
        this: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number,
        r: number | number[],
      ) {
        if (typeof r === "number") {
          r = [r, r, r, r];
        }
        this.beginPath();
        this.moveTo(x + r[0], y);
        this.lineTo(x + w - r[1], y);
        this.quadraticCurveTo(x + w, y, x + w, y + r[1]);
        this.lineTo(x + w, y + h - r[2]);
        this.quadraticCurveTo(x + w, y + h, x + w - r[2], y + h);
        this.lineTo(x + r[3], y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - r[3]);
        this.lineTo(x, y + r[0]);
        this.quadraticCurveTo(x, y, x + r[0], y);
        this.closePath();
      };
    }

    let frame = 0;
    let animId: number;
    let satellite: Satellite | null = spawnSatellite(); // Создаём спутник сразу
    let nextSatelliteIn = 99999;

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      frame++;

      ctx.clearRect(0, 0, w, h);

      if (!satellite) {
        nextSatelliteIn--;
        if (nextSatelliteIn <= 0) {
          satellite = spawnSatellite();
          nextSatelliteIn = 99999;
        }
      } else {
        // Медленное движение с вертикальным дрейфом
        satellite.x += satellite.vx;
        satellite.y += satellite.vy;
        satellite.angle += satellite.va;

        // Ограничение по вертикали
        if (satellite.y < 0.1) satellite.vy = Math.abs(satellite.vy);
        if (satellite.y > 0.9) satellite.vy = -Math.abs(satellite.vy);

        drawSatellite(ctx, satellite, w, h, frame);

        // Когда спутник уходит за правый край, создаём новый
        if (satellite.x > 1.25) {
          satellite = null;
          nextSatelliteIn = 150 + Math.random() * 200;
        }
      }

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
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

