import { motion, useReducedMotion } from "framer-motion";
import styles from "./HeroBackground.module.css";

export function HeroBackground() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={styles.container}>
        <div
          className={styles.orb1}
          style={{
            background: "radial-gradient(circle, rgba(0, 208, 132, 0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className={styles.orb2}
          style={{
            background: "radial-gradient(circle, rgba(0, 102, 255, 0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className={styles.orb3}
          style={{
            background:
              "conic-gradient(from 0deg, rgba(0, 208, 132, 0.15), rgba(0, 102, 255, 0.15), rgba(0, 208, 132, 0.15))",
          }}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <motion.div
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={styles.orb1}
        style={{
          background: "radial-gradient(circle, rgba(0, 208, 132, 0.12) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={styles.orb2}
        style={{
          background: "radial-gradient(circle, rgba(0, 102, 255, 0.1) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={styles.orb3}
        style={{
          background:
            "conic-gradient(from 0deg, rgba(0, 208, 132, 0.15), rgba(0, 102, 255, 0.15), rgba(0, 208, 132, 0.15))",
        }}
      />
    </div>
  );
}
