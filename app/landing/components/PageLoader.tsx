'use client';

import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // ⚡ Prefetch компонентов в фоне для быстрой загрузки
    // Используем requestIdleCallback для неблокирующей загрузки
    const prefetchComponents = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          void import('@/app/landing/components/LeadFormSection');
          void import('@/app/landing/components/Services');
          void import('@/app/landing/components/RealResults');
          void import('@/app/landing/components/WhyUs');
          void import('@/app/landing/components/SocialFollow');
          void import('@/app/landing/components/LeadFormCard');
          void import('@/app/landing/components/Footer');
        }, { timeout: 2000 });
      } else {
        // Fallback для браузеров без requestIdleCallback
        setTimeout(() => {
          void import('@/app/landing/components/LeadFormSection');
          void import('@/app/landing/components/Services');
          void import('@/app/landing/components/RealResults');
          void import('@/app/landing/components/WhyUs');
          void import('@/app/landing/components/SocialFollow');
          void import('@/app/landing/components/LeadFormCard');
          void import('@/app/landing/components/Footer');
        }, 500);
      }
    };
    
    prefetchComponents();

    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      clearTimeout(maxTimeout);
      clearInterval(pollInterval);
      setProgress(100);
      // Скрываем сразу без задержки для максимальной скорости
      setLoading(false);
    };

    // Максимальний таймаут 500ms — максимально быстрое скрытие для FCP
    const maxTimeout = setTimeout(finish, 500);

    // Скільки ms усі зображення мають бути complete перш ніж закрити спіннер.
    // 100ms — минимальное время для быстрого рендеринга
    const STABLE_MS = 100;
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
    }, 250);

    return () => {
      clearTimeout(maxTimeout);
      clearInterval(pollInterval);
    };
  }, []);

  // Простой CSS-based loader без framer-motion для максимальной производительности
  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
      style={{
        background: 'linear-gradient(180deg, #F4F9FF 0%, #E3F0FF 50%, #CFE6FF 100%)',
        opacity: loading ? 1 : 0,
        transition: 'opacity 0.15s ease-out',
      }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Простой CSS спиннер */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-pulse" />
          <div 
            className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"
            style={{ animationDuration: '0.8s' }}
          />
        </div>
        <p className="text-lg font-bold text-[#1a2b4b]">
          טוען... {progress}%
        </p>
      </div>
    </div>
  );
}
