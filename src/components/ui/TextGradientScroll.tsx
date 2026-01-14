"use client";

import type { PropsWithChildren } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type TextGradientScrollProps = PropsWithChildren<{
  className?: string;
}>;

/**
 * TextGradientScroll - градиент текста меняется при скролле
 * Создает эффект "появления" цвета при прокрутке
 */
export function TextGradientScroll({ 
  children, 
  className 
}: TextGradientScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ 
        opacity, 
        scale,
      }}
    >
      {children}
    </motion.div>
  );
}

