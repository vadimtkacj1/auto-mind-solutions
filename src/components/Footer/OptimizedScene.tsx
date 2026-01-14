'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SceneProps {
  showSphere: boolean;
  pointsAmount?: 'low' | 'medium' | 'high';
}

export default function OptimizedScene({ showSphere = true }: SceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  const sceneState = useRef({ stop: false });

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- SPHERE (Only if showSphere is true) ---
    let globe: THREE.Mesh | null = null;
    if (showSphere) {
      const globeGeom = new THREE.SphereGeometry(1.6, 24, 24);
      const globeMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.25
      });
      globe = new THREE.Mesh(globeGeom, globeMat);
      globe.position.x = -2.5; 
      scene.add(globe);
    }

    // --- POINTS (Particles) ---
    const pointsCount = 1000; // Increased slightly for better look in Footer
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

    // Stop animation when out of view
    const observer = new IntersectionObserver((entries) => {
      sceneState.current.stop = !entries[0].isIntersecting;
    }, { threshold: 0.1 });
    if (canvasRef.current) observer.observe(canvasRef.current);

    const animate = () => {
      if (!sceneState.current.stop) {
        if (globe) globe.rotation.y += 0.0012;
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
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      // Cleanup
      if (globe) {
        globe.geometry.dispose();
        (globe.material as THREE.Material).dispose();
      }
      pointsGeom.dispose();
      pointsMat.dispose();
      renderer.dispose();
    };
  }, [showSphere]);

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