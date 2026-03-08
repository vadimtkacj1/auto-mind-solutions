'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type LenisLike = {
  scroll?: number;
  on?: (event: string, cb: () => void) => void;
  off?: (event: string, cb: () => void) => void;
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on navigation (including hash changes).
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const close = () => setMobileMenuOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Use standard scrollY or Lenis scroll value
      const lenis = (window as unknown as { lenis?: LenisLike }).lenis;
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
    const lenis = (window as unknown as { lenis?: LenisLike }).lenis;
    if (lenis?.on) {
      lenis.on('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (lenis?.off) lenis.off('scroll', handleScroll);
    };
  }, []);

  // Prevent body scrolling when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  // Updated Navigation Items
  const navItems = [
    { label: 'ראשי', href: '/#home' },
    { label: 'השירותים שלנו', href: '/#services' },
    { label: 'עבודות שלנו', href: '/#portfolio' },
    { label: 'חבילות', href: '/#packages' },
  ];

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
        {/* Use LTR for layout so left/right are visually stable even inside RTL page */}
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full flex items-center justify-between" dir="ltr">
          {/* LEFT: Logo */}
          <Link href="/" className="relative z-[10001] flex items-center">
            <div className="flex items-center h-8 sm:h-9 w-[100px] sm:w-[120px] md:w-[140px]">
              <img
                src="/images/Aiterra.svg"
                alt="Aiterra Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* CENTER: Nav */}
          <nav className="hidden lg:flex items-center gap-10 flex-1 justify-center" dir="rtl">
            {navItems
              .map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('/#')) {
                      e.preventDefault();
                      const hash = item.href.replace('/', '');
                      // Если мы не на главной странице, переходим на главную с якорем
                      if (pathname !== '/') {
                        window.location.href = item.href;
                      } else {
                        const element = document.querySelector(hash);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }
                    }
                  }}
                  className="text-lg font-bold text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
          </nav>

          {/* RIGHT: CTA + Mobile burger */}
          <div className="flex items-center gap-4" dir="rtl">
            <Link
              href="/#contact"
              className="hidden lg:inline-flex px-8 py-3 rounded-xl text-lg font-extrabold text-white bg-[#3b82f6] hover:bg-[#2563eb] transition-all shadow-lg shadow-blue-500/20"
            >
              קביעת שיחת אסטרטגיה
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-[10001] p-2"
              aria-label="Toggle Menu"
            >
              <div className="w-9 space-y-2">
                <span
                  className={`block h-1.5 w-9 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-3.5' : ''}`}
                />
                <span
                  className={`block h-1.5 w-9 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`block h-1.5 w-9 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-3.5' : ''}`}
                />
              </div>
            </button>
          </div>
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
            <img
              src="/images/AiterraWH.svg"
              alt="Aiterra Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          
          <nav className="flex flex-col gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('/#')) {
                    e.preventDefault();
                    const hash = item.href.replace('/', '');
                    // Если мы не на главной странице, переходим на главную с якорем
                    if (pathname !== '/') {
                      window.location.href = item.href;
                    } else {
                      const element = document.querySelector(hash);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-3xl font-bold text-white/90 active:text-[#3b82f6] transition-colors"
              >
                {item.label}
              </a>
            ))}

            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center justify-center px-6 py-4 rounded-2xl text-xl font-extrabold text-white bg-[#3b82f6] hover:bg-[#2563eb] transition-all shadow-lg shadow-blue-500/20"
            >
              קביעת שיחת אסטרטגיה
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}