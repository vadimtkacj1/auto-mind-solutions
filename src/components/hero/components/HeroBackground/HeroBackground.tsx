import { motion } from 'framer-motion';
import styles from './HeroBackground.module.css';

interface HeroBackgroundProps {
  mousePosition: { x: number; y: number };
}

export function HeroBackground({ mousePosition }: HeroBackgroundProps) {
  return (
    <div className={styles.container}>
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={styles.orb1}
        style={{
          background: 'radial-gradient(circle, rgba(0, 208, 132, 0.15) 0%, transparent 70%)',
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={styles.orb2}
        style={{
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.12) 0%, transparent 70%)',
          transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={styles.orb3}
        style={{
          background: 'conic-gradient(from 0deg, rgba(0, 208, 132, 0.2), rgba(0, 102, 255, 0.2), rgba(0, 208, 132, 0.2))',
        }}
      />
    </div>
  );
}

