import type { Metadata } from 'next';
import '../src/styles/globals.css';
import SmoothScrollProvider from '../src/components/SmoothScroll/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'AUTO MIND STUDIO - עיצוב אתרים, SEO ופיתוח דיגיטלי מוביל בישראל',
  description: 'סוכנות עיצוב ו-SEO מובילה בישראל. בונים חוויות דיגיטליות מתקדמות עם React, Next.js, TypeScript.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
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
    <html lang="he" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@100..900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

