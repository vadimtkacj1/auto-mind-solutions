'use client';

import LeadForm from "./LeadForm";
import { motion } from "framer-motion";

export default function LeadFormSection() {
  const formVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Form"
      className="py-6 bg-white"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={formVariants}
        className="container mx-auto px-4 max-w-md"
      >
        <LeadForm />
      </motion.div>
    </section>
  );
}
