import styles from './HeroTextContent.module.css';

export function HeroTextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.badge}>
        פתרונות דיגיטליים מתקדמים
      </div>

      <h1 className={styles.title}>
        אוטומציה, אינטל
        <br />
        ושיווק דיגיטלי
        <br />
        לעסקים בישראל
      </h1>

      <p className={styles.description}>
        AUTO MIND SOLUTIONS מספקת פתרונות מתקדמים מבוססי בינה
        <br />
        מלאכותית. אנחנו משלבים אוטומציה מתקדמת, אותנטיקציה, אנליטיקס
        <br />
        ופיתוח אתרים, אפליקציות לצמיחה.
      </p>

      <div className={styles.buttonsContainer}>
        <button className={styles.buttonPrimary}>
          בואו נדבר
        </button>

        <button className={styles.buttonSecondary}>
          גלה עוד
        </button>
      </div>
    </div>
  );
}

