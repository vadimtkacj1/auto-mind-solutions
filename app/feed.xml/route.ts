import { articles } from "@/src/components/Insights";
import { SITE_URL, BRAND_NAME } from "@/src/lib/seo";

export async function GET() {
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(BRAND_NAME)} - תובנות</title>
    <link>${SITE_URL}/insights</link>
    <description>מאמרים ותובנות על צמיחה, SEO, אוטומציה והנדסה</description>
    <language>he</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${articles
      .map(
        (a) => `
    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${SITE_URL}/insights/${a.slug}</link>
      <description>${escapeXml(a.description)}</description>
      <pubDate>${new Date(a.publishDate).toUTCString()}</pubDate>
      <guid isPermaLink="true">${SITE_URL}/insights/${a.slug}</guid>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
