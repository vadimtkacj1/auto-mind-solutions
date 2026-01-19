'use client';

import { useState, useEffect } from 'react';
import { handleSmoothScrollClick } from '../../utils/smoothScroll';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Function to update scroll state
    const handleScroll = () => {
      const lenis = (window as any).lenis;
      // Precise check for scroll position
      const scrollY = lenis?.scroll ?? window.scrollY ?? 0;
      
      // We only set it to true if scroll is actually more than 10px
      setIsScrolled(scrollY > 10);
    };

    // Run immediately on mount
    handleScroll();

    // Event listeners for both standard and Lenis scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.on('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (lenis) lenis.off('scroll', handleScroll);
    };
  }, []);

  // Sync body overflow with mobile menu state
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'בית', href: '#home' },
    { label: 'שירותים', href: '#services' },
    { label: 'טכנולוגיות', href: '#tech' },
    { label: 'מחירים', href: '#pricing' },
    { label: 'שאלות', href: '#faq' },
    { label: 'צור кשר', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScrollClick(e, 80); 
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        dir="rtl"
        data-lenis-prevent
        className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-500 ease-in-out ${
          isScrolled || mobileMenuOpen
            ? 'py-4 bg-[#050a15]/95 backdrop-blur-md border-b border-white/10 shadow-2xl'
            : 'py-8 !bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={handleNavClick}
            className="relative z-[10001] flex items-baseline font-black text-3xl tracking-tighter" 
            dir="ltr"
          >
            <span className="text-white">AUTO</span>
            <span className="ml-1 text-[#3b82f6]">MIND</span>
          </a>

          {/* Desktop Nav */}
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
              className="px-8 py-3 rounded-xl text-lg font-extrabold text-white bg-[#3b82f6] hover:bg-[#2563eb] transition-all"
            >
              בואו נדבר
            </a>
          </nav>

          {/* Burger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative z-[10001] p-2"
          >
            <div className="w-8 space-y-2">
              <span className={`block h-1 w-8 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-3' : ''}`} />
              <span className={`block h-1 w-8 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-1 w-8 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-3' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-md lg:hidden z-[9997] transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside 
        dir="rtl"
        className={`fixed top-0 right-0 h-full w-[300px] bg-[#050a15] z-[9998] transform transition-transform duration-300 ease-in-out lg:hidden border-l border-white/10 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-10 flex flex-col h-full">
          <div className="mb-12 flex items-baseline font-black text-3xl tracking-tighter" dir="ltr">
             <span className="text-white">AUTO</span>
             <span className="ml-1 text-[#3b82f6]">MIND</span>
          </div>
          <nav className="flex flex-col gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-2xl font-bold text-white/90"
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