"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RealResults() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  // Portfolio website URLs
  const portfolioLinks = [
    "https://olie6.com/?srsltid=AfmBOoplSojZjiEjDhGBLVegGqFWT1cehFUP5RgZxWBf5LXFFpXXRJ2d", // Portfolio 1
    "https://avi-mashkanta.com/", // Portfolio 2
    "https://ram-haim.co.il/", // Portfolio 3
    "https://naturallyrefreshing.store/" // Portfolio 4
  ];


  const preloadSlides = Array.from({ length: totalSlides }, (_, i) => i).filter(
    (i) => i !== currentSlide
  );

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  const sliderVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  const slideVariants = {
    enter: {
      opacity: 0
    },
    center: {
      opacity: 1,
      zIndex: 1
    },
    exit: {
      opacity: 0,
      zIndex: 0
    }
  };

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title */}
        <motion.h2
          id="portfolio-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={titleVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          dir="rtl"
        >
          תוצאות אמיתיות, אתרים{" "}
          <span className="text-blue-600">אמיתיים. עסקים שצומחים.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={descriptionVariants}
          className="text-center text-gray-600 mb-8 leading-relaxed"
          dir="rtl"
          style={{ fontSize: "15px" }}
        >
          מאחורי כל פרויקט עומד צוות של מפתחים, מעצבים ואנשי שיווק שחושבים תוצאות.
          <br />
          אנחנו עובדים בתהליך מסודר: אפיון ← אסטרטגיה ← עיצוב ← פיתוח ← השקה ←
          אופטימיזציה.
          <br />
          כל אתר נבנה כדי לייצר צמיחה אמיתית לעסק.
        </motion.p>

        {/* Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={sliderVariants}
          className="relative w-full max-w-3xl mx-auto mb-8"
        >
          {/* Hidden preloader: eagerly loads all other slide images early */}
          <div
            aria-hidden
            className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none"
          >
            {preloadSlides.map((i) => {
              const imageMap = [
                '/images/portfolio1-opt.webp',
                '/images/portfolio2-opt.webp',
                '/images/portfolio3-opt.webp',
                '/images/portfolio4-opt.png'
              ];
              return (
                <Image
                  key={i}
                  src={imageMap[i]}
                  alt=""
                  width={768}
                  height={500}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 768px"
                  loading="lazy"
                />
              );
            })}
          </div>

          <div className="relative h-96 md:h-[500px] overflow-hidden bg-white">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="absolute inset-0"
              >
                <a
                  href={portfolioLinks[currentSlide]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full cursor-pointer"
                  aria-label={`Visit portfolio website ${currentSlide + 1}`}
                >
                  <Image
                    src={
                      currentSlide === 0 ? '/images/portfolio1.png' :
                      currentSlide === 1 ? '/images/portfolio2.png' :
                      currentSlide === 2 ? '/images/portfolio3.png' :
                      '/images/portfolio4.png'
                    }
                    alt={`Portfolio ${currentSlide + 1}`}
                    fill
                    style={{ objectFit: "contain" }}
                    priority={false}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 768px"
                    loading="lazy"
                  />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mb-8">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 h-3 bg-blue-600"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          className="text-center"
        >
          <a
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
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-base md:text-lg font-bold hover:bg-blue-700 transition shadow-lg cursor-pointer"
            dir="rtl"
          >
            באו ניכנס גם לכם ונציג דיגיטלי שישדרג תפיסות
          </a>
        </motion.div>
      </div>
    </section>
  );
}
