'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Reveal } from '../ui/Reveal';
import { portfolioItems } from './portfolioData';
import { PortfolioCard } from './PortfolioCard';

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  const rotate = direction === 'left' ? 'rotate(180 12 12)' : undefined;
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g transform={rotate}>
        <path
          d="M13 5L20 12L13 19"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12H20"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function Portfolio({
  showViewAll = false,
  limit,
}: {
  showViewAll?: boolean;
  limit?: number;
}) {
  const items = useMemo(() => {
    if (typeof limit === 'number' && limit > 0) return portfolioItems.slice(0, limit);
    return portfolioItems;
  }, [limit]);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const el = cardRefs.current[index];
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (!best?.target) return;
        const idxStr = (best.target as HTMLElement).dataset.portfolioCard;
        if (!idxStr) return;
        const idx = Number(idxStr);
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      { root, threshold: [0.55, 0.65, 0.75] }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items.length]);

  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-[#f8fafc] z-10"
      dir="rtl"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-50">
        <div
          className="absolute -top-24 -left-24 text-blue-600 opacity-10"
          aria-hidden="true"
        >
          <svg width="640" height="640" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="1" fill="currentColor" />
            <path
              d="M100 100L140 60M100 100L150 110M100 100L60 140M100 100L50 80"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle cx="140" cy="60" r="2" fill="currentColor" />
            <circle cx="150" cy="110" r="1.5" fill="currentColor" />
            <circle cx="60" cy="140" r="2.5" fill="currentColor" />
            <circle cx="50" cy="80" r="1.8" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-70" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-blue-100/70 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[520px] h-[520px] bg-emerald-100/60 rounded-full blur-[150px]" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '46px 46px',
          }}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block px-5 py-1.5 rounded-full bg-white border border-gray-200 text-[var(--color-primary)] text-xs sm:text-sm font-bold shadow-sm mb-8 uppercase tracking-widest">
              PORTFOLIO • Aiterra
            </span>
            <h2 className="mb-6 text-5xl md:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight">
              פורטפוליו <span className="text-[var(--color-primary)]">שנראה</span> כמו מותג
            </h2>
            <p className="text-xl sm:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
              כמה דוגמאות לפרויקטים — עיצוב חד, ביצועים, וחוויית משתמש שמובילה להמרות. גררו לצדדים או השתמשו בכפתורים.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-[#f8fafc] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-[#f8fafc] to-transparent z-10" />

          {/* Controls */}
          <div
            className={[
              'flex flex-col sm:flex-row items-center gap-4 mb-6',
              showViewAll ? 'sm:justify-between' : 'sm:justify-end',
            ].join(' ')}
          >
            <div className="flex items-center gap-3" dir="ltr">
              <button
                type="button"
                onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                className="h-12 w-12 rounded-2xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none shadow-sm"
                disabled={activeIndex === 0}
                aria-label="Previous project"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={() => scrollToIndex(Math.min(items.length - 1, activeIndex + 1))}
                className="h-12 w-12 rounded-2xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none shadow-sm"
                disabled={activeIndex === items.length - 1}
                aria-label="Next project"
              >
                <ArrowIcon direction="right" />
              </button>
            </div>

            {showViewAll ? (
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-black text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 hover:border-blue-200/70 transition-all shadow-sm"
              >
                לכל העבודות
                <span className="text-slate-800" aria-hidden="true">
                  <ArrowIcon direction="right" />
                </span>
              </Link>
            ) : null}
          </div>

          {/* Carousel */}
          <div
            ref={scrollerRef}
            className="portfolio-scroller flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              direction: 'ltr',
            }}
          >
            <style jsx>{`
              .portfolio-scroller::-webkit-scrollbar { display: none; }
            `}</style>

            {items.map((item, idx) => (
              <div
                // wrapper so we can keep ref on the element that is actually snapped
                key={`${item.title}-${idx}`}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                data-portfolio-card={idx}
                className="snap-start"
              >
                <PortfolioCard item={item} index={idx} mode="carousel" />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2" dir="ltr">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={[
                  'h-2.5 rounded-full transition-all',
                  i === activeIndex ? 'w-10 bg-blue-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400',
                ].join(' ')}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


