import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";
import "./landing/landing.css";

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
  weight: ["400", "700", "800"],
  display: "swap",
  variable: "--font-noto-sans-hebrew",
  preload: true,
});

const baseUrl = "https://aiterra.agency";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Aiterra - בניית אתרים, SEO וקמפיינים ממומנים",
    template: "%s | Aiterra",
  },
  description: "יותר לידים. פחות בזבוז תקציב. משלבים בניית אתר ממיר, אסטרטגיית SEO מדויקת וקמפיינים ממוקדים.",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function LandingRootLayout({ children }: { children: React.ReactNode }) {
  const enablePixel = process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_ENABLE_META_PIXEL === "true";

  return (
    <html lang="he" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {enablePixel && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
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
                `,
              }}
            />
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
      <body className={notoSansHebrew.className}>
        {/* БЕЗ SmoothScrollProvider */}
        {children}
      </body>
    </html>
  );
}
