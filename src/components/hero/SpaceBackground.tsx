'use client';

import { useEffect, useRef } from 'react';
import styles from './SpaceBackground.module.css';

interface Star { x:number; y:number; r:number; opacity:number; twinkle:number; phase:number; }

interface Floater {
  x: number; y: number;
  vx: number; vy: number;
  angle: number; va: number;
  size: number;
  bobPhase: number;
}

function drawRider(ctx: CanvasRenderingContext2D, f: Floater, w: number, h: number, t: number) {
  const px = f.x * w, py = f.y * h;
  const s = f.size;
  const as = s * 0.9;
  const bob = Math.sin(t * 0.035 + f.bobPhase) * s * 0.06;

  ctx.save();
  ctx.translate(px, py + bob);
  ctx.rotate(f.angle);

  // Satellite body
  ctx.fillStyle = '#c8d4e8';
  ctx.beginPath(); ctx.roundRect(-s*0.9,-s*0.55,s*1.8,s*1.1,s*0.2); ctx.fill();
  ctx.fillStyle = 'rgba(0,0,0,0.18)';
  ctx.beginPath(); ctx.roundRect(-s*0.9,s*0.1,s*1.8,s*0.45,[0,0,s*0.2,s*0.2]); ctx.fill();

  // Solar panels
  [[-s*3.1, s*2.0],[s*1.1, s*2.0]].forEach(([px2, pw]) => {
    ctx.fillStyle='#1e3a6e'; ctx.beginPath(); ctx.roundRect(px2,-s*0.4,pw,s*0.8,s*0.07); ctx.fill();
    ctx.strokeStyle='rgba(60,140,255,0.5)'; ctx.lineWidth=0.7;
    for(let i=1;i<4;i++){ const lx=px2+i*(pw/4); ctx.beginPath(); ctx.moveTo(lx,-s*0.4); ctx.lineTo(lx,s*0.4); ctx.stroke(); }
    ctx.beginPath(); ctx.moveTo(px2,0); ctx.lineTo(px2+pw,0); ctx.stroke();
  });
  ctx.fillStyle='#8899aa';
  ctx.fillRect(-s*1.1,-s*0.08,s*0.22,s*0.16);
  ctx.fillRect(s*0.88,-s*0.08,s*0.22,s*0.16);

  // Antenna
  ctx.strokeStyle='#aabbcc'; ctx.lineWidth=0.9;
  ctx.beginPath(); ctx.arc(0,-s*0.68,s*0.34,Math.PI,0); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0,-s*0.54); ctx.lineTo(0,-s*0.3); ctx.stroke();

  // Engine glow
  const g=ctx.createRadialGradient(s*0.95,0,0,s*0.95,0,s*0.5);
  g.addColorStop(0,'rgba(120,200,255,0.28)'); g.addColorStop(1,'rgba(120,200,255,0)');
  ctx.fillStyle=g; ctx.beginPath(); ctx.ellipse(s*0.95,0,s*0.5,s*0.24,0,0,Math.PI*2); ctx.fill();

  // Astronaut on top
  ctx.save();
  ctx.translate(s * 0.05, -s * 0.55);

  // Legs
  ctx.strokeStyle='#dde8f5'; ctx.lineWidth=as*0.28; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(-as*0.2,as*0.5); ctx.quadraticCurveTo(-as*0.55,as*0.85,-as*0.5,as*1.3); ctx.stroke();
  ctx.fillStyle='#9aabb5'; ctx.beginPath(); ctx.ellipse(-as*0.5,as*1.32,as*0.22,as*0.13,-0.3,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.moveTo(as*0.2,as*0.5); ctx.quadraticCurveTo(as*0.55,as*0.85,as*0.5,as*1.3); ctx.stroke();
  ctx.fillStyle='#9aabb5'; ctx.beginPath(); ctx.ellipse(as*0.5,as*1.32,as*0.22,as*0.13,0.3,0,Math.PI*2); ctx.fill();

  // Suit body
  ctx.fillStyle='#dde8f5'; ctx.beginPath(); ctx.roundRect(-as*0.5,-as*0.5,as*1.0,as*1.1,as*0.28); ctx.fill();
  ctx.fillStyle='rgba(0,0,0,0.1)'; ctx.beginPath(); ctx.roundRect(-as*0.5,as*0.3,as*1.0,as*0.35,[0,0,as*0.28,as*0.28]); ctx.fill();
  ctx.fillStyle='rgba(255,255,255,0.18)'; ctx.beginPath(); ctx.roundRect(-as*0.3,-as*0.44,as*0.28,as*0.45,as*0.12); ctx.fill();

  // Backpack
  ctx.fillStyle='#b0bec5'; ctx.beginPath(); ctx.roundRect(as*0.38,-as*0.32,as*0.26,as*0.62,as*0.1); ctx.fill();

  // Left arm
  ctx.strokeStyle='#dde8f5'; ctx.lineWidth=as*0.26;
  ctx.beginPath(); ctx.moveTo(-as*0.48,-as*0.15); ctx.quadraticCurveTo(-as*0.85,-as*0.45,-as*0.55,-as*0.72); ctx.stroke();
  ctx.fillStyle='#c8d4e4'; ctx.beginPath(); ctx.arc(-as*0.55,-as*0.72,as*0.17,0,Math.PI*2); ctx.fill();

  // Right arm waving
  ctx.strokeStyle='#dde8f5'; ctx.lineWidth=as*0.26;
  ctx.beginPath(); ctx.moveTo(as*0.48,-as*0.15); ctx.quadraticCurveTo(as*1.0,-as*0.55,as*0.9,-as*0.95); ctx.stroke();
  ctx.fillStyle='#c8d4e4'; ctx.beginPath(); ctx.arc(as*0.9,-as*0.95,as*0.17,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#aabbcc'; ctx.lineWidth=1.2;
  for(let i=0;i<4;i++){
    const angle=-Math.PI*0.8+i*0.28;
    ctx.beginPath(); ctx.moveTo(as*0.9,-as*0.95);
    ctx.lineTo(as*0.9+Math.cos(angle)*as*0.22,-as*0.95+Math.sin(angle)*as*0.22); ctx.stroke();
  }

  // Helmet
  ctx.fillStyle='#e8eff8'; ctx.beginPath(); ctx.arc(0,-as*0.72,as*0.44,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='rgba(255,200,60,0.38)'; ctx.beginPath(); ctx.ellipse(0,-as*0.72,as*0.3,as*0.22,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='rgba(255,180,40,0.55)'; ctx.lineWidth=1;
  ctx.beginPath(); ctx.ellipse(0,-as*0.72,as*0.3,as*0.22,0,0,Math.PI*2); ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,0.22)';
  ctx.beginPath(); ctx.ellipse(-as*0.1,-as*0.8,as*0.1,as*0.06,-0.4,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#b0bec5'; ctx.lineWidth=2;
  ctx.beginPath(); ctx.arc(0,-as*0.72,as*0.44,0,Math.PI*2); ctx.stroke();

  // Chest patch
  ctx.fillStyle='rgba(30,80,180,0.5)'; ctx.beginPath(); ctx.roundRect(-as*0.22,-as*0.1,as*0.44,as*0.3,as*0.07); ctx.fill();
  ctx.fillStyle='rgba(255,255,255,0.75)'; ctx.font=`bold ${as*0.13}px monospace`; ctx.textAlign='center';
  ctx.fillText('NASA',0,0);

  ctx.restore();
  ctx.restore();
}

function spawnRider(stripH: number): Floater {
  const size = 18 + Math.random() * 10;
  const speed = 0.00011 + Math.random() * 0.00007;
  // y is a fraction of the STRIP height (not full screen)
  const y = 0.2 + Math.random() * 0.55;
  return {
    x: -0.18, y,
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

export default function SpaceBackground() {
  const starsCanvasRef = useRef<HTMLCanvasElement>(null);
  const floatCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const starsCanvas = starsCanvasRef.current;
    const floatCanvas = floatCanvasRef.current;
    if (!starsCanvas || !floatCanvas) return;

    const sCtx = starsCanvas.getContext('2d');
    const fCtx = floatCanvas.getContext('2d');
    if (!sCtx || !fCtx) return;

    let frame = 0, animId: number;
    const stars: Star[] = [];
    // Exactly ONE rider, starts immediately
    let rider: Floater | null = null;
    let nextRiderIn = 0;

    const init = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      starsCanvas.width = w;
      starsCanvas.height = h;
      // Float canvas covers only the top strip — so rider can NEVER appear below
      floatCanvas.width = w;
      floatCanvas.height = Math.round(h * STRIP_FRACTION);
      stars.length = 0;
      for (let i = 0; i < 220; i++) {
        stars.push({
          x: Math.random(), y: Math.random(),
          r: Math.random() * 1.3,
          opacity: Math.random(),
          twinkle: 0.004 + Math.random() * 0.008,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const render = () => {
      const sw = starsCanvas.width, sh = starsCanvas.height;
      const fw = floatCanvas.width, fh = floatCanvas.height;
      frame++;

      // Stars (full screen)
      sCtx.clearRect(0, 0, sw, sh);
      stars.forEach(s => {
        const alpha = s.opacity * (0.3 + 0.7 * Math.sin(frame * s.twinkle + s.phase));
        sCtx.fillStyle = `rgba(255,255,255,${alpha})`;
        sCtx.beginPath(); sCtx.arc(s.x * sw, s.y * sh, s.r, 0, Math.PI * 2); sCtx.fill();
      });

      // Rider — only inside the top strip canvas
      fCtx.clearRect(0, 0, fw, fh);
      if (!rider) {
        nextRiderIn--;
        if (nextRiderIn <= 0) {
          rider = spawnRider(fh);
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

    init(); render();
    window.addEventListener('resize', init);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', init); };
  }, []);

  return (
    <>
      {/* Stars — behind everything, full screen */}
      <canvas
        ref={starsCanvasRef}
        className={styles.canvas}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '100%', height: '100%',
          zIndex: -1,
          background: '#020617',
          display: 'block',
          pointerEvents: 'none',
        }}
      />
      {/* Rider — strictly top strip only, above globe */}
      <canvas
        ref={floatCanvasRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%',
          height: `${STRIP_FRACTION * 100}%`,
          zIndex: 5,
          background: 'transparent',
          display: 'block',
          pointerEvents: 'none',
        }}
      />
    </>
  );
}