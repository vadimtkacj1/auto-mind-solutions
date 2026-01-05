import { motion } from 'framer-motion';
import styles from './HeroButtons.module.css';

export function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className={styles.container}
    >
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`${styles.primaryButton} btn-premium-cta`}
      >
        בואו נדבר
      </motion.a>

      <motion.a
        href="#services"
        whileHover={{ scale: 1.02, y: -2, borderColor: 'rgba(0, 208, 132, 0.5)' }}
        whileTap={{ scale: 0.98 }}
        className={styles.secondaryButton}
      >
        גלה עוד
      </motion.a>
    </motion.div>
  );
}

