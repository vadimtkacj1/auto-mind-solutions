'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

// ── Visible-volume half-extents (z=0, camera z=18, fov=45, any wide aspect) ──
const VX = 16;   // half-width
const VY = 9.5;  // half-height

/** Spawn from a random screen edge, heading toward the opposite side */
function spawnFromEdge(): { wx: number; wy: number; wz: number; vx: number; vy: number } {
  const edge = Math.floor(Math.random() * 4);
  let wx = 0, wy = 0, angle = 0;
  const spread = 0.5;
  switch (edge) {
    case 0: wx = -(VX+1); wy = (Math.random()*2-1)*VY; angle = -spread/2 + Math.random()*spread; break;           // left → right
    case 1: wx =   VX+1;  wy = (Math.random()*2-1)*VY; angle = Math.PI - spread/2 + Math.random()*spread; break;  // right → left
    case 2: wx = (Math.random()*2-1)*VX; wy =  VY+1;   angle = -Math.PI/2 - spread/2 + Math.random()*spread; break; // top → down
    case 3: wx = (Math.random()*2-1)*VX; wy = -(VY+1); angle =  Math.PI/2 - spread/2 + Math.random()*spread; break; // bottom → up
  }
  const speed = 0.0008 + Math.random() * 0.0012;
  return { wx, wy, wz: -4 + Math.random() * 6, vx: Math.cos(angle)*speed, vy: Math.sin(angle)*speed };
}

/** Initial scatter — random position across the whole visible area */
function spawnInitial(): { wx: number; wy: number; wz: number; vx: number; vy: number } {
  const wx  = (Math.random()*2 - 1) * VX;
  const wy  = (Math.random()*2 - 1) * VY;
  const wz  = -4 + Math.random() * 6;
  const angle = Math.random() * Math.PI * 2;
  const speed = 0.0008 + Math.random() * 0.0012;
  return { wx, wy, wz, vx: Math.cos(angle)*speed, vy: Math.sin(angle)*speed };
}

