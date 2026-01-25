'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * 3D Background Component: Rotating globe and particles.
 * Centered on mobile/tablet, positioned left on desktop.
 */
export default function OptimizedScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    // Basic checks to ensure environment is ready
    if (typeof window === 'undefined' || !canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false, // Performance optimization
      powerPreference: 'high-performance'
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // Globe Setup with wireframe style
    const globeGeom = new THREE.SphereGeometry(1.8, 32, 32);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    
    const globe = new THREE.Mesh(globeGeom, globeMat);

    // Initial logic for placement and scale
    const isMobile = window.innerWidth < 1024;
    globe.position.x = isMobile ? 0 : -3.0;
    
    if (isMobile) {
      // Make it smaller on mobile so it doesn't take over the screen
      globe.scale.set(0.65, 0.65, 0.65); 
    }

    globeRef.current = globe;
    scene.add(globe);

    // Main animation loop
    const animate = () => {
      if (globeRef.current) globeRef.current.rotation.y += 0.001;
      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);

    // Dynamic resize handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      
      if (globeRef.current) {
        if (w < 1024) {
          globeRef.current.position.x = 0;
          globeRef.current.scale.set(0.65, 0.65, 0.65);
        } else {
          globeRef.current.position.x = -3.0;
          globeRef.current.scale.set(1, 1, 1);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup resources
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      globeGeom.dispose();
      globeMat.dispose();
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