'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function OptimizedScene() {
  const canvasRef = useRef(null);
  const requestRef = useRef();
  const sceneState = useRef({ stop: false });

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // ספירה - עכשיו בצד שמאל
    const globeGeom = new THREE.SphereGeometry(1.6, 24, 24);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.25 // מעט יותר בולט
    });
    const globe = new THREE.Mesh(globeGeom, globeMat);
    globe.position.x = -2.5; // מוזז לשמאל
    scene.add(globe);

    const pointsCount = 800;
    const posArray = new Float32Array(pointsCount * 3);
    for (let i = 0; i < pointsCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }
    const pointsGeom = new THREE.BufferGeometry();
    pointsGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const pointsMat = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x00E690,
      transparent: true,
      opacity: 0.4
    });
    const points = new THREE.Points(pointsGeom, pointsMat);
    scene.add(points);

    const observer = new IntersectionObserver((entries) => {
      sceneState.current.stop = !entries[0].isIntersecting;
    }, { threshold: 0.1 });
    if (canvasRef.current) observer.observe(canvasRef.current);

    const animate = () => {
      if (!sceneState.current.stop) {
        globe.rotation.y += 0.0012;
        points.rotation.y += 0.0003;
        renderer.render(scene, camera);
      }
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
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      globeGeom.dispose();
      globeMat.dispose();
      pointsGeom.dispose();
      pointsMat.dispose();
      renderer.dispose();
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
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}

export default function Hero() {
  const heroContentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 900) return;

      const opacity = Math.max(0, 1 - scrollY / 700);
      const moveUp = scrollY * 0.35;

      if (heroContentRef.current) {
        heroContentRef.current.style.opacity = opacity;
        heroContentRef.current.style.transform = `translate3d(0, -${moveUp}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-container" dir="rtl">
      <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;700;800&display=swap" rel="stylesheet" />
      
      <section className="hero-viewport">
        <OptimizedScene />

        <div className="content-container" ref={heroContentRef}>
          <div className="text-box">
            <div className="badge">פתרונות דיגיטליים מתקדמים</div>
            <h1 className="title">
              אוטומציה, AI ו-
              <span className="accent-text">שיווק דיגיטלי</span><br />
              לצמיחת העסק שלך
            </h1>
            <p className="subtitle">
              AUTO MIND SOLUTIONS מספקת טכנולוגיית AI מהשורה הראשונה. 
              אנחנו מחברים בין אוטומציה חכמה לבין צמיחה עסקית מהירה.
            </p>

            <div className="button-row">
              <button className="btn-main">בואו נתחיל</button>
              <button className="btn-alt">למידע נוסף</button>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" onClick={scrollToNext}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>גללו למטה</span>
        </div>
      </section>

      <section id="next-section" className="next-page">
        <div className="next-content">
          <h2>הדור הבא של הטכנולוגיה</h2>
          <p>הפתרונות שלנו גדלים יחד עם השאיפות שלכם.</p>
        </div>
      </section>

      <style jsx>{`
        .hero-container {
          background: #080a0c; /* כהה יותר */
          font-family: 'Assistant', sans-serif;
          color: #ffffff;
          overflow-x: hidden;
        }

        .hero-viewport {
          position: relative;
          width: 100%;
          height: 100vh;
          /* גרדיאנט כהה ועמוק יותר */
          background: radial-gradient(circle at 15% 50%, #0f172a 0%, #080a0c 100%);
          overflow: hidden;
        }

        .content-container {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-end; /* טקסט בימין */
          padding: 0 10%;
          z-index: 2;
        }

        .text-box {
          max-width: 600px;
          text-align: right;
        }

        .badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(0, 230, 144, 0.1);
          border: 1px solid rgba(0, 230, 144, 0.4);
          border-radius: 20px;
          color: #00E690;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 25px;
        }

        .title {
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 25px;
          color: #ffffff;
        }

        .accent-text {
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.85); /* בהיר יותר לקריאות */
          line-height: 1.6;
          margin-bottom: 50px; /* מרווח מוגדל */
        }

        .button-row {
          display: flex;
          gap: 15px;
          margin-bottom: 100px; /* הוספתי Margin משמעותי מתחת לכפתורים */
        }

        .btn-main {
          padding: 16px 38px;
          background: linear-gradient(135deg, #2563eb 0%, #0891b2 100%);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        .btn-alt {
          padding: 16px 38px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 12px;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          opacity: 0.8;
        }

        .scroll-indicator span {
          font-size: 11px;
          letter-spacing: 1px;
          color: #00E690;
          font-weight: 700;
        }

        .mouse {
          width: 22px;
          height: 35px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 12px;
          position: relative;
        }

        .wheel {
          width: 2px;
          height: 6px;
          background: #00E690;
          border-radius: 2px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 6px;
          animation: wheelScroll 1.5s infinite;
        }

        .next-page {
          position: relative;
          z-index: 5;
          min-height: 100vh;
          background: #ffffff;
          color: #000;
          border-radius: 40px 40px 0 0;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 -30px 60px rgba(0,0,0,0.5);
        }

        @keyframes wheelScroll {
          0% { transform: translate(-50%, 0); opacity: 1; }
          100% { transform: translate(-50%, 12px); opacity: 0; }
        }

        @media (max-width: 1024px) {
          .content-container { justify-content: center; padding: 0 20px; }
          .text-box { text-align: center; }
          .button-row { justify-content: center; margin-bottom: 60px; }
        }

        .hero-container {
          background: #080a0c;
          font-family: 'Assistant', sans-serif;
          color: #ffffff;
          overflow-x: hidden;
        }

        .hero-viewport {
          position: relative;
          width: 100%;
          height: 100vh;
          /* Сфера и градиент теперь справа (85% вместо 15%) */
          background: radial-gradient(circle at 85% 50%, #0f172a 0%, #080a0c 100%);
          overflow: hidden;
        }

        .content-container {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start; 
          padding: 0 10%;
          z-index: 2;
        }

        .text-box {
          max-width: 600px;
          text-align: right;
        }
      `}</style>
    </div>
  );
}