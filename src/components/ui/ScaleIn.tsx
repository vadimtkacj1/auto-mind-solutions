"use client";

import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type ScaleInProps = PropsWithChildren<{
  delay?: number;
  duration?: number;
  scale?: number;
  className?: string;
  once?: boolean;
}>;

export function ScaleIn({ 
  children, 
  delay = 0, 
  duration = 0.6,
  scale = 0.8,
  className,
  once = true 
}: ScaleInProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

