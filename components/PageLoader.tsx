'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Проверяем, загружена ли страница
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', () => {
        // Небольшая задержка для плавности
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
    }
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

            {/* Текст загрузки */}
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
                טוען...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
