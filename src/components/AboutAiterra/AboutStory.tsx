"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/Button/Button";

export function AboutStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const imageY = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [-40, 0, 0, 40]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 overflow-visible bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* --- SECTION TITLE --- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "0px 0px 150px 0px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 md:mb-20"
        >
          <span className="text-[18px] md:text-[24px] font-black tracking-[0.2em] uppercase text-slate-800">
            הסיפור שלנו
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* --- ЛІВА КОЛОНКА --- */}
          <motion.div
            initial={{ opacity: 1, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.08, margin: "0px 0px 150px 0px" }}
            transition={{ duration: 0.8 }}
            className="space-y-10 text-right"
            dir="rtl"
          >
            {/* Оптимальний розмір, щоб текст не розривався */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.1] tracking-tight" dir="rtl">
              מאז 2010 אנחנו <span className="text-[var(--color-primary)]">בונים</span> את העתיד הדיגיטלי
            </h2>

            <div className="space-y-6 max-w-xl" dir="rtl">
              <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-medium">
                Aiterra החלה באמונה פשוטה: טכנולוגיה מורכבת צריכה להעצים עסקים.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                אנחנו עוזרים ללקוחות למצוא פתרונות יוצאי דופן — בניית אתרים בלתי נשכחים, מערכות אוטומציה ומוצרים מבוססי בינה מלאכותית. כל פרויקט מעוצב בדיוק לפי הדרישות.
              </p>
            </div>
            
            <Button asChild variant="brand" size="pill" className="px-10 py-7 text-lg shadow-xl hover:scale-105 transition-all">
              <Link href="/services" className="flex items-center gap-3">
                <ArrowLeft className="w-5 h-5" /> מה אנחנו עושים
              </Link>
            </Button>
          </motion.div>

          {/* --- ПРАВА КОЛОНКА (ЗОБРАЖЕННЯ) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.08, margin: "0px 0px 150px 0px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[320px] lg:h-[420px] rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-900/10 bg-slate-50 border border-slate-200/50"
          >
            <motion.div
              style={{ y: imageY, opacity: imageOpacity }}
              className="absolute inset-0"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=1200&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/10 via-transparent to-blue-500/10 mix-blend-overlay" />
            </motion.div>

            {/* Decorative corner accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[var(--color-primary)]/20 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}