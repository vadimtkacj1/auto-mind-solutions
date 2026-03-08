'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import {
  Code2,
  TrendingUp,
  Workflow,
} from 'lucide-react';

// קומפוננטה לוידאו ללא שינויי סטייל
function ServiceVideo({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Error playing video:', src, error);
        });
      }
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full h-auto object-contain"
      aria-label={title}
      onError={(e) => {
        console.error('Video loading error:', src, e);
      }}
      onLoadedData={() => {
        console.log('Video loaded successfully:', src);
      }}
      onCanPlay={() => {
        const video = videoRef.current;
        if (video) {
          video.play().catch((err) => {
            console.error('Play error:', err);
          });
        }
      }}
    />
  );
}

const services = [
  {
    tag: 'פיתוח ועיצוב אתרים',
    title: 'הנדסת תוכנה ואתרים',
    description: 'בניית אתרים ומערכות בהתאמה אישית מלאה, הכוללת אינטגרציות API מורכבות וארכיטקטורה סקילבילית (ניתנת להרחבה). אנו שמים דגש על ביצועים מקסימליים מהיום הראשון, כדי להבטיח חווית משתמש חלקה שעומדת בעומסי תנועה ובסטנדרטים הטכנולוגיים הגבוהים ביותר.',
    icon: Code2,
    color: '#1e40af',
    video: '/videos/GIF_DEV.mp4',
  },
  {
    tag: 'קידום אתרים (SEO)',
    title: 'Growth Marketing & SEO',
    description: 'אנחנו דואגים שהלקוחות ימצאו אתכם בדיוק כשהם מחפשים. השירות כולל מחקר מילות מפתח מעמיק, אופטימיזציה טכנית (Technical SEO), שיפור יחס המרה (CRO) וניהול אסטרטגיית תוכן חכמה. הכל מבוסס על דאטה ויעדים עסקיים מדידים כדי להביא תנועה אורגנית איכותית.',
    icon: TrendingUp,
    color: '#4f46e5',
    video: '/videos/GIF_SEO.mp4',
  },
  {
    tag: 'קידום ממומן ואוטומציה',
    title: 'אוטומציה עסקית וחיבור מערכות (PPC & Tech)',
    description: 'מקסום תקציבי הפרסום שלכם באמצעות קמפיינים ממומנים מבוססי תוצאות, תוך חיבור מלא למערכות ה-CRM/ERP של העסק. אנחנו יוצרים תהליכי מכירה ודיווח אוטומטיים שהופכים תנועה ללידים ולעסקאות, ללא עבודה ידנית מיותרת ובדיוק מקסימלי.',
    icon: Workflow,
    color: '#059669',
    video: '/videos/GIF_PPC.mp4',
  },
];

export function Services({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="services"
      dir="rtl"
      style={{
        position: 'relative',
        zIndex: 20,
        background: '#fcfcfd',
        borderRadius: standalone ? '0' : '48px 48px 0 0',
        paddingTop: '64px',
        boxShadow: standalone ? 'none' : '0 -8px 40px rgba(0,0,0,0.25)',
        paddingBottom: '64px', // הוספתי ריפוד תחתון לסגירה נקייה
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center px-4 mb-16">
          <Reveal>
            <h1 className="text-2xl md:text-[32px] font-black text-slate-900 leading-tight tracking-tighter">
              מערכת <span className="text-blue-600">360°</span> לצמיחה דיגיטלית
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="mt-6 text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              אנו מלווים אתכם בכל שלבי המחזור הדיגיטלי – מאסטרטגיה ו-UX ועד פיתוח, הטמעה וצמיחה. המטרה שלנו היא להפוך את הנכסים הדיגיטליים שלכם למנוע הכנסות עוצמתי, ולא רק ל&ldquo;עוד אתר&rdquo; ברשת.
            </h2>
          </Reveal>
        </div>

        {/* Services List */}
        <div className="space-y-10 md:space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <Reveal key={index}>
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>

                  <div className="w-full md:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative overflow-hidden"
                    >
                      <ServiceVideo src={service.video} title={service.title} />
                    </motion.div>
                  </div>

                  <div className="w-full md:w-1/2 text-center md:text-right">
                    <div className="space-y-6">
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                        {service.title}
                      </h3>
                      <h2 className="text-slate-600 text-base md:text-lg leading-relaxed font-medium max-w-xl mx-auto md:mx-0">
                        {service.description}
                      </h2>
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