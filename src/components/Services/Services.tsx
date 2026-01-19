'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Reveal } from '../ui/Reveal'; 
import {
  LayoutTemplate,
  Workflow,
  Target,
  Megaphone,
  BarChart3,
  LifeBuoy,
} from 'lucide-react';

const services = [
  {
    title: 'חבילת אתר + שיווק מלא',
    description: 'בניית אתר ממיר, חיבור לטפסי לידים ואוטומציה, קמפיינים ממומנים ו-SEO.',
    icon: LayoutTemplate,
    color: '#3b82f6',
  },
  {
    title: 'אוטומציה שיווקית ומכירות',
    description: 'הגדרת משפכי לידים, תהליכי מעקב אוטומטיים ואינטגרציות עם CRM.',
    icon: Workflow,
    color: '#10b981',
  },
  {
    title: 'בניית אתרי מכירה',
    description: 'עמודי נחיתה ואתרים מהירים שמכוונים למטרה אחת — יותר לידים.',
    icon: Target,
    color: '#6366f1',
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
    color: '#14b8a6',
  },
  {
    title: 'ליווי שוטף וייעוץ',
    description: 'ליווי חודשי, ניסויים A/B ושיפור תמידי על בסיס נתונים.',
    icon: LifeBuoy,
    color: '#475569',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const yRange = useTransform(smoothProgress, [0, 1], [0, isMobile ? 0 : -100]);
  const sectionY = useTransform(smoothProgress, [0, 0.2], [100, 0]);

  return (
    <motion.section
      ref={sectionRef}
      id="services"
      style={{ y: sectionY }}
      // Updated: subtle radius instead of "giant tongue", softer shadow
      className="relative bg-white z-30 overflow-hidden rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-20px_50px_-10px_rgba(0,0,0,0.2)] min-h-screen pt-24 pb-24"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-32 max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight tracking-tight">
              שירותים שדוחפים <br /> 
              <span className="text-blue-600">את העסק קדימה</span>
            </h2>
          </Reveal>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          // Increased gap-y to prevent overlapping
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32 md:gap-y-40"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col items-center text-center md:items-start md:text-right"
            >
              
              {/* Background Number - Slightly higher and more transparent to avoid overlap */}
              <motion.span 
                style={{ 
                   y: yRange,
                   WebkitTextStroke: '1.5px #cbd5e1', 
                }}
                className="absolute -top-24 md:-top-28 inset-x-0 md:inset-x-auto md:-right-8 text-center md:text-right text-[120px] md:text-[180px] font-black leading-none select-none z-0 
                           text-slate-100/20 transition-colors duration-500 group-hover:text-blue-100/30 pointer-events-none"
              >
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </motion.span>

              {/* Content Wrapper */}
              <div className="relative z-10 w-full flex flex-col items-center md:items-start mt-8 md:mt-0">
                
                {/* Floating Icon */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
                  className="relative mb-8 w-24 h-24 rounded-[2rem] flex items-center justify-center bg-white border border-slate-100 shadow-xl shadow-slate-200/50 group-hover:shadow-blue-500/20 transition-all duration-500 group-hover:-rotate-3 mx-auto md:mx-0"
                >
                  <div 
                    className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: service.color }}
                  />
                  <service.icon 
                    size={40} 
                    style={{ color: service.color }} 
                    strokeWidth={1.5}
                    className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>

                {/* Text Content */}
                <div className="px-4 md:px-0">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium max-w-[300px] md:max-w-none">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}