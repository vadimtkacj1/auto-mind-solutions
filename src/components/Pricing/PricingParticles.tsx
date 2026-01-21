'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function PricingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false, // аопптимизация: ллא אנטי אליאסינג לביצועים טובים
      powerPreference: 'high-performance'
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // הגבלת pixelRatio
    camera.position.z = 5;

    // אופטימיזציה: הפחתת מספר הנקודות ל-800 לביצועים טובים יותר
    const pointsCount = 800;
    const posArray = new Float32Array(pointsCount * 3);

    // פיזור רחב יותר בחלל
    for (let i = 0; i < pointsCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 18;
    }

    const pointsGeom = new THREE.BufferGeometry();
    pointsGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const pointsMat = new THREE.PointsMaterial({
      size: 0.02, // גודל נקודה מעט גדול יותר לנראות טובה
      color: 0x10b981,
      transparent: true,
      opacity: 0.25, // שקיפות עדינה כדי לא להפריע לטקסט
      blending: THREE.AdditiveBlending // אפקט "זוהר" בחיבור בין נקודות
    });

    const points = new THREE.Points(pointsGeom, pointsMat);
    scene.add(points);

    const animate = () => {
      points.rotation.y += 0.0002;
      points.rotation.x += 0.0001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    const animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      pointsGeom.dispose();
      pointsMat.dispose();
      scene.clear();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
}
