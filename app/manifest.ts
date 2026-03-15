import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aiterra - Web Design & SEO",
    short_name: "Aiterra",
    description: "סוכנות עיצוב ו-SEO מובילה בישראל",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0070FF",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/images/Aittera_2.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/images/Aittera_2.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["business", "productivity", "marketing"],
    lang: "he",
    dir: "rtl",
  };
}
