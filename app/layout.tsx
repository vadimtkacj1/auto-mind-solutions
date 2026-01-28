import type { Metadata } from 'next';
import { Noto_Sans_Hebrew } from 'next/font/google';
import '../src/styles/globals.css';
import dynamic from 'next/dynamic';

// Отложенная загрузка SmoothScroll - не блокирует первую загрузку
const SmoothScrollProvider = dynamic(
  () => import('../src/components/SmoothScroll/SmoothScrollProvider'),
  { ssr: false }
);

// Оптимизация: загрузка только необходимых весов шрифтов (400, 700, 800)
const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
  variable: '--font-noto-sans-hebrew',
  preload: true,
});

const baseUrl = 'https://aiterra.agency';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  // Основные SEO теги
  title: {
    default: 'Aiterra - עיצוב אתרים, SEO ופיתוח דיגיטלי מוביל בישראל',
    template: '%s | Aiterra'
  },
  description: 'סוכנות עיצוב ו-SEO מובילה בישראל. בונים חוויות דיגיטליות מתקדמות עם React, Next.js, TypeScript. שירותי פיתוח אתרים, אוטומציה שיווקית ופרסום דיגיטלי.',

  keywords: [
    'עיצוב אתרים',
    'SEO',
    'פיתוח דיגיטלי',
    'שיווק דיגיטלי',
    'React',
    'Next.js',
    'TypeScript',
    'אוטומציה שיווקית',
    'פרסום ממומן',
    'בניית אתרים בישראל',
    'web development Israel',
    'digital marketing',
  ],

  authors: [{ name: 'Aiterra' }],
  creator: 'Aiterra',
  publisher: 'Aiterra',

  // Канонический URL
  alternates: {
    canonical: baseUrl,
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: baseUrl,
    siteName: 'Aiterra',
    title: 'Aiterra - עיצוב אתרים, SEO ופיתוח דיגיטלי מוביל בישראל',
    description: 'סוכנות עיצוב ו-SEO מובילה בישראל. בונים חוויות דיגיטליות מתקדמות עם React, Next.js, TypeScript.',
    images: [
      {
        url: '/images/Aittera_2.png',
        width: 1200,
        height: 630,
        alt: 'Aiterra Logo',
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Aiterra - עיצוב אתרים, SEO ופיתוח דיגיטלי',
    description: 'סוכנות עיצוב ו-SEO מובילה בישראל. בונים חוויות דיגיטליות מתקדמות.',
    images: ['/images/Aittera_2.png'],
    creator: '@automindstudio',
  },

  // Robots
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

  // Verification tags (добавьте свои)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },

  // Manifest для PWA
  manifest: '/manifest.json',

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Расширенная структурированная разметка для SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization
      {
        "@type": "Organization",
        "@id": "https://aiterra.agency/#organization",
        "name": "Aiterra",
        "url": "https://aiterra.agency",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aiterra.agency/images/Aittera_2.png",
          "width": 250,
          "height": 60
        },
        "description": "סוכנות עיצוב ו-SEO מובילה בישראל",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IL",
          "addressLocality": "Israel"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["he", "en"]
        },
        "sameAs": [
          "https://facebook.com/automindstudio",
          "https://twitter.com/automindstudio",
          "https://linkedin.com/company/automindstudio"
        ]
      },
      // WebSite
      {
        "@type": "WebSite",
        "@id": "https://aiterra.agency/#website",
        "url": "https://aiterra.agency",
        "name": "Aiterra",
        "description": "חבילת שיווק דיגיטלית מלאה לעסקים קטנים ובינוניים בישראל",
        "publisher": {
          "@id": "https://aiterra.agency/#organization"
        },
        "inLanguage": "he",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://aiterra.agency/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      // ProfessionalService
      {
        "@type": "ProfessionalService",
        "@id": "https://aiterra.agency/#service",
        "name": "Aiterra",
        "url": "https://aiterra.agency",
        "image": "https://aiterra.agency/images/Aittera_2.png",
        "priceRange": "₪₪₪",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 31.0461,
          "longitude": 34.8516
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "48"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Israel"
        },
        "serviceType": [
          "Web Design",
          "SEO",
          "Digital Marketing",
          "Web Development"
        ]
      },
      // BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "@id": "https://aiterra.agency/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aiterra.agency"
          }
        ]
      }
    ]
  };

  return (
    <html lang="he" dir="rtl" className={notoSansHebrew.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Sienna Accessibility Widget */}
        <script
          src="https://cdn.jsdelivr.net/npm/sienna-accessibility@latest/dist/sienna-accessibility.umd.js"
          defer
        />
      </head>
      <body className={notoSansHebrew.className}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

