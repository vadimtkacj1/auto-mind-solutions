'use client'
import styles from './LoadingSpinner.module.css';

export function LoadingSpinner() {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}>
          <div className={styles.spinnerRing} />
          <div className={styles.spinnerRing} />
          <div className={styles.spinnerRing} />
        </div>
        <p className={styles.loadingText}>
          טוען...
        </p>
      </div>
    </div>
  );
}

