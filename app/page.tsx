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
import { WebVitals } from './web-vitals';

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
  metadataBase: new URL('https://auto-mind.solutions'),
  title: 'AUTO MIND STUDIO - עיצוב אתרים, SEO ופיתוח דיגיטלי מוביל בישראל',
  description: 'סוכנות עיצוב ו-SEO מובילה בישראל. בונים חוויות דיגיטליות מתקדמות עם React, Next.js, TypeScript. שירותי פיתוח אתרים, אוטומציה שיווקית ופרסום דיגיטלי.',
  keywords: [
    'עיצוב אתרים בישראל',
    'SEO ישראל',
    'פיתוח אתרים',
    'שיווק דיגיטלי',
    'בניית אתרים',
    'אוטומציה שיווקית',
    'פרסום ממומן',
    'React',
    'Next.js',
    'TypeScript',
    'web design Israel',
    'digital marketing',
  ],
  authors: [{ name: 'AUTO MIND STUDIO' }],
  creator: 'AUTO MIND STUDIO',
  publisher: 'AUTO MIND STUDIO',
  alternates: {
    canonical: 'https://auto-mind.solutions',
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://auto-mind.solutions',
    siteName: 'AUTO MIND STUDIO',
    title: 'AUTO MIND STUDIO - עיצוב אתרים, SEO ופיתוח דיגיטלי מוביל בישראל',
    description: 'סוכנות עיצוב ו-SEO מובילה בישראל. בונים חוויות דיגיטליות מתקדמות עם React, Next.js, TypeScript.',
    images: [
      {
        url: '/images/Aittera_2.png',
        width: 1200,
        height: 630,
        alt: 'AUTO MIND STUDIO - Web Design & SEO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AUTO MIND STUDIO - עיצוב אתרים, SEO ופיתוח דיגיטלי',
    description: 'סוכנות עיצוב ו-SEO מובילה בישראל.',
    images: ['/images/Aittera_2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'AUTO MIND STUDIO - עיצוב אתרים, SEO ופיתוח דיגיטלי',
    description: 'סוכנות עיצוב ו-SEO מובילה בישראל',
    url: 'https://auto-mind.solutions',
    inLanguage: 'he',
    isPartOf: {
      '@type': 'WebSite',
      name: 'AUTO MIND STUDIO',
      url: 'https://auto-mind.solutions',
    },
    about: {
      '@type': 'Service',
      serviceType: ['Web Design', 'SEO', 'Digital Marketing', 'Web Development'],
    },
    provider: {
      '@type': 'Organization',
      name: 'AUTO MIND STUDIO',
      url: 'https://auto-mind.solutions',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebVitals />
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
    </>
  );
}
