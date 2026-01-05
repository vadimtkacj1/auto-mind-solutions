import styles from './HeroGrid.module.css';

export function HeroGrid() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 208, 132, 0.3) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 208, 132, 0.3) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }}
    />
  );
}

