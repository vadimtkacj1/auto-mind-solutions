'use client'
import { useState, useEffect, useCallback } from 'react';
import { handleSmoothScrollClick } from '../../utils/smoothScroll';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Header меняется позже - после 200px скролла
      const offset = window.scrollY > 200;
      if (isScrolled !== offset) setIsScrolled(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const closeMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScrollClick(e, 100); // Offset for fixed header
    closeMenu();
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen 
            ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm border-b' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={handleNavClick}
            className="z-50 flex items-baseline font-black text-2xl tracking-tighter" 
            dir="ltr"
          >
            <span className={isScrolled || mobileMenuOpen ? 'text-gray-900' : 'text-white'}>AUTO</span>
            <span className="ml-1 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">MIND</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md"
            >
              בואו נדבר
            </a>
          </nav>

          {/* Burger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-50 p-2"
            aria-label="תפריט"
          >
            <div className="w-6 space-y-1.5">
              <span className={`block h-0.5 w-6 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2 bg-blue-600' : isScrolled ? 'bg-gray-900' : 'bg-white'}`} />
              <span className={`block h-0.5 w-6 transition-opacity ${mobileMenuOpen ? 'opacity-0' : isScrolled ? 'bg-gray-900' : 'bg-white'}`} />
              <span className={`block h-0.5 w-6 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-blue-600' : isScrolled ? 'bg-gray-900' : 'bg-white'}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar (Right side for RTL) */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      <aside 
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="mb-10 pt-2">
             <span className="text-2xl font-black tracking-tighter text-gray-900">AUTO</span>
             <span className="ml-1 text-2xl font-black tracking-tighter text-blue-600">MIND</span>
          </div>
          
          <nav className="flex flex-col gap-1 text-right">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="py-3 px-4 text-lg font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-6">
            <a
              href="#contact"
              onClick={handleNavClick}
              className="flex items-center justify-center py-4 rounded-2xl text-white font-bold bg-blue-600 shadow-lg"
            >
              בואו נדבר
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}