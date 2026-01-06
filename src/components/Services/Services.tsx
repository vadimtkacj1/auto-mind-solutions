import { Reveal } from '../ui/Reveal';

const services = [
  {
    title: 'עיצוב UI/UX מתקדם',
    description:
      'ממשקים אינטואיטיביים וחוויות משתמש שמניעות המרות. עיצוב מודרני עם מחקר מעמיק על קהל היעד.',
    number: '01',
    gradient: 'from-[var(--color-primary)] to-[var(--color-primary-dark)]',
  },
  {
    title: 'SEO & אופטימיזציה',
    description:
      'דירוג ראשון בגוגל אינו מזל. אסטרטגיות SEO מתקדמות שמביאות תוצאות מדידות ותנועה איכותית.',
    number: '02',
    gradient: 'from-[var(--color-accent)] to-[var(--color-accent-dark)]',
  },
  {
    title: 'פיתוח מהיר ומתקדם',
    description:
      'טכנולוגיות חדשניות ביותר. React, Next.js, ופיתוח מותאם אישית לכל צורך עסקי.',
    number: '03',
    gradient: 'from-[var(--color-primary)] to-[var(--color-accent)]',
  },
  {
    title: 'אסטרטגיה דיגיטלית',
    description:
      'תכנון מקיף שמתחיל בהבנת המטרות העסקיות שלך ומסתיים בביצועים יוצאי דופן.',
    number: '04',
    gradient: 'from-[var(--color-dark)] to-[var(--color-navy)]',
  },
  {
    title: 'אתרים רב-לשוניים',
    description:
      'הרחבה גלובלית עם תמיכה מלאה ב-RTL, תרגומים מקצועיים וחוויה מותאמת לכל שוק.',
    number: '05',
    gradient: 'from-[var(--color-accent)] to-[var(--color-primary)]',
  },
  {
    title: 'אבטחה ותחזוקה',
    description:
      'הגנה מקסימלית על האתר שלך עם תחזוקה שוטפת, גיבויים אוטומטיים ועדכוני אבטחה.',
    number: '06',
    gradient: 'from-[var(--color-primary-dark)] to-[var(--color-dark)]',
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-28 lg:py-36 px-6 lg:px-12 relative overflow-hidden bg-white"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-dark) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold mb-6">
              מה אנחנו מציעים
            </span>
            <h2 className="mb-6">השירותים שלנו</h2>
            <p className="max-w-2xl mx-auto">
              שילוב חד של עיצוב, פיתוח ו-SEO — כדי שהאתר ייראה מדהים ויעבוד מהר.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delay={0.05 * index}>
              <div className="group relative p-8 rounded-2xl bg-white border border-[var(--color-gray-200)] card-shadow hover:card-shadow-hover hover:border-[var(--color-primary)]/20 transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Gradient line at top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Number Badge */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 text-lg font-black`}>
                  {service.number}
                </div>

                <h3 className="mb-3 font-extrabold group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[var(--color-gray-500)] leading-relaxed">
                  {service.description}
                </p>

                {/* Hover arrow */}
                <div className="absolute bottom-8 left-8 text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-all duration-300">
                  ←
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
