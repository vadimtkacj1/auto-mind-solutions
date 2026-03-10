import styles from "./HeroBadge.module.css";

export function HeroBadge() {
  return (
    <div className={`${styles.container} glass-premium`}>
      <span className={styles.dot} />
      <span className={styles.text}>חבילת שיווק מלאה לעסקים בישראל</span>
    </div>
  );
}
