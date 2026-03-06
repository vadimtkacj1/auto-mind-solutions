"use client";

import styles from './HeroTitle.module.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function HeroTitle() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <h1 className={styles.container}>
        <span className={styles.line}>אוטומציה, אתר</span>
        <span className={styles.line}>
          <span className="text-gradient-hero">ושיווק דיגיטלי</span>
        </span>
        <span className={styles.line}>לעסקים בישראל</span>
      </h1>
    );
  }

  // Оптимизированные варианты - только GPU-ускоренные свойства
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const lineVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      }
    }
  };

  const gradientVariant = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      }
    }
  };

  return (
    <motion.h1 
      className={styles.container}
      variants={container}
      initial="hidden"
      animate="show"
      style={{ willChange: 'transform, opacity' }}
    >
      <motion.span 
        className={styles.line} 
        variants={lineVariant}
        style={{ willChange: 'transform, opacity' }}
      >
        אוטומציה, אתר
      </motion.span>
      <motion.span 
        className={styles.line} 
        variants={lineVariant}
        style={{ willChange: 'transform, opacity' }}
      >
        <motion.span 
          className="text-gradient-hero"
          variants={gradientVariant}
          style={{ 
            display: 'inline-block',
            willChange: 'transform, opacity'
          }}
        >
          ושיווק דיגיטלי
        </motion.span>
      </motion.span>
      <motion.span 
        className={styles.line} 
        variants={lineVariant}
        style={{ willChange: 'transform, opacity' }}
      >
        לעסקים בישראל
      </motion.span>
    </motion.h1>
  );
}

