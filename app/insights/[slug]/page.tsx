import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { ArticleCTA } from "@/src/components/ArticleCTA/ArticleCTA";
import { articles } from "@/src/components/Insights";
import { ReadingProgress, ScrollToTop } from "./ArticleClient";
import { PageBreadcrumbs } from "@/src/components/ui/Breadcrumb/PageBreadcrumbs";
import { StructuredData, getArticleSchema, getBreadcrumbSchema } from "@/src/components/StructuredData";
import { buildCanonical, getAbsoluteOgImage, BRAND_NAME } from "@/src/lib/seo";
import { CTA } from "@/src/components/CTA/CTA";
import { ImageWithFallback } from "@/src/components/ImageWithFallback/ImageWithFallback";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article" };

  const canonicalUrl = buildCanonical(`/insights/${article.slug}`);
  const imageUrl =
    article.image?.startsWith("http") || article.image?.startsWith("data:")
      ? article.image
      : article.image
        ? getAbsoluteOgImage(article.image)
        : null;

  return {
    title: article.title,
    description: article.description,
    keywords: article.tags?.join(", "),
    authors: [{ name: `${BRAND_NAME} Agency` }],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: canonicalUrl,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : [],
      publishedTime: article.publishDate,
      authors: [`${BRAND_NAME} Agency`],
      siteName: BRAND_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const tags = article.tags ?? [];
  const canonicalUrl = buildCanonical(`/insights/${article.slug}`);

  const articleSchema = getArticleSchema({
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishDate,
    url: canonicalUrl,
    keywords: tags,
  });

  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: "תובנות", item: "/insights" },
      { name: article.title, item: `/insights/${article.slug}` },
    ]
  );

  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <ScrollToTop />
      <StructuredData data={[articleSchema, breadcrumbSchema]} />
      <Header underHeaderSlot={<ReadingProgress />} />
      <main id="main-content" className="pt-24 bg-white min-h-screen">
        <PageBreadcrumbs
          items={[{ label: "בלוג", href: "/insights" }, { label: article.title }]}
          className="py-6"
        />
        <article className="mx-auto max-w-7xl px-6 py-16">
            <div className="flex justify-end mb-8">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              חזרה לתובנות
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>

          <div className="mb-6 flex items-center gap-3">
            <span className="text-sm text-slate-500">{article.readTime}</span>
            <span className="text-sm text-slate-400">•</span>
            <time dateTime={article.publishDate} className="text-sm text-slate-500">
              {new Date(article.publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">{article.title}</h1>

          <p className="text-xl text-slate-600 leading-relaxed mb-8">{article.description}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
              {tags.map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          )}

          {article.image && (
            <div className="my-12 rounded-2xl overflow-hidden border border-slate-200">
              <ImageWithFallback src={article.image} alt={article.title} className="w-full h-auto" />
            </div>
          )}

          {article.content && (
            <>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed mb-12">{article.content.introduction}</p>

                {article.content.sections.map((section, idx) => (
                  <section key={idx} className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{section.heading}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">{section.content}</p>
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-3 mb-8">
                        {section.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start gap-3 text-slate-700">
                            <svg
                              className="w-5 h-5 text-blue-500 mt-1 shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.image && (
                      <div className="my-8 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={section.image}
                          alt={section.imageAlt || section.heading}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </section>
                ))}
              </div>

            </>
          )}
        </article>
      </main>
      {article.cta && (
        <CTA
          variant="minimal"
          title={article.cta.title}
          description={article.cta.description}
          primaryCta={{ label: "דברו איתנו", href: "/contact" }}
        />
      )}
      <Footer />
    </div>
  );
}
