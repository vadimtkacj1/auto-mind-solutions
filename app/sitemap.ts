import { MetadataRoute } from "next";
import { articles } from "@/src/components/Insights";
import { SITE_URL } from "@/src/lib/seo";

const staticRoutes: { path: string; changeFrequency: "daily" | "weekly" | "monthly" | "yearly"; priority: number }[] = [
  { path: "", changeFrequency: "daily", priority: 1.0 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/seo-marketing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/ppc", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/web-development", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/automation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/insights", changeFrequency: "weekly", priority: 0.8 },
  { path: "/packages", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/site-map", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articleUrls: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/insights/${article.slug}`,
    lastModified: new Date(article.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...articleUrls];
}
