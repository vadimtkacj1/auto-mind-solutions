"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function AstronautModel() {
  const { scene } = useGLTF("/models/Astronaut.glb");
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    timeRef.current += delta;

    // Очень плавное движение по эллиптической траектории
    const radiusX = 3.5;
    const radiusY = 1.8;
    const speed = 0.003; // Очень медленно для максимально плавного движения

    // Используем easing для более плавной анимации
    const t = timeRef.current * speed;
    
    groupRef.current.position.x = Math.sin(t) * radiusX;
    groupRef.current.position.y = Math.sin(t * 0.7) * radiusY + 0.5;
    groupRef.current.position.z = Math.cos(t) * radiusX;

    // Плавный поворот в направлении движения
    const targetRotation = Math.atan2(
      groupRef.current.position.x,
      groupRef.current.position.z,
    );
    groupRef.current.rotation.y += (targetRotation - groupRef.current.rotation.y) * 0.05;

    // Очень лёгкое покачивание
    groupRef.current.rotation.z = Math.sin(t * 1.2) * 0.08;
  });

  // Масштабируем модель, если она слишком большая/маленькая
  useEffect(() => {
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 0.8 / maxDim;
      scene.scale.setScalar(scale);
    }
  }, [scene]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

function AstronautScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <pointLight position={[-5, -5, -5]} intensity={0.4} />
          <AstronautModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default AstronautScene;

