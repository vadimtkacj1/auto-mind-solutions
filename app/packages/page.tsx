import type { Metadata } from 'next';
import Header from '@/src/components/Header/Header';
import { Packages } from '@/src/components/Packages/Packages';
import { StrategicCTA } from '@/src/components/CTA/StrategicCTA';
import { Footer } from '@/src/components/Footer/Footer';
import { PageHero } from '@/src/components/PageHero/PageHero';

export const metadata: Metadata = {
  title: 'חבילות שיווק דיגיטלי - Packages',
  description: 'חבילות שיווק דיגיטלי מותאמות לכל עסק - מדפי נחיתה פשוטים ועד מערכות מסחר מלאות.',
  alternates: { canonical: 'https://aiterra.agency/packages' },
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main>
        <PageHero
          badge="PACKAGES • Aiterra"
          title={
            <>
              חבילות שיווק <span className="text-[var(--color-primary)]">מותאמות אישית</span>
            </>
          }
          subtitle={
            <>
              בחרו את החבילה המתאימה לעסק שלכם - מדף נחיתה פשוט ועד מערכת מסחר מלאה.
              כל חבילה מותאמת במיוחד כדי להביא לכם תוצאות מקסימליות.
            </>
          }
          primaryCta={{ label: 'התייעצות חינם', href: '/#contact' }}
          secondaryCta={{ label: 'צפו בפורטפוליו', href: '/portfolio' }}
        />

        <Packages />
        <StrategicCTA />
      </main>
      <Footer />
    </div>
  );
}
