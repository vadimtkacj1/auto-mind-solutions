"use client";

import React, { useMemo } from 'react';
import { Reveal } from '../ui/Reveal';

const technologies = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
];

export function TechStack() {
  // Duplicate the array to ensure the row is long enough to loop seamlessly
  const scrollerItems = useMemo(() => [...technologies, ...technologies], []);

  return (
    <section id="tech" className="py-12 sm:py-16 lg:py-24 px-4 relative overflow-hidden bg-white">
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-viewport {
          width: 100%;
          overflow: hidden;
          position: relative;
          /* CRITICAL: Force LTR for RTL sites to ensure correct animation direction */
          direction: ltr; 
          /* Smooth fade-out effect on the sides using CSS mask */
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          gap: 2rem;
          padding: 1rem 0;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .tech-card {
          flex-shrink: 0;
          filter: grayscale(100%);
          opacity: 0.6;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* "Lifelike" behavior: restore color and scale up on hover */
        .tech-card:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: translateY(-5px);
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">הטכנולוגיות שלנו</h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-500">
              מחסנית מודרנית, יציבה ומהירה — ללא פשרות על איכות ותחזוקה.
            </p>
          </div>
        </Reveal>

        {/* Marquee Container */}
        <div className="marquee-viewport">
          <div className="marquee-track">
            {scrollerItems.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="tech-card flex flex-col items-center justify-center 
                           w-28 h-28 sm:w-36 sm:h-36 
                           bg-white rounded-2xl border border-gray-100 
                           shadow-sm hover:shadow-md hover:border-blue-500/30 
                           hover:bg-blue-50/10 cursor-pointer"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-3"
                />
                <span className="text-xs sm:text-sm font-medium text-gray-500">
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