"use client";

import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type RotatingBorderProps = PropsWithChildren<{
  duration?: number;
  colors?: string[];
  className?: string;
  borderWidth?: number;
}>;

/**
 * RotatingBorder - вращающаяся градиентная рамка
 * Создает премиальный эффект для карточек
 */
export function RotatingBorder({ 
  children, 
  duration = 3,
  colors = ["#0070FF", "#00E690", "#0070FF"],
  className,
  borderWidth = 2
}: RotatingBorderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  const gradientString = colors.join(', ');

  return (
    <div 
      className={className}
      style={{ 
        position: 'relative',
        padding: borderWidth,
        borderRadius: 'inherit',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `conic-gradient(from 0deg, ${gradientString})`,
          borderRadius: 'inherit',
          opacity: 0.8,
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
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 1,
          background: 'var(--color-bg-dark)',
          borderRadius: 'inherit',
          height: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
}

