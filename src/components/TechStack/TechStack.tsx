"use client";

import { memo } from "react";
import { Reveal } from "../ui/Reveal";

interface Technology {
  name: string;
  logo: string;
}

const technologies: Technology[] = [
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

export const TechStack = memo(function TechStack() {
  // Duplicate technologies for infinite scroll effect
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section id="tech" className="py-16 sm:py-20 relative z-30 bg-white" dir="rtl">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 text-center mb-3">
              הטכנולוגיות שאנחנו משתמשים בהן
            </h2>
          </Reveal>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden sm:grid grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {technologies.map((tech, index) => (
            <Reveal key={tech.name} delay={index * 0.05}>
              <div className="flex flex-col items-center justify-center gap-4 p-6 transition-transform duration-300 hover:scale-105">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.logo}
                  alt={tech.name}
                  loading="lazy"
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                  style={{
                    filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))'
                  }}
                />
                <span className="text-base font-bold text-slate-700 text-center">
                  {tech.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile: Infinite carousel */}
        <div className="flex sm:hidden overflow-hidden relative" style={{ direction: "ltr" }}>
          <div className="flex justify-end animate-infinite-scroll pause-animation ">
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
                  style={{
                    filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))'
                  }}
                />
                <span className="text-sm font-bold text-slate-700 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-33.333%, 0, 0);
          }
        }

        @-webkit-keyframes infinite-scroll {
          from {
            -webkit-transform: translate3d(0, 0, 0);
          }
          to {
            -webkit-transform: translate3d(-33.333%, 0, 0);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 15s linear infinite;
          -webkit-animation: infinite-scroll 15s linear infinite;
          will-change: transform;
        }

        .pause-animation:hover {
          animation-play-state: paused;
          -webkit-animation-play-state: paused;
        }
      `}</style>
    </section>
  );
});
