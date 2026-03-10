"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface SceneProps {
  showSphere: boolean;
  pointsAmount?: "low" | "medium" | "high";
}

const POINTS_PRESETS = {
  low: { count: 700, size: 0.013, opacity: 0.35 },
  medium: { count: 1000, size: 0.015, opacity: 0.4 },
  high: { count: 1400, size: 0.017, opacity: 0.45 },
} as const;

export default function OptimizedScene({ showSphere = true, pointsAmount = "medium" }: SceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  const sceneState = useRef({ stop: false });

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas,
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
        opacity: 0.25,
      });
      globe = new THREE.Mesh(globeGeom, globeMat);
      globe.position.x = -2.5;
      scene.add(globe);
    }

    // --- POINTS (Particles) ---
    const { count: pointsCount, size: pointsSize, opacity: pointsOpacity } = POINTS_PRESETS[pointsAmount];
    const posArray = new Float32Array(pointsCount * 3);
    for (let i = 0; i < pointsCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }
    const pointsGeom = new THREE.BufferGeometry();
    pointsGeom.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const pointsMat = new THREE.PointsMaterial({
      size: pointsSize,
      color: 0x00e690,
      transparent: true,
      opacity: pointsOpacity,
    });
    const points = new THREE.Points(pointsGeom, pointsMat);
    scene.add(points);

    // Stop animation when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        sceneState.current.stop = !entries[0].isIntersecting;
      },
      { threshold: 0.1 },
    );
    observer.observe(canvas);

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

    window.addEventListener("resize", handleResize);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener("resize", handleResize);
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
  }, [showSphere, pointsAmount]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
