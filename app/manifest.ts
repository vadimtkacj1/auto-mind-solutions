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
        src: "/images/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    categories: ["business", "productivity", "marketing"],
    lang: "he",
    dir: "rtl",
  };
}
