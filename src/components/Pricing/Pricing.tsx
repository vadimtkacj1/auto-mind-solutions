import { Reveal } from '../ui/Reveal';

const plans = [
  {
    name: 'STARTER',
    price: '₪5,000',
    description: 'מושלם לעסקים קטנים שרוצים נוכחות דיגיטלית',
    features: [
      'עיצוב אתר מותאם אישית',
      'עד 5 עמודים',
      'SEO בסיסי',
      'ממשק ניהול תוכן',
      'רספונסיבי מלא',
      'תמיכה 30 יום',
    ],
    highlighted: false,
  },
  {
    name: 'PRO',
    price: '₪12,000',
    description: 'הפתרון המושלם לעסקים שרוצים להוביל',
    features: [
      'כל היתרונות של STARTER',
      'עמודים ללא הגבלה',
      'SEO מתקדם + ייעוץ',
      'אנימציות מותאמות',
      'אינטגרציות API',
      'ניתוח ביצועים מתקדם',
      'תמיכה 90 יום',
      'אופטימיזציה לביצועים',
    ],
    highlighted: true,
  },
  {
    name: 'ENTERPRISE',
    price: 'לפי הצעת מחיר',
    description: 'פתרונות ייחודיים לארגונים גדולים',
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
      className="py-28 lg:py-36 px-6 lg:px-12 relative overflow-hidden section-subtle"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-20 left-[10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] text-sm font-bold mb-6">
              תמחור שקוף
            </span>
            <h2 className="mb-6">בחרו את החבילה שמתאימה לכם</h2>
            <p className="max-w-2xl mx-auto">
              בלי הפתעות, בלי אותיות קטנות — הכול ברור מראש, כולל תמיכה והשקה מסודרת.
            </p>
          </div>
        </Reveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <Reveal key={index} delay={0.06 * index}>
              <div
                className={`relative flex flex-col h-full rounded-2xl transition-all duration-300 group ${
                  plan.highlighted
                    ? 'bg-[var(--color-dark)] p-8 lg:p-10 shadow-2xl shadow-[var(--color-primary)]/20 lg:scale-105 z-10'
                    : 'bg-white p-8 border border-[var(--color-gray-200)] card-shadow hover:card-shadow-hover'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-sm font-bold text-white bg-[var(--color-primary)] shadow-lg">
                    המומלץ ביותר
                  </div>
                )}

                <div className="mb-6">
                  <h4 className={`text-sm font-bold tracking-wider mb-2 ${plan.highlighted ? 'text-white/60' : 'text-[var(--color-gray-400)]'}`}>
                    {plan.name}
                  </h4>
                  <div className={`text-4xl lg:text-5xl font-extrabold mb-3 ${plan.highlighted ? 'text-white' : 'text-[var(--color-dark)]'}`}>
                    {plan.price}
                  </div>
                  <p className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-[var(--color-gray-500)]'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-8 space-y-4 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3"
                    >
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full mt-0.5 flex items-center justify-center text-xs ${
                        plan.highlighted
                          ? 'bg-[var(--color-accent)] text-white'
                          : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                      }`}>
                        ✓
                      </span>
                      <span className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-[var(--color-gray-600)]'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full py-4 rounded-xl text-center font-bold transition-all duration-300 mt-auto ${
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
