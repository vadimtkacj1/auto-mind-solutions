import styles from "./AmbientGlow.module.css";

export function AmbientGlow() {
  return (
    <>
      <div className={styles.glow1} />
      <div className={styles.glow2} style={{ animationDelay: "1s" }} />
    </>
  );
}
