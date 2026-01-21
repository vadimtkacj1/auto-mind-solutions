import { Suspense } from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Серверные компоненты
import Header from '../src/components/Header/Header';
import { Services } from '../src/components/Services/Services';
import { TechStack } from '../src/components/TechStack/TechStack';
import { Pricing } from '../src/components/Pricing/Pricing';
import { Contact } from '../src/components/Contact/Contact';
import { FAQ } from '../src/components/FAQ/FAQ';
import { Footer } from '../src/components/Footer/Footer';
import { TechStats } from '@/src/components/TechStats/TechStats';

// Клиентский wrapper
import ClientPageWrapper from '../src/components/ClientPageWrapper';

// Динамический импорт тяжелых компонентов - отключен SSR для быстрой загрузки
const Hero = dynamic(() => import('../src/components/Hero').then(mod => ({ default: mod.Hero })), {
  ssr: false,
  loading: () => (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

// SEO метаданные для главной страницы
export const metadata: Metadata = {
  title: 'AUTO MIND STUDIO - עיצוב אתרים, SEO ופיתוח דיגיטלי מוביל בישראל',
  description: 'סוכנות עיצוב ו-SEO מובילה בישראל. בונים חוויות דיגיטליות מתקדמות עם React, Next.js, TypeScript. שירותי פיתוח אתרים, אוטומציה שיווקית ופרסום דיגיטלי.',
  alternates: {
    canonical: 'https://auto-mind.solutions',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main itemScope itemType="https://schema.org/WebPage">
        <Suspense fallback={<div className="h-screen" />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Services />
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <TechStack />
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <TechStats />
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Pricing />
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Contact />
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <FAQ />
        </Suspense>
      </main>
      <Footer />

      {/* Клиентские компоненты */}
      <ClientPageWrapper />
    </div>
  );
}
