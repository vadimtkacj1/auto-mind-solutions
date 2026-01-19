'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  id?: string;
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = '',
  id
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const yPos = -(scrollProgress - 0.5) * 100 * speed;
        sectionRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={className}
      id={id}
      style={{
        willChange: 'transform',
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </section>
  );
}
