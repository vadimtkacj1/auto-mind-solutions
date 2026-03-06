'use client';

import React, { useRef, useState, useEffect } from 'react';
import { portfolioItems } from './portfolioData';
import { PortfolioCard } from './PortfolioCard';

export function PortfolioCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    const targetScroll = direction === 'left' 
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative w-full" dir="rtl">
      {/* Scroll buttons - positioned for RTL */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex gap-3 md:right-4" dir="rtl">
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`w-10 h-10 rounded-full bg-white border-2 border-slate-200 shadow-xl flex items-center justify-center transition-all duration-300 ${
            canScrollRight
              ? 'hover:bg-slate-50 hover:shadow-2xl hover:scale-110 cursor-pointer opacity-100 hover:border-blue-500'
              : 'opacity-30 cursor-not-allowed'
          }`}
          aria-label="Scroll left"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`w-10 h-10 rounded-full bg-white border-2 border-slate-200 shadow-xl flex items-center justify-center transition-all duration-300 ${
            canScrollLeft
              ? 'hover:bg-slate-50 hover:shadow-2xl hover:scale-110 cursor-pointer opacity-100 hover:border-blue-500'
              : 'opacity-30 cursor-not-allowed'
          }`}
          aria-label="Scroll right"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Carousel container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-4 md:px-20 portfolio-carousel"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        dir="ltr"
      >
        <style jsx>{`
          .portfolio-carousel::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {portfolioItems.map((item, idx) => (
          <div
            key={`${item.title}-${idx}`}
            className="flex-shrink-0"
            style={{
              scrollSnapAlign: 'start',
              width: 'calc(100vw - 200px)',
              maxWidth: '620px',
            }}
          >
            <PortfolioCard item={item} index={idx} mode="carousel" variant="full" />
          </div>
        ))}
      </div>

      {/* Gradient fade edges */}
      <div className="absolute right-0 top-0 bottom-4 w-32 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/80 to-transparent pointer-events-none z-10" dir="rtl" />
      <div className="absolute left-0 top-0 bottom-4 w-32 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/80 to-transparent pointer-events-none z-10" dir="rtl" />
    </div>
  );
}

