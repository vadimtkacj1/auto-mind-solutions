'use client'
import { useState } from 'react';
import { Reveal } from '../ui/Reveal';

const faqs = [
  {
    question: 'כמה זמן לוקח לבנות אתר?',
    answer: 'תלוי במורכבות הפרויקט. אתר בסיסי יכול להיות מוכן תוך 2–3 שבועות, ופרויקטים מורכבים יותר בדרך כלל לוקחים 6–8 שבועות. לאחר שיחת הייעוץ הראשונה תקבלו לוח זמנים מדויק.',
  },
  {
    question: 'מה כולל שירות ה-SEO שלכם?',
    answer: 'שירות ה-SEO שלנו כולל מחקר מילות מפתח לעסקים קטנים ובינוניים בישראל, אופטימיזציה טכנית של האתר, בניית תוכן איכותי, קישורים חיצוניים וניתוח ביצועים שוטף. אנחנו עובדים לפי תוצאות מדידות.',
  },
  {
    question: 'האם האתרים רספונסיביים?',
    answer: 'בהחלט! כל אתר שאנחנו בונים מותאם באופן מלא למובייל, טאבלט ומחשב. אנחנו מתחילים מגישת Mobile First ומוודאים שהאתר נראה מושלם על כל מכשיר.',
  },
  {
    question: 'מה קורה אחרי השקת האתר?',
    answer: `אחרי השקת האתר אנחנו עובדים עם אחסון עלינו לשנה אחת בסרבר בעל אבטחה גבוהה ומהירות תגובה מעולה.
במידת הצורך אנחנו מציעים גם תחזוקה שוטפת וגובים תשלום בהתאם לדרישות הלקוח (עדכונים, שינויים, תוספות ופיתוחים).`,
  },
    {
    question: `האם אתם גם מנהלים קמפיינים ושיווק אחרי שהאתר מוכן?`,
    answer: `בהחלט. אנחנו יכולים לנהל עבורך שיווק ממומן (Meta / Google / TikTok), שיווק אורגני, בניית אסטרטגיה, קריאייטיבים ומעקב ביצועים – כדי להפוך את האתר למכונת לידים ומכירות.`,
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-[#f8fafc] z-10"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none opacity-40">
        <svg className="absolute -top-24 -left-24 text-[var(--color-primary)] opacity-10" width="600" height="600" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="1" fill="currentColor" />
          <path d="M100 100L140 60M100 100L150 110M100 100L60 140M100 100L50 80" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="140" cy="60" r="2" fill="currentColor" />
          <circle cx="150" cy="110" r="1.5" fill="currentColor" />
          <circle cx="60" cy="140" r="2.5" fill="currentColor" />
          <circle cx="50" cy="80" r="1.8" fill="currentColor" />
        </svg>

        <svg className="absolute -bottom-32 -right-32 text-[var(--color-primary)] opacity-10" width="800" height="800" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-rgb),0.03)_0%,transparent_70%)]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section - Massive Title Implementation */}
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mb-10 text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight text-center">
              יש לכם <span className="text-[var(--color-primary)]">שאלות?</span>
            </h2>
            <p className="text-xl sm:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
              ריכזנו עבורכם את התשובות לכל מה שחשוב לדעת לפני שמתחילים לבנות את הנוכחות הדיגיטלית שלכם.
            </p>
          </div>
        </Reveal>

        {/* FAQ List with improved spacing and typography */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <Reveal delay={0.05 * index}>
                <div 
                  className={`group transition-all duration-500 rounded-[2.5rem] border ${
                    openIndex === index 
                      ? 'bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-[var(--color-primary)]/20' 
                      : 'bg-white/60 backdrop-blur-sm border-gray-200 hover:border-[var(--color-primary)]/30 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-center p-8 sm:p-10 outline-none"
                  >
                    <div className="flex items-center justify-center gap-6">
                      <span className={`text-2xl sm:text-3xl font-extrabold transition-colors text-center ${
                        openIndex === index ? 'text-[var(--color-primary)]' : 'text-slate-800 group-hover:text-[var(--color-primary)]'
                      }`}>
                        {faq.question}
                      </span>
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          openIndex === index
                            ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/30 rotate-180'
                            : 'bg-slate-100 text-slate-400 rotate-0 group-hover:bg-slate-200'
                        }`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>

                    <div 
                      className={`grid transition-all duration-500 ease-in-out ${
                        openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-8 mt-8 border-t border-slate-100">
                          <p className="text-slate-600 leading-loose text-lg sm:text-xl font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}