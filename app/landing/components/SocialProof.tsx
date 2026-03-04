'use client';

import { SOCIAL_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function SocialProof() {
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const linksContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={titleVariants}
          className="text-4xl font-bold mb-8"
          dir="rtl"
        >
          עקבו אחרינו ברשתות
        </motion.h2>

        {/* Social Links */}
        <motion.div
          variants={linksContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex justify-center gap-6"
        >
          {SOCIAL_LINKS.map((social, index) => (
            <motion.a
              key={social.platform}
              href={social.url}
              variants={linkVariants}
              whileHover={{ 
                scale: 1.15,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-gray-900 text-lg"
              aria-label={social.label}
            >
              {social.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
