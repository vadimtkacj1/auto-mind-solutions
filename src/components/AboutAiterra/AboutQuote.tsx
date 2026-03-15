"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutQuote() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 relative overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <motion.div style={{ scale: imageScale, opacity: imageOpacity }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2000&h=1200&fit=crop"
            alt="Technology and business analytics"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Overlay - light for image visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/55 to-slate-800/60" />
        </motion.div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-primary)]/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
          dir="rtl"
        >
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.15] max-w-5xl mx-auto tracking-tight"
          >
            אנחנו מגשרים על הפער בין{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-primary)] via-blue-400 to-blue-600">
              טכנולוגיה מורכבת
            </span>{" "}
            לבין{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-accent)] via-emerald-400 to-emerald-600">
              צמיחה עסקית
            </span>
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 text-base md:text-lg text-white/75 max-w-2xl leading-relaxed"
          >
            רעיונות שאפתניים — למוצרים דיגיטליים מצליחים. אוטומציה, AI וטכנולוגיה מתקדמת.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
