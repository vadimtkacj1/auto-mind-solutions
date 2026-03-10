import { motion } from "framer-motion";
import styles from "./ScrollIndicator.module.css";

export function ScrollIndicator() {
  const handleScrollClick = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      const offsetTop = servicesSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8 }}
      className={styles.container}
      onClick={handleScrollClick}
      style={{ cursor: "pointer" }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className={styles.content}
      >
        <div className={styles.mouse}>
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={styles.dot}
          />
        </div>
        <span className={styles.text}>Scroll</span>
      </motion.div>
    </motion.div>
  );
}
