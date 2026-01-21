'use client';

import React, { useMemo } from 'react';
import { Reveal } from '../ui/Reveal';

// 1. Define an interface for your technology object
interface Technology {
  name: string;
  logo: string;
  color: string;
}

const technologies: Technology[] = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'rgba(97, 218, 251, 0.3)' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'rgba(0, 0, 0, 0.1)' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'rgba(49, 120, 198, 0.3)' },
  { name: 'Tailwind', logo: 'https://img.jsdelivr.net/github.com/tailwindlabs.png', color: 'rgba(56, 189, 248, 0.3)' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'rgba(51, 153, 51, 0.3)' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'rgba(55, 118, 171, 0.3)' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: 'rgba(36, 150, 237, 0.3)' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'rgba(51, 103, 145, 0.3)' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'rgba(71, 162, 72, 0.3)' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: 'rgba(255, 153, 0, 0.3)' },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: 'rgba(255, 202, 40, 0.3)' },
  { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', color: 'rgba(225, 0, 152, 0.3)' },
];

export function TechStack() {
  const scrollerItems = useMemo(() => [...technologies, ...technologies, ...technologies], []);

  return (
    <section id="tech" className="py-24 sm:py-40 px-4 relative z-30 overflow-hidden bg-[#fafafa]" dir="rtl">
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
          gap: 2rem;
          padding: 4rem 0;
          animation: scroll 35s linear infinite;
          will-change: transform;
        }

        @media (min-width: 640px) {
          .marquee-track { gap: 4rem; }
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .tech-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
        }

        .glow {
          position: absolute;
          inset: -50px;
          border-radius: 50%;
          background: var(--glow-color); /* This now has a value */
          filter: blur(60px);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -1;
        }

        .tech-item:hover .glow {
          opacity: 1;
        }

        .tech-item:hover {
          transform: translateY(-20px) scale(1.15);
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
        <div className="mb-20 md:mb-32">
          <Reveal>
            <h2 className="text-6xl md:text-9xl font-black leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              הטכנולוגיות שלנו
            </h2>
          </Reveal>
        </div>

        <div className="marquee-viewport">
          <div className="marquee-track">
            {scrollerItems.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="tech-item w-44 sm:w-64 group"
                // TypeScript now recognizes 'color' here
                style={{ '--glow-color': tech.color } as React.CSSProperties}
              >
                <div className="glow" />
                
                <div className="relative z-10">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    loading="lazy"
                    className="w-24 h-24 sm:w-44 sm:h-44 object-contain grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <span className="mt-8 text-base sm:text-xl font-black text-slate-400 tracking-widest uppercase group-hover:text-slate-900 transition-colors">
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