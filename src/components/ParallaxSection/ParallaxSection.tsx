"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  id?: string;
}

export default function ParallaxSection({ children, speed = 0.5, className = "", id }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null || !sectionRef.current) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          const yPos = -(scrollProgress - 0.5) * 100 * speed;
          sectionRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={className}
      id={id}
      style={{
        willChange: "transform",
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </section>
  );
}
