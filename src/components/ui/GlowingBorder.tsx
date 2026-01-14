"use client";

import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type GlowingBorderProps = PropsWithChildren<{
  delay?: number;
  duration?: number;
  className?: string;
  glowColor?: string;
}>;

/**
 * GlowingBorder - элемент с анимированной светящейся рамкой
 * Отлично подходит для карточек и CTA элементов
 */
export function GlowingBorder({ 
  children, 
  delay = 0,
  duration = 2,
  className,
  glowColor = "#0070FF"
}: GlowingBorderProps) {
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.5 }}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: -2,
          background: `conic-gradient(from 0deg, ${glowColor}, transparent, ${glowColor})`,
          borderRadius: 'inherit',
          opacity: 0.7,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  );
}

