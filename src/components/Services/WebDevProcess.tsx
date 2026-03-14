"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Shield, MonitorSmartphone, Rocket, Search, Cpu } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "ביצועים מקסימליים",
    description: "אתרים שנטענים תוך שניות ספורות עם אופטימיזציה מתקדמת",
  },
  {
    icon: Shield,
    title: "אבטחה ברמה הגבוהה",
    description: "הגנה מלאה מפני פריצות ואיומי סייבר",
  },
  {
    icon: MonitorSmartphone,
    title: "מותאם לכל מכשיר",
    description: "חוויה מושלמת במובייל, טאבלט ומחשב",
  },
  {
    icon: Search,
    title: "SEO מובנה",
    description: "תשתית אופטימלית לקידום אורגני במנועי חיפוש",
  },
  {
    icon: Rocket,
    title: "סקיילביליות",
    description: "ארכיטקטורה שצומחת עם העסק שלכם",
  },
  {
    icon: Cpu,
    title: "טכנולוגיות מתקדמות",
    description: "React, Next.js, Node.js ועוד",
  },
];

export function WebDevProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], [-80, 0, 80]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      dir="rtl"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 opacity-10">
        <motion.div style={{ y: imageY, opacity: imageOpacity }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=2000&h=1200&fit=crop"
            alt="Code background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden
      />

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[16px] md:text-[20px] font-black tracking-[0.3em] uppercase text-[var(--color-primary)] mb-4 inline-block">
            למה Aiterra?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-4 leading-tight">
            מעבר לפלטפורמות רגילות:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-blue-400 to-blue-600">
              פיתוח אתר אינטרנט מהיר ועוצמתי
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed">
            כולם מכירים שירותים של בניית אתר וורדפרס (ואנחנו בהחלט מציעים הקמת אתר וורדפרס ברמת פרימיום), אבל היתרון האמיתי של Aiterra הוא ביכולת לפתח מערכות מורכבות. כשיש לכם מתכנת אתרים (Back-End) לצד צוות של מעצבי אתרים שעובדים יחד באותו משרד, פרויקט של בניית אתרים באינטרנט הופך להרבה יותר מדויק. מביצוע מחקר משתמשים ועד השקת המוצר, כל שורת קוד נכתבת כדי לשרת את שורת הרווח שלכם.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 order-2 lg:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=1200&fit=crop"
              alt="Development process"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            {/* Decorative corner */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[var(--color-primary)]/30 to-transparent" />
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-2">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white/[0.08] backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)]/25 to-blue-500/25 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-[var(--color-primary)]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
