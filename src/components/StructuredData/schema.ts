import { SITE_URL, BRAND_NAME } from "@/src/lib/seo";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SERVICE_ID = `${SITE_URL}/#service`;

/** Organization + WebSite + ProfessionalService + home BreadcrumbList for root layout. */
export function getOrganizationWebsiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: BRAND_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/Aittera_2.png`,
          width: 250,
          height: 60,
        },
        description: "סוכנות עיצוב ו-SEO מובילה בישראל",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IL",
          addressLocality: "Israel",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          availableLanguage: ["he", "en"],
        },
        sameAs: [
          "https://facebook.com/automindstudio",
          "https://twitter.com/automindstudio",
          "https://linkedin.com/company/automindstudio",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: BRAND_NAME,
        description: "חבילת שיווק דיגיטלית מלאה לעסקים קטנים ובינוניים בישראל",
        publisher: { "@id": ORGANIZATION_ID },
        inLanguage: "he",
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": SERVICE_ID,
        name: BRAND_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/images/Aittera_2.png`,
        priceRange: "₪₪₪",
        address: { "@type": "PostalAddress", addressCountry: "IL" },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 31.0461,
          longitude: 34.8516,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "48",
        },
        areaServed: { "@type": "Country", name: "Israel" },
        serviceType: ["Web Design", "SEO", "Digital Marketing", "Web Development"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        ],
      },
    ],
  };
}

export interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  keywords?: string[];
}

/** Article schema for blog/insights pages. */
export function getArticleSchema(props: ArticleSchemaProps): Record<string, unknown> {
  const imageUrl =
    props.image.startsWith("http") || props.image.startsWith("data:")
      ? props.image
      : `${SITE_URL}${props.image}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.headline,
    description: props.description,
    image: imageUrl,
    datePublished: props.datePublished,
    dateModified: props.dateModified ?? props.datePublished,
    author: {
      "@type": "Organization",
      name: `${BRAND_NAME} Agency`,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/Aittera_2.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": props.url,
    },
    ...(props.keywords?.length ? { keywords: props.keywords.join(", ") } : {}),
  };
}

export interface ProfessionalServicePageSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  serviceType?: string;
}

/** Service page schema (ProfessionalService / Service). */
export function getProfessionalServicePageSchema(
  props: ProfessionalServicePageSchemaProps
): Record<string, unknown> {
  const image = props.image
    ? (props.image.startsWith("http") ? props.image : `${SITE_URL}${props.image}`)
    : `${SITE_URL}/images/Aittera_2.png`;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: props.name,
    description: props.description,
    url: props.url,
    image,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "Israel" },
    ...(props.serviceType ? { serviceType: props.serviceType } : {}),
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

/** BreadcrumbList for inner pages. */
export function getBreadcrumbSchema(
  items: BreadcrumbItem[],
  baseUrl: string = SITE_URL
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${baseUrl}${item.item}`,
    })),
  };
}

export interface CreativeWorkSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
}

/** CreativeWork (e.g. portfolio case study). */
export function getCreativeWorkSchema(props: CreativeWorkSchemaProps): Record<string, unknown> {
  const imageUrl = props.image.startsWith("http") ? props.image : `${SITE_URL}${props.image}`;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: props.name,
    description: props.description,
    image: imageUrl,
    url: props.url,
    author: { "@type": "Organization", name: BRAND_NAME, url: SITE_URL },
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

/** FAQPage schema for pages with FAQ section - supports rich results in search. */
export function getFAQPageSchema(
  items: readonly FAQItem[],
  pageUrl: string = SITE_URL
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    ...(pageUrl ? { url: pageUrl } : {}),
  };
}
