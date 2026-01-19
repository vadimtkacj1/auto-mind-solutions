'use client';

import React from 'react';
import { FaHeart } from 'react-icons/fa';
import OptimizedScene from './OptimizedScene';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    /* CHANGE 1: Added backdrop-blur and translucency for a premium "glassmorphism" effect.
       Increased padding slightly for better spacing.
    */
    <footer className="relative w-full overflow-hidden border-t border-white/5 bg-[#080a0c]/80 backdrop-blur-md" dir="rtl">
      
      {/* BACKGROUND SCENE (OptimizedScene)
          CHANGE 2: Opacity set to 90 for higher brilliance.
      */}
      <div className="absolute inset-0 z-0 opacity-90 pointer-events-none">
        {/* CHANGE 3: Hypothetical pointsAmount prop. 
            Ensure your OptimizedScene component is configured to receive this prop.
        */}
        <OptimizedScene showSphere={false} pointsAmount="high" />
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 w-full">
        {/* Subtle top gradient to soften the transition from the previous section */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#080a0c] to-transparent opacity-60"></div>

        <div className="mx-auto max-w-6xl px-6 py-20 flex flex-col items-center relative">
          
          {/* Logo and Tagline */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="text-4xl font-extrabold tracking-tight text-white uppercase">
                AUTO <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">MIND</span>
              </span>
            </div>
            {/* Increased text size to text-lg for better readability */}
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              סוכנות מובילה לאוטומציה ובינה מלאכותית. 
              <br />
              מגשרים על הפער בין טכנולוגיה מורכבת לצמיחה עסקית.
            </p>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-20 sm:gap-40 mb-20 text-center">
            {/* Company Links Section */}
            <div>
              <h4 className="text-xs font-bold tracking-[3px] text-white/40 uppercase mb-8">חברה</h4>
              <ul className="space-y-5">
                {/* Increased link size to text-base */}
                <li><a href="#about" className="text-base text-white/60 hover:text-cyan-400 transition-colors duration-300">אודות</a></li>
                <li><a href="#services" className="text-base text-white/60 hover:text-cyan-400 transition-colors duration-300">שירותים</a></li>
                <li><a href="#pricing" className="text-base text-white/60 hover:text-cyan-400 transition-colors duration-300">מחירון</a></li>
              </ul>
            </div>
            
            {/* Legal Links Section */}
            <div>
              <h4 className="text-xs font-bold tracking-[3px] text-white/40 uppercase mb-8">משפטי</h4>
              <ul className="space-y-5">
                <li><a href="/terms" className="text-base text-white/60 hover:text-cyan-400 transition-colors duration-300">תנאי שימוש</a></li>
                <li><a href="/privacy" className="text-base text-white/60 hover:text-cyan-400 transition-colors duration-300">פרטיות</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Panel */}
          <div className="w-full pt-10 border-t border-white/10 flex flex-col items-center gap-8">
            {/* Copyright text slightly larger */}
            <div className="text-[12px] text-white/30 uppercase tracking-[3px] font-semibold" dir="ltr">
              © {currentYear} AUTO MIND SOLUTIONS
            </div>
            
            {/* Origin Badge */}
            <div className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-[12px] uppercase tracking-widest text-white/50">
              <span>נבנה עם</span>
              <FaHeart className="w-3 h-3 text-red-500/70 mx-0.5" />
              <span>בישראל</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}