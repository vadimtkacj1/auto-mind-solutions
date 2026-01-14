import { useState } from 'react';
import Header from './components/Header/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services/Services';
import { TechStack } from './components/TechStack/TechStack';
import { Pricing } from './components/Pricing/Pricing';
import { Contact } from './components/Contact/Contact';
import { FAQ } from './components/FAQ/FAQ';
import { PrivacyPolicy } from './components/PrivacyPolicy/PrivacyPolicy';
import { Terms } from './components/Terms/Terms';
import CookiePopup from './components/CookiePopup/CookiePopup';
import { Footer } from './components/Footer/Footer';
import { AccessibilityWidget } from './components/AccessibilityWidget/AccessibilityWidget';
import './styles/globals.css';

type Page = 'home' | 'privacy' | 'terms';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-[var(--color-gray-50)] text-[var(--color-dark)]">
        <Header />
        <main>
          <div className="pt-24">
            <PrivacyPolicy />
          </div>
        </main>
        <Footer />
        <button
          onClick={() => setCurrentPage('home')}
          className="fixed top-24 right-6 px-6 py-3 bg-[var(--color-dark)] text-white rounded-full hover:bg-[var(--color-primary)] transition-all z-50 shadow-lg"
        >
          חזרה לעמוד הראשי
        </button>
        <AccessibilityWidget />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-[var(--color-gray-50)] text-[var(--color-dark)]">
        <Header />
        <main>
          <div className="pt-24">
            <Terms />
          </div>
        </main>
        <Footer />
        <button
          onClick={() => setCurrentPage('home')}
          className="fixed top-24 right-6 px-6 py-3 bg-[var(--color-dark)] text-white rounded-full hover:bg-[var(--color-primary)] transition-all z-50 shadow-lg"
        >
          חזרה לעמוד הראשי
        </button>
        <AccessibilityWidget />
      </div>
    );
  }

  // Structured data for homepage
  const homepageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AUTO MIND Solutions",
    "description": "חבילת שיווק דיגיטלית מלאה לעסקים קטנים ובינוניים בישראל: אתר, אוטומציה שיווקית, פרסום ממומן ו-SEO.",
    "url": "https://auto-mind.solutions",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://auto-mind.solutions/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AUTO MIND Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://auto-mind.solutions/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageStructuredData) }}
      />
      <div className="min-h-screen bg-[var(--color-gray-50)] text-[var(--color-dark)] leading-relaxed">
        <Header />
        <main itemScope itemType="https://schema.org/WebPage">
          <Hero />
          <Services />
          <TechStack />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
<CookiePopup onNavigate={setCurrentPage} />
        <CookiePopup onNavigate={setCurrentPage} />
        <AccessibilityWidget />
      </div>
    </>
  );
}
