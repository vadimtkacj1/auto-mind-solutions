'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * 3D Background Component with a rotating globe and drifting particles
 */
export default function OptimizedScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    // Отключить 3D на маленьких экранах и низкопроизводительных устройствах
    if (typeof window === 'undefined' || !canvasRef.current) return;

    // Полное отключение на мобильных устройствах для производительности
    const isMobile = window.innerWidth < 1024;
    if (isMobile) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false, // Оптимизация: отключение сглаживания
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Ограничение pixelRatio

    // Globe Setup
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

    // Оптимизация: уменьшение количества частиц с 1200 до 600
    const pointsCount = 600;
    const posArray = new Float32Array(pointsCount * 3);
    for (let i = 0; i < pointsCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    const pointsGeom = new THREE.BufferGeometry();
    pointsGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const pointsMat = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x00E690,
      transparent: true,
      opacity: 0.4
    });

    const particles = new THREE.Points(pointsGeom, pointsMat);
    particlesRef.current = particles;
    scene.add(particles);

    // Main Animation Loop
    const animate = () => {
      // Медленное вращение глобуса
      if (globeRef.current) {
        globeRef.current.rotation.y += 0.001;
      }

      // Плавное движение частиц
      if (particlesRef.current) {
        particlesRef.current.rotation.y -= 0.0005;
        particlesRef.current.rotation.x += 0.0002;
      }

      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Memory cleanup on unmount
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      globeGeom.dispose();
      globeMat.dispose();
      pointsGeom.dispose();
      pointsMat.dispose();
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
        pointerEvents: 'none'
      }}
    />
  );
}
