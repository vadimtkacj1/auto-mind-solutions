import { motion } from 'framer-motion';
import styles from './HeroBadge.module.css';

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`${styles.container} glass-premium`}
    >
      <motion.span
        className={styles.dot}
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className={styles.text}>פתרונות דיגיטליים מתקדמים</span>
    </motion.div>
  );
}

