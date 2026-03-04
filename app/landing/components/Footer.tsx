'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={footerVariants}
      className="bg-black py-12"
    >
      <div className="container mx-auto px-4 max-w-lg">
        {/* Logo & Tagline */}
        <div className="text-center mb-8 pb-8 border-b border-gray-800" dir="rtl">
          <h3 className="text-2xl font-bold mb-3 text-white">AITERRA</h3>
          <p className="text-white text-sm">
            בונים משרדי דיגיטל שמשרתים את צמיחה אמיתית לעסקים.
          </p>
        </div>

        {/* Two Columns: Navigation & Contact */}
        {/* Змінено тут: flex-col для мобілок, sm:flex-row для десктопу, додано спільний dir="rtl" */}
        <div
          className="flex flex-row justify-between gap-4 mb-8 pb-8 border-b border-gray-800"
          dir="rtl"
        >
          {/* Right Column - Navigation */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-4 text-white">ניווט</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                className="text-white hover:text-blue-400 transition cursor-pointer"
              >
                אודות
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className="text-white hover:text-blue-400 transition cursor-pointer"
              >
                שירותים
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, '#portfolio')}
                className="text-white hover:text-blue-400 transition cursor-pointer"
              >
                עבודות
              </a>
              <a
                href="#blog"
                onClick={(e) => handleNavClick(e, '#blog')}
                className="text-white hover:text-blue-400 transition cursor-pointer"
              >
                בלוג
              </a>
            </nav>
          </div>

          {/* Left Column - Contact */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-4 text-white">איך קשר</h4>
            <div className="space-y-2 text-white">
              <p>טלפון</p>
              <p>אימייל</p>
              <p>כתובנה</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white text-sm" dir="rtl">
            כל הזכויות שמורות ©
          </p>
        </div>
      </div>
    </motion.footer>
  );
}