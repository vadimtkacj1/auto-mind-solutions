import type { Metadata } from "next";
import localFont from "next/font/local";

const assistant = localFont({
  src: [
    {
      path: "../../../../public/fonts/Assistant-VariableFont_wght.ttf",
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
};

export default function FirstLandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

      <div className={assistant.className}>
        {children}
      </div>
    </>
  );
}
