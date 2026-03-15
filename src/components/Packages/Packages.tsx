"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Lazy load icons
const Check = dynamic(() => import("lucide-react").then(m => ({ default: m.Check })), { ssr: true });
const ArrowRight = dynamic(() => import("lucide-react").then(m => ({ default: m.ArrowRight })), { ssr: true });
const Rocket = dynamic(() => import("lucide-react").then(m => ({ default: m.Rocket })), { ssr: true });
const TrendingUp = dynamic(() => import("lucide-react").then(m => ({ default: m.TrendingUp })), { ssr: true });
const Building2 = dynamic(() => import("lucide-react").then(m => ({ default: m.Building2 })), { ssr: true });
const ShoppingCart = dynamic(() => import("lucide-react").then(m => ({ default: m.ShoppingCart })), { ssr: true });

// --- TYPES ---
interface PackagePlan {
  slug: string;
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  icon: React.ReactNode;
  gradient: string;
}

// --- DATA ---
const plans: PackagePlan[] = [
  {
    name: "Launch Starter",
    slug: "launch-starter",
    description: "פתרון מהיר לעסקים שרוצים להתחיל להביא לידים",
    icon: <Rocket className="w-6 h-6" />,
    gradient: "from-emerald-400/20 via-teal-300/20 to-cyan-200/20",
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
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-purple-400/20 via-violet-300/20 to-purple-200/20",
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
    icon: <Building2 className="w-6 h-6" />,
    gradient: "from-blue-400/20 via-sky-300/20 to-blue-200/20",
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
    icon: <ShoppingCart className="w-6 h-6" />,
    gradient: "from-amber-400/20 via-orange-300/20 to-amber-200/20",
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="packages"
      dir="rtl"
      className="relative overflow-visible pt-8 md:pt-12 pb-12 md:pb-20"
      style={{
        background: "linear-gradient(180deg, #fafbff 0%, #ffffff 30%, #ffffff 100%)",
      }}
    >
      <div className="relative z-10 w-full mx-auto max-w-6xl px-6">
        {/* Header - חבילות */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            חבילות שלנו
          </h1>
          <p className="mt-5 text-slate-500 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
            בחרו את החבילה שמתאימה לצרכים העסקיים שלכם
          </p>
        </div>

        {/* Grid layout - 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {plans.map((plan) => (
              <article
                key={plan.slug}
                className={`group relative block w-full rounded-[2rem] overflow-hidden ${
                  isMobile
                    ? "shadow-lg"
                    : "shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                }`}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient}`} />

                {/* Decorative elements - simplified for performance */}
                {!isMobile && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
                    <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/15 blur-3xl" />
                  </div>
                )}

                {/* Content */}
                <div className="relative p-8 md:p-10 flex flex-col">
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-900 text-white shrink-0">
                      {plan.icon}
                    </div>
                    {plan.badge && (
                      <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-bold tracking-wider bg-slate-900 text-white">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-black tracking-tight text-slate-900 mb-4">
                    {plan.name}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-700 text-base leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2.5 mb-auto">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm leading-snug">
                        <span className="shrink-0 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900/10">
                          <Check className="text-slate-900" size={10} strokeWidth={3} />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl font-bold text-sm px-6 py-3 bg-slate-900 text-white w-full ${
                      isMobile ? "active:opacity-80" : "transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    }`}
                  >
                    צור קשר
                    <ArrowRight className="w-4 h-4" aria-hidden />
                  </Link>
                </div>
              </article>
          ))}
        </div>
      </div>
    </section>
  );
}
