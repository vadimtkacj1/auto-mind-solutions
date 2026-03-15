import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";
import "../src/styles/globals.css";
import "../src/components/Features/features.css";
import dynamic from "next/dynamic";
import Script from "next/script";
import { HashScrollHandler } from "@/src/components/HashScrollHandler";
import { BodyClassController } from "@/src/components/BodyClassController";
import { AnimatePresenceProvider } from "@/src/components/PageTransitions/AnimatePresenceProvider";
import { StructuredData } from "@/src/components/StructuredData";
import { getOrganizationWebsiteSchema } from "@/src/components/StructuredData/schema";
import { SITE_URL, BRAND_NAME, DEFAULT_OG_IMAGE, getAbsoluteOgImage } from "@/src/lib/seo";

const SmoothScrollProvider = dynamic(() => import("../src/components/SmoothScroll/SmoothScrollProvider"), {
  ssr: false,
});

// display: "swap" для швидкого показу тексту
const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-sans-hebrew",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const defaultTitle = `${BRAND_NAME} - עיצוב אתרים, SEO ופיתוח דיגיטלי מוביל בישראל`;
const defaultDescription =
  "סוכנות עיצוב ו-SEO מובילה בישראל. בונים חוויות דיגיטליות מתקדמות עם React, Next.js, TypeScript. שירותי פיתוח אתרים, אוטומציה שיווקית ופרסום דיגיטלי.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: defaultTitle,
    template: `%s | ${BRAND_NAME}`,
  },
  description: defaultDescription,

  keywords: [
    "עיצוב אתרים",
    "SEO",
    "פיתוח דיגיטלי",
    "שיווק דיגיטלי",
    "React",
    "Next.js",
    "TypeScript",
    "אוטומציה שיווקית",
    "פרסום ממומן",
    "בניית אתרים בישראל",
    "web development Israel",
    "digital marketing",
  ],

  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: getAbsoluteOgImage(DEFAULT_OG_IMAGE.url),
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
        alt: DEFAULT_OG_IMAGE.alt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} - עיצוב אתרים ופיתוח דיגיטלי`,
    description: "סוכנות עיצוב ו-SEO מובילה בישראל. בונים חוויות דיגיטליות מתקדמות.",
    images: [getAbsoluteOgImage(DEFAULT_OG_IMAGE.url)],
    creator: "@automindstudio",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification tags (добавьте свои)
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },

  manifest: "/manifest.webmanifest",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const enablePixel = process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_ENABLE_META_PIXEL === "true";

  return (
    <html lang="he" dir="rtl" className="site-main">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="alternate" type="application/rss+xml" title="RSS - תובנות" href="/feed.xml" />

        {/* Critical Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Disable font preload - let it load async */}

        <StructuredData data={getOrganizationWebsiteSchema()} />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RHFV447RM1" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RHFV447RM1');
          `}
        </Script>

        {/* Ultra-minimal Critical CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            *{box-sizing:border-box;margin:0;padding:0}
            html{background:#080a0c;overflow-x:clip}
            body{background:#080a0c;color:#fff;font-family:system-ui,sans-serif;line-height:1.5}
            #main-content{min-height:100vh}
            h1{font-size:clamp(2rem,6vw,3.5rem);font-weight:700;line-height:1.2}
            button{cursor:pointer;border:none}
            a{text-decoration:none;color:inherit}
          `,
          }}
        />
        {enablePixel && (
          <>
            <Script id="meta-pixel" strategy="lazyOnload">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '910208878320949');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src="https://www.facebook.com/tr?id=910208878320949&ev=PageView&noscript=1"
                alt=""
              />
            </noscript>
          </>
        )}
      </head>
      <body className={`${notoSansHebrew.className} site-main`}>
        <a
          href="#main-content"
          className="fixed left-2 top-2 z-[9999] rounded bg-slate-900 px-4 py-2 text-sm font-medium text-white no-underline opacity-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          דלג לתוכן הראשי
        </a>
        <BodyClassController />
        <SmoothScrollProvider>
          <HashScrollHandler offset={80} />
          <AnimatePresenceProvider>{children}</AnimatePresenceProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
