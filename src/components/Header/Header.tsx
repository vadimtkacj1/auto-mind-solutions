import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'בית', href: '#home' },
    { label: 'שירותים', href: '#services' },
    { label: 'טכנולוגיות', href: '#tech' },
    { label: 'מחירים', href: '#pricing' },
    { label: 'שאלות', href: '#faq' },
    { label: 'צור קשר', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 glass shadow-lg shadow-black/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="relative group"
          >
            <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-[var(--color-dark)]' : 'text-white'
            }`}>
              AUTO
              <span className="text-gradient"> MIND</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] group-hover:w-full transition-all duration-300" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 group ${
                  isScrolled 
                    ? 'text-[var(--color-gray-600)] hover:text-[var(--color-primary)]' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                <span className="absolute inset-0 rounded-full bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/10 transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="mr-4 px-7 py-3 rounded-full text-sm font-bold text-white bg-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/25 hover:shadow-xl hover:shadow-[var(--color-primary)]/30 transition-all duration-300"
            >
              בואו נדבר
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all duration-300 ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}
          >
            <span
              className={`w-5 h-0.5 rounded-full transition-all ${
                mobileMenuOpen
                  ? 'rotate-45 translate-y-1.5 bg-[var(--color-primary)]'
                  : isScrolled
                    ? 'bg-[var(--color-dark)]'
                    : 'bg-white'
              }`}
            />
            <span className={`w-5 h-0.5 rounded-full transition-all ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'} ${isScrolled ? 'bg-[var(--color-dark)]' : 'bg-white'}`} />
            <span
              className={`w-5 h-0.5 rounded-full transition-all ${
                mobileMenuOpen
                  ? '-rotate-45 -translate-y-1.5 bg-[var(--color-primary)]'
                  : isScrolled
                    ? 'bg-[var(--color-dark)]'
                    : 'bg-white'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden transition-all duration-300">
          <nav className="px-6 py-6 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-semibold text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors py-3 px-4 rounded-xl hover:bg-[var(--color-primary)]/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full px-6 py-4 rounded-xl text-white text-center mt-4 font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] shadow-lg shadow-[var(--color-primary)]/25"
            >
              בואו נדבר
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
