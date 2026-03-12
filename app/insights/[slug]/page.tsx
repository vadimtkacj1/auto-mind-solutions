import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { articles } from "@/src/components/Insights";
import { ReadingProgress, ScrollToTop } from "./ArticleClient";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article" };

  return {
    title: `${article.title} | Aiterra`,
    description: article.description,
    keywords: article.tags?.join(", "),
    authors: [{ name: "Aiterra Agency" }],
    alternates: { canonical: `https://aiterra.agency/insights/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://aiterra.agency/insights/${article.slug}`,
      images: article.image ? [{ url: article.image, width: 1200, height: 630 }] : [],
      publishedTime: article.publishDate,
      authors: ["Aiterra Agency"],
      siteName: "Aiterra",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: article.image ? [article.image] : [],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const tags = article.tags ?? [];

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    author: {
      "@type": "Organization",
      name: "Aiterra Agency",
      url: "https://aiterra.agency",
    },
    publisher: {
      "@type": "Organization",
      name: "Aiterra",
      logo: {
        "@type": "ImageObject",
        url: "https://aiterra.agency/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aiterra.agency/insights/${article.slug}`,
    },
    keywords: tags.join(", "),
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd]">
      <ReadingProgress />
      <ScrollToTop />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="pt-24">
        <article className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex justify-end mb-8">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              חזרה לתובנות
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="mb-6 flex items-center gap-3">
            <span className="text-sm text-gray-500">{article.readTime}</span>
            <span className="text-sm text-gray-400">•</span>
            <time dateTime={article.publishDate} className="text-sm text-gray-500">
              {new Date(article.publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">{article.title}</h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">{article.description}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
              {tags.map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-50 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          )}

          {article.image && (
            <div className="my-12 rounded-2xl overflow-hidden border border-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.image} alt={article.title} className="w-full h-auto" />
            </div>
          )}

          {article.content && (
            <>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-12">{article.content.introduction}</p>

                {article.content.sections.map((section, idx) => (
                  <section key={idx} className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{section.content}</p>
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-3 mb-8">
                        {section.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start gap-3 text-gray-700">
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
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={section.image}
                          alt={section.imageAlt || section.heading}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </section>
                ))}

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Summary</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{article.content.conclusion}</p>
                </div>
              </div>

              {/* <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Transform Your Digital Presence?</h3>
                <p className="text-gray-700 mb-6">
                  At Aiterra, we specialize in turning insights into results. Let&apos;s discuss your challenges and
                  opportunities.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Schedule Strategy Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div> */}
            </>
          )}
        </article>
      </main>
      {/* <CTA /> */}
      <Footer />
    </div>
  );
}
