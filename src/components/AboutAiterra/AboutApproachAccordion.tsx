"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

type AccordionItem = {
  label: string;
  desc: string;
  Icon: React.ComponentType<Record<string, unknown>>;
};

type Props = {
  items: AccordionItem[];
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
};

export function AboutApproachAccordion({ items, openIndex, setOpenIndex }: Props) {
  return (
    <div className="space-y-3 order-1 lg:order-2">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const Icon = item.Icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08, margin: "0px 0px 150px 0px" }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
            className="rounded-xl overflow-hidden backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center gap-4 px-5 py-4 md:px-6 md:py-5 text-left bg-white/[0.06] hover:bg-white/[0.09] border border-white/[0.08] hover:border-[var(--color-primary)]/40 transition-all duration-300 group"
            >
              <Icon
                className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-primary)] shrink-0"
                strokeWidth={1.5}
                aria-hidden
              />
              <span className="flex-1 text-base md:text-lg font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors">
                {item.label}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.25 }}
                className="shrink-0 text-white/50 group-hover:text-[var(--color-primary)]"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 py-4 md:px-6 md:py-5 bg-white/[0.03] border-x border-b border-white/[0.08]">
                    <p className="text-white/70 text-sm md:text-base leading-relaxed pl-10 md:pl-12">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
