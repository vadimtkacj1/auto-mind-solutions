import type { Metadata } from 'next';
import Header from '@/src/components/Header/Header';
import { Packages } from '@/src/components/Packages/Packages';
import { ContactCTA } from '@/src/components/CTA/ContactCTA';
import { Footer } from '@/src/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'חבילות שיווק דיגיטלי - Packages',
  description: 'חבילות שיווק דיגיטלי מותאמות לכל עסק - מדפי נחיתה פשוטים ועד מערכות מסחר מלאות.',
  alternates: { canonical: 'https://aiterra.agency/packages' },
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed bg-[#080a0c]">
      <Header />
      <main className="bg-[#080a0c]">
        <Packages />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
