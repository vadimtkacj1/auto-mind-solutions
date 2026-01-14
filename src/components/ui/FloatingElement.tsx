"use client";

import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type FloatingElementProps = PropsWithChildren<{
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}>;

/**
 * FloatingElement - элемент плавно "парит" вверх-вниз
 * Отлично для декоративных элементов и иконок
 */
export function FloatingElement({ 
  children, 
  delay = 0,
  duration = 3,
  y = 10,
  className 
}: FloatingElementProps) {
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
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -y, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

