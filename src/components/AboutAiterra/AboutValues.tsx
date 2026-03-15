"use client";

import { motion } from "framer-motion";
import { Star, Pen, Zap, Heart } from "lucide-react";

const VALUES = [
  {
    title: "מקצועיות",
    desc: "להיות מקצועי משמעותי לנו רב. זה כולל עבודה באיכות גבוהה, תקשורת מצוינת, צמיחה מתמשכת וגישה ממוקדת תוצאות.",
    Icon: Star,
  },
  {
    title: "לקיחת אחריות",
    desc: "אחריות ושותפות מגדירות את האתוס שלנו. יחד באותה סירה, אנחנו אחראים להשלמת המשימות. כל אחד עם כישרונות ייחודיים וחובות, אנחנו מוודאים מסירה אפקטיבית.",
    Icon: Pen,
  },
  {
    title: "יושר ושקיפות",
    desc: "אנחנו מטפחים סביבה אתית, דוחים משחקים פוליטיים ועסקאות כפולות בסוכנות.",
    Icon: Zap,
  },
  {
    title: "התלהבות!",
    desc: "עבורנו, עיצוב הוא לא רק עבודה. זה חלק מהחיים והתשוקה שלנו. בנוסף, אנחנו מעודדים את הצוות לחקור תחומי עניין אחרים כמו מוזיקה, טיולים ועוד.",
    Icon: Heart,
  },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function AboutValues() {
  const gradients = [
    "from-blue-500/10 via-purple-500/10 to-pink-500/10",
    "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
    "from-orange-500/10 via-red-500/10 to-rose-500/10",
    "from-violet-500/10 via-indigo-500/10 to-blue-500/10",
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50/50 via-white to-white relative">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "0px 0px 150px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-tight">
            מה מניע אותנו קדימה
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08, margin: "0px 0px 150px 0px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {VALUES.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/30 flex flex-col group cursor-default overflow-hidden"
              whileHover={{
                y: -8,
                boxShadow: "0 20px 60px -12px rgba(0, 112, 255, 0.25)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon at the top with gradient background */}
              <motion.div
                className="relative mb-6 w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <item.Icon
                  className="w-10 h-10 text-slate-700"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </motion.div>

              <h3 className="relative text-2xl font-black text-slate-900 mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                {item.title}
              </h3>
              <p className="relative text-slate-600 leading-relaxed flex-1 text-base">
                {item.desc}
              </p>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