export default function OptimizedScene() {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const requestRef   = useRef<number | null>(null);
  const modelRef     = useRef<THREE.Group | null>(null);
  const satelliteRef = useRef<THREE.Group | null>(null);
  const orbitAngleRef = useRef(0);
  const scrollYRef   = useRef(0);

  const asteroidsRef = useRef<Array<{
    group: THREE.Group;
    rx: number; ry: number; rz: number;   // self-rotation per frame
    wx: number; wy: number; wz: number;   // current world position
    vx: number; vy: number;               // drift velocity per frame
    parallaxFactor: number;
  }>>([]);

  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene  = new THREE.Scene();

    // --- Drag-to-rotate state ---
    let isDragging = false, prevX = 0, prevY = 0, velocityX = 0, velocityY = 0;

    // --- Mouse parallax state ---
    const mouseTarget  = { x: 0, y: 0 }; // normalized -1..1, updated on mousemove
    const mouseCurrent = { x: 0, y: 0 }; // smoothly lerped toward target

    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: window.innerWidth > 1024,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- Lighting ---
    scene.add(new THREE.AmbientLight(0xffffff, 3.0));
    const dl1 = new THREE.DirectionalLight(0xffffff, 2.5); dl1.position.set(5, 5, 5);   scene.add(dl1);
    const dl2 = new THREE.DirectionalLight(0xffffff, 1.5); dl2.position.set(-5, -3, -3); scene.add(dl2);


    // --- Earth model ---
    const applyLayout = (obj: THREE.Group) => {
      if (window.innerWidth < 1024) { obj.position.set(0, 1.5, 0);  obj.scale.set(2.0, 2.0, 2.0); }
      else                          { obj.position.set(-9, 0, 0); obj.scale.set(4.5, 4.5, 4.5); }
    };

    // --- Satellite ---
    const loadSatellite = (materials?: ReturnType<MTLLoader['parse']>) => {
      const satLoader = new OBJLoader();
      if (materials) satLoader.setMaterials(materials);
      satLoader.setPath('/models/');
      satLoader.load('Satellite.obj', (satObj) => {
        const satBox = new THREE.Box3();
        satObj.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).geometry.computeBoundingBox();
            const b = (child as THREE.Mesh).geometry.boundingBox;
            if (b) satBox.union(b);
          }
        });
        const satCentre = new THREE.Vector3();
        if (!satBox.isEmpty()) satBox.getCenter(satCentre);

        satObj.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.geometry.translate(-satCentre.x, -satCentre.y, -satCentre.z);
            if (!materials) {
              mesh.material = new THREE.MeshStandardMaterial({ color: 0xd0d8e8, metalness: 0.85, roughness: 0.15 });
            }
          }
        });

        const s = window.innerWidth < 1024 ? 0.12 : 0.18;
        satObj.scale.set(s, s, s);
        satelliteRef.current = satObj;
        scene.add(satObj);
      });
    };

    // --- Asteroids — LINEAR DRIFT across the whole scene ---
    const asteroidColors = [
      new THREE.Color(0x9e9e9e),
      new THREE.Color(0x8a8a8a),
      new THREE.Color(0xaaaaaa),
      new THREE.Color(0x929292),
      new THREE.Color(0xa0a0a0),
      new THREE.Color(0x878787),
      new THREE.Color(0x9c9c9c),
      new THREE.Color(0x8e8e8e),
      new THREE.Color(0xa5a5a5),
      new THREE.Color(0x8c8c8c),
      new THREE.Color(0x979797),
      new THREE.Color(0x949494),
    ];
    const asteroidScales  = [2.2, 1.8, 2.0, 1.6, 2.4, 1.9, 2.6, 2.0, 1.7, 1.8, 1.5, 2.2];

    for (let i = 0; i < 12; i++) {
      const aLoader = new OBJLoader();
      aLoader.setPath('/models/');
      aLoader.load('asteroid1.obj', (obj) => {
        // Centre geometry
        const totalBox = new THREE.Box3();
        obj.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).geometry.computeBoundingBox();
            const b = (child as THREE.Mesh).geometry.boundingBox;
            if (b) totalBox.union(b);
          }
        });
        const centre = new THREE.Vector3();
        if (!totalBox.isEmpty()) totalBox.getCenter(centre);

        obj.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.geometry.translate(-centre.x, -centre.y, -centre.z);
            mesh.material = new THREE.MeshStandardMaterial({ color: asteroidColors[i], roughness: 0.98, metalness: 0.0 });
          }
        });

        const init  = spawnInitial();
        const scale = asteroidScales[i];
        obj.position.set(init.wx, init.wy, init.wz);
        obj.scale.set(scale, scale, scale);

        asteroidsRef.current.push({
          group: obj,
          rx: 0.0005 + Math.random() * 0.001,
          ry: 0.0006 + Math.random() * 0.0012,
          rz: 0.0003 + Math.random() * 0.0008,
          wx: init.wx, wy: init.wy, wz: init.wz,
          vx: init.vx, vy: init.vy,
          parallaxFactor: (Math.random() - 0.5) * 2.5,
        });
        scene.add(obj);
      });
    }

    // --- Satellite MTL / OBJ loading ---
    const satMtlLoader = new MTLLoader();
    satMtlLoader.setPath('/models/');
    satMtlLoader.load('Satellite.mtl', (satMats) => { satMats.preload(); loadSatellite(satMats); }, undefined, () => loadSatellite());

    // --- Earth MTL / OBJ loading ---
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath('/models/');
    mtlLoader.load('earth.mtl', (materials) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath('/models/');
      objLoader.load('earth.obj', (obj) => { applyLayout(obj); modelRef.current = obj; scene.add(obj); });
    }, undefined, () => {
      const objLoader = new OBJLoader();
      objLoader.setPath('/models/');
      objLoader.load('earth.obj', (obj) => {
        obj.traverse((c) => { if ((c as THREE.Mesh).isMesh) (c as THREE.Mesh).material = new THREE.MeshStandardMaterial(); });
        applyLayout(obj); modelRef.current = obj; scene.add(obj);
      });
    });

    // --- Resize ---
    const updateLayout = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      if (modelRef.current) applyLayout(modelRef.current);
    };
    updateLayout();

    // --- Mouse / touch input ---
    const onMouseDown    = (e: MouseEvent)  => { if (e.clientY > window.innerHeight) return; isDragging = true; prevX = e.clientX; prevY = e.clientY; velocityX = velocityY = 0; };
    const onMouseMove    = (e: MouseEvent)  => { if (!isDragging || !modelRef.current) return; velocityX = (e.clientX - prevX) * 0.008; velocityY = (e.clientY - prevY) * 0.008; modelRef.current.rotation.y += velocityX; modelRef.current.rotation.x += velocityY; prevX = e.clientX; prevY = e.clientY; };
    const onMouseUp      = ()               => { isDragging = false; };
    // Parallax: track absolute mouse position regardless of drag
    const onMouseParallax = (e: MouseEvent) => {
      mouseTarget.x =  (e.clientX / window.innerWidth  - 0.5) * 2; // -1..1
      mouseTarget.y = -(e.clientY / window.innerHeight - 0.5) * 2; // -1..1 (inverted Y)
    };
    const onTouchStart = (e: TouchEvent)  => { isDragging = true; prevX = e.touches[0].clientX; prevY = e.touches[0].clientY; velocityX = velocityY = 0; };
    const onTouchMove  = (e: TouchEvent)  => { if (!isDragging || !modelRef.current) return; velocityX = (e.touches[0].clientX - prevX) * 0.008; velocityY = (e.touches[0].clientY - prevY) * 0.008; modelRef.current.rotation.y += velocityX; modelRef.current.rotation.x += velocityY; prevX = e.touches[0].clientX; prevY = e.touches[0].clientY; };
    const onTouchEnd   = ()               => { isDragging = false; };

    window.addEventListener('mousedown',  onMouseDown);
    window.addEventListener('mousemove',  onMouseMove);
    window.addEventListener('mousemove',  onMouseParallax);
    window.addEventListener('mouseup',    onMouseUp);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove',  onTouchMove,  { passive: true });
    window.addEventListener('touchend',   onTouchEnd);

    // Pre-allocate reusable vectors for satellite orientation
    const satForward  = new THREE.Vector3();
    const satQuat     = new THREE.Quaternion();
    const wobbleQuat  = new THREE.Quaternion();
    const wobbleEuler = new THREE.Euler();
    const defaultFwd  = new THREE.Vector3(1, 0, 0); // Satellite.obj faces +X by default

    // --- Animation loop ---
    const animate = () => {
      // ── Mouse parallax — smooth camera drift (no lookAt → Earth stays left) ─
      mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * 0.04;
      mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * 0.04;
      const isMobPx = window.innerWidth < 1024;
      const scrollRatio = scrollYRef.current / Math.max(window.innerHeight, 1);

      // Combined camera offset: mouse parallax + scroll drift (lerped)
      const targetCamX =  mouseCurrent.x * (isMobPx ? 0.4 : 0.8);
      const targetCamY =  mouseCurrent.y * (isMobPx ? 0.3 : 0.5) - scrollRatio * (isMobPx ? 1.0 : 1.8);
      camera.position.x += (targetCamX - camera.position.x) * 0.06;
      camera.position.y += (targetCamY - camera.position.y) * 0.06;
      camera.position.z = 18;

      // Earth rotation + inertia
      if (modelRef.current) {
        if (!isDragging) {
          velocityX *= 0.92; velocityY *= 0.92;
          modelRef.current.rotation.y += 0.0015 + velocityX;
          modelRef.current.rotation.x += velocityY;
        }
      }

      // ── Asteroid linear drift with planet collision avoidance ──────────
      const OUT = 2; // extra buffer beyond visible bounds
      const isMob = window.innerWidth < 1024;

      // Earth world position (must match applyLayout)
      const EARTH_X     = isMob ? 0   : -9;
      const EARTH_Y     = isMob ? 1.5 :   0;
      const EARTH_SAFE_R = isMob ? 3.5 : 6.0; // exclusion radius around planet

      for (const ast of asteroidsRef.current) {
        ast.wx += ast.vx;
        ast.wy += ast.vy;

        // Deflect asteroid if it enters the planet exclusion zone
        const dx = ast.wx - EARTH_X;
        const dy = ast.wy - EARTH_Y;
        const distSq = dx * dx + dy * dy;
        if (distSq < EARTH_SAFE_R * EARTH_SAFE_R) {
          const dist = Math.sqrt(distSq) || 0.001;
          const nx = dx / dist;
          const ny = dy / dist;
          // Reflect velocity component pointing toward planet center
          const dot = ast.vx * nx + ast.vy * ny;
          if (dot < 0) {
            ast.vx -= 2 * dot * nx;
            ast.vy -= 2 * dot * ny;
          }
          // Push asteroid outside the exclusion zone
          ast.wx = EARTH_X + nx * (EARTH_SAFE_R + 0.5);
          ast.wy = EARTH_Y + ny * (EARTH_SAFE_R + 0.5);
        }

        // Deflect asteroid if it gets too close to the satellite
        if (satelliteRef.current) {
          const sx  = satelliteRef.current.position.x;
          const sy  = satelliteRef.current.position.y;
          const SAT_SAFE_R = 2.5;
          const sdx = ast.wx - sx;
          const sdy = ast.wy - sy;
          const sDistSq = sdx * sdx + sdy * sdy;
          if (sDistSq < SAT_SAFE_R * SAT_SAFE_R) {
            const sDist = Math.sqrt(sDistSq) || 0.001;
            const snx = sdx / sDist;
            const sny = sdy / sDist;
            const sDot = ast.vx * snx + ast.vy * sny;
            if (sDot < 0) {
              ast.vx -= 2 * sDot * snx;
              ast.vy -= 2 * sDot * sny;
            }
            ast.wx = sx + snx * (SAT_SAFE_R + 0.3);
            ast.wy = sy + sny * (SAT_SAFE_R + 0.3);
          }
        }

        // Respawn from a new edge once out of bounds
        if (ast.wx < -(VX+OUT) || ast.wx > (VX+OUT) || ast.wy < -(VY+OUT) || ast.wy > (VY+OUT)) {
          const s = spawnFromEdge();
          ast.wx = s.wx; ast.wy = s.wy; ast.wz = s.wz;
          ast.vx = s.vx; ast.vy = s.vy;
        }

        ast.group.position.set(ast.wx, ast.wy - scrollRatio * ast.parallaxFactor, ast.wz);
        ast.group.rotation.x += ast.rx;
        ast.group.rotation.y += ast.ry;
        ast.group.rotation.z += ast.rz;
      }

      // ── Satellite — elliptical orbit centred on Earth, never intersects ──
      if (satelliteRef.current) {
        // Orbit is centred exactly on the Earth model position
        const earthX = isMob ? 0   : -9;
        const earthY = isMob ? 1.5 :   0;
        // Both semi-axes must be larger than Earth's visual radius (~4.5 on desktop, ~2 on mobile)
        const rx = isMob ?  3.2 : 7.0;  // semi-axis X
        const ry = isMob ?  2.6 : 6.0;  // semi-axis Y
        const inc = 0.45;               // ~26° orbital inclination

        const a = orbitAngleRef.current;

        // Position on inclined ellipse
        satelliteRef.current.position.set(
          earthX + rx * Math.cos(a),
          earthY + ry * Math.sin(a) * Math.sin(inc),
                   ry * Math.sin(a) * Math.cos(inc),
        );

        // Orientation: tangent vector of the ellipse → face direction of motion
        satForward.set(
          -rx * Math.sin(a),
           ry * Math.cos(a) * Math.sin(inc),
           ry * Math.cos(a) * Math.cos(inc),
        ).normalize();
        satQuat.setFromUnitVectors(defaultFwd, satForward);

        // Alive wobble — slow oscillating tumble on top of orbital orientation
        wobbleEuler.set(
          Math.sin(a * 2.7) * 0.18,
          Math.sin(a * 1.9) * 0.12,
          Math.sin(a * 3.3) * 0.22,
        );
        wobbleQuat.setFromEuler(wobbleEuler);
        satelliteRef.current.quaternion.copy(satQuat).multiply(wobbleQuat);

        // Slowly advance along the orbit
        orbitAngleRef.current += 0.0013;
      }

      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };

    const handleScroll = () => { scrollYRef.current = window.scrollY; };
    window.addEventListener('scroll',  handleScroll, { passive: true });
    window.addEventListener('resize',  updateLayout);
    requestRef.current = requestAnimationFrame(animate);

    // --- Cleanup ---
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize',     updateLayout);
      window.removeEventListener('mousedown',  onMouseDown);
      window.removeEventListener('mousemove',  onMouseMove);
      window.removeEventListener('mousemove',  onMouseParallax);
      window.removeEventListener('mouseup',    onMouseUp);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove',  onTouchMove);
      window.removeEventListener('touchend',   onTouchEnd);
      window.removeEventListener('scroll',     handleScroll);
      renderer.dispose();

      const disposeGroup = (group: THREE.Group) => {
        group.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.geometry.dispose();
            const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            mats.forEach((m: THREE.Material) => m.dispose());
          }
        });
      };
      if (modelRef.current)    disposeGroup(modelRef.current);
      if (satelliteRef.current) disposeGroup(satelliteRef.current);
      asteroidsRef.current.forEach(({ group }) => disposeGroup(group));
      asteroidsRef.current = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block', pointerEvents: 'none', overflow: 'visible' }}
    />
  );
}
