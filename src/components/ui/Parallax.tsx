"use client";

import type { PropsWithChildren } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type ParallaxProps = PropsWithChildren<{
  speed?: number;
  className?: string;
}>;

export function Parallax({ children, speed = 0.5, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

