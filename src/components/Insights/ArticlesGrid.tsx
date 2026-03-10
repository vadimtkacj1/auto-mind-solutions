"use client";

import Link from "next/link";
import { articles } from "./articlesData";

interface ArticlesGridProps {
  showHeader?: boolean;
}

export function ArticlesGrid({ showHeader = false }: ArticlesGridProps) {
  return (
    <section className="px-6 py-16 md:py-24 bg-[#f8fafc]" dir="rtl">
      <div className="mx-auto max-w-6xl">
        {showHeader && (
          <div className="mb-12">
            <h1 className="mt-6 text-4xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight">
              תובנות שבונות <span className="text-[var(--color-primary)]">יתרון</span>
            </h1>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group rounded-[2.8rem] border border-slate-100 bg-white p-10 shadow-[0_30px_60px_rgba(15,23,42,0.06)] overflow-hidden relative hover:shadow-[0_40px_80px_rgba(15,23,42,0.12)] transition-all duration-300"
            >
              <div
                className="absolute -top-16 -left-16 h-48 w-48 rounded-full blur-[70px] opacity-40 group-hover:opacity-60 transition-opacity"
                style={{ background: "rgba(0,112,255,0.16)" }}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="text-[11px] font-black tracking-[3px] uppercase text-slate-400">
                  {article.category} • {article.readTime}
                </div>

                <h2 className="mt-3 text-2xl md:text-3xl font-black text-slate-900 tracking-tight group-hover:text-[var(--color-primary)] transition-colors">
                  {article.title}
                </h2>

                <p className="mt-4 text-slate-600 text-base md:text-lg font-medium leading-relaxed">
                  {article.description}
                </p>

                {article.tags && article.tags.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2" dir="ltr">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-50 border border-slate-100 px-3 py-1 text-[10px] font-black tracking-widest uppercase text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[var(--color-primary)] group-hover:gap-3 transition-all">
                  קרא עוד
                  <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
