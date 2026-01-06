import { Reveal } from '../ui/Reveal';

const technologies = [
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Tailwind',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    name: 'GraphQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  },
  {
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
];

export function TechStack() {
  return (
    <section
      id="tech"
      className="py-28 lg:py-36 px-6 lg:px-12 relative overflow-hidden bg-white"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-dark) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-dark)]/5 text-[var(--color-dark)] text-sm font-bold mb-6">
              טכנולוגיות
            </span>
            <h2 className="mb-6">הטכנולוגיות שלנו</h2>
            <p className="max-w-2xl mx-auto">
              סטאק מודרני, יציב ומהיר — בלי פשרות על איכות ותחזוקה.
            </p>
          </div>
        </Reveal>

        {/* Infinite Carousel */}
        <div className="relative">
          <div className="ams-marquee overflow-hidden py-8">
            <div className="ams-marquee__track">
              {[0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  className="ams-marquee__group"
                  aria-hidden={groupIndex === 1}
                >
                  {technologies.map((tech) => (
                    <div
                      key={`${groupIndex}-${tech.name}`}
                      className="flex-shrink-0 w-32 h-32 bg-white rounded-2xl p-6 flex flex-col items-center justify-center border border-[var(--color-gray-200)] card-shadow hover:card-shadow-hover hover:border-[var(--color-primary)]/20 transition-all duration-300 cursor-pointer group"
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        loading="lazy"
                        decoding="async"
                        className="w-12 h-12 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-xs font-bold text-[var(--color-gray-500)] group-hover:text-[var(--color-primary)] transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div
            className="absolute top-0 right-0 w-32 lg:w-48 h-full pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to left, white 0%, transparent 100%)',
            }}
          />
          <div
            className="absolute top-0 left-0 w-32 lg:w-48 h-full pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to right, white 0%, transparent 100%)',
            }}
          />
        </div>

        {/* Stats below carousel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-[var(--color-gray-200)]">
          {[
            { value: '12+', label: 'טכנולוגיות' },
            { value: '5+', label: 'שנות ניסיון' },
            { value: '100%', label: 'קוד נקי' },
            { value: 'A+', label: 'דירוג ביצועים' },
          ].map((stat, index) => (
            <Reveal key={index} delay={0.05 * index}>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-extrabold text-[var(--color-primary)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--color-gray-500)] font-semibold">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
