"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button/Button";
import { StarsBackground } from "../PackagesCTA/StarsBackground";

export function ArticleCTA() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-[45vh]"
    >
      {/* Subtle stars - lighter than PackagesCTA */}
      <div className="absolute inset-0 z-0 opacity-50">
        <StarsBackground />
      </div>

      {/* Violet accent glow - differs from blue on home */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.12), transparent 65%)",
        }}
      />

      <div className="relative z-[2] flex min-h-[45vh] flex-col items-center justify-center px-6 py-16 md:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px 80px 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            רוצים להפוך את התובנות האלה ל
            <span
              className="text-transparent bg-clip-text ml-0.5"
              style={{
                backgroundImage: "linear-gradient(135deg, #a78bfa, #c084fc)",
              }}
            >
              תוצאות?
            </span>
          </h2>

          <p className="mt-4 text-white/55 text-base md:text-lg leading-relaxed font-medium max-w-md mx-auto">
            בואו נדבר על איך נוכל לעזור לכם ליישם את האסטרטגיות שקראתם
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px 80px 0px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <Button asChild variant="cta" size="pill">
            <Link href="/contact" className="flex items-center gap-2">
              <span>בואו נדבר</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
