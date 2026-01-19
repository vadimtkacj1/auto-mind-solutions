'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/** * 3D Scene Component */
function OptimizedScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  const globeRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024 || !canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Sphere setup - LEFT SIDE (Negative X)
    const globeGeom = new THREE.SphereGeometry(1.8, 32, 32);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.15 
    });
    const globe = new THREE.Mesh(globeGeom, globeMat);
    globe.position.x = -3.0; 
    globeRef.current = globe;
    scene.add(globe);

    // Particles
    const pointsCount = 1000;
    const posArray = new Float32Array(pointsCount * 3);
    for (let i = 0; i < pointsCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    const pointsGeom = new THREE.BufferGeometry();
    pointsGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const pointsMat = new THREE.PointsMaterial({ size: 0.02, color: 0x00E690, transparent: true, opacity: 0.4 });
    scene.add(new THREE.Points(pointsGeom, pointsMat));

    const animate = () => {
      if (globeRef.current) globeRef.current.rotation.y += 0.001;
      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }} />;
}

export default function Hero() {
  const heroContentRef = useRef<HTMLDivElement>(null);

  // פונקציית גלילה מתוקנת
  const handleScrollDown = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // אם אין ID כזה, גולל פשוט גובה של מסך אחד מטה
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScrollFade = () => {
      if (heroContentRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(0, 1 - scrollY / 500);
        const translateY = scrollY * 0.2;
        heroContentRef.current.style.opacity = opacity.toString();
        heroContentRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    window.addEventListener('scroll', handleScrollFade, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollFade);
  }, []);

  return (
    <div className="hero-container" dir="rtl">
      <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;700;800&display=swap" rel="stylesheet" />

      <section className="hero-viewport">
        <OptimizedScene />

        <div className="content-container">
          <div className="text-box" ref={heroContentRef}>
            <div className="badge">פתרונות דיגיטליים מתקדמים</div>
            <h1 className="title">
              אוטומציה, AI ו-
              <span className="accent-text"> שיווק דיגיטלי</span><br />
              לצמיחת העסק שלך
            </h1>
            <p className="subtitle">
              AUTO MIND SOLUTIONS מספקת טכנולוגיית AI מהשורה הראשונה. אנחנו מחברים בין אוטומציה חכמה לבין צמיחה עסקית מהירה.
            </p>

            <div className="button-row">
              <button className="btn-main" onClick={handleScrollDown}>GET STARTED</button>
              <button className="btn-alt">CONTACT US</button>
            </div>
          </div>
        </div>

        <div className="gradient-overlay"></div>

        {/* כפתור הגלילה המתוקן */}
        <button 
          className="scroll-hint-wrapper" 
          onClick={handleScrollDown} 
          aria-label="Scroll to services"
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span className="scroll-text">גללו למטה</span>
        </button>
      </section>

      <style jsx global>{`
        html { scroll-behavior: smooth !important; font-family: 'Assistant', sans-serif; }
      `}</style>

      <style jsx>{`
        .hero-container { background: #080a0c; color: #ffffff; position: relative; overflow: hidden; width: 100%; }
        .hero-viewport { position: relative; height: 100vh; display: flex; align-items: center; width: 100%; }
        
        .content-container { 
          width: 100%; max-width: 1400px; margin: 0 auto; padding: 0 8%; z-index: 10;
          display: flex; justify-content: flex-start; 
        }
        
        .text-box { max-width: 650px; text-align: right; }
        .title { font-size: clamp(34px, 5vw, 64px); font-weight: 800; line-height: 1.15; color: #ffffff; margin-bottom: 25px; }
        .accent-text { background: linear-gradient(90deg, #3b82f6, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .subtitle { font-size: 1.15rem; color: rgba(255, 255, 255, 0.9); line-height: 1.6; margin-bottom: 40px; }
        .badge { display: inline-block; padding: 6px 16px; background: rgba(0, 230, 144, 0.1); border: 1px solid rgba(0, 230, 144, 0.4); border-radius: 100px; color: #00E690; font-weight: 700; font-size: 13px; margin-bottom: 20px; }

        .button-row { display: flex; gap: 20px; }
        .btn-main { padding: 14px 38px; background: linear-gradient(135deg, #2563eb 0%, #0891b2 100%); border: none; border-radius: 12px; color: white; font-weight: 700; cursor: pointer; transition: 0.3s; }
        .btn-alt { padding: 14px 38px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; color: white; font-weight: 600; cursor: pointer; }

        .gradient-overlay { position: absolute; bottom: 0; left: 0; right: 0; height: 20vh; background: linear-gradient(to bottom, transparent, #080a0c); pointer-events: none; z-index: 5; }

        .scroll-hint-wrapper {
          position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          cursor: pointer; z-index: 100; background: none; border: none; padding: 10px;
          transition: 0.3s;
        }
        .scroll-text { color: rgba(255, 255, 255, 0.6); font-size: 14px; white-space: nowrap; }
        .mouse { width: 22px; height: 35px; border: 2px solid rgba(255,255,255,0.4); border-radius: 12px; position: relative; }
        .wheel { width: 2px; height: 6px; background: #00E690; position: absolute; left: 50%; transform: translateX(-50%); top: 6px; animation: scroll-anim 1.6s infinite; }
        @keyframes scroll-anim { 0% { opacity: 1; top: 6px; } 100% { opacity: 0; top: 20px; } }

        @media (max-width: 1024px) {
          .content-container { justify-content: center; }
          .text-box { text-align: center; }
          .button-row { justify-content: center; }
        }
      `}</style>
    </div>
  );
}