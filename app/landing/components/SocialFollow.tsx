'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function SocialFollow() {
  const socialLinks = [
    { name: "Instagram", icon: "/images/instagram.svg", url: "https://instagram.com" },
    { name: "Facebook", icon: "/images/facebook.svg", url: "https://facebook.com" },
    { name: "LinkedIn", icon: "/images/linkedin.svg", url: "https://linkedin.com" },
    { name: "TikTok", icon: "/images/tiktok.svg", url: "https://tiktok.com" }
  ];

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const iconContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section
      id="follow"
      aria-labelledby="follow-heading"
      className="py-20 bg-gradient-to-b"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          {/* Social Girl Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={imageVariants}
            className="relative w-full h-80 mb-8"
          >
            <Image
              src="/images/social-girl.svg"
              alt="Follow us on social media"
              fill
              sizes="(max-width: 768px) 90vw, 448px"
              style={{ objectFit: 'contain' }}
              loading="eager"
            />
          </motion.div>

          {/* Text with gradient */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={textVariants}
            className="mb-8"
          >
            <h2 id="follow-heading" className="text-2xl font-bold mb-2" dir="rtl">
              <span
                className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
              >
                עקבו אחרינו ברשתות
              </span>
              {" "}
              <span>וראו איך בונים מותגים</span>
            </h2>
            <p className="text-xl font-bold text-blue-600" dir="rtl">
              שמובילים שוק
            </p>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            variants={iconContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 10,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
                className="w-15 h-20 flex items-center justify-center rounded-full"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={68}
                  height={68}
                  sizes="68px"
                  loading="eager"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
