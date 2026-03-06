'use client';

import React, { useMemo } from 'react';
import { Reveal } from '../ui/Reveal';

interface Technology {
  name: string;
  logo: string;
}

const technologies: Technology[] = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind', logo: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.96ee6a5a.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
];

export function TechStack() {
  const scrollerItems = useMemo(() => [...technologies, ...technologies, ...technologies], []);

  return (
    <section id="tech" className="py-8 sm:py-12 px-4 relative z-30 overflow-hidden bg-[#fafafa]" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        .marquee-viewport {
          width: 100%;
          overflow: hidden;
          position: relative;
          direction: ltr;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          gap: 1.5rem;
          padding: 2rem 0;
          animation: scroll 35s linear infinite;
          will-change: transform;
        }

        @media (min-width: 640px) {
          .marquee-track { gap: 2.5rem; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
        <div className="mb-8 md:mb-12">
          <Reveal>
            <h1 className="text-4xl md:text-7xl font-black leading-[1.05] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              הטכנולוגיות שלנו
            </h1>
          </Reveal>
        </div>

        <div className="marquee-viewport">
          <div className="marquee-track">
            {scrollerItems.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center justify-center w-20 sm:w-28"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.logo}
                  alt={tech.name}
                  loading="lazy"
                  className="w-10 h-10 sm:w-16 sm:h-16 object-contain grayscale-[0.2]"
                />
                <span className="mt-2 text-xs sm:text-sm font-bold text-slate-400 tracking-widest uppercase">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}