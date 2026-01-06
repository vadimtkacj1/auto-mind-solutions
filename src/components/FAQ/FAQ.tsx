import { useState } from 'react';
import { Reveal } from '../ui/Reveal';

const faqs = [
  {
    question: 'כמה זמן לוקח לבנות אתר?',
    answer:
      'תלוי במורכבות הפרויקט. אתר בסיסי יכול להיות מוכן תוך 2–3 שבועות, ופרויקטים מורכבים יותר בדרך כלל לוקחים 6–8 שבועות. לאחר שיחת הייעוץ הראשונה תקבלו לוח זמנים מדויק.',
  },
  {
    question: 'האם אני יכול לעדכן את האתר בעצמי?',
    answer:
      'כן! אנחנו בונים אתרים עם ממשק ניהול תוכן פשוט ואינטואיטיבי. בנוסף, אנחנו נותנים הדרכה מלאה ותמיכה מתמשכת.',
  },
  {
    question: 'מה כולל שירות ה-SEO שלכם?',
    answer:
      'שירות ה-SEO שלנו כולל מחקר מילות מפתח מעמיק, אופטימיזציה טכנית של האתר, בניית תוכן איכותי, קישורים חיצוניים, וניתוח ביצועים שוטף. אנחנו עובדים לפי תוצאות מדידות.',
  },
  {
    question: 'האם האתרים רספונסיביים?',
    answer:
      'בהחלט! כל אתר שאנחנו בונים מותאם באופן מלא למובייל, טאבלט ומחשב. אנחנו מתחילים מגישת Mobile First ומוודאים שהאתר נראה מושלם על כל מכשיר.',
  },
  {
    question: 'מה קורה אחרי השקת האתר?',
    answer:
      'אנחנו מעניקים תמיכה מתמשכת לפי החבילה שבחרת (30-90 יום). לאחר מכן ניתן להמשיך עם חבילת תחזוקה חודשית שכוללת גיבויים, עדכוני אבטחה, ושיפורים שוטפים.',
  },
  {
    question: 'האם אתם עובדים עם לקוחות מחוץ לישראל?',
    answer:
      'כן! אנחנו עובדים עם לקוחות מכל העולם. יש לנו ניסיון רב באתרים רב-לשוניים ובהתאמה לשווקים שונים.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-28 lg:py-36 px-6 lg:px-12 relative overflow-hidden section-subtle"
    >

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--color-gray-200)]" />

      <div className="max-w-[900px] mx-auto relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold mb-6">
              שאלות נפוצות
            </span>
            <h2 className="mb-6">יש לכם שאלות?</h2>
            <p>הנה תשובות קצרות וברורות לשאלות הנפוצות ביותר.</p>
          </div>
        </Reveal>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              <Reveal delay={0.04 * index}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full text-right p-6 rounded-2xl transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-white shadow-lg border border-[var(--color-primary)]/20'
                      : 'bg-white border border-[var(--color-gray-200)] hover:border-[var(--color-primary)]/20 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className={`text-right transition-colors ${openIndex === index ? 'text-[var(--color-primary)]' : ''}`}>
                      {faq.question}
                    </h4>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-[var(--color-primary)] text-white rotate-180'
                          : 'bg-[var(--color-gray-100)] text-[var(--color-gray-500)] rotate-0'
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 4L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {openIndex === index && (
                    <div className="mt-4 pt-4 border-t border-[var(--color-gray-100)]">
                      <p className="text-[var(--color-gray-600)] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </button>
              </Reveal>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[var(--color-gray-500)] mb-4">לא מצאת תשובה לשאלה שלך?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[var(--color-primary)] font-semibold bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 transition-colors"
          >
            צור קשר איתנו
            <span>←</span>
          </a>
        </div>
      </div>
    </section>
  );
}
