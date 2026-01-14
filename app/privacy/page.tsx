'use client';

import { useRouter } from 'next/navigation';
import Header from '../../src/components/Header/Header';
import { PrivacyPolicy } from '../../src/components/PrivacyPolicy/PrivacyPolicy';
import { Footer } from '../../src/components/Footer/Footer';
import { AccessibilityWidget } from '../../src/components/AccessibilityWidget/AccessibilityWidget';

export default function PrivacyPage() {
  const router = useRouter();

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
        onClick={() => router.push('/')}
        className="fixed top-24 right-6 px-6 py-3 bg-[var(--color-dark)] text-white rounded-full hover:bg-[var(--color-primary)] transition-all z-50 shadow-lg"
      >
        חזרה לעמוד הראשי
      </button>
      <AccessibilityWidget />
    </div>
  );
}

