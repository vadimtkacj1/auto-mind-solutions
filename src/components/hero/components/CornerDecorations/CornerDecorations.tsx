import styles from "./CornerDecorations.module.css";

export function CornerDecorations() {
  return (
    <>
      <div className={styles.cornerTopRight}>
        <div className={styles.lineVertical} />
        <div className={styles.lineHorizontal} />
      </div>
      <div className={styles.cornerBottomLeft}>
        <div className={styles.lineVertical} />
        <div className={styles.lineHorizontal} />
      </div>
    </>
  );
}
