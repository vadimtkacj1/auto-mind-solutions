"use client";

import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type StaggerContainerProps = PropsWithChildren<{
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
}>;

export function StaggerContainer({ 
  children, 
  staggerDelay = 0.1,
  initialDelay = 0,
  className 
}: StaggerContainerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

