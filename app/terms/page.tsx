'use client';

import { useRouter } from 'next/navigation';
import { Terms } from '../../src/components/Terms/Terms';
import { AccessibilityWidget } from '../../src/components/AccessibilityWidget/AccessibilityWidget';

export default function TermsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[var(--color-gray-50)] text-[var(--color-dark)]">
      <main>
        <div className="pt-24">
          <Terms />
        </div>
      </main>
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

