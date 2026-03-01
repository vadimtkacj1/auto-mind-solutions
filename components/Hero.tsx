'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const imageVariants = {
    hidden: { opacity: 0, x: -80, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: 0.4
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: 0.6
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section
      className="pt-20 pb-12 md:pt-32 md:pb-20 min-h-screen flex items-center rounded-bl-[40px] rounded-br-[40px]"
      style={{
        background: 'linear-gradient(180deg, #F4F9FF 0%, #E3F0FF 50%, #CFE6FF 100%)',
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl w-full">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="w-full md:w-[50%] flex justify-center"
          >
            <motion.div
              className="relative w-full max-w-[380px] md:max-w-none"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/hero-section.png"
                alt="People working together"
                width={400}
                height={300}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="w-full md:w-[48%] flex flex-col items-center md:items-start text-center md:text-left"
            dir="rtl"
            style={{ alignItems: 'flex-start' }}
          >
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-[#1a2b4b] mb-4 md:mb-8"
              style={{
                fontSize: 'clamp(38px, 6vw, 72px)',
                fontWeight: 900,
                lineHeight: '1.05',
                letterSpacing: '-0.02em',
              }}
            >
              יותר לידים.<br />
              פחות בזבוז תקציב.
            </motion.h1>

            <motion.p
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
              className="text-base md:text-xl text-gray-700 mb-8 md:mb-10 leading-relaxed font-medium max-w-[500px]"
            >
              משלבים בניית אתר ממיר, אסטרטגיית SEO מדויקת וקמפיינים ממוקדים שמוזנים בדאטה בזמן אמת.
              התוצאה: תנועה איכותית שנכנסת למערכת מסודרת והופכת ללידים שמייצרים מכירות.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="w-full flex justify-center md:justify-end"
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="inline-block text-center text-white w-full md:w-auto px-14 py-4 md:py-5 text-lg font-black transition-all cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, #0066FF 0%, #2979FF 50%, #00C6FF 100%)',
                  boxShadow: '0 10px 25px -5px rgba(0, 102, 255, 0.4)',
                  borderRadius: '20px',
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 10px 25px -5px rgba(0, 102, 255, 0.4)',
                    '0 15px 40px 0px rgba(0, 102, 255, 0.7)',
                    '0 10px 25px -5px rgba(0, 102, 255, 0.4)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                קבל שיחת אסטרטגיה חינם
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}