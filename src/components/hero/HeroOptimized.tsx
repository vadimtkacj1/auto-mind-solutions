"use client";

import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./Hero.module.css";
import { smoothScrollTo } from "@/src/utils/smoothScroll";

// Load 3D scene only after interaction
const OptimizedScene = dynamic(() => import("./OptimizedScene"), {
  ssr: false,
  loading: () => null
});

const SpaceBackground = dynamic(() => import("./SpaceBackground"), {
  ssr: false,
  loading: () => null
});

function SimpleTitle({ className, accentClass }: { className: string; accentClass: string }) {
  const accentWords = ["דיגיטלי", "ביצועים"];
  const words = ["שיווק", "דיגיטלי", "שמביא", "ביצועים"];

  return (
    <h1
      className={`${className} animate-fade-in`}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.35em",
        justifyContent: "center",
        alignItems: "baseline",
        textAlign: "center",
        direction: "rtl",
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
    >
      {words.map((w, i) => (
        <span
          key={w}
          className={accentWords.includes(w) ? accentClass : undefined}
          style={{
            display: "inline-block",
            opacity: 0,
            animation: `fadeInUp 0.4s ease-out ${i * 0.05}s forwards`,
          }}
        >
          {w}
        </span>
      ))}
    </h1>
  );
}

function SimpleSubtitle({ className }: { className: string }) {
  const text = "החברה שלנו משלבת בניית ועיצוב אתרים, קידום אתרים וקמפיינים. הכל במקום אחד.";

  return (
    <p
      className={className}
      style={{
        direction: "rtl",
        textAlign: "center",
        opacity: 0,
        animation: "fadeInUp 0.4s ease-out 0.4s forwards",
      }}
    >
      {text}
    </p>
  );
}

export default function HeroOptimized() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScene, setShowScene] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Load 3D ONLY after user interaction - NEVER automatically
  useEffect(() => {
    let hasInteracted = false;

    const handleInteraction = () => {
      if (!hasInteracted) {
        hasInteracted = true;
        // Delay even after interaction to avoid blocking
        setTimeout(() => setShowScene(true), 500);
      }
    };

    window.addEventListener('scroll', handleInteraction, { once: true, passive: true });
    window.addEventListener('click', handleInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  const handleScrollDown = () => smoothScrollTo("#services", 80);
  const handlePrimaryCta = () => smoothScrollTo("#contact", 80);

  return (
    <div className={styles.mainWrapper} ref={containerRef}>
      <section className={styles.container}>
        {/* Background */}
        <div style={{ position: "absolute", inset: 0 }}>
          {!showScene && (
            <div style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at 30% 50%, rgba(0, 112, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(0, 230, 144, 0.08) 0%, transparent 50%)",
            }} />
          )}
          {showScene && <SpaceBackground enabled={true} />}
        </div>

        {/* Layout */}
        {isMobile ? (
          <>
            {/* Mobile: Globe on top */}
            <div style={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              height: "38vw",
              minHeight: "140px",
              maxHeight: "200px",
              marginBottom: "16px",
            }}>
              {!showScene && (
                <div style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <div style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    border: "2px solid rgba(0, 112, 255, 0.3)",
                    background: "radial-gradient(circle, rgba(0, 112, 255, 0.1) 0%, transparent 70%)",
                    animation: "pulse 2s ease-in-out infinite",
                  }} />
                </div>
              )}
              {showScene && <OptimizedScene />}
            </div>

            {/* Mobile: Content below */}
            <div className={styles.contentContainer} style={{ position: "relative", zIndex: 3 }}>
              <div className={styles.textBox}>
                <SimpleTitle className={styles.title} accentClass={styles.titleAccent} />
                <SimpleSubtitle className={styles.subtitle} />

                <div
                  className={styles.buttonRow}
                  style={{
                    opacity: 0,
                    animation: "fadeInUp 0.4s ease-out 0.6s forwards"
                  }}
                >
                  <button className={styles.btnMain} onClick={handlePrimaryCta}>
                    צרו קשר
                  </button>
                  <button className={styles.btnAlt} onClick={handlePrimaryCta}>
                    השאירו פרטים
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Desktop */
          <>
            <div className={styles.sceneWrapper}>
              {!showScene && (
                <div style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  left: "-9rem",
                }}>
                  <div style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    border: "3px solid rgba(0, 112, 255, 0.3)",
                    background: "radial-gradient(circle, rgba(0, 112, 255, 0.15) 0%, transparent 70%)",
                    animation: "pulse 2s ease-in-out infinite",
                  }} />
                </div>
              )}
              {showScene && <OptimizedScene />}
            </div>

            <div className={styles.contentContainer}>
              <div className={styles.textBox}>
                <SimpleTitle className={styles.title} accentClass={styles.titleAccent} />
                <SimpleSubtitle className={styles.subtitle} />

                <div
                  className={styles.buttonRow}
                  style={{
                    opacity: 0,
                    animation: "fadeInUp 0.4s ease-out 0.6s forwards"
                  }}
                >
                  <button className={styles.btnMain} onClick={handlePrimaryCta}>
                    צרו קשר
                  </button>
                  <button className={styles.btnAlt} onClick={handlePrimaryCta}>
                    השאירו פרטים
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Scroll indicator */}
        <div className={styles.scrollIndicatorWrapper}>
          <button
            className={styles.scrollIndicator}
            onClick={handleScrollDown}
            aria-label="Scroll to services"
            style={{
              opacity: 0,
              animation: "fadeIn 0.6s ease-out 2s forwards"
            }}
          >
            <div className={styles.mouse}>
              <div className={styles.wheel} />
            </div>
            <span className={styles.scrollText}>גללו למטה</span>
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
