"use client";

import React from "react";
import styles from "./RocketSpinner.module.css";

const PUFS_COUNT = 45;
const PARTICLES_COUNT = 45;

const ROCKET_BLUE = "#0070ff";

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={26}
      height={26}
      aria-hidden
      style={{ fill: ROCKET_BLUE, color: ROCKET_BLUE }}
    >
      <path
        d="M9.5 2.16c.25-.02.5-.03.75-.03.42 0 .84.03 1.24.08l-.24 1.2-.74-.04c-2.56-.14-4.77.82-5.93 2.08 1.15-.05 2.3.2 3.42.65.12.05.24.1.36.16l-.6-.9c-.32-.48-.2-1.15.27-1.47.48-.32 1.15-.2 1.47.27l1.04 1.56c.42-.25.86-.46 1.32-.64.1-.04.2-.08.3-.11-.5-.95-.12-2.16.85-2.68.96-.52 2.14-.05 2.65.9l.03.06c.6-.2 1.22-.35 1.85-.45.16-.02.33-.05.5-.06.2-.02.4-.03.6-.04.2 0 .4.01.6.03.16.01.32.03.48.05.63.1 1.25.25 1.85.45l.03-.06c.51-.95 1.69-1.42 2.65-.9.97.52 1.35 1.73.85 2.68.1.03.2.07.3.11.46.18.9.39 1.32.64l1.04-1.56c.32-.47.99-.59 1.47-.27.47.32.59.99.27 1.47l-.6.9c.12-.06.24-.11.36-.16 1.12-.45 2.27-.7 3.42-.65-1.16-1.26-3.37-2.22-5.93-2.08l-.74.04-.24-1.2c.4-.05.82-.08 1.24-.08.25 0 .5.01.75.03.42.03.83.07 1.23.13.04.01.08.01.12.02 1.5.3 2.78 1.02 3.7 2.02.92 1 1.5 2.27 1.5 3.65v6.5c0 .83-.67 1.5-1.5 1.5h-3v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H8.5c-.83 0-1.5-.67-1.5-1.5v-6.5c0-1.38.58-2.65 1.5-3.65.92-1 2.2-1.72 3.7-2.02.04-.01.08-.01.12-.02.4-.06.81-.1 1.23-.13z"
      />
    </svg>
  );
}
export function RocketSpinner({ className, variant = "dark" }: { className?: string; variant?: "light" | "dark" }) {
  return (
    <div className={`${styles.loader} ${variant === "light" ? styles.loaderWhite : ""} ${className ?? ""}`}>
      <div className={styles.loaderSpined}>
        <div className={styles.loaderIcon}>
          <RocketIcon className={styles.offset45deg} />
        </div>
      </div>

      <div className={styles.pufs} aria-hidden>
        {Array.from({ length: PUFS_COUNT }, (_, i) => (
          <i key={`puf-${i}`} style={{ ["--i" as string]: i + 1 }} />
        ))}
      </div>

      <div className={styles.particles} aria-hidden>
        {Array.from({ length: PARTICLES_COUNT }, (_, i) => (
          <i key={`particle-${i}`} style={{ ["--i" as string]: i + 1 }} />
        ))}
      </div>
    </div>
  );
}
