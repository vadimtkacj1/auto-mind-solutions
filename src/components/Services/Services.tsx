'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
  }
};

export function Services() {
  const { scrollYProgress } = useScroll();
  // הפרלקסה של המספרים - תנועה עדינה יותר
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden" dir="rtl">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Main Title */}
        <div className="mb-24 md:mb-36 max-w-4xl">
          <Reveal>
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight">
              שירותים שדוחפים <br /> 
              <span className="text-blue-600">את העסק קדימה</span>
            </h2>
          </Reveal>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 md:gap-y-32"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              
              {/* Background Number - Improved Visibility */}
              <motion.span 
                style={{ 
                   y: yRange,
                   WebkitTextStroke: '1px #cbd5e1', // Slate-300 stroke
                }}
                className="absolute -top-20 -right-8 text-[140px] md:text-[180px] font-black leading-none select-none z-0 
                           text-slate-50 transition-colors duration-500 group-hover:text-blue-50/50"
              >
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </motion.span>

              <div className="relative z-10">
                {/* Modern Icon Container */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  className="relative mb-10 w-24 h-24 rounded-[2rem] flex items-center justify-center bg-white border border-slate-100 shadow-xl shadow-slate-200/50 group-hover:shadow-blue-500/20 transition-all duration-500 group-hover:-rotate-3"
                >
                  {/* Internal Glow */}
                  <div 
                    className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ backgroundColor: service.color }}
                  />
                  <service.icon 
                    size={40} 
                    style={{ color: service.color }} 
                    strokeWidth={1.5}
                    className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>

                {/* Content */}
                <div className="pr-2">
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-xl leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}