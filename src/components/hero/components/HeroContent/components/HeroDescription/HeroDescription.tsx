import { motion } from 'framer-motion';
import styles from './HeroDescription.module.css';

export function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.65, duration: 0.8 }}
      className={styles.container}
    >
      AUTO MIND SOLUTIONS מספקת פתרונות דיגיטליים מתקדמים בעיצוב ופיתוח אתרים,
      אופטימיזציה למנועי חיפוש ואוטומציה חכמה. אנחנו הופכים רעיונות למציאות.
    </motion.p>
  );
}

