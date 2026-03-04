'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // Критические изображения для загрузки
    const criticalImages = [
      isMobile ? '/images/hero-section.png' : '/images/hero-section.svg',
      '/images/service1.jpg',
      '/images/service2.jpg',
      '/images/service3.jpg',
      '/images/service4.jpg',
      '/images/icon1.svg',
      '/images/icon2.svg',
      '/images/icon3.svg',
      '/images/icon4.svg',
      isMobile ? '/images/portfolio1.png' : '/images/portfolio1.jpg',
      '/images/people.png',
      '/images/Vector.svg',
      '/images/social-girl.svg',
    ];

    const scheduleIdle = (fn: () => void) => {
      const ric = (window as any).requestIdleCallback as undefined | ((cb: () => void) => void);
      if (ric) ric(fn);
      else setTimeout(fn, 0);
    };

    const preloadNonCritical = () => {
      void import('@/app/landing/components/LeadFormSection');
      void import('@/app/landing/components/Services');
      void import('@/app/landing/components/RealResults');
      void import('@/app/landing/components/WhyUs');
      void import('@/app/landing/components/SocialFollow');
      void import('@/app/landing/components/LeadFormCard');
      void import('@/app/landing/components/Footer');
    };

    // Максимальний таймаут: якщо зображення не завантажилось за 3s — все одно показуємо сайт
    const maxTimeout = setTimeout(() => {
      setProgress(100);
      setLoading(false);
      scheduleIdle(preloadNonCritical);
    }, 3000);

    let loadedCount = 0;
    const totalImages = criticalImages.length;

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.round((loadedCount / totalImages) * 100);
      setProgress(newProgress);

      if (loadedCount === totalImages) {
        clearTimeout(maxTimeout);
        setTimeout(() => {
          setLoading(false);
          scheduleIdle(preloadNonCritical);
        }, 300); // Небольшая задержка для показа 100%
      }
    };

    // Загружаем все изображения параллельно
    criticalImages.forEach((src) => {
      const img = new window.Image();
      img.onload = updateProgress;
      img.onerror = updateProgress; // Даже при ошибке считаем как загруженное
      img.src = src;
    });

    return () => clearTimeout(maxTimeout);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background: 'linear-gradient(180deg, #F4F9FF 0%, #E3F0FF 50%, #CFE6FF 100%)',
          }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Анимированный спиннер */}
            <div className="relative w-20 h-20">
              {/* Внешний круг */}
              <motion.div
                className="absolute inset-0 border-4 border-blue-200 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Вращающийся круг */}
              <motion.div
                className="absolute inset-0 border-4 border-transparent rounded-full"
                style={{
                  borderTopColor: '#0066FF',
                  borderRightColor: '#2979FF',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Внутренний круг */}
              <motion.div
                className="absolute inset-2 border-4 border-transparent rounded-full"
                style={{
                  borderBottomColor: '#00C6FF',
                  borderLeftColor: '#2979FF',
                }}
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>

            {/* Текст загрузки с прогрессом */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <motion.p
                className="text-xl font-bold text-[#1a2b4b]"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                טוען... {progress}%
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
