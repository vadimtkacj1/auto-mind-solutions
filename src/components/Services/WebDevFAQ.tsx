"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

export const WEB_DEV_FAQ_ITEMS = [
  {
    question: "כמה עולה לבנות אתר?",
    answer: "טווח מחיר בניית אתר משתנה מאוד מפרויקט לפרויקט. עלות הקמת אתר אינטרנט תלויה במורכבות המערכת, בכמות העמודים, והאם נדרש פיתוח מאפס (Custom) או התאמה של מערכת קיימת. נשמח לתת לכם הצעת מחיר שקופה לאחר שיחת אפיון.",
  },
  {
    question: "האם אתם מספקים גם אחסון אתרים?",
    answer: "בהחלט. כל פרויקט של יצירת אתרים חייב לשבת על שרת חזק. אנחנו מציעים שירותי אחסון אתרים בשרתי ענן מתקדמים, כדי להבטיח שהאתר לא יקרוס לעולם, גם בזמני עומס של קמפיינים.",
  },
  {
    question: "האם האתר יהיה מוכן לקידום אורגני?",
    answer: "חד משמעית כן! זהו הערך המוסף המרכזי שלנו. כל פרויקט שאנחנו מבצעים כולל תשתית אופטימלית עבור קידום אתר אינטרנט בהמשך הדרך, מה שיחסוך לכם אלפי שקלים על תיקוני קוד עתידיים.",
  },
  {
    question: "כמה זמן לוקח לבנות אתר?",
    answer: "תלוי במורכבות הפרויקט. אתר תדמית בסיסי יכול להיות מוכן תוך 4-6 שבועות. אתר מכירות מורכב או מערכת Custom יכולים לקחת 8-16 שבועות. נציג לכם לוח זמנים מדויק בשלב האפיון.",
  },
  {
    question: "האם תומכים באתר לאחר ההשקה?",
    answer: "כמובן! אנחנו מציעים חבילות תחזוקה שוטפות הכוללות עדכוני תוכן, עדכוני אבטחה, גיבויים אוטומטיים, ותמיכה טכנית. האתר שלכם לא יישאר לבד אחרי ההשקה.",
  },
  {
    question: "האם האתר יהיה מותאם למובייל?",
    answer: "כל אתר שאנחנו בונים הוא Responsive ומותאם באופן מושלם לכל מכשיר - סמארטפון, טאבלט ומחשב. זה לא אופציונלי, זה סטנדרט.",
  },
];

export function WebDevFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-white" dir="rtl">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <MessageCircle className="w-8 h-8 text-[var(--color-primary)]" strokeWidth={1.5} />
            <span className="text-[16px] md:text-[20px] font-black tracking-[0.3em] uppercase text-[var(--color-primary)]">
              שאלות נפוצות
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mt-4 leading-tight">
            שאלות על תהליך הקמת אתרים
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            התשובות לכל מה שרציתם לדעת על בניית אתרים
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {WEB_DEV_FAQ_ITEMS.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 px-6 md:px-8 py-6 md:py-7 text-right bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all duration-300"
                >
                  <span className="flex-1 text-xl md:text-2xl font-black text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 md:w-7 md:h-7 text-slate-400 group-hover:text-[var(--color-primary)] transition-colors" strokeWidth={2} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 py-6 bg-slate-100 rounded-b-2xl -mt-2">
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="text-slate-600 text-lg md:text-xl leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 md:p-14">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                אל תתפשרו על הנוכחות הדיגיטלית שלכם
              </h3>
              <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-2">
                תהליך חכם של בניית אתרים בהתאמה אישית הוא הצעד הראשון להפיכת העסק שלכם למעצמה דיגיטלית שמייצרת עבודה באופן שוטף.
              </p>
              <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-8">
                מוכנים להעלות הילוך? השאירו פרטים למטה, והצוות שלנו יחזור אליכם לשיחת ייעוץ מקצועית ולתכנון האתר החדש שלכם.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-blue-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-[var(--color-primary)]/30 hover:shadow-xl hover:shadow-[var(--color-primary)]/40 transition-all duration-300"
                >
                  קבעו שיחת ייעוץ חינם
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
