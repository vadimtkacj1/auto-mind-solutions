"use client";

const technologies = [
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

export function TechStackInline() {
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <div className="bg-white rounded-[2.5rem] p-10 md:p-16 mt-16">
      <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 text-center">
        הטכנולוגיות שאנחנו משתמשים בהן
      </h3>

      {/* Desktop: Grid */}
      <div className="hidden md:grid grid-cols-4 gap-8">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center justify-center gap-4 p-4 transition-transform duration-300 hover:scale-105">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tech.logo}
              alt={tech.name}
              loading="lazy"
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))' }}
            />
            <span className="text-base font-bold text-slate-700 text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile: Infinite carousel */}
      <div className="md:hidden overflow-hidden relative">
        <div className="flex animate-infinite-scroll">
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center justify-center gap-3 p-5 min-w-[140px] flex-shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.logo}
                alt={tech.name}
                loading="lazy"
                className="w-16 h-16 object-contain"
                style={{ filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))' }}
              />
              <span className="text-sm font-bold text-slate-700 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
