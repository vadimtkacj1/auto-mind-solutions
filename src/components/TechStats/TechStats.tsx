"use client";

import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Code2, Zap, Rocket, Globe2 } from 'lucide-react';

// Data for the statistics section
const stats = [
  { 
    value: '+12', 
    label: 'טכנולוגיות מודרניות',
    // Large icon size (64px) for better visual weight
    icon: <Globe2 size={64} strokeWidth={1.3} />
  },
  { 
    value: '5+', 
    label: 'שנות ניסיון בתחום',
    icon: <Rocket size={64} strokeWidth={1.3} />
  },
  { 
    value: '100%', 
    label: 'קוד נקי ומתוחזק',
    icon: <Code2 size={64} strokeWidth={1.3} />
  },
  { 
    value: 'A+', 
    label: 'ביצועי מערכת',
    icon: <Zap size={64} strokeWidth={1.3} />
  },
];

export function TechStats() {
  return (
    <div className="mt-24 pt-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid layout: 
            - 2 columns on mobile, 4 on desktop
            - justify-items-center ensures perfect centering within columns
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-20 justify-items-center">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 0.1}>
              {/* Flex container:
                  - items-center & text-center: strictly centers everything vertically
                  - w-full: ensures full width usage for alignment
                  - Removed 'group' class as hover effects are gone
              */}
              <div className="flex flex-col items-center text-center w-full">
                
                {/* Icon wrapper:
                    - Removed hover effects (group-hover translate) and transitions
                    - Kept subtle drop-shadow for depth
                */}
                <div className="mb-6 text-blue-600/90 filter drop-shadow-sm">
                  {stat.icon}
                </div>

                {/* Main metric value */}
                <div className="text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 mb-4">
                  {stat.value}
                </div>

                {/* Descriptive label with controlled max-width */}
                <div className="text-base sm:text-lg font-medium text-slate-600 leading-snug max-w-[200px] mx-auto">
                  {stat.label}
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}