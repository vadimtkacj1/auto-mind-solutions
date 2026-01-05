import { motion } from 'framer-motion';
import styles from './HeroTitle.module.css';

export function HeroTitle() {
  return (
    <h1 className={styles.container}>
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={styles.line}
      >
        אנחנו בונים את
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={styles.line}
      >
        <span className="text-gradient-hero">העתיד הדיגיטלי</span>
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={styles.line}
      >
        של העסק שלך
      </motion.span>
    </h1>
  );
}

