"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { smoothScrollTo } from "@/src/utils/smoothScroll";

function SimpleTitle({ className, accentClass }: { className: string; accentClass: string }) {
  const accentWords = ["דיגיטלי", "ביצועים"];
  const words = ["שיווק", "דיגיטלי", "שמביא", "ביצועים"];

  return (
    <h1 className={className} style={{ textAlign: "center", direction: "rtl" }}>
      {words.map((w, i) => (
        <span key={i} className={accentWords.includes(w) ? accentClass : undefined}>
          {w}{" "}
        </span>
      ))}
    </h1>
  );
}

function SimpleSubtitle({ className }: { className: string }) {
  const text = "החברה שלנו משלבת בניית ועיצוב אתרים, קידום אתרים וקמפיינים. הכל במקום אחד.";
  return (
    <p className={className} style={{ textAlign: "center", direction: "rtl" }}>
      {text}
    </p>
  );
}

export default function SimpleHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScrollDown = () => smoothScrollTo("#services", 80);
  const handlePrimaryCta = () => smoothScrollTo("#contact", 80);
  const handleSecondaryCta = () => smoothScrollTo("#contact", 80);

  return (
    <div className={styles.mainWrapper} ref={containerRef}>
      <section className={styles.container}>
        {/* Animated gradient background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 50%, rgba(0, 112, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(0, 230, 144, 0.1) 0%, transparent 50%)",
            animation: "pulse 8s ease-in-out infinite",
          }}
        />

        {/* Simple decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: isMobile ? "150px" : "300px",
            height: isMobile ? "150px" : "300px",
            borderRadius: "50%",
            border: "2px solid rgba(0, 112, 255, 0.2)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "10%",
            width: isMobile ? "100px" : "200px",
            height: isMobile ? "100px" : "200px",
            borderRadius: "50%",
            border: "2px solid rgba(0, 230, 144, 0.2)",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />

        <div className={styles.contentContainer} style={{ position: "relative", zIndex: 3 }}>
          <div className={styles.textBox}>
            <SimpleTitle className={styles.title} accentClass={styles.titleAccent} />
            <SimpleSubtitle className={styles.subtitle} />

            <div className={styles.buttonRow}>
              <button className={styles.btnMain} onClick={handlePrimaryCta}>
                צרו קשר
              </button>
              <button className={styles.btnAlt} onClick={handleSecondaryCta}>
                השאירו פרטים
              </button>
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicatorWrapper}>
          <button className={styles.scrollIndicator} onClick={handleScrollDown} aria-label="Scroll to services">
            <div className={styles.mouse}>
              <div className={styles.wheel} />
            </div>
            <span className={styles.scrollText}>גללו למטה</span>
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
