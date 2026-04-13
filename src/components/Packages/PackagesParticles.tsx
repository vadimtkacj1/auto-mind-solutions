"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PackagesParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !canvasRef.current) return;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const connection = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const saveData = connection?.saveData ?? false;
    const effectiveType = connection?.effectiveType ?? "";
    const slowConnection = effectiveType === "slow-2g" || effectiveType === "2g";
    if (reduceMotion || saveData || slowConnection) return;

    const canvas = canvasRef.current;

    // If WebGL is unavailable/blocked, don't crash the app.
    let gl: WebGLRenderingContext | WebGL2RenderingContext | null = null;
    try {
      gl =
        canvas.getContext("webgl2", { alpha: true, antialias: false, powerPreference: "high-performance" }) ||
        canvas.getContext("webgl", { alpha: true, antialias: false, powerPreference: "high-performance" });
    } catch {
      return;
    }
    if (!gl) return;

    const scene = new THREE.Scene();
    const getCanvasSize = () => {
      const parent = canvas.parentElement;
      const rect = (parent ?? canvas).getBoundingClientRect();
      return {
        width: Math.max(1, Math.floor(rect.width || window.innerWidth)),
        height: Math.max(1, Math.floor(rect.height || window.innerHeight)),
      };
    };

    const { width: initialW, height: initialH } = getCanvasSize();
    const camera = new THREE.PerspectiveCamera(75, initialW / initialH, 0.1, 1000);

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false, // аопптимизация: ллא אנטי אליאסינג לביצועים טובים
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setSize(initialW, initialH);
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
    pointsGeom.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const pointsMat = new THREE.PointsMaterial({
      size: 0.02, // גודל נקודה מעט גדול יותר לנראות טובה
      color: 0x10b981,
      transparent: true,
      opacity: 0.25, // שקיפות עדינה כדי לא להפריע לטקסט
      blending: THREE.AdditiveBlending, // אפקט "זוהר" בחיבור בין נקודות
    });

    const points = new THREE.Points(pointsGeom, pointsMat);
    scene.add(points);

    let isVisible = true;
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
          }, { threshold: 0.05, rootMargin: "200px" })
        : null;
    observer?.observe(canvasRef.current);

    let rafId: number | null = null;
    const animate = () => {
      if (isVisible && !document.hidden) {
        points.rotation.y += 0.0002;
        points.rotation.x += 0.0001;
        renderer?.render(scene, camera);
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const handleResize = () => {
      const { width, height } = getCanvasSize();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer?.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId != null) cancelAnimationFrame(rafId);
      observer?.disconnect();
      if (renderer) {
        try {
          renderer.forceContextLoss();
        } catch {
          // ignore
        }
        renderer.dispose();
      }
      pointsGeom.dispose();
      pointsMat.dispose();
      scene.clear();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
}
