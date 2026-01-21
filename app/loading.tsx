'use client';

import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-md">
      <div className="flex flex-col items-center gap-6">
        
        {/* Modern Minimalist Spinner */}
        <div className="relative">
          {/* Static outer ring - very faint */}
          <div className="h-12 w-12 rounded-full border-[3px] border-slate-100"></div>
          
          {/* Active spinning ring - thin and elegant */}
          <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-blue-600"></div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm font-medium tracking-widest text-slate-500 uppercase">
            טוען
          </span>
          
          {/* Subtle Progress Bar (Optional, adds a modern touch) */}
          <div className="h-[2px] w-12 overflow-hidden bg-slate-100">
            <div className="h-full w-full origin-left animate-loading-bar bg-blue-600"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}