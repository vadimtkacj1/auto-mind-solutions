'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring, useAnimationFrame } from 'framer-motion';
import { Code2, Zap, Rocket, Globe2 } from 'lucide-react';

// --- TYPES ---
interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

// --- DATA ---
const statsData: StatItem[] = [
  { value: '360°', label: 'פתרון דיגיטלי מלא', icon: <Globe2 size={80} strokeWidth={1.2} /> },
  { value: '100%', label: 'אסטרטגיה מותאמת אישית', icon: <Code2 size={80} strokeWidth={1.2} /> },
  { value: '10', label: 'ימים לאתר באוויר', icon: <Rocket size={80} strokeWidth={1.2} /> },
  { value: '24/7', label: 'זמינות ותמיכה', icon: <Zap size={80} strokeWidth={1.2} /> },
];

// --- SUB-COMPONENTS ---

function AnimatedStat({ stat, index }: { stat: StatItem; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yOffset = useSpring(
    useTransform(scrollYProgress, [0, 1], [40, -40]),
    { stiffness: 50, damping: 20 }
  );

  const numericValue = parseInt(stat.value.replace(/\D/g, '')) || 0;
  const prefix = stat.value.match(/^[^\d]*/)?.[0] || '';
  const suffix = stat.value.match(/[^\d]*$/)?.[0] || '';
  const hasDigits = /\d/.test(stat.value);

  useAnimationFrame((time) => {
    if (!isInView || !countRef.current || !containerRef.current) return;
    if (!hasDigits || stat.value.includes('/')) {
      countRef.current.textContent = stat.value;
      return;
    }

    const duration = 2000;
    if (!containerRef.current.dataset.startTime) {
        containerRef.current.dataset.startTime = time.toString();
    }
    const elapsed = time - parseFloat(containerRef.current.dataset.startTime);
    const progress = Math.min(elapsed / duration, 1);
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(easeOutCubic * numericValue);
    countRef.current.textContent = `${prefix}${currentValue}${suffix}`;
  });

  return (
    <motion.div
      ref={containerRef}
      style={{ y: yOffset }} 
      className="flex flex-col items-center text-center w-full will-change-transform relative z-10"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1, delay: index * 0.1, type: "spring", stiffness: 80, damping: 15 }}
        className="mb-6 text-blue-600 drop-shadow-[0_10px_20px_rgba(37,99,235,0.3)]"
      >
        {stat.icon}
      </motion.div>
      <div className="text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-4 tabular-nums min-h-[1.1em] flex items-center justify-center">
        <span ref={countRef}>{stat.value}</span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.1 + 0.5 }}
        className="text-lg sm:text-xl font-bold text-slate-400 leading-tight max-w-[180px]"
      >
        {stat.label}
      </motion.div>
    </motion.div>
  );
}

// --- MAIN COMPONENT ---

export function TechStats() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms - made more dynamic
  const yPlane = useTransform(scrollYProgress, [0, 1], [-150, 400]); 
  const rotatePlane = useTransform(scrollYProgress, [0, 1], [-20, 30]); 
  
  const yBrackets = useTransform(scrollYProgress, [0, 1], [150, -300]); 
  const yCircle = useTransform(scrollYProgress, [0, 1], [-100, 200]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 md:py-20 border-t border-gray-50 bg-white z-50 shadow-sm overflow-hidden" 
      dir="rtl"
    >
      {/* 1. VIBRANT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-60 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[140px]" />
      </div>

      {/* 2. EXPRESSIVE FLYING OBJECTS (Parallax Layer) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          
          {/* Paper Plane - Stronger Blue and Shadow */}
          <motion.div 
            style={{ y: yPlane, rotate: rotatePlane, x: '10%' }}
            className="absolute top-[10%] left-[10%] text-blue-500/40 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </motion.div>

          {/* Bold Brackets { } */}
          <motion.div 
            style={{ y: yBrackets }}
            className="absolute top-[40%] right-[3%] text-blue-600/20 font-black text-[220px] leading-none select-none drop-shadow-sm"
          >
            {"}"}
          </motion.div>

          <motion.div 
            style={{ y: yBrackets, x: -30 }}
            className="absolute top-[15%] left-[3%] text-indigo-600/20 font-black text-[180px] leading-none select-none drop-shadow-sm"
          >
            {"{"}
          </motion.div>

          {/* Dotted Circle - Thicker stroke */}
          <motion.div 
            style={{ y: yCircle }}
            className="absolute bottom-[10%] right-[15%] text-indigo-400/30"
          >
            <svg width="240" height="240" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="6 6" />
            </svg>
          </motion.div>

          {/* Vivid Decorative Dots */}
          <motion.div 
            style={{ y: yPlane }}
            className="absolute top-[65%] left-[25%] flex gap-4"
          >
            <div className="w-4 h-4 rounded-full bg-blue-400/40 shadow-lg shadow-blue-400/20" />
            <div className="w-4 h-4 rounded-full bg-indigo-400/40 shadow-lg shadow-indigo-400/20" />
            <div className="w-4 h-4 rounded-full bg-sky-400/40 shadow-lg shadow-sky-400/20" />
          </motion.div>
      </div>

      {/* 3. CONTENT (Top Layer) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-20 lg:gap-x-16 justify-items-center">
          {statsData.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}