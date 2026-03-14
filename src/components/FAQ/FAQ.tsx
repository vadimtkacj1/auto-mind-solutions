"use client";
import { useState } from "react";
import { Reveal } from "../ui/Reveal";

const faqs = [
  {
    question: "כמה זמן לוקח לבנות אתר?",
    answer:
      "תלוי במורכבות הפרויקט. אתר בסיסי יכול להיות מוכן תוך 2–3 שבועות, ופרויקטים מורכבים יותר בדרך כלל לוקחים 6–8 שבועות. לאחר שיחת הייעוץ הראשונה תקבלו לוח זמנים מדויק.",
  },
  {
    question: "מה כולל שירות ה-SEO שלכם?",
    answer:
      "שירות ה-SEO שלנו כולל מחקר מילות מפתח לעסקים קטנים ובינוניים בישראל, אופטימיזציה טכנית של האתר, בניית תוכן איכותי, קישורים חיצוניים וניתוח ביצועים שוטף. אנחנו עובדים לפי תוצאות מדידות.",
  },
  {
    question: "האם האתרים רספונסיביים?",
    answer:
      "בהחלט! כל אתר שאנחנו בונים מותאם באופן מלא למובייל, טאבלט ומחשב. אנחנו מתחילים מגישת Mobile First ומוודאים שהאתר נראה מושלם על כל מכשיר.",
  },
  {
    question: "מה קורה אחרי השקת האתר?",
    answer: `אחרי השקת האתר אנחנו עובדים עם אחסון עלינו לשנה אחת בסרבר בעל אבטחה גבוהה ומהירות תגובה מעולה.
במידת הצורך אנחנו מציעים גם תחזוקה שוטפת וגובים תשלום בהתאם לדרישות הלקוח (עדכונים, שינויים, תוספות ופיתוחים).`,
  },
  {
    question: `האם אתם גם מנהלים קמפיינים ושיווק אחרי שהאתר מוכן?`,
    answer: `בהחלט. אנחנו יכולים לנהל עבורך שיווק ממומן (Meta / Google / TikTok), שיווק אורגני, בניית אסטרטגיה, קריאייטיבים ומעקב ביצועים – כדי להפוך את האתר למכונת לידים ומכירות.`,
  },
];

function PlusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`relative block h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
    >
      <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-current" />
      <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-current" />
    </span>
  );
}

function FaqRow({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-200/70">
      <button
        type="button"
        onClick={onToggle}
        className="group w-full py-5 sm:py-6 flex items-center justify-between gap-6 text-right outline-none"
        dir="ltr"
      >
        <span
          dir="rtl"
          className={`flex-1 text-right text-base sm:text-lg md:text-xl font-extrabold tracking-tight transition-colors ${
            isOpen ? "text-[var(--color-primary)]" : "text-slate-900 group-hover:text-[var(--color-primary)]"
          }`}
        >
          {question}
        </span>

        <span
          className={`flex-shrink-0 inline-flex items-center justify-center text-slate-500 transition-colors ${
            isOpen ? "text-[var(--color-primary)]" : "group-hover:text-[var(--color-primary)]"
          }`}
        >
          <PlusIcon isOpen={isOpen} />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-7 sm:pb-8 -mt-1">
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-3xl">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
type FaqItem = { question: string; answer: string };

export function FAQ({ items, title = "שאלות נפוצות" }: { items?: FaqItem[]; title?: string } = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const list = items ?? faqs;

  return (
    <section id="faq" className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="mb-10 sm:mb-14 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]">
              {title}
            </h2>
          </div>
        </Reveal>

        <div className="border-t border-slate-200/70">
          {list.map((faq, index) => (
            <Reveal key={faq.question} delay={0.03 * index}>
              <FaqRow
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}