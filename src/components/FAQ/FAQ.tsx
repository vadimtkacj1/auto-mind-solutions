'use client'
import { useState } from 'react';
import { Reveal } from '../ui/Reveal';
import { handleSmoothScrollClick } from '../../utils/smoothScroll';

const faqs = [
  {
    question: 'כמה זמן לוקח לבנות אתר?',
    answer: 'תלוי במורכבות הפרויקט. אתר בסיסי יכול להיות מוכן תוך 2–3 שבועות, ופרויקטים מורכבים יותר בדרך כלל לוקחים 6–8 שבועות. לאחר שיחת הייעוץ הראשונה תקבלו לוח זמנים מדויק.',
  },
  {
    question: 'האם אני יכול לעדכן את האתר בעצמי?',
    answer: 'כן! אנחנו בונים אתרים עם ממשק ניהול תוכן פשוט ואינטואיטיבי. בנוסף, אנחנו נותנים הדרכה מלאה ותמיכה מתמשכת.',
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
    answer: 'אנחנו מעניקים תמיכה מתמשכת לפי החבילה שבחרת (30-90 יום). לאחר מכן ניתן להמשיך עם חבילת תחזוקה חודשית שכוללת גיבויים, עדכוני אבטحة, ושיפורים שוטפים.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-[#f8fafc]"
    >
      {/* --- Декоративные SVG элементы для фона (Auto Mind Solutions style) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none opacity-40">
        {/* Абстрактная "нейронная сеть" слева сверху */}
        <svg className="absolute -top-24 -left-24 text-[var(--color-primary)] opacity-10" width="600" height="600" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="1" fill="currentColor" />
          <path d="M100 100L140 60M100 100L150 110M100 100L60 140M100 100L50 80" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="140" cy="60" r="2" fill="currentColor" />
          <circle cx="150" cy="110" r="1.5" fill="currentColor" />
          <circle cx="60" cy="140" r="2.5" fill="currentColor" />
          <circle cx="50" cy="80" r="1.8" fill="currentColor" />
        </svg>

        {/* Геометрический паттерн "решения" справа снизу */}
        <svg className="absolute -bottom-32 -right-32 text-[var(--color-primary)] opacity-10" width="800" height="800" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Радиальный градиент для фокуса в центре */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-rgb),0.03)_0%,transparent_70%)]" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-white border border-gray-200 text-[var(--color-primary)] text-xs sm:text-sm font-bold shadow-sm mb-6 uppercase tracking-wider">
              FAQ • Auto Mind Solutions
            </span>
            <h2 className="mb-6 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              יש לכם <span className="text-[var(--color-primary)]">שאלות?</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
              ריכזנו עבורכם את התשובות לכל מה שחשוב לדעת לפני שמתחילים לבנות את הנוכחות הדיגיטלית שלכם.
            </p>
          </div>
        </Reveal>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div key={index}>
              <Reveal delay={0.05 * index}>
                <div 
                  className={`group transition-all duration-500 rounded-3xl border ${
                    openIndex === index 
                      ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-[var(--color-primary)]/20' 
                      : 'bg-white/60 backdrop-blur-sm border-gray-200 hover:border-[var(--color-primary)]/30 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-right p-6 sm:p-7 outline-none"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className={`text-lg sm:text-xl font-bold transition-colors ${
                        openIndex === index ? 'text-[var(--color-primary)]' : 'text-slate-800 group-hover:text-[var(--color-primary)]'
                      }`}>
                        {faq.question}
                      </span>
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          openIndex === index
                            ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/30 rotate-180'
                            : 'bg-slate-100 text-slate-400 rotate-0 group-hover:bg-slate-200'
                        }`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
                        <div className="pt-5 mt-5 border-t border-slate-100">
                          <p className="text-slate-600 leading-loose text-base sm:text-lg">
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

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-1 rounded-[2rem] bg-gray-100/50 backdrop-blur-md border border-white">
            <a
              href="#contact"
              onClick={handleSmoothScrollClick}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-[1.8rem] text-white font-bold bg-slate-900 hover:bg-[var(--color-primary)] transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-[var(--color-primary)]/20 text-base"
            >
              צריכים עזרה נוספת? דברו איתנו
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}