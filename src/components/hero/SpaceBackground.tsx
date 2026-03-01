'use client';

import { useEffect, useRef } from 'react';
import styles from './SpaceBackground.module.css';

// --- Types ---
interface Star {
  x: number; y: number; r: number;
  opacity: number; twinkle: number; phase: number;
}

interface Debris {
  x: number; y: number; 
  vx: number; vy: number; // Movement speed (drift)
  size: number;
  rotation: number; 
  rotSpeed: number; // Rotation speed
  seed: number;
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let animId: number;
    const stars: Star[] = [];
    const debrisList: Debris[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // 1. Setup Stars
      stars.length = 0;
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random(),
          y: Math.random(),
          r: Math.random() * 1.3,
          opacity: Math.random(),
          twinkle: 0.004 + Math.random() * 0.008,
          phase: Math.random() * Math.PI * 2
        });
      }

      // 2. Setup Slow Grey Asteroids
      debrisList.length = 0;
      for (let i = 0; i < 15; i++) {
        debrisList.push({
          x: Math.random(),
          y: Math.random(),
          // Ultra-slow movement
          vx: (Math.random() - 0.5) * 0.0002, 
          vy: (Math.random() - 0.5) * 0.0002,
          size: 7 + Math.random() * 10,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.004,
          seed: Math.random()
        });
      }
    };

    const drawAsteroid = (d: Debris, w: number, h: number) => {
      ctx.save();
      ctx.translate(d.x * w, d.y * h);
      ctx.rotate(d.rotation);
      
      // Low-poly geometry
      ctx.beginPath();
      const sides = 6 + Math.floor(d.seed * 3);
      for (let i = 0; i < sides; i++) {
        const angle = (i / sides) * Math.PI * 2;
        const r = d.size * (0.8 + Math.sin(i * d.seed * 10) * 0.2);
        const px = Math.cos(angle) * r;
        const py = Math.sin(angle) * r;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();

      // Shaded grey style
      const grad = ctx.createLinearGradient(-d.size, -d.size, d.size, d.size);
      grad.addColorStop(0, '#d1d5db'); // slate-300
      grad.addColorStop(1, '#4b5563'); // slate-600
      
      ctx.fillStyle = grad;
      ctx.fill();
      
      // Subtle edge light
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      ctx.restore();
    };

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      frame++;

      // Draw Stars
      stars.forEach(s => {
        const alpha = s.opacity * (0.3 + 0.7 * Math.sin(frame * s.twinkle + s.phase));
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw and Update Asteroids
      debrisList.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;
        d.rotation += d.rotSpeed;

        // Wrap around edges
        if (d.x < -0.1) d.x = 1.1;
        if (d.x > 1.1) d.x = -0.1;
        if (d.y < -0.1) d.y = 1.1;
        if (d.y > 1.1) d.y = -0.1;

        drawAsteroid(d, w, h);
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
      className={styles.canvas} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1, 
        background: '#020617', // Deep space dark blue
        display: 'block'
      }} 
    />
  );
}