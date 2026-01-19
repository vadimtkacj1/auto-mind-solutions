'use client';

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Import components one by one
import Header from '../src/components/Header/Header';
import { Hero } from '../src/components/Hero';
import { Services } from '../src/components/Services/Services';
import { TechStack } from '../src/components/TechStack/TechStack';
import { Pricing } from '../src/components/Pricing/Pricing';
import { Contact } from '../src/components/Contact/Contact';
import { FAQ } from '../src/components/FAQ/FAQ';
import { Footer } from '../src/components/Footer/Footer';
import { TechStats } from '@/src/components/TechStats/TechStats';

// Dynamic imports for client-only components
const CookiePopup = dynamic(
  () => import('../src/components/CookiePopup/CookiePopup'),
  { ssr: false }
);

const AccessibilityWidget = dynamic(
  () => import('../src/components/AccessibilityWidget/AccessibilityWidget'),
  { ssr: false }
);

export default function HomePage() {
  const router = useRouter();

  const handleNavigate = (page: 'privacy' | 'terms') => {
    router.push(`/${page}`);
  };

  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main itemScope itemType="https://schema.org/WebPage" className="pt-20">
        <div className="relative" style={{ background: '#080a0c', marginTop: '-80px' }}>
          <Hero />
          <div style={{ position: 'relative', zIndex: 30, marginTop: '-100px' }}>
            <Services />
          </div>
        </div>
        <TechStack />
        <TechStats />
        <Pricing />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <CookiePopup onNavigate={handleNavigate} />
      <AccessibilityWidget />
    </div>
  );
}
