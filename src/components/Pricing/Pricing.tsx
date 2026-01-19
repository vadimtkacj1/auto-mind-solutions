"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Check } from 'lucide-react';

// --- TYPES ---
interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

// --- DATA ---
const plans: PricingPlan[] = [
  {
    name: 'חבילת BASIC',
    price: '₪5,000',
    description: 'חבילה התחלתית לעסקים קטנים שרוצים נוכחות דיגיטלית מרשימה.',
    features: ['עיצוב מותאם אישית', 'עד 5 עמודים', 'SEO בסיסי', 'ממשק ניהול תוכן'],
  },
  {
    name: 'חבילת PRO',
    price: '₪12,000',
    description: 'הפתרון המלא: אוטומציה ושיווק דיגיטלי לצמיחה מהירה במיוחד.',
    features: ['כל היתרונות של BASIC', 'עמודים ללא הגבלה', 'SEO מתקדם', 'אוטומציה ולידים מלאה'],
    highlighted: true,
    badge: 'הכי פופולרי'
  },
  {
    name: 'בהתאמה אישית',
    price: 'Custom',
    description: 'פתרונות טכנולוגיים מותאמים אישית לארגונים גדולים ומורכבים.',
    features: ['כל היתרונות של PRO', 'פיתוח מותאם אישית', 'אינטגרציות API', 'תמיכה VIP 24/7'],
  },
];

// --- SUB-COMPONENTS ---
function PricingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    const pointsCount = 600;
    const posArray = new Float32Array(pointsCount * 3);
    for (let i = 0; i < pointsCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    const pointsGeom = new THREE.BufferGeometry();
    pointsGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const pointsMat = new THREE.PointsMaterial({
      size: 0.018,
      color: 0x00E690,
      transparent: true,
      opacity: 0.4
    });

    const points = new THREE.Points(pointsGeom, pointsMat);
    scene.add(points);

    const animate = () => {
      points.rotation.y += 0.0004;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
}

// --- MAIN COMPONENT ---
export function Pricing() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 25 });
  const sectionOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      id="pricing" 
      // h-[180vh] только на больших экранах, чтобы работал sticky
      className="relative min-h-screen lg:h-[180vh] bg-[#080a0c] overflow-visible z-10 py-16 lg:py-0"
    >
      <motion.div 
        style={{ opacity: sectionOpacity }} 
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0" 
          style={{ background: 'radial-gradient(circle at 50% 50%, #0a1120 0%, #080a0c 100%)' }} 
        />
        <PricingParticles />
      </motion.div>

      {/* Контейнер: sticky только на больших экранах */}
      <div className="lg:sticky lg:top-0 lg:h-screen w-full flex items-center justify-center z-10 px-6 py-10">
        
        <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-10 lg:mb-16">
            <h2 className="text-4xl lg:text-7xl font-black text-white" dir="rtl">
              החבילות <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">שלנו</span>
            </h2>
          </div>

          {/* Pricing Grid: 
              - До 1024px (lg): 1 колонка (один на одном)
              - От 1024px: 3 колонки (все в ряд)
          */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                dir="rtl"
                // h-full гарантирует одинаковую высоту всех карточек в ряду
                className={`relative flex flex-col h-full rounded-[2.5rem] p-8 lg:p-10 border transition-all duration-500
                ${plan.highlighted
                  ? 'bg-[#0f172a] border-blue-500 shadow-[0_0_50px_rgba(37,99,235,0.2)] lg:scale-105 z-30 ring-1 ring-blue-400/30'
                  : 'bg-white/[0.02] border-white/10 z-10'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full z-50 shadow-lg whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-xs font-black tracking-widest mb-3 uppercase ${plan.highlighted ? 'text-blue-400' : 'text-slate-500'}`}>
                    {plan.name}
                  </h3>
                  {/* Контролируем размер шрифта Custom, чтобы он не ломал верстку */}
                  <div className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white mb-4 tracking-tighter tabular-nums truncate">
                    {plan.price}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed min-h-[3rem]">
                    {plan.description}
                  </p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className={`mt-1 p-1 rounded-full shrink-0 ${plan.highlighted ? 'bg-blue-500/20' : 'bg-[#00E690]/10'}`}>
                        <Check className={plan.highlighted ? 'text-blue-400' : 'text-[#00E690]'} size={14} strokeWidth={4} />
                      </div>
                      <span className="text-white text-[15px] font-bold leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Кнопка всегда прижата к низу благодаря flex-grow в списке выше */}
                <button
                  className={`w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95
                  ${plan.highlighted
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_15px_30px_rgba(37,99,235,0.3)]'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                  }`}
                >
                  בואו נתחיל
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}