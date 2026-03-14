"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

// --- TYPES ---
interface PackagePlan {
  slug: string;
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

const FEATURES_VISIBLE_DEFAULT = 3;

// --- DATA ---
const plans: PackagePlan[] = [
  {
    name: "Launch Starter",
    slug: "launch-starter",
    description: "פתרון מהיר לעסקים שרוצים להתחיל להביא לידים",
    features: [
      "דף נחיתה ממיר מקצועי",
      "מבנה שיווקי ממוקד המרות",
      "התאמה מלאה לקמפיינים ממומנים",
      "3 גרפיקות סטטיות מקצועיות למודעות",
      "עיצוב מודרני ואופטימיזציה בסיסית",
    ],
  },
  {
    name: "Growth Landing System",
    description: "מערכת דפי נחיתה לבדיקת קמפיינים והגדלת לידים",
    slug: "growth-landing-system",
    features: [
      "3 דפי נחיתה שונים לקמפיינים שונים",
      "3 גרפיקות מקצועיות לכל דף נחיתה (סה״כ 9 מודעות)",
      "מבנה מותאם לפרסום בפייסבוק ואינסטגרם",
      "עיצוב ממוקד המרות",
      "פתרון שיווקי מתקדם במחיר נגיש",
    ],
  },
  {
    name: "Business Presence Pro",
    description: "אתר עסקי מלא + מערכת שיווק",
    slug: "business-presence-pro",
    highlighted: true,
    badge: "פופולרי",
    features: [
      "אתר תדמית מקצועי לעסק",
      "סרטוני AI להצגת השירותים",
      "4 מאמרי SEO לקידום בגוגל",
      "ניהול קמפיין Facebook & Instagram",
      "תוכנית SEO אסטרטגית",
      "3 מודעות סטטיות מקצועיות",
    ],
  },
  {
    name: "Digital Commerce Elite",
    description: "מערכת מכירה מלאה לעסקים מתקדמים",
    slug: "digital-commerce-elite",
    features: [
      "אתר מתקדם עם מערכת CMS לניהול תוכן",
      "חנות אינטרנטית מלאה",
      "מערכת סליקה מאובטחת",
      "מערכת לניהול מלאי",
      "הזנת עד 300 מוצרים",
      "מודעות מקצועיות לרשתות חברתיות",
      "תשתית מלאה להגדלת מכירות אונליין",
    ],
  },
];

// --- MAIN COMPONENT ---
export function Packages() {
  const containerRef = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <section
      ref={containerRef}
      id="packages"
      dir="rtl"
      className="relative overflow-visible rounded-t-[2rem] md:rounded-t-[2.5rem] py-20 md:py-28"
      style={{
        background: "linear-gradient(180deg, #fafbff 0%, #ffffff 30%, #ffffff 100%)",
      }}
    >
      <div className="relative z-10 w-full mx-auto max-w-4xl px-6">
        {/* Header - חבילות */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px 80px 0px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            חבילות שלנו
          </h1>
          <p className="mt-5 text-slate-500 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
            בחרו את החבילה שמתאימה לצרכים העסקיים שלכם
          </p>
        </motion.div>

        {/* Vertical stack - one package under another */}
        <div className="flex flex-col gap-6 md:gap-8">
          {plans.map((plan, index) => {
            const isExpanded = expanded[plan.slug] ?? false;
            const hasMore = plan.features.length > FEATURES_VISIBLE_DEFAULT;
            const visibleFeatures = hasMore && !isExpanded
              ? plan.features.slice(0, FEATURES_VISIBLE_DEFAULT)
              : plan.features;

            return (
              <motion.article
                key={plan.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px 80px 0px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`group block w-full rounded-[1.5rem] md:rounded-[1.75rem] transition-all duration-400 overflow-hidden relative
                  ${
                    plan.highlighted
                      ? "border border-[var(--color-primary)]/20 bg-white shadow-[0_4px_24px_-4px_rgba(0,112,255,0.15),0_8px_40px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_-8px_rgba(0,112,255,0.2),0_16px_56px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                      : "border border-slate-200/80 bg-white shadow-[0_2px_12px_-2px_rgba(0,0,0,0.05),0_8px_32px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08),0_12px_40px_-8px_rgba(0,0,0,0.1)] hover:border-slate-300/80 hover:-translate-y-0.5"
                  }`}
              >
                <div className="p-6 md:p-8 lg:p-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Content: name + description + features */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4 flex-wrap">
                      {plan.badge && (
                        <span className="inline-flex rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider shrink-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-sm">
                          {plan.badge}
                        </span>
                      )}
                      <h2
                        className={`text-xl md:text-2xl font-black tracking-tight ${
                          plan.highlighted ? "text-[var(--color-primary)]" : "text-slate-900"
                        }`}
                      >
                        {plan.name}
                      </h2>
                    </div>
                    <p className="mt-3 text-slate-500 text-base md:text-lg leading-relaxed">
                      {plan.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {visibleFeatures.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-[15px] leading-snug">
                          <span className={`shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ${
                            plan.highlighted ? "bg-[var(--color-primary)]/15" : "bg-slate-100"
                          }`}>
                            <Check
                              className={plan.highlighted ? "text-[var(--color-primary)]" : "text-slate-500"}
                              size={12}
                              strokeWidth={3}
                            />
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {hasMore && (
                      <button
                        type="button"
                        onClick={() => setExpanded((prev) => ({ ...prev, [plan.slug]: !prev[plan.slug] }))}
                        className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[var(--color-primary)] font-bold text-sm border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 hover:bg-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 transition-all duration-200"
                      >
                        {isExpanded ? (
                          <>
                            הצג פחות
                            <ChevronUp className="w-4 h-4" aria-hidden />
                          </>
                        ) : (
                          <>
                            הצג עוד ({plan.features.length - FEATURES_VISIBLE_DEFAULT})
                            <ChevronDown className="w-4 h-4" aria-hidden />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* CTA button - צור קשר */}
                  <div className="shrink-0">
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 rounded-lg font-bold text-base px-7 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                        ${
                          plan.highlighted
                            ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/25 hover:bg-[var(--color-primary-dark)] hover:shadow-xl"
                            : "bg-slate-900 text-white shadow-md hover:bg-slate-800 hover:shadow-lg border-2 border-transparent"
                        }`}
                    >
                      צור קשר
                      <ArrowLeft className="w-4 h-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
