import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import dynamic from "next/dynamic";
import "../../globals.css";

const ScrollAnimationProvider = dynamic(
  () => import("@/app/landing/components/ScrollAnimationProvider"),
  { ssr: false }
);

const assistant = localFont({
  src: [
    {
      path: "../../../public/fonts/Assistant-VariableFont_wght.ttf",
      weight: "200 800",
      style: "normal",
    },
  ],
  variable: "--font-assistant",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: 'Arial',
});

export const metadata: Metadata = {
  title: "Aiterra - בניית אתרים, SEO וקמפיינים ממומנים",
  description: "יותר לידים. פחות בזבוז תקציב. משלבים בניית אתר ממיר, אסטרטגיית SEO מדויקת וקמפיינים ממוקדים.",
  other: {
    'mobile-web-app-capable': 'yes',
  },
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const enablePixel = process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_ENABLE_META_PIXEL === "true";
  const enableScrollAnimations = process.env.NEXT_PUBLIC_ENABLE_SCROLL_ANIMATIONS === "true";

  return (
    <>
      {/* Preload critical images only */}
      <link
        rel="preload"
        as="image"
        href="/images/hero-section-opt.webp"
        imageSrcSet="/images/hero-section-opt.webp 1x"
        imageSizes="(max-width: 768px) 100vw, (max-width: 1024px) 55vw, 700px"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/images/logo.svg"
        fetchPriority="high"
      />

      {/* Third-party analytics should not compete with first paint */}
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
      <div className={assistant.className}>
        {children}
        {enableScrollAnimations && <ScrollAnimationProvider />}
      </div>
    </>
  );
}
