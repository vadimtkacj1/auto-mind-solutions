"use client";

import React from "react";
import Link from "next/link";
import { PortfolioCarousel } from "./PortfolioCarousel";

export function PortfolioGrid({
  showHeader = true,
  title = "הפרויקטים שלנו",
  subtitle = "כל העבודות במקום אחד — דוגמאות, סגנונות ותוצאות.",
}: {
  showHeader?: boolean;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-[#f8fafc] z-10" dir="rtl">
      <div className="absolute inset-0 pointer-events-none select-none opacity-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-70" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-blue-100/70 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[520px] h-[520px] bg-emerald-100/60 rounded-full blur-[150px]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {showHeader ? (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div className="max-w-3xl">
              <span className="inline-block px-5 py-1.5 rounded-full bg-white border border-gray-200 text-[var(--color-primary)] text-xs sm:text-sm font-bold shadow-sm mb-8 uppercase tracking-widest">
                PORTFOLIO • Aiterra
              </span>
              <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">{title}</h1>
              <p className="mt-5 text-slate-500 text-lg md:text-xl leading-relaxed font-medium">{subtitle}</p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-black text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 ease-out shadow-sm hover:shadow-md"
              >
                חזרה לדף הבית
                <span
                  className="text-slate-800 transition-transform duration-300 group-hover:-translate-x-1"
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M11 5L4 12L11 19"
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
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        ) : null}

        {/* Carousel */}
        <PortfolioCarousel />
      </div>
    </section>
  );
}
