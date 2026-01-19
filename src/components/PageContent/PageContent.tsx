'use client'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Hero } from '../Hero';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { Services } from '../Services/Services';
import { TechStack } from '../TechStack/TechStack';
import { Pricing } from '../Pricing/Pricing';
import { FAQ } from '../FAQ/FAQ';
import { Contact } from '../Contact/Contact';
import { Footer } from '../Footer/Footer';

// Client-only widgets (dynamic import disables SSR)
const CookiePopup = dynamic(
  () => import('../CookiePopup/CookiePopup').then((mod) => mod.default || mod.CookiePopup),
  {
    ssr: false,
  }
);

const AccessibilityWidget = dynamic(
  () => import('../AccessibilityWidget/AccessibilityWidget'),
  {
    ssr: false,
  }
);

function PageContent() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Hide initial loading spinner after page is ready
    if (typeof window !== 'undefined') {
      // Wait for page to be interactive
      if (document.readyState === 'complete') {
        const timer = setTimeout(() => setIsInitialLoad(false), 100);
        return () => clearTimeout(timer);
      } else {
        const handleLoad = () => {
          setTimeout(() => setIsInitialLoad(false), 100);
        };
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    }
  }, []);

  return (
    <>
      {isInitialLoad && <LoadingSpinner />}
      <div className="min-h-screen bg-[var(--color-gray-50)] text-[var(--color-dark)] leading-relaxed relative">
        <Header />
        <main itemScope itemType="https://schema.org/WebPage" className="relative">
          <Hero />
          <Services />
          <TechStack />
          <Pricing />
          <Contact />
          <FAQ />
        </main>
        <Footer />
        <CookiePopup />
        <AccessibilityWidget />
      </div>
    </>
  );
}

// Default export for Next.js / lazy compatibility
export default PageContent;

