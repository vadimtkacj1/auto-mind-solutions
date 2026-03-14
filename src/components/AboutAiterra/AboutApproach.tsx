"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Handshake, Headphones, Pen, Zap, Users2 } from "lucide-react";
import SpaceBackground from "../hero/SpaceBackground";
import { AboutApproachAccordion } from "./AboutApproachAccordion";

const ITEMS = [
  {
    label: "אמון",
    desc: "אנחנו בונים שותפויות ארוכות טווח על בסיס שקיפות ואמינות. ההצלחה שלכם היא ההצלחה שלנו.",
    Icon: Handshake,
  },
  {
    label: "אובססיה ללקוח",
    desc: "כל החלטה מתחילה בהבנת היעדים העסקיים שלכם. אנחנו מחויבים לספק ערך שמניע תוצאות.",
    Icon: Headphones,
  },
  {
    label: "מקצועיות",
    desc: "אנחנו לא משחררים מוצרים בחיפזון. כל אתר, מערכת אוטומציה ופתרון AI מעוצבים בדיוק ובתשומת לב.",
    Icon: Pen,
  },
  {
    label: "עצמה",
    desc: "אנחנו מביאים אנרגיה ומיקוד לכל פרויקט. תאריכי יעד חשובים. איכות אינה נתונה למשא ומתן.",
    Icon: Zap,
  },
  {
    label: "משפחה",
    desc: "אנחנו עובדים כצוות אחד — בפנים ועם הלקוחות שלנו. שיתוף פעולה ותמיכה הדדית מניעים את כל מה שאנחנו עושים.",
    Icon: Users2,
  },
];

function AboutApproachContent({
  sectionRef,
  isInView,
  openIndex,
  setOpenIndex,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  isInView: boolean;
  openIndex: number | null;
  setOpenIndex: (v: number | null) => void;
}) {
  return (
    <motion.div
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      role="region"
      aria-label="הגישה שלנו"
      className="relative py-20 md:py-32 overflow-hidden"
      dir="ltr"
      style={{ backgroundColor: "#080a0c" }}
    >
      <div className="absolute inset-0 z-0">
        {isInView && <SpaceBackground enabled />}
      </div>
      <div
        className="absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "0px 0px 150px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[18px] md:text-[24px] font-black tracking-[0.2em] uppercase text-[var(--color-primary)]">
            הגישה שלנו
          </span>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08, margin: "0px 0px 150px 0px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-white leading-[1.15] mb-6" dir="rtl">
                Aiterra עוזרת לעסקים לבנות חוויית לקוח טובה יותר ואנושית יותר עם{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-blue-400">
                  בינה מלאכותית
                </span>.
              </h2>
              <p className="text-sm md:text-base text-white/75 leading-relaxed" dir="rtl">
                בשותפות עם מובילי התעשייה, אנחנו משנים חוויית לקוח, דוחפים את גבולות ה-AIO השימושית, ומביאים השפעה עסקית מדידה בקנה מידה.
              </p>
            </motion.div>
          </div>
          <AboutApproachAccordion items={ITEMS} openIndex={openIndex} setOpenIndex={setOpenIndex} />
        </div>
      </div>
    </motion.div>
  );
}

export function AboutApproach() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.1, once: true });

  return (
    <AboutApproachContent
      sectionRef={sectionRef}
      isInView={isInView}
      openIndex={openIndex}
      setOpenIndex={setOpenIndex}
    />
  );
}
