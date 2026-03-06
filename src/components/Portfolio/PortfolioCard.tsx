'use client';

import React from 'react';
import Image from 'next/image';
import type { PortfolioItem } from './portfolioData';

export function PortfolioCard({
  item,
  index,
  mode,
  variant = 'full',
}: {
  item: PortfolioItem;
  index: number;
  mode: 'carousel' | 'grid';
  variant?: 'full' | 'metrics';
}) {
  const Card = (
    <article
      data-portfolio-card={index}
      dir="rtl"
      style={{
        position: 'relative',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        border: '1px solid rgba(100,116,139,0.25)',
        background: '#0f172a',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        width: mode === 'carousel' ? undefined : '100%',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      {variant === 'full' ? (
        <>
          {/* Image fills full card width, taller on mobile so site is readable */}
          <div style={{
            position: 'relative',
            width: '100%',
            // Taller ratio so the screenshot is actually legible
            paddingBottom: '62%',
            overflow: 'hidden',
            background: '#1e293b',
          }}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              loading={index === 0 ? 'eager' : 'lazy'}
              priority={index === 0}
              quality={85}
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
              sizes="(max-width: 640px) 96vw, 560px"
            />
          </div>

          {/* Text below image */}
          <div style={{ padding: '20px 24px 24px' }}>
            <h3 style={{
              fontSize: 'clamp(18px, 4vw, 22px)',
              fontWeight: 900,
              color: '#f1f5f9',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 0 10px',
            }}>
              {item.title}
            </h3>
            <p style={{
              fontSize: 'clamp(13px, 3vw, 15px)',
              color: '#64748b',
              lineHeight: 1.6,
              margin: 0,
            }}>
              {item.description}
            </p>
          </div>
        </>
      ) : (
        <div style={{ padding: '20px 24px 24px' }}>
          <h3 style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            fontWeight: 900,
            color: '#f1f5f9',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            margin: '0 0 10px',
          }}>
            {item.title}
          </h3>
          <p style={{
            fontSize: 'clamp(13px, 3vw, 15px)',
            color: '#64748b',
            lineHeight: 1.6,
            margin: 0,
          }}>
            {item.description}
          </p>
        </div>
      )}
    </article>
  );

  return item.href ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'block', textDecoration: 'none', borderRadius: '1.5rem', cursor: 'pointer' }}
      aria-label={`View project: ${item.title}`}
    >
      {Card}
    </a>
  ) : (
    Card
  );
}