'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // ⚡ Запускаємо завантаження JS chunks ОДРАЗУ поки спіннер ще показується.
    // Без цього chunk'и RealResults/Services починають качатись лише ПІСЛЯ
    // закриття спіннера → компоненти монтуються пізно → portfolio вантажиться вже без спіннера.
    void import('@/app/landing/components/LeadFormSection');
    void import('@/app/landing/components/Services');
    void import('@/app/landing/components/RealResults');
    void import('@/app/landing/components/WhyUs');
    void import('@/app/landing/components/SocialFollow');
    void import('@/app/landing/components/LeadFormCard');
    void import('@/app/landing/components/Footer');

    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      clearTimeout(maxTimeout);
      clearInterval(pollInterval);
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    };

    // Максимальний таймаут 7s — страховка для дуже повільних з'єднань
    const maxTimeout = setTimeout(finish, 7000);

    // Скільки ms усі зображення мають бути complete перш ніж закрити спіннер.
    // 1200ms — час щоб JS chunks завантажились, компоненти змонтувались
    // та їхні <img> теги з'явились у document.images
    const STABLE_MS = 1200;
    let stableSince = 0;

    const pollInterval = setInterval(() => {
      const images = Array.from(document.images);

      // Ще немає жодного зображення — чекаємо
      if (images.length === 0) {
        stableSince = 0;
        return;
      }

      const doneCount = images.filter((img) => img.complete).length;
      const pct = Math.round((doneCount / images.length) * 100);
      setProgress(Math.min(pct, 99));

      if (doneCount === images.length) {
        // Усі поточні зображення завантажились — засікаємо час
        if (stableSince === 0) stableSince = Date.now();

        // Закриваємо тільки якщо стабільно вже STABLE_MS.
        // Це гарантує що нові <img> від dynamic компонентів вже потрапили в DOM
        if (Date.now() - stableSince >= STABLE_MS) {
          finish();
        }
      } else {
        // З'явились нові незавантажені зображення — скидаємо таймер стабільності
        stableSince = 0;
      }
    }, 100);

    return () => {
      clearTimeout(maxTimeout);
      clearInterval(pollInterval);
    };
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
