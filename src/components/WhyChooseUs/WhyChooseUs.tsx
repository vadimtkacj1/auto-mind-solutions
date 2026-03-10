"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import { CheckCircle2, TrendingUp } from "lucide-react";

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [imageFailed, setImageFailed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yFast = useTransform(scrollYProgress, [0, 1], [-200, 300]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const smoothYFast = useSpring(yFast, { stiffness: 50, damping: 20 });

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="relative z-10 bg-gradient-to-b from-[#fcfcfd] to-white overflow-hidden py-16 md:py-24"
      dir="rtl"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <motion.div style={{ y: smoothYFast }} className="absolute top-[10%] left-[5%] text-blue-400/20">
          <CheckCircle2 size={120} strokeWidth={1.5} />
        </motion.div>

        <motion.div style={{ y: ySlow }} className="absolute bottom-[10%] right-[5%] text-emerald-400/20">
          <TrendingUp size={140} strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-16 md:mb-24">
          {/* Text Content */}
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
                למה לבחור <br />
                <span className="text-blue-600">בנו?</span>
              </h2>
            </Reveal>

            <Reveal>
              <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed">
                <p className="font-semibold text-slate-800">כי אנחנו לא מוכרים אתר או אפליקציה בכל מחיר.</p>

                <p>
                  לא כל עסק באמת צריך פיתוח, ולכן לפני כל פרויקט אנחנו מתחילים בשיחת אפיון מעמיקה שמטרתה להבין האם ואיך
                  פתרון דיגיטלי ישרת את העסק.
                </p>

                <p>אנחנו בוחנים את היתרונות העסקיים, החזר ההשקעה והערך האמיתי שהאתר או האפליקציה יכולים לייצר.</p>

                <p className="font-semibold text-slate-800">
                  רק כשיש לכך תרומה ברורה, נמליץ להתקדם, ואם לא, נציע פתרון מדויק וחכם יותר שמתאים לצרכים האמיתיים של
                  העסק.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Image Container */}
          <Reveal>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-slate-100"
            >
              <div className="relative">
                {!imageFailed ? (
                  <Image
                    src="/images/why-choose-us.jpg"
                    alt="למה לבחור בנו"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    onError={() => setImageFailed(true)}
                  />
                ) : (
                  <div className="min-h-[400px] flex items-center justify-center" />
                )}

                {/* Decorative Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
