import type { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '../../src/components/Header/Header';
import { Footer } from '../../src/components/Footer/Footer';

const Terms = dynamic(() => import('../../src/components/Terms/Terms').then(mod => ({ default: mod.Terms })), {
  ssr: true,
});

const AccessibilityWidget = dynamic(() => import('../../src/components/AccessibilityWidget/AccessibilityWidget').then(mod => ({ default: mod.AccessibilityWidget })), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'תנאי שימוש | AUTO MIND STUDIO',
  description: 'תנאי השימוש באתר AUTO MIND STUDIO - הכללים וההתחייבויות לשימוש בשירותים שלנו.',
  alternates: {
    canonical: 'https://auto-mind.solutions/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'תנאי שימוש | AUTO MIND STUDIO',
    description: 'תנאי השימוש באתר AUTO MIND STUDIO',
    url: 'https://auto-mind.solutions/terms',
    type: 'website',
    locale: 'he_IL',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-gray-50)] text-[var(--color-dark)]">
      <Header />
      <main>
        <div className="pt-24">
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <Terms />
          </Suspense>
        </div>
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}

