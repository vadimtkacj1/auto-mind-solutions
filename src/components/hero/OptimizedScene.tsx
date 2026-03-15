"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Interpolate along great-circle arc so lines hug the sphere surface
function arcOnSphere(R: number, a: [number, number], b: [number, number], steps = 24): THREE.Vector3[] {
  const toCart = ([lat, lon]: [number, number]): THREE.Vector3 => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      Math.sin(phi) * Math.cos(theta),
      Math.cos(phi),
      Math.sin(phi) * Math.sin(theta),
    ).multiplyScalar(R);
  };
  const va = toCart(a).normalize();
  const vb = toCart(b).normalize();
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    new THREE.Vector3()
      .copy(va)
      .lerp(vb, t)
      .normalize()
      .multiplyScalar(R * 1.004);
    pts.push(
      new THREE.Vector3()
        .copy(va)
        .lerp(vb, t)
        .normalize()
        .multiplyScalar(R * 1.004),
    );
  }
  return pts;
}

function buildNeonGlobe(): THREE.Group {
  const group = new THREE.Group();
  const R = 1.0;
  const SEG = 24; // Optimized for performance

  // Base sphere (optimized segments)
  group.add(
    new THREE.Mesh(
      new THREE.SphereGeometry(R * 0.994, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x020e28, transparent: true, opacity: 0.85 }),
    ),
  );

  const addLine = (points: THREE.Vector3[], color: number, opacity: number) => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    group.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color, transparent: true, opacity })));
  };

  // Latitude circles (reduced count)
  for (let i = 1; i < 12; i++) {
    const lat = -90 + i * 10;
    const phi = (90 - lat) * (Math.PI / 180);
    const r = R * Math.sin(phi),
      y = R * Math.cos(phi);
    const pts: THREE.Vector3[] = [];
    for (let s = 0; s <= SEG; s++) {
      const t = (s / SEG) * Math.PI * 2;
      pts.push(new THREE.Vector3(r * Math.cos(t), y, r * Math.sin(t)));
    }
    const isEq = Math.abs(lat) < 1;
    addLine(pts, isEq ? 0x00ddff : 0x006699, isEq ? 1.0 : 0.45);
  }

  // Longitude lines (reduced count)
  for (let i = 0; i < 24; i++) {
    const theta = (i / 36) * Math.PI * 2;
    const pts: THREE.Vector3[] = [];
    for (let s = 0; s <= SEG; s++) {
      const phi = (s / SEG) * Math.PI;
      pts.push(
        new THREE.Vector3(R * Math.sin(phi) * Math.cos(theta), R * Math.cos(phi), R * Math.sin(phi) * Math.sin(theta)),
      );
    }
    const isPrime = i === 0 || i === 18;
    addLine(pts, isPrime ? 0x00ddff : 0x006699, isPrime ? 1.0 : 0.45);
  }

  const drawContour = (coords: [number, number][], stepsPerSeg = 20) => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < coords.length - 1; i++) {
      const seg = arcOnSphere(R, coords[i], coords[i + 1], stepsPerSeg);
      if (i === 0) pts.push(...seg);
      else pts.push(...seg.slice(1));
    }
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    group.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0x00ffcc, transparent: true, opacity: 0.9 })));
  };

  const continents: [number, number][][] = [
    // North America
    [
      [72, -100],
      [68, -140],
      [60, -138],
      [55, -130],
      [50, -125],
      [44, -124],
      [38, -122],
      [32, -117],
      [28, -112],
      [24, -110],
      [20, -105],
      [16, -90],
      [10, -85],
      [8, -77],
      [10, -75],
      [18, -75],
      [25, -77],
      [30, -80],
      [35, -75],
      [40, -74],
      [44, -66],
      [47, -64],
      [52, -55],
      [57, -61],
      [62, -64],
      [68, -60],
      [72, -78],
      [72, -100],
    ],
    // South America
    [
      [12, -72],
      [8, -62],
      [5, -52],
      [2, -50],
      [0, -50],
      [-5, -35],
      [-10, -37],
      [-15, -39],
      [-22, -43],
      [-28, -49],
      [-33, -52],
      [-38, -57],
      [-42, -63],
      [-50, -68],
      [-55, -68],
      [-48, -65],
      [-40, -62],
      [-33, -52],
      [-22, -43],
      [-10, -36],
      [-5, -35],
      [2, -50],
      [5, -52],
      [8, -62],
      [12, -72],
    ],
    // Europe
    [
      [71, 26],
      [68, 18],
      [64, 12],
      [58, 5],
      [54, 8],
      [50, 2],
      [47, 0],
      [45, 3],
      [43, 5],
      [40, 0],
      [36, 5],
      [36, 14],
      [38, 22],
      [40, 28],
      [42, 27],
      [45, 30],
      [48, 38],
      [54, 38],
      [58, 32],
      [62, 28],
      [65, 24],
      [68, 18],
      [71, 26],
    ],
    // Africa
    [
      [37, 9],
      [30, 32],
      [22, 37],
      [12, 44],
      [0, 42],
      [-10, 40],
      [-18, 35],
      [-26, 32],
      [-34, 25],
      [-34, 18],
      [-28, 17],
      [-22, 14],
      [-15, 12],
      [-5, 9],
      [2, 2],
      [5, -5],
      [10, -15],
      [15, -17],
      [20, -16],
      [25, -15],
      [28, -12],
      [32, -2],
      [34, 6],
      [37, 9],
    ],
    // Asia
    [
      [70, 30],
      [64, 60],
      [68, 100],
      [64, 140],
      [57, 140],
      [52, 130],
      [45, 135],
      [38, 121],
      [30, 122],
      [22, 114],
      [10, 104],
      [2, 104],
      [-6, 106],
      [2, 100],
      [8, 98],
      [12, 80],
      [18, 72],
      [22, 68],
      [26, 62],
      [22, 56],
      [15, 44],
      [12, 44],
      [22, 37],
      [30, 32],
      [36, 36],
      [40, 42],
      [44, 50],
      [46, 60],
      [50, 80],
      [55, 70],
      [60, 58],
      [64, 58],
      [70, 30],
    ],
    // Australia
    [
      [-16, 130],
      [-12, 135],
      [-14, 142],
      [-18, 146],
      [-24, 152],
      [-30, 153],
      [-36, 150],
      [-38, 146],
      [-38, 140],
      [-34, 136],
      [-32, 132],
      [-32, 125],
      [-22, 114],
      [-18, 122],
      [-16, 130],
    ],
    // Greenland
    [
      [83, -35],
      [80, -58],
      [76, -68],
      [72, -72],
      [70, -52],
      [70, -30],
      [74, -18],
      [78, -18],
      [82, -25],
      [83, -35],
    ],
  ];
  continents.forEach((c) => drawContour(c));

  // City dots + pulse rings
  const cities: [number, number][] = [
    [40.71, -74.01],
    [51.51, -0.13],
    [48.85, 2.35],
    [55.75, 37.62],
    [35.69, 139.69],
    [-33.87, 151.21],
    [19.43, -99.13],
    [-23.55, -46.63],
    [28.61, 77.21],
    [31.23, 121.47],
    [1.35, 103.82],
    [32.08, 34.78],
    [25.2, 55.27],
    [52.37, 4.9],
    [41.9, 12.5],
  ];

  const cityRings: { mesh: THREE.Mesh; phase: number }[] = [];
  const dg = new THREE.SphereGeometry(0.012, 6, 6);

  cities.forEach(([lat, lon]) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const pos = new THREE.Vector3(
      R * 1.01 * Math.sin(phi) * Math.cos(theta),
      R * 1.01 * Math.cos(phi),
      R * 1.01 * Math.sin(phi) * Math.sin(theta),
    );
    const core = new THREE.Mesh(dg, new THREE.MeshBasicMaterial({ color: 0x00ffff }));
    core.position.copy(pos);
    group.add(core);

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.016, 0.024, 16),
      new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.6, side: THREE.DoubleSide }),
    );
    ring.position.copy(pos);
    ring.lookAt(new THREE.Vector3(0, 0, 0));
    ring.rotateY(Math.PI);
    group.add(ring);
    cityRings.push({ mesh: ring, phase: Math.random() * Math.PI * 2 });
  });

  // Rim glow (optimized)
  group.add(
    new THREE.Mesh(
      new THREE.SphereGeometry(1.08, 16, 16),
      new THREE.MeshBasicMaterial({
        color: 0x0066ff,
        transparent: true,
        opacity: 0.06,
        side: THREE.BackSide,
        depthWrite: false,
      }),
    ),
  );

  group.userData.cityRings = cityRings;
  return group;
}

