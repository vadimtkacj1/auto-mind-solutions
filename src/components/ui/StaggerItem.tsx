"use client";

import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

type StaggerItemProps = PropsWithChildren<{
  className?: string;
}>;

export function StaggerItem({ children, className }: StaggerItemProps) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={item}
    >
      {children}
    </motion.div>
  );
}

