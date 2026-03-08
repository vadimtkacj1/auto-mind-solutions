'use client';

import React, { useRef, useState, useEffect } from 'react';
import { portfolioItems } from './portfolioData';
import { PortfolioCard } from './PortfolioCard';
import { PortfolioStars } from './PortfolioStars';

const GAP = 16;

export function PortfolioCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const check = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    check();
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => { el.removeEventListener('scroll', check); window.removeEventListener('resize', check); };
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.85;
    el.scrollTo({ 
      left: dir === 'left' ? el.scrollLeft - scrollAmount : el.scrollLeft + scrollAmount, 
      behavior: 'smooth' 
    });
  };

  return (
    <div dir="rtl">
      {/* Arrow buttons - positioned at the top */}
      <div style={{
        display: 'flex',
        gap: 12,
        marginBottom: 24,
        justifyContent: 'flex-start',
      }}>
        {(['right', 'left'] as const).map((dir) => {
          const active = dir === 'left' ? canScrollLeft : canScrollRight;
          return (
            <button 
              key={dir} 
              onClick={() => scroll(dir)} 
              disabled={!active} 
              style={{
                width: 48, 
                height: 48, 
                borderRadius: '50%',
                border: `2px solid ${active ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'}`,
                background: active ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                color: active ? '#f1f5f9' : 'rgba(241,245,249,0.4)',
                cursor: active ? 'pointer' : 'not-allowed',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                flexShrink: 0,
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                if (active) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (active) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d={dir === 'left' ? 'M15 18L9 12L15 6' : 'M9 18L15 12L9 6'}
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          );
        })}
      </div>

      {/* Scroll track */}
      <div
        ref={scrollContainerRef}
        dir="ltr"
        className="portfolio-carousel-scroll"
        style={{
          display: 'flex',
          gap: 20,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingRight: 'clamp(16px, 4vw, 56px)',
          paddingLeft: 'clamp(16px, 4vw, 56px)',
          paddingBottom: 8,
          scrollPaddingLeft: 'clamp(16px, 4vw, 56px)',
          scrollPaddingRight: 'clamp(16px, 4vw, 56px)',
        }}
      >
        <style jsx>{`
          .portfolio-carousel-scroll::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {portfolioItems.map((item, idx) => (
          <div 
            key={idx} 
            data-card={idx} 
            style={{
              flexShrink: 0,
              scrollSnapAlign: 'start',
              width: 'min(calc(100vw - clamp(32px, 8vw, 112px)), 480px)',
            }}
          >
            <PortfolioCard item={item} index={idx} mode="carousel" variant="full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturedCases({
  title,
  subtitle = '',
}: {
  title?: React.ReactNode;
  subtitle?: string;
  limit?: number;
}) {
  const defaultTitle = (
    <>
      תיק עבודות שמדבר{' '}
      <span style={{
        background: 'linear-gradient(110deg, #a78bfa 0%, #7c3aed 50%, #6366f1 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        תוצאות
      </span>
    </>
  );

  return (
    <section
      id="portfolio"
      dir="rtl"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#080d14',
        paddingTop: 'clamp(64px, 8vw, 112px)',
        paddingBottom: 'clamp(64px, 8vw, 112px)',
        paddingLeft: 'clamp(16px, 4vw, 56px)',
        paddingRight: 'clamp(16px, 4vw, 56px)',
      }}
    >
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <PortfolioStars />
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <h2 style={{
          fontSize: 'clamp(24px, 4vw, 32px)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: '#f1f5f9',
          margin: subtitle ? '0 0 16px' : '0 0 44px',
        }}>
          {title || defaultTitle}
        </h2>

        {subtitle && (
          <p style={{
            fontSize: 'clamp(15px, 1.8vw, 17px)', color: '#475569', lineHeight: 1.65,
            maxWidth: 460, margin: '0 0 44px',
            background: 'none', backgroundColor: 'transparent',
            padding: 0, boxShadow: 'none', WebkitTextFillColor: 'unset',
          }}>
            {subtitle}
          </p>
        )}

        {/* Carousel for all screen sizes */}
        <PortfolioCarousel />
      </div>
    </section>
  );
}