export default function OptimizedScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined" || !canvasRef.current) return;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const connection = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const saveData = connection?.saveData ?? false;
    const effectiveType = connection?.effectiveType ?? "";
    const slowConnection = effectiveType === "slow-2g" || effectiveType === "2g";
    if (reduceMotion || saveData || slowConnection) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    let isDragging = false,
      prevX = 0,
      prevY = 0,
      velocityX = 0,
      velocityY = 0;
    const mouseTarget = { x: 0, y: 0 };
    const mouseCurrent = { x: 0, y: 0 };

    const safeAspect = canvas.clientWidth && canvas.clientHeight ? canvas.clientWidth / canvas.clientHeight : 1;
    const camera = new THREE.PerspectiveCamera(45, safeAspect, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
      stencil: false,
      depth: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.2));

    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const dl = new THREE.DirectionalLight(0xffffff, 2.0);
    dl.position.set(5, 5, 5);
    scene.add(dl);

    // ── Mobile: sphere size — visible but fits viewport ──
    const applyLayout = (obj: THREE.Group) => {
      if (window.innerWidth < 768) {
        const mobileScale = window.innerWidth < 400 ? 3.0 : 3.8;
        obj.position.set(0, 0, 0);
        obj.scale.set(mobileScale, mobileScale, mobileScale);
      } else if (window.innerWidth < 1024) {
        // Tablet — scale fits in viewport (FOV 45°, camera z≈10)
        obj.position.set(0, 0, 0);
        obj.scale.set(4.0, 4.0, 4.0);
      } else {
        // Desktop
        obj.position.set(-9, 0, 0);
        obj.scale.set(4.5, 4.5, 4.5);
      }
    };

    const globe = buildNeonGlobe();
    applyLayout(globe);
    modelRef.current = globe;
    scene.add(globe);

    // Stars (minimal for performance)
    const starCount = window.innerWidth < 1024 ? 100 : 200;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starPos.length; i++) starPos[i] = (Math.random() - 0.5) * 120;
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    scene.add(
      new THREE.Points(
        starGeo,
        new THREE.PointsMaterial({ color: 0xaaccff, size: 0.08, transparent: true, opacity: 0.4 }),
      ),
    );

    const updateLayout = () => {
      const w = canvas.clientWidth,
        h = canvas.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      if (modelRef.current) applyLayout(modelRef.current);
    };
    updateLayout();

    // Re-run layout when canvas gets real dimensions (e.g. after mobile layout)
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(updateLayout);
    });
    ro.observe(canvas);

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
      velocityX = velocityY = 0;
    };
    let mouseMoveRaf: number | null = null;
    let lastMouseX = 0, lastMouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      if (mouseMoveRaf != null) return;
      mouseMoveRaf = requestAnimationFrame(() => {
        mouseTarget.x = (lastMouseX / window.innerWidth - 0.5) * 2;
        mouseTarget.y = -(lastMouseY / window.innerHeight - 0.5) * 2;
        mouseMoveRaf = null;
      });
      if (!isDragging || !modelRef.current) return;
      velocityX = (e.clientX - prevX) * 0.008;
      velocityY = (e.clientY - prevY) * 0.008;
      modelRef.current.rotation.y += velocityX;
      modelRef.current.rotation.x += velocityY;
      prevX = e.clientX;
      prevY = e.clientY;
    };
    const onMouseUp = () => {
      isDragging = false;
    };
    const onTouchStart = (e: TouchEvent) => {
      isDragging = true;
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
      velocityX = velocityY = 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !modelRef.current) return;
      velocityX = (e.touches[0].clientX - prevX) * 0.008;
      velocityY = (e.touches[0].clientY - prevY) * 0.008;
      modelRef.current.rotation.y += velocityX;
      modelRef.current.rotation.x += velocityY;
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    let t = 0;
    let isActive = true;
    let isVisible = true;
    let visibleRatioRef = 1;
    let frameSkip = 0;

    const stop = () => {
      if (requestRef.current == null) return;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = null;
    };

    const animate = () => {
      if (!isActive) return;
      t += 0.018;

      mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * 0.04;
      mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * 0.04;
      const isMob = window.innerWidth < 1024;
      const scrollRatio = scrollYRef.current / Math.max(window.innerHeight, 1);

      camera.position.x += (mouseCurrent.x * (isMob ? 0.4 : 0.8) - camera.position.x) * 0.06;
      camera.position.y +=
        (mouseCurrent.y * (isMob ? 0.3 : 0.5) - scrollRatio * (isMob ? 1.0 : 1.8) - camera.position.y) * 0.06;
      camera.position.z = isMob ? (window.innerWidth < 768 ? 10 : 8) : 18;

      if (modelRef.current) {
        if (!isDragging) {
          velocityX *= 0.92;
          velocityY *= 0.92;
          modelRef.current.rotation.y += 0.0015 + velocityX;
          modelRef.current.rotation.x += velocityY;
        }
        const rings = modelRef.current.userData.cityRings as { mesh: THREE.Mesh; phase: number }[];
        if (rings)
          rings.forEach(({ mesh, phase }) => {
            const s = 1 + 0.6 * Math.abs(Math.sin(t + phase));
            mesh.scale.setScalar(s);
            (mesh.material as THREE.MeshBasicMaterial).opacity = 0.65 * (1 - Math.abs(Math.sin(t + phase)) * 0.65);
          });
      }

      // Skip render when barely visible or when scrolling (reduces scroll lag)
      const scrollY = scrollYRef.current;
      const vh = window.innerHeight;
      const isScrollingAway = scrollY > 20;
      // Aggressive skip when scrolling: 15fps when near, 10fps when far to keep scroll smooth
      const skipRate = scrollY > vh * 0.25 ? 4 : 3;
      const shouldSkipFrame = isScrollingAway && frameSkip++ % skipRate !== 0;
      const minVisible = visibleRatioRef > 0.08;
      if (isVisible && !document.hidden && minVisible && !shouldSkipFrame) {
        renderer.render(scene, camera);
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    // Throttled scroll handler - only update once per frame
    let scrollRaf: number | null = null;
    const handleScroll = () => {
      if (scrollRaf !== null) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollYRef.current = window.scrollY;
        scrollRaf = null;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateLayout);

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            ([entry]) => {
              const ratio = entry.intersectionRatio;
              visibleRatioRef = ratio;
              isVisible = ratio > 0.02;
              if (isVisible && requestRef.current == null) {
                requestRef.current = requestAnimationFrame(animate);
              } else if (!isVisible) {
                stop();
              }
            },
            { threshold: [0, 0.02, 0.1, 0.3, 0.5, 1], rootMargin: "0px" },
          )
        : null;
    observer?.observe(canvas);

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else if (isVisible && requestRef.current == null) requestRef.current = requestAnimationFrame(animate);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      isActive = false;
      stop();
      ro.disconnect();
      if (scrollRaf !== null) cancelAnimationFrame(scrollRaf);
      if (mouseMoveRaf !== null) cancelAnimationFrame(mouseMoveRaf);
      window.removeEventListener("resize", updateLayout);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      observer?.disconnect();
      renderer.dispose();
      if (modelRef.current) {
        modelRef.current.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).geometry.dispose();
            const mats = Array.isArray((child as THREE.Mesh).material)
              ? ((child as THREE.Mesh).material as THREE.Material[])
              : [(child as THREE.Mesh).material as THREE.Material];
            mats.forEach((m) => m.dispose());
          }
        });
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block", pointerEvents: "none", overflow: "visible" }}
    />
  );
}
