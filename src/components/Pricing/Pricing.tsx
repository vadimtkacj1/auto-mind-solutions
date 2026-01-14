'use client'
import { Reveal } from '../ui/Reveal';

const plans = [
  {
    name: 'STARTER',
    price: '₪5,000',
    description: 'חבילה התחלתית לעסקים קטנים שרוצים אתר ונוכחות שיווקית מסודרת',
    features: [
      'עיצוב אתר מותאם אישית לעסק קטן',
      'עד 5 עמודים + דף נחיתה לקמפיינים',
      'SEO בסיסי והגדרת מילות מפתח',
      'ממשק ניהול תוכן',
      'חיבור לטפסי לידים ואוטומציה בסיסית',
      'רספונסיבי מלא',
      'תמיכה 30 יום לאחר ההשקה',
    ],
    highlighted: false,
  },
  {
    name: 'PRO',
    price: '₪12,000',
    description: 'הפתרון המלא לעסקים שרוצים חבילה משולבת: אתר, אוטומציה שיווקית, פרסום ממומן ו-SEO',
    features: [
      'כל היתרונות של STARTER',
      'עמודים ללא הגבלה ומבנה אתר מתקדם',
      'SEO מתקדם + מחקר מילות מפתח לעסק שלכם',
      'אוטומציה שיווקית ומשפכי לידים',
      'ניהול והקמה של קמפיינים ממומנים ראשוניים',
      'אינטגרציות API למערכות CRM וכלי שיווק',
      'ניתוח ביצועים מתקדם ודוחות חודשיים',
      'תמיכה 90 יום ואופטימיזציה לביצועים',
    ],
    highlighted: true,
  },
  {
    name: 'ENTERPRISE',
    price: 'לפי הצעת מחיר',
    description: 'פתרונות דיגיטל ואוטומציה מותאמים לארגונים וצוותים גדולים',
    features: [
      'כל היתרונות של PRO',
      'פיתוח מותאם במיוחד',
      'מערכות ניהול מורכבות',
      'אינטגרציות מתקדמות',
      'תמיכה VIP 24/7',
      'הדרכת צוות',
      'יועץ SEO ייעודי',
      'SLA מובטח',
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden section-subtle"
    >

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] text-xs sm:text-sm font-semibold mb-4">
              תמחור שקוף
            </span>
            <h2 className="mb-4">בחרו את החבילה שמתאימה לכם</h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-[var(--color-gray-500)]">
              בלי הפתעות, בלי אותיות קטנות — הכול ברור מראש, כולל תמיכה והשקה מסודרת.
            </p>
          </div>
        </Reveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <Reveal key={index} delay={0.06 * index}>
              <div
                className={`relative flex flex-col h-full rounded-xl sm:rounded-2xl transition-all duration-300 group ${
                  plan.highlighted
                    ? 'bg-[var(--color-dark)] p-5 sm:p-6 lg:p-8 shadow-xl shadow-[var(--color-primary)]/20 md:scale-[1.02] lg:scale-105 z-10'
                    : 'bg-white p-5 sm:p-6 lg:p-8 border border-[var(--color-gray-200)] card-shadow hover:card-shadow-hover'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-[var(--color-primary)] shadow-md">
                    המומלץ ביותר
                  </div>
                )}

                <div className="mb-4 sm:mb-5">
                  <h4 className={`text-xs sm:text-sm font-semibold tracking-wider mb-2 ${plan.highlighted ? 'text-white/70' : 'text-[var(--color-gray-400)]'}`}>
                    {plan.name}
                  </h4>
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-[var(--color-dark)]'}`}>
                    {plan.price}
                  </div>
                  <p className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-[var(--color-gray-500)]'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-5 sm:mb-6 space-y-2.5 sm:space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2.5"
                    >
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full mt-0.5 flex items-center justify-center text-xs ${
                        plan.highlighted
                          ? 'bg-[var(--color-accent)] text-white'
                          : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                      }`}>
                        ✓
                      </span>
                      <span className={`text-sm ${plan.highlighted ? 'text-white/85' : 'text-[var(--color-gray-600)]'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full py-3 rounded-lg sm:rounded-xl text-center font-semibold transition-all duration-300 mt-auto text-sm sm:text-base ${
                    plan.highlighted
                      ? 'bg-white text-[var(--color-dark)] hover:shadow-lg hover:shadow-white/20'
                      : 'bg-[var(--color-dark)] text-white hover:bg-[var(--color-primary)]'
                  }`}
                >
                  התחל עכשיו
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
