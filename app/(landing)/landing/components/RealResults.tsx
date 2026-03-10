"use client";

import Image from "next/image";
import { useState } from "react";

const portfolioLinks = [
  "https://olie6.com/?srsltid=AfmBOoplSojZjiEjDhGBLVegGqFWT1cehFUP5RgZxWBf5LXFFpXXRJ2d", // Portfolio 1
  "https://avi-mashkanta.com/", // Portfolio 2
  "https://ram-haim.co.il/", // Portfolio 3
  "https://naturallyrefreshing.store/", // Portfolio 4
];

export default function RealResults() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  const currentSrc = `/images/portfolio${currentSlide + 1}-opt.webp`;
  const nextSrc = currentSlide < totalSlides - 1 ? `/images/portfolio${currentSlide + 2}-opt.webp` : null;

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title */}
        <h2 id="portfolio-heading" className="text-3xl md:text-4xl font-bold text-center mb-4" dir="rtl">
          תוצאות אמיתיות, אתרים{" "}
          <span className="bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-cyan-400">
            אמיתיים. עסקים שצומחים.
          </span>
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 mb-8 leading-relaxed" dir="rtl" style={{ fontSize: "15px" }}>
          מאחורי כל פרויקט עומד צוות של מפתחים, מעצבים ואנשי שיווק שחושבים תוצאות.
          <br />
          אנחנו עובדים בתהליך מסודר: אפיון ← אסטרטגיה ← עיצוב ← פיתוח ← השקה ← אופטימיזציה.
          <br />
          כל אתר נבנה כדי לייצר צמיחה אמיתית לעסק.
        </p>

        {/* Slider */}
        <div className="relative w-full max-w-3xl mx-auto mb-8">
          <div className="relative h-96 md:h-[500px] overflow-hidden bg-white">
            {/* Current slide */}
            <div className="absolute inset-0 transition-opacity duration-300">
              <a
                href={portfolioLinks[currentSlide]}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full cursor-pointer"
                aria-label={`Visit portfolio website ${currentSlide + 1}`}
              >
                <Image
                  src={currentSrc}
                  alt={`Portfolio ${currentSlide + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 768px"
                  loading={currentSlide === 0 ? "eager" : "lazy"}
                  priority={currentSlide === 0}
                  fetchPriority={currentSlide === 0 ? "high" : "low"}
                  unoptimized
                />
              </a>
            </div>
            {/* Preload next slide */}
            {nextSrc && (
              <div className="hidden">
                <Image
                  src={nextSrc}
                  alt={`Portfolio ${currentSlide + 2}`}
                  width={768}
                  height={500}
                  loading="eager"
                  fetchPriority="low"
                  unoptimized
                />
              </div>
            )}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mb-8">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-8 h-3 bg-blue-600" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contact");
              if (element) {
                const headerHeight = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-base md:text-lg font-bold hover:bg-blue-700 transition shadow-lg cursor-pointer"
            dir="rtl"
          >
            באו ניכנס גם לכם ונציג דיגיטלי שישדרג תפיסות
          </a>
        </div>
      </div>
    </section>
  );
}
