"use client";

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

interface StructuredDataProps {
  /** One or more JSON-LD objects (will be rendered as separate script tags if array). */
  data: JsonLd | JsonLd[];
}

/**
 * Renders JSON-LD structured data for SEO.
 * Use with Next.js Metadata API; for page-specific schema inject this component in the page.
 * Import schema builders from "@/src/components/StructuredData/schema" (server-safe).
 */
export function StructuredData({ data }: StructuredDataProps) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
