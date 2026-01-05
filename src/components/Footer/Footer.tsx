
import { Github, Heart, Instagram, Linkedin, Twitter } from 'lucide-react';

type Page = 'home' | 'privacy' | 'terms';

interface FooterProps {
  onNavigate?: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'אודות', href: '#about' },
      { label: 'שירותים', href: '#services' },
      { label: 'טכנולוגיות', href: '#tech' },
      { label: 'מחירים', href: '#pricing' },
    ],
    legal: [
      { label: 'תנאי שימוש', onClick: () => onNavigate?.('terms') },
      { label: 'מדיניות פרטיות', onClick: () => onNavigate?.('privacy') },
      { label: 'שאלות נפוצות', href: '#faq' },
    ],
    contact: [
      { label: 'hello@automind.studio', href: 'mailto:hello@automind.studio' },
      { label: '050-123-4567', href: 'tel:050-123-4567' },
      { label: 'תל אביב, ישראל', href: '#' },
    ],
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer */}
      <div className="bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-dark)] text-white py-20 px-6 lg:px-12">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 right-[10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute bottom-0 left-[10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <span className="text-2xl font-extrabold tracking-tight">
                  AUTO<span className="text-gradient"> MIND</span>
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                סוכנות עיצוב ו-SEO מובילה בישראל. בונים חוויות דיגיטליות שמניעות צמיחה.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { label: 'Twitter', Icon: Twitter },
                  { label: 'LinkedIn', Icon: Linkedin },
                  { label: 'Instagram', Icon: Instagram },
                  { label: 'GitHub', Icon: Github },
                ].map(({ label, Icon }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/70 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-bold text-white/40 tracking-wider uppercase mb-6">החברה</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-bold text-white/40 tracking-wider uppercase mb-6">משפטי</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-bold text-white/40 tracking-wider uppercase mb-6">צור קשר</h4>
              <ul className="space-y-3">
                {footerLinks.contact.map((contact, index) => (
                  <li key={index}>
                    <a
                      href={contact.href}
                      className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {contact.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-right">
              © {currentYear} AUTO MIND STUDIO. כל הזכויות שמורות.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span>נבנה עם</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" aria-hidden="true" />
              <span>בישראל</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
