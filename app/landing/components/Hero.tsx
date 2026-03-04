'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile/desktop
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const imageVariants = {
    hidden: { opacity: 0, x: -80, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: 0
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        speed: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: 0.15
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: 0.25
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
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: 0.35
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
      className="pt-4 pb-8 md:pb-20 flex items-center rounded-bl-[40px] rounded-br-[40px] overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F4F9FF 0%, #E3F0FF 50%, #CFE6FF 100%)',
      }}
    >
      <div className="container mx-auto px-1 sm:px-3 max-w-7xl w-full">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-1 sm:gap-3 md:gap-16">
          {/* Text Content Container */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="w-full md:w-[43%] flex flex-col items-center text-center order-2 md:order-none"
          >
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-[#1a2b4b] mb-3 mt-6 md:mt-16 md:mb-8 w-full"
              style={{
                fontSize: 'clamp(32px, 8vw, 72px)',
                fontWeight: 900,
                lineHeight: '1.1',
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
              className="text-sm sm:text-base md:text-xl text-gray-700 mb-8 sm:mb-6 md:mb-10 leading-relaxed font-medium max-w-full md:max-w-[500px] px-2 sm:px-0"
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
              className="w-full flex justify-center px-4 md:px-0"
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

          {/* Image Container */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="w-full md:w-[55%] flex justify-center order-1 md:order-none"
          >
            <motion.div
              className="relative w-full md:max-w-none aspect-square"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >

              {/* Spinner */}
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
                    <motion.div
                      key="loading-spinner"
                      className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                      style={{ willChange: 'transform' }}
                    />
                  </div>
                </div>
              )}

              <Image
                src={isMobile ? '/images/hero-section.png' : '/images/hero-section.svg'}
                alt="People working together"
                fill
                className={`object-contain w-full h-full transition-opacity duration-500 mt-10 mb-10 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectPosition: 'center 35%'}}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 55vw, 700px"
                priority
                blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoKAAoAAgA0JaQAA3AA/vuUAAA="
                onLoad={() => {
                  setImageLoaded(true);
                }}
                onError={() => {
                  console.error('Image failed to load');
                  setImageLoaded(true);
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}