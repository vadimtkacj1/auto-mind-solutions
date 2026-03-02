'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: Array<{ label: string; href: string }> = [
    { label: 'השירותים שלנו', href: '#services' },
    { label: 'פורטפוליו', href: '#portfolio' },
    { label: 'למה לבחור בנו?', href: '#why-us' },
    { label: 'עקבו אחרינו', href: '#follow' },
    { label: 'טופס יצירת קשר', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Burger - mobile only */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-12 h-12 rounded-2xl border-2 border-blue-500 flex items-center justify-center hover:bg-blue-50 transition"
            aria-label="Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Desktop nav - hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8" dir="rtl">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-gray-800 hover:text-blue-600 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <div className="h-6">
            <Image
              src="/images/logo.svg"
              alt="Aiterra"
              width={80}
              height={28}
              className="h-full w-auto"
              priority
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-white"
          style={{ zIndex: 9999 }}
          dir="rtl"
        >
          {/* Close button - top right (RTL) */}
          <div className="flex justify-start items-center px-6 py-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-12 h-12 rounded-2xl border-2 border-blue-500 flex items-center justify-center hover:bg-blue-50 transition"
              aria-label="Close Menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="px-6 py-8">
            <ul className="space-y-6 text-center">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-lg font-medium text-gray-800 hover:text-blue-600 transition block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}