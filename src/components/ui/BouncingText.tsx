"use client";

import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type BouncingTextProps = PropsWithChildren<{
  delay?: number;
  className?: string;
  staggerDelay?: number;
}>;

/**
 * BouncingText - каждая буква подпрыгивает с задержкой
 * Отлично подходит для заголовков и привлекающих внимание элементов
 */
export function BouncingText({ 
  children, 
  delay = 0,
  className,
  staggerDelay = 0.03
}: BouncingTextProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || typeof children !== 'string') {
    return <span className={className}>{children}</span>;
  }

  const text = children as string;
  const letters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      }
    }
  };

  const letterVariant = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          variants={letterVariant}
          style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

