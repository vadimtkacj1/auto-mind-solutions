"use client";

import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type SlideInProps = PropsWithChildren<{
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}>;

export function SlideIn({ 
  children, 
  delay = 0, 
  direction = 'left',
  distance = 100,
  duration = 0.8,
  className,
  once = true 
}: SlideInProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -distance, y: 0 };
      case 'right':
        return { x: distance, y: 0 };
      case 'up':
        return { x: 0, y: -distance };
      case 'down':
        return { x: 0, y: distance };
      default:
        return { x: -distance, y: 0 };
    }
  };

  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ ...getInitialPosition(), opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

