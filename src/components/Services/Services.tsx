'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import {
  LayoutTemplate,
  Smartphone,
  TrendingUp,
  Search,
  Code2,
  MousePointer2,
  Percent,
  Settings2,
  Monitor
} from 'lucide-react';

const services = [
  {
    title: 'פיתוח אתרים בהתאמה אישית',
    description: 'בניית אתרים מודרניים עם עיצוב ייחודי, מהירות גבוהה ואופטימיזציית SEO – אתרים שמייצרים תוצאות ולקוחות.',
    icon: LayoutTemplate,
    color: '#1e40af',
  },
  {
    title: 'פיתוח אפליקציות לעסקים',
    description: 'פיתוח אפליקציות חכמות ונוחות לשימוש, המותאמות לצרכים עסקיים ותומכות בצמיחה ובהתרחבות.',
    icon: Smartphone,
    color: '#059669',
  },
  {
    title: 'קידום ממומן ברשתות חברתיות',
    description: 'ניהול קמפיינים בפייסבוק, אינסטגרם וטיקטוק – משלב הקריאייטיב ועד לידים ומכירות בפועל.',
    icon: TrendingUp,
    color: '#4f46e5',
  },
  {
    title: 'קידום אורגני בגוגל (SEO)',
    description: 'קידום אתרים בגוגל לטווח ארוך, להגדלת החשיפה, התנועה והלידים האיכותיים.',
    icon: Search,
    color: '#2563eb',
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax speeds
  const yFast = useTransform(scrollYProgress, [0, 1], [-300, 500]);
  const yMedium = useTransform(scrollYProgress, [0, 1], [150, -400]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const rotateSlow = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  
  const smoothYFast = useSpring(yFast, { stiffness: 50, damping: 20 });
  const smoothYMedium = useSpring(yMedium, { stiffness: 40, damping: 25 });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-10 bg-[#fcfcfd] overflow-hidden rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-30px_60px_rgba(0,0,0,0.12)] py-16 md:py-24 -mt-15 md:-mt-15"
      dir="rtl"
    >
      {/* --- ENHANCED BACKGROUND OBJECTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">

        {/* Left Side - More Vivid Colors & Drop Shadows */}
        <motion.div
          style={{ y: smoothYFast, rotate: rotateSlow }}
          className="absolute top-[8%] left-[4%] text-blue-400/40 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        >
           <Code2 size={140} strokeWidth={1.5} />
        </motion.div>

        <motion.div
          style={{ y: ySlow }}
          className="absolute top-[40%] -left-[1%] text-slate-300/40 font-black text-[220px]"
        >
           {"{"}
        </motion.div>

        <motion.div
          style={{ y: smoothYMedium }}
          className="absolute bottom-[15%] left-[8%] text-emerald-400/40 drop-shadow-[0_0_20px_rgba(52,211,153,0.3)]"
        >
           <Percent size={110} strokeWidth={2} />
        </motion.div>

        {/* Right Side - Vibrant Accents */}
        <motion.div
          style={{ y: smoothYMedium, rotate: -10 }}
          className="absolute top-[12%] right-[4%] text-indigo-400/30 drop-shadow-[0_0_25px_rgba(129,140,248,0.2)]"
        >
           <Monitor size={160} strokeWidth={1} />
        </motion.div>

        <motion.div
          style={{ y: smoothYFast }}
          className="absolute top-[45%] right-[2%] text-blue-500/40"
        >
           <MousePointer2 size={120} strokeWidth={1.5} className="drop-shadow-lg" />
        </motion.div>

        <motion.div
          style={{ y: ySlow }}
          className="absolute bottom-[25%] -right-[1%] text-slate-300/40 font-black text-[220px]"
        >
           {"}"}
        </motion.div>

        {/* Floating Decorative Plus Signs */}
        <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[25%] left-[20%] text-blue-300">
           <Settings2 size={40} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">

        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter">
              השירותים <br />
              <span className="text-blue-600">שלנו</span>
            </h2>
          </Reveal>
        </div>

        {/* Services List - Alternating Layout */}
        <div className="space-y-20 md:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <Reveal key={index}>
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>

                  {/* Image/GIF Container */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200"
                    >
                      <div className="relative">
                        <img
                          src="/videos/Boy working on Content Review.gif"
                          alt={service.title}
                          className="w-full h-auto object-contain"
                        />
                      </div>

                      {/* Decorative Gradient Overlay */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"
                      />
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className="w-full md:w-1/2 text-center md:text-right">
                    <div className="space-y-6">

                      {/* Title */}
                      <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium max-w-xl mx-auto md:mx-0">
                        {service.description}
                      </p>
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}