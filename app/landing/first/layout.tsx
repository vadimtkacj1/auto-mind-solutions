import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import ScrollAnimationProvider from "@/app/landing/components/ScrollAnimationProvider";
import PageLoader from "@/app/landing/components/PageLoader";
import "../../globals.css";

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
});

export const metadata: Metadata = {
  title: "Aiterra - בניית אתרים, SEO וקמפיינים ממומנים",
  description: "יותר לידים. פחות בזבוז תקציב. משלבים בניית אתר ממיר, אסטרטגיית SEO מדויקת וקמפיינים ממוקדים.",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Meta Pixel Code */}
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
      <div className={assistant.className}>
        <PageLoader />
        <ScrollAnimationProvider />
        {children}
      </div>
    </>
  );
}
