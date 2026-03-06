'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import {
  Code2,
  TrendingUp,
  Workflow,
} from 'lucide-react';

// Компонент для видео с правильной обработкой
function ServiceVideo({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Попытка воспроизвести видео
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
    title: 'הנדסת תוכנה ואתרים',
    description: 'פיתוח מותאם אישית, אינטגרציות API, ארכיטקטורה סקיילבילית ופרפורמנס מהיום הראשון — כדי שהמוצר באמת יעבוד בפרודקשן.',
    icon: Code2,
    color: '#1e40af',
    video: '/videos/GIF_DEV.mp4',
  },
  {
    title: 'Growth Marketing & SEO',
    description: 'מחקר מילות מפתח, Technical SEO, אופטימיזציה להמרות וניהול קמפיינים ממומנים — הכול מבוסס דאטה ויעדים עסקיים.',
    icon: TrendingUp,
    color: '#4f46e5',
    video: '/videos/GIF_SEO.mp4',
  },
  {
    title: 'אוטומציה עסקית וחיבור מערכות',
    description: 'מחברים חוויית משתמש ל-CRM/ERP, תהליכי מכירה ודוחות — כדי להפוך תנועה ללידים ולעסקאות, בלי עבודה ידנית מיותרת.',
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

        // Only shadow on top-left and top-right corners — no visible line
        paddingTop: '64px',
        boxShadow: standalone ? 'none' : '0 -8px 40px rgba(0,0,0,0.25)',
        overflow: 'hidden',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center px-4">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
              אקוסיסטם <span className="text-blue-600">360°</span> לצמיחה דיגיטלית
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-6 text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              אנחנו מכסים את כל מחזור החיים — אסטרטגיה, UX, פיתוח, הטמעה וצמיחה — כדי שהדיגיטל שלכם יהיה מנוע הכנסות, לא "עוד אתר".
            </p>
          </Reveal>
        </div>

        {/* Services List */}
        <div className="space-y-10 md:space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const Icon = service.icon;

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
                      <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                        {service.title}
                      </h3>
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