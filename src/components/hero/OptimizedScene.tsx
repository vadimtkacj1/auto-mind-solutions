'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function OptimizedScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 18; 

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: window.innerWidth > 1024, // Антиалиасинг только на десктопе
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Ограничиваем pixelRatio

    // --- Фоновые звезды ---
    // Уменьшили количество частиц для быстрой загрузки
    const particlesCount = window.innerWidth < 768 ? 500 : 1500; 
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 150; 
    }
    const particlesGeom = new THREE.BufferGeometry();
    particlesGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particlesMat = new THREE.PointsMaterial({
      color: 0x00E690, 
      size: 0.12,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true
    });
    const particles = new THREE.Points(particlesGeom, particlesMat);
    particlesRef.current = particles;
    scene.add(particles);

    // --- Сфера (Глобус) ---
    const globeGeom = new THREE.SphereGeometry(2, 32, 32);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.12 // Сделал чуть прозрачнее, чтобы не отвлекала
    });
    const globe = new THREE.Mesh(globeGeom, globeMat);
    globeRef.current = globe;
    scene.add(globe);

    const updateLayout = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;

      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      if (globeRef.current) {
      if (window.innerWidth < 1024) {
        // מוביל (נשאר ללא שינוי)
        globeRef.current.position.set(0, 1.5, 0); 
        globeRef.current.scale.set(2.0, 2.0, 2.0); 
      } else {
        // דסקטופ - הערכים החדשים להגדלה:
        
        // מיקום: -6 יביא אותו יותר לכיוון המרכז, -10 ישאיר אותו יותר בשוליים
        globeRef.current.position.set(-8, 0, 0); 
        
        // קנה מידה: הגדלנו מ-1.2 ל-4.5 (או כל מספר שתרגיש לנכון)
        globeRef.current.scale.set(4.5, 4.5, 4.5); 
      }
      }
    };

    updateLayout();

    const animate = () => {
      if (globeRef.current) globeRef.current.rotation.y += 0.0015;
      if (particlesRef.current) {
        particlesRef.current.rotation.y -= 0.0002;
        particlesRef.current.rotation.x += 0.0001;
      }

      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    window.addEventListener('resize', updateLayout);
    
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', updateLayout);
      renderer.dispose();
      globeGeom.dispose();
      globeMat.dispose();
      particlesGeom.dispose();
      particlesMat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ 
        width: '100%', 
        height: '100%', 
        display: 'block', 
        pointerEvents: 'none', 
        overflow: 'visible' 
      }}
    />
  );
}