"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Button } from "../ui/Button/Button";

function SpheresScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (typeof window === "undefined") return;

    // Performance: disable heavy 3D on mobile / reduced motion / save-data.
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const isMobile = window.innerWidth < 1024;
    const connection = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const saveData = connection?.saveData ?? false;
    const effectiveType = connection?.effectiveType ?? "";
    const slowConnection = effectiveType === "slow-2g" || effectiveType === "2g";
    if (reduceMotion || isMobile || saveData || slowConnection) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create spheres with different materials
    const spheres: THREE.Mesh[] = [];

    // Large gray sphere with texture
    const largeSphereGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const largeSphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x9ca3af,
      roughness: 0.8,
      metalness: 0.1,
    });
    const largeSphere = new THREE.Mesh(largeSphereGeometry, largeSphereMaterial);
    largeSphere.position.set(0.5, 0.8, 0);
    scene.add(largeSphere);
    spheres.push(largeSphere);

    // Medium gray sphere
    const mediumSphereGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const mediumSphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x9ca3af,
      roughness: 0.8,
      metalness: 0.1,
    });
    const mediumSphere = new THREE.Mesh(mediumSphereGeometry, mediumSphereMaterial);
    mediumSphere.position.set(-0.8, 0.2, -0.3);
    scene.add(mediumSphere);
    spheres.push(mediumSphere);

    // Small black matte spheres
    const blackMatteMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.9,
      metalness: 0.0,
    });

    const smallBlack1 = new THREE.Mesh(new THREE.SphereGeometry(0.4, 32, 32), blackMatteMaterial);
    smallBlack1.position.set(-0.3, -0.4, 0.2);
    scene.add(smallBlack1);
    spheres.push(smallBlack1);

    const smallBlack2 = new THREE.Mesh(new THREE.SphereGeometry(0.35, 32, 32), blackMatteMaterial);
    smallBlack2.position.set(0.2, -0.6, -0.2);
    scene.add(smallBlack2);
    spheres.push(smallBlack2);

    // Glossy black sphere with chromatic aberration effect
    const glossyBlackMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      roughness: 0.1,
      metalness: 0.9,
    });
    const glossySphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), glossyBlackMaterial);
    glossySphere.position.set(-0.5, 0.1, 0.5);
    scene.add(glossySphere);
    spheres.push(glossySphere);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(3, 5, 5);
    scene.add(directionalLight);

    // Pause animation when out of view
    let isActive = true;
    let isVisible = true;
    let rafId: number | null = null;

    const tick = () => {
      if (!isActive) return;
      if (isVisible && !document.hidden) {
        // Slow rotation for depth
        spheres.forEach((sphere, index) => {
          sphere.rotation.y += 0.002 * (index % 2 === 0 ? 1 : -1);
          sphere.rotation.x += 0.001 * (index % 3 === 0 ? 1 : -1);
        });
        renderer.render(scene, camera);
      }
      rafId = requestAnimationFrame(tick);
      animationRef.current = rafId;
    };

    const start = () => {
      if (rafId != null) return;
      rafId = requestAnimationFrame(tick);
      animationRef.current = rafId;
    };

    const stop = () => {
      if (rafId == null) return;
      cancelAnimationFrame(rafId);
      rafId = null;
      animationRef.current = undefined;
    };

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
            if (isVisible) start();
          }, { threshold: 0.1, rootMargin: "150px" })
        : null;

    if (observer) observer.observe(container);
    start();

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      isActive = false;
      stop();
      window.removeEventListener("resize", handleResize);
      observer?.disconnect();
      if (rendererRef.current) container.removeChild(rendererRef.current.domElement);
      rendererRef.current?.dispose();
      spheres.forEach((sphere) => {
        sphere.geometry.dispose();
        (sphere.material as THREE.Material).dispose();
      });
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}

export function AboutAiterra() {
  return (
    <>
      <section className="relative bg-white py-20 md:py-32 overflow-hidden" dir="rtl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* 3D Spheres */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[400px] lg:h-[500px] order-2 lg:order-1"
            >
              <SpheresScene />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2"
            >
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  מאז 2010, אנחנו עוזרים ללקוחות שלנו למצוא פתרונות יוצאי דופן לעסקים שלהם, יוצרים אתרים ומוצרים דיגיטליים בלתי נשכחים.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Aiterra לא עושה פתרונות סטנדרטיים ואנחנו בונים מוצרים בדיוק כפי שהם היו בשלב העיצוב, בלי קיצורי דרך או פשטות.
                </p>

                <div className="pt-4">
                  <Button asChild variant="brandOutline" size="pill">
                    <Link href="/services" className="flex items-center gap-2">
                      <span>מה אנחנו עושים</span>
                      <ArrowLeft className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

