import { useState } from "react";
import styles from "./HeroScrollButton.module.css";

export function HeroScrollButton() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsScrolling(true);

    // Smooth scroll with animation
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={handleScroll}
        disabled={isScrolling}
        className={`${styles.scrollButton} ${isScrolling ? styles.disabled : ""}`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`${styles.scrollButtonIcon} ${isScrolling ? styles.scrolling : ""}`}
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="#00ff88"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={styles.scrollText}>SCROLL</div>
    </>
  );
}
