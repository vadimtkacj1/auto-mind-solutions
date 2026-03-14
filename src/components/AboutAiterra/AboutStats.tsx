"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

const STATS = [
  { value: 15, suffix: "+" },
  { value: 120, suffix: "+" },
  { value: 80, suffix: "+" },
  { value: 12, suffix: "" },
];

const containerVariants = {
  hidden: { opacity: 1, y: 20 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const blockVariants = {
  hidden: { opacity: 1, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function AboutStats() {
  const gradients = [
    "from-blue-500/5 to-purple-500/5",
    "from-emerald-500/5 to-teal-500/5",
    "from-orange-500/5 to-rose-500/5",
    "from-violet-500/5 to-indigo-500/5",
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "0px 0px 100px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[18px] md:text-[24px] font-black tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4 inline-block">
            במספרים
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mt-4" dir="rtl">
            Aiterra ב{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-blue-600">מספרים</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0, margin: "0px 0px 100px 0px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={blockVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 60px -12px rgba(0, 112, 255, 0.25)",
                transition: { duration: 0.3 },
              }}
              className={`relative bg-white rounded-3xl p-8 md:p-10 shadow-lg transition-all duration-300 overflow-hidden group cursor-default`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Number with gradient */}
              <div className="relative text-4xl md:text-5xl lg:text-6xl font-black">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-700 group-hover:from-[var(--color-primary)] group-hover:to-blue-600 transition-all duration-500">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
              </div>

              {/* Decorative corner element */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[var(--color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
