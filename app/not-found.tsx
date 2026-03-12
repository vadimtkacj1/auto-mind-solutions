"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Header from "../src/components/Header/Header";
import { Footer } from "../src/components/Footer/Footer";
import styles from "./not-found.module.css";

const SpaceBackground = dynamic(() => import("../src/components/hero/SpaceBackground"), { ssr: false });

export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={styles.container}>
      {/* Stars background */}
      {isMounted && <SpaceBackground />}

      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            404
          </motion.h1>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            דף לא נמצא
          </motion.h2>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            מצטערים, הדף שחיפשת לא קיים או הועבר למיקום אחר.
          </motion.p>

          <motion.div
            className={styles.buttonRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="/" className={styles.btnMain}>
              <span>חזרה לעמוד הראשי</span>
              <svg
                className={styles.arrow}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 10H6.5M10 6.5L13.5 10L10 13.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link href="/contact" className={styles.btnAlt}>
              <span>צור קשר</span>
              <svg
                className={styles.arrow}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 10H6.5M10 6.5L13.5 10L10 13.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
