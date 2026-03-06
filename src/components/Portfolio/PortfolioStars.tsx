'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  r: number;
  opacity: number;
  twinkle: number;
  phase: number;
}

export function PortfolioStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let animId: number;
    const stars: Star[] = [];

    const init = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      stars.length = 0;

      // Create stars
      for (let i = 0; i < 220; i++) {
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

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      frame++;

      ctx.clearRect(0, 0, w, h);

      // Draw stars
      stars.forEach(s => {
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

    window.addEventListener('resize', init);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
