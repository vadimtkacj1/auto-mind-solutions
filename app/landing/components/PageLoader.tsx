'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Список только КРИТИЧЕСКИХ изображений для первого экрана
    // Остальные изображения загружаются динамически через lazy loading
    const criticalImages = [
      // Hero section - самое важное изображение
      '/images/hero-section-opt.webp',
      // Service icons - маленькие SVG, загружаются быстро
      '/images/icon1.png',
      '/images/icon2.png',
      '/images/icon3.png',
      '/images/icon4.png',
    ];

    let loadedCount = 0;
    const totalImages = criticalImages.length;

    // Функция для предзагрузки изображений
    const preloadImages = () => {
      return Promise.all(
        criticalImages.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              loadedCount++;
              setProgress(Math.round((loadedCount / totalImages) * 100));
              resolve(src);
            };
            img.onerror = () => {
              loadedCount++;
              setProgress(Math.round((loadedCount / totalImages) * 100));
              resolve(src); // Продолжаем даже если изображение не загрузилось
            };
            img.src = src;
          });
        })
      );
    };

    const preloadNonCritical = () => {
      // JS chunks for dynamically imported sections (start downloading early)
      void import('@/app/landing/components/LeadFormSection');
      void import('@/app/landing/components/Services');
      void import('@/app/landing/components/RealResults');
      void import('@/app/landing/components/WhyUs');
      void import('@/app/landing/components/SocialFollow');
      void import('@/app/landing/components/LeadFormCard');
      void import('@/app/landing/components/Footer');
    };

    const scheduleIdle = (fn: () => void) => {
      const ric = (window as any).requestIdleCallback as undefined | ((cb: () => void) => void);
      if (ric) ric(fn);
      else setTimeout(fn, 0);
    };

    // Не ждём window.load — иначе "фоновые" загрузки стартуют поздно.
    const loadPage = async () => {
      // Предзагружаем критические изображения
      await preloadImages();

      // Небольшая задержка для плавности
      setTimeout(() => {
        setLoading(false);
        // После скрытия лоадера — прогреваем остальное в фоне максимально рано
        scheduleIdle(preloadNonCritical);
      }, 300);
    };

    loadPage();
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
