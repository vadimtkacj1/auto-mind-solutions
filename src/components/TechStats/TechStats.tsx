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
  { value: '12+', label: 'טכנולוגיות מודרניות', icon: <Globe2 size={80} strokeWidth={1.2} /> },
  { value: '5+', label: 'שנות ניסיון בתחום', icon: <Rocket size={80} strokeWidth={1.2} /> },
  { value: '100%', label: 'קוד נקי ומתוחזק', icon: <Code2 size={80} strokeWidth={1.2} /> },
  { value: 'A+', label: 'ביצועי מערכת', icon: <Zap size={80} strokeWidth={1.2} /> },
];

// --- SUB-COMPONENTS ---

function AnimatedStat({ stat, index }: { stat: StatItem; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  
  // Trigger animation only when element enters the viewport
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // 1. PARALLAX EFFECT: Smooth scroll-linked movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yOffset = useSpring(
    useTransform(scrollYProgress, [0, 1], [40, -40]),
    { stiffness: 50, damping: 20 }
  );

  // 2. COUNT-UP LOGIC: High-performance direct DOM updates
  const numericValue = parseInt(stat.value.replace(/\D/g, '')) || 0;
  const prefix = stat.value.match(/^[^\d]*/)?.[0] || '';
  const suffix = stat.value.match(/[^\d]*$/)?.[0] || '';
  const hasDigits = /\d/.test(stat.value);

  useAnimationFrame((time) => {
    if (!isInView || !countRef.current) return;
    
    // If the value is non-numeric (e.g., "A+"), display as static text immediately
    if (!hasDigits) {
      countRef.current.textContent = stat.value;
      return;
    }

    // Animation duration: 2000ms
    const duration = 2000;
    if (!containerRef.current?.dataset.startTime) {
        containerRef.current!.dataset.startTime = time.toString();
    }
    
    const elapsed = time - parseFloat(containerRef.current!.dataset.startTime!);
    const progress = Math.min(elapsed / duration, 1);
    
    // Smooth easing (Cubic Out) for a natural slowdown
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(easeOutCubic * numericValue);
    
    // Update DOM directly to avoid React re-render lag
    countRef.current.textContent = `${prefix}${currentValue}${suffix}`;
  });

  return (
    <motion.div
      ref={containerRef}
      style={{ 
        y: yOffset,
        backfaceVisibility: "hidden", // GPU optimization for smoother movement
        transformStyle: "preserve-3d"
      }} 
      className="flex flex-col items-center text-center w-full will-change-transform"
    >
      {/* Icon entrance animation */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ 
          duration: 1, 
          delay: index * 0.1, 
          type: "spring", 
          stiffness: 80, 
          damping: 15 
        }}
        className="mb-6 text-blue-600/90 drop-shadow-xl"
      >
        {stat.icon}
      </motion.div>

      {/* Counter Display: tabular-nums prevents horizontal "jumping" */}
      <div className="text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-4 tabular-nums min-h-[1.1em] flex items-center justify-center">
        <span ref={countRef}>
            {/* SSR Fallback */}
            {stat.value}
        </span>
      </div>

      {/* Label animation */}
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
  return (
    <section 
      className="relative py-32 md:py-48 border-t border-gray-50 bg-white z-50 shadow-sm overflow-hidden" 
      dir="rtl"
    >
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-[120px]" />
      </div>

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