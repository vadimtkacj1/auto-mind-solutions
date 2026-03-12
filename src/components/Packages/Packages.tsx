"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

// --- TYPES ---
interface PackagePlan {
  slug: string;
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  buttonText: string;
}

// --- DATA ---
const plans: PackagePlan[] = [
  {
    name: "Launch Starter",
    description: "פתרון מהיר לעסקים שרוצים להתחיל להביא לידים",
    features: [
      "דף נחיתה ממיר מקצועי",
      "מבנה שיווקי ממוקד המרות",
      "התאמה מלאה לקמפיינים ממומנים",
      "3 גרפיקות סטטיות מקצועיות למודעות",
      "עיצוב מודרני ואופטימיזציה בסיסית",
    ],
    slug: "launch-starter",
    buttonText: "למידע נוסף",
  },
  {
    name: "Growth Landing System",
    description: "מערכת דפי נחיתה לבדיקת קמפיינים והגדלת לידים",
    features: [
      "3 דפי נחיתה שונים לקמפיינים שונים",
      "3 גרפיקות מקצועיות לכל דף נחיתה (סה״כ 9 מודעות)",
      "מבנה מותאם לפרסום בפייסבוק ואינסטגרם",
      "עיצוב ממוקד המרות",
      "פתרון שיווקי מתקדם במחיר נגיש",
    ],
    slug: "growth-landing-system",
    buttonText: "למידע נוסף",
  },
  {
    name: "Business Presence Pro",
    description: "אתר עסקי מלא + מערכת שיווק",
    features: [
      "אתר תדמית מקצועי לעסק",
      "סרטוני AI להצגת השירותים",
      "4 מאמרי SEO לקידום בגוגל",
      "ניהול קמפיין Facebook & Instagram",
      "תוכנית SEO אסטרטגית",
      "3 מודעות סטטיות מקצועיות",
    ],
    highlighted: true,
    slug: "business-presence-pro",
    badge: "פופולרי",
    buttonText: "למידע נוסף",
  },
  {
    name: "Digital Commerce Elite",
    description: "מערכת מכירה מלאה לעסקים מתקדמים",
    features: [
      "אתר מתקדם עם מערכת CMS לניהול תוכן",
      "חנות אינטרנטית מלאה",
      "מערכת סליקה מאובטחת",
      "מערכת לניהול מלאי",
      "הזנת עד 300 מוצרים",
      "מודעות מקצועיות לרשתות חברתיות",
      "תשתית מלאה להגדלת מכירות אונליין",
    ],
    slug: "digital-commerce-elite",
    buttonText: "למידע נוסף",
  },
];

// --- MAIN COMPONENT ---
export function Packages() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="packages"
      className="relative bg-white overflow-visible z-20 py-20 md:py-28"
    >
      <div className="w-full flex items-center justify-center z-10 px-6 py-10">
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-14 lg:mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight" dir="rtl">
              החבילות{" "}
              <span className="text-[var(--color-primary)]">שלנו</span>
            </h2>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 w-full items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                dir="rtl"
                className={`group relative flex flex-col h-full rounded-3xl p-8 lg:p-10 border transition-all duration-300
                ${
                  plan.highlighted
                    ? "bg-white border-2 border-[var(--color-primary)] shadow-[0_24px_48px_-12px_rgba(0,112,255,0.15)] lg:scale-[1.02] z-30"
                    : "bg-white border border-slate-200 hover:border-slate-300 hover:shadow-[0_12px_48px_-8px_rgba(0,0,0,0.08)] z-10"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white text-[11px] font-bold px-5 py-1.5 rounded-full z-50 whitespace-nowrap tracking-wider">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-black mb-3 ${plan.highlighted ? "text-[var(--color-primary)]" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">{plan.description}</p>
                </div>

                <div className={`h-px w-full mb-6 ${plan.highlighted ? "bg-slate-200" : "bg-slate-100"}`} />

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="mt-0.5 p-1 rounded-full shrink-0 bg-slate-100 group-hover:bg-[var(--color-primary)]/10 transition-colors">
                        <Check className={plan.highlighted ? "text-[var(--color-primary)]" : "text-slate-600"} size={14} strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 text-[15px] leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`/packages/${plan.slug}`}
                  className={`w-full py-4 rounded-2xl font-bold text-base text-center transition-all duration-300
                  ${
                    plan.highlighted
                      ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-lg shadow-[rgba(0,112,255,0.2)]"
                      : "bg-slate-900 text-white hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {plan.buttonText}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
