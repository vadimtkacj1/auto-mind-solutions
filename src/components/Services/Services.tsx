'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Reveal } from '../ui/Reveal'; 
import {
  LayoutTemplate,
  Workflow,
  Target,
  Megaphone,
  BarChart3,
  LifeBuoy,
  Code2,
  MousePointer2,
  Percent,
  TrendingUp,
  Settings2,
  Monitor
} from 'lucide-react';

const services = [
  {
    title: 'חבילת אתר + שיווק מלא',
    description: 'בניית אתר ממיר, חיבור לטפסי לידים ואוטומציה, קמפיינים ממומנים ו-SEO.',
    icon: LayoutTemplate,
    color: '#1e40af',
  },
  {
    title: 'אוטומציה שיווקית ומכירות',
    description: 'הגדרת משפכי לידים, תהליכי מעקב אוטומטיים ואינטגרציות עם CRM.',
    icon: Workflow,
    color: '#059669',
  },
  {
    title: 'בניית אתרי מכירה',
    description: 'עמודי נחיתה ואתרים מהירים שמכוונים למטרה אחת — יותר לידים.',
    icon: Target,
    color: '#4f46e5',
  },
  {
    title: 'פרסום ממומן וקידום',
    description: 'ניהול קמפיינים בגוגל וברשתות חברתיות לצד SEO חכם.',
    icon: Megaphone,
    color: '#2563eb',
  },
  {
    title: 'דוחות ובקרה לעסקים',
    description: 'דוחות ברורים על לידים, עלויות ותוצאות, כדי שתדעו מה עובד.',
    icon: BarChart3,
    color: '#0d9488',
  },
  {
    title: 'ליווי שוטף וייעוץ',
    description: 'ליווי חודשי, ניסויים A/B ושיפור תמידי על בסיס נתונים.',
    icon: LifeBuoy,
    color: '#475569',
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
      className="relative bg-[#fcfcfd] z-10 overflow-hidden rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-30px_60px_rgba(0,0,0,0.12)] min-h-screen pt-32 pb-32 md:pt-48 md:pb-56 -mt-[25px]"
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

        <motion.div 
          style={{ y: smoothYMedium, scale: 1.1 }} 
          className="absolute bottom-[8%] right-[10%] text-blue-400/40 drop-shadow-2xl"
        >
           <TrendingUp size={180} strokeWidth={1} />
        </motion.div>

        {/* Floating Decorative Plus Signs */}
        <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[25%] left-[20%] text-blue-300">
           <Settings2 size={40} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Header */}
        <div className="mb-40 md:mb-64 max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter">
              שירותים שדוחפים <br /> 
              <span className="text-blue-600">את העסק קדימה</span>
            </h2>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-40 md:gap-y-80">
          {services.map((service, index) => (
            <div key={index} className="group relative flex flex-col items-center md:items-start">
              
              {/* 3D Dynamic Number */}
              <span
                style={{
                    color: service.color,
                    textShadow: `
                      -2px -2px 0px #ffffff,
                      0px 0px 20px ${service.color}60,
                      1px 1px 0px ${service.color},
                      2px 2px 0px ${service.color},
                      3px 3px 0px ${service.color},
                      8px 8px 30px rgba(0,0,0,0.2)
                    `
                }}
                className="absolute -top-24 md:-top-44 inset-x-0 md:inset-x-auto md:right-0 md:translate-x-1/4 text-center md:text-right text-[130px] md:text-[230px] font-black leading-none pointer-events-none transition-all duration-700 ease-out opacity-30 group-hover:opacity-100 group-hover:-translate-y-6"
              >
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>

              {/* Service Card */}
              <div className="relative z-10 w-full flex flex-col items-center md:items-start text-center md:text-right">
                
                <div className="relative mb-8 md:mb-10 w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] md:rounded-[3.5rem] flex items-center justify-center bg-white shadow-2xl border border-slate-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 mx-auto md:mx-0">
                  <service.icon 
                    size={40} 
                    style={{ color: service.color }} 
                    className="relative z-10"
                  />
                  {/* Internal Glow on Hover */}
                  <div 
                    className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundColor: service.color }}
                  />
                </div>

                <div className="w-full px-2 md:px-0">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 md:mb-5 tracking-tight group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium max-w-[300px] md:max-w-none mx-auto md:mx-0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}