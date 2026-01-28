'use client';

import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';

// Динамическая загрузка 3D частиц
const PricingParticles = dynamic(() => import('./PricingParticles'), {
  ssr: false,
  loading: () => null,
});

// --- TYPES ---
interface PricingPlan {
  name: string;
  price: string;
  oldPrice?: string; 
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  buttonText: string;
}

// --- DATA ---
const plans: PricingPlan[] = [
  {
    name: 'חבילת BASIC',
    price: '₪8,000',
    description: 'חבילה התחלתית לעסקים קטנים שרוצים נוכחות דיגיטלית מרשימה.',
    features: [
      'עיצוב מותאם אישית', 
      'עד 5 עמודים', 
      'SEO ל-3 חודשים', 
      'אוטומציה בסיסית ללידים'
    ],
    buttonText: 'צרו קשר',
  },
  {
    name: 'חבילת PRO',
    price: '₪14,000',
    oldPrice: '₪18,000',
    description: 'הפתרון המלא: אוטומציה ושיווק דיגיטלי לצמיחה מהירה במיוחד.',
    features: ['כל היתרונות של BASIC', 'עמודים ללא הגבלה', 'SEO מתקדם', 'אוטומציה ולידים מלאה'],
    highlighted: true,
    badge: 'הצעה מיוחדת',
    buttonText: 'בואו נתחיל',
  },
  {
    name: 'בהתאמה אישית',
    price: 'Custom',
    description: 'פתרונות טכנולוגיים מותאמים אישית לארגונים גדולים ומורכבים.',
    features: ['כל היתרונות של PRO', 'פיתוח מותאם אישית', 'אינטגרציות API', 'תמיכה VIP 24/7'],
    buttonText: 'צרו קשר',
  },
];

// --- MAIN COMPONENT ---
export function Pricing() {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  // Ленивая загрузка анимаций - только когда секция видна
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Упрощенные анимации без Spring для производительности
  // Use motionValue directly to avoid conditional hooks
  const sectionOpacity = useTransform(scrollYProgress, 
    isVisible ? [0, 0.2, 0.4] : [0, 1], 
    isVisible ? [0, 0.5, 1] : [1, 1]
  );
  const sectionScale = useTransform(scrollYProgress, 
    isVisible ? [0, 0.3, 0.5] : [0, 1], 
    isVisible ? [0.9, 0.95, 1] : [1, 1]
  );
  const sectionY = useTransform(scrollYProgress, 
    isVisible ? [0, 0.3, 0.5] : [0, 1], 
    isVisible ? [50, 20, 0] : [0, 0]
  );

  return (
    <section
      ref={containerRef}
      id="pricing"
      className="relative bg-[#080a0c] overflow-visible z-20 py-16 md:py-24 -mt-12 md:-mt-20"
    >
      {/* Background Layer */}
      <motion.div 
        style={{ opacity: sectionOpacity }} 
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0" 
          style={{ background: 'radial-gradient(circle at 50% 50%, #0a1c16 0%, #080a0c 100%)' }} 
        />
        {isVisible && <PricingParticles />}
      </motion.div>

      <motion.div 
        style={{ opacity: sectionOpacity, scale: sectionScale, y: sectionY }}
        className="lg:sticky lg:top-0 lg:h-screen w-full flex items-center justify-center z-10 px-6 py-10"
      >
        <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-10 lg:mb-16">
            <h2 className="text-4xl lg:text-7xl font-black text-white" dir="rtl">
              החבילות <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">שלנו</span>
            </h2>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                dir="rtl"
                className={`relative flex flex-col h-full rounded-[2.5rem] p-8 lg:p-10 border transition-all duration-500
                ${plan.highlighted
                  ? 'bg-[#061a14]/70 border-emerald-500 shadow-[0_0_60px_rgba(16,185,129,0.2)] lg:scale-105 z-30 ring-1 ring-emerald-400/30'
                  : 'bg-white/[0.03] border-white/10 z-10'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-green-400 text-black text-[11px] font-black px-5 py-1.5 rounded-full z-50 shadow-lg whitespace-nowrap tracking-wider uppercase">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-xs font-black tracking-widest mb-3 uppercase ${plan.highlighted ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {plan.name}
                  </h3>
                  
                  <div className="flex flex-wrap items-baseline gap-3 mb-4">
                    <span className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter tabular-nums">
                      {plan.price}
                    </span>
                    {plan.oldPrice && (
                      <span className="text-xl sm:text-2xl text-white/30 line-through decoration-emerald-500/60 font-medium tabular-nums">
                        {plan.oldPrice}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed min-h-[3rem]">
                    {plan.description}
                  </p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mb-8" />

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className={`mt-1 p-1 rounded-full shrink-0 ${plan.highlighted ? 'bg-emerald-500/20' : 'bg-white/5'}`}>
                        <Check className="text-emerald-400" size={14} strokeWidth={4} />
                      </div>
                      <span className="text-white text-[15px] font-bold leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Updated Buttons */}
                <a
                  href="#contact"
                  className={`w-full py-5 rounded-2xl font-black text-lg text-center transition-all duration-300 active:scale-95
                  ${plan.highlighted
                    ? 'bg-gradient-to-r from-emerald-500 to-green-400 text-black shadow-[0_15px_30px_rgba(16,185,129,0.3)] hover:brightness-110'
                    : 'bg-white/[0.07] text-white border border-white/20 hover:bg-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}