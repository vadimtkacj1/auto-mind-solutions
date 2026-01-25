'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { handleSmoothScrollClick } from '@/src/utils/smoothScroll'; 

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use standard scrollY or Lenis scroll value
      const lenis = (window as any).lenis;
      const scrollY = lenis?.scroll ?? window.scrollY ?? 0;
      
      // Threshold: only show background if scrolled more than 40px
      // This prevents the background from flickering at the very top
      setIsScrolled(scrollY > 40);
    };

    // Run check on mount to handle page refreshes in the middle of the page
    handleScroll();

    // Standard scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Lenis smooth scroll listener (if present)
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.on('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (lenis) lenis.off('scroll', handleScroll);
    };
  }, []);

  // Prevent body scrolling when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'בית', href: '#home' },
    { label: 'שירותים', href: '#services' },
    { label: 'טכנולוגיות', href: '#tech' },
    { label: 'מחירים', href: '#pricing' },
    { label: 'שאלות', href: '#faq' },
    { label: 'צור קשר', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScrollClick(e, 80); 
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        dir="rtl"
        style={{
          backgroundColor: isScrolled || mobileMenuOpen ? 'rgba(5, 10, 21, 0.95)' : 'transparent',
        }}
        className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-500 ease-in-out h-20 flex items-center ${
          isScrolled || mobileMenuOpen
            ? 'backdrop-blur-md border-b border-white/10 shadow-2xl'
            : 'border-b border-transparent shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="relative z-[10001] flex items-center"
            dir="ltr"
          >
            {/* Subtle scale transition on scroll */}
            <div className={`transition-all duration-500 origin-left flex items-center h-12 w-[160px] md:w-[200px] ${
              isScrolled ? 'scale-95' : 'scale-100'
            }`}>
              <Image
                src="/images/AITTERRA.svg"
                alt="Auto Mind Logo"
                width={200}
                height={60}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-lg font-bold text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            <a
              href="#contact"
              onClick={handleNavClick}
              className="px-8 py-3 rounded-xl text-lg font-extrabold text-white bg-[#3b82f6] hover:bg-[#2563eb] transition-all shadow-lg shadow-blue-500/20"
            >
              בואו נדבר
            </a>
          </nav>

          {/* MOBILE TOGGLE (HAMBURGER) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative z-[10001] p-2"
            aria-label="Toggle Menu"
          >
            <div className="w-9 space-y-2">
              <span className={`block h-1.5 w-9 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-3.5' : ''}`} />
              <span className={`block h-1.5 w-9 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-1.5 w-9 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-3.5' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-md lg:hidden z-[9997] transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <aside 
        dir="rtl"
        className={`fixed top-0 right-0 h-full w-[320px] bg-[#050a15] z-[9998] transform transition-transform duration-300 ease-in-out lg:hidden border-l border-white/10 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-10 flex flex-col h-full">
          <div className="mb-16 flex items-center" dir="ltr">
            <Image
              src="/images/AITTERRA.svg"
              alt="Auto Mind Logo"
              width={180}
              height={50}
              className="h-12 w-auto object-contain"
            />
          </div>
          
          <nav className="flex flex-col gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-3xl font-bold text-white/90 active:text-[#3b82f6] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}