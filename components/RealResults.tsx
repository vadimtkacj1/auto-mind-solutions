"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function RealResults() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          dir="rtl"
        >
          תוצאות אמיתיות, אתרים{" "}
          <span className="text-blue-600">אמיתיים. עסקים שצומחים.</span>
        </h2>

        {/* Description */}
        <p
          className="text-center text-gray-600 mb-8 leading-relaxed"
          dir="rtl"
          style={{ fontSize: "15px" }}
        >
          מאחורי כל פרויקט עומד צוות של מפתחים, מעצבים ואנשי שיווק שחושבים תוצאות.
          <br />
          אנחנו עובדים בתהליך מסודר: אפיון → אסטרטגיה → עיצוב → פיתוח → השקה →
          אופטימיזציה.
          <br />
          כל אתר נבנה כדי לייצר צמיחה אמיתית לעסק.
        </p>

        {/* Slider */}
        <div className="relative w-full max-w-3xl mx-auto mb-8">
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            {[...Array(totalSlides)].map((_, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  currentSlide === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <Image
                  src={`/images/portfolio${index + 1}.svg`}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-xl transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-xl transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

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
        <div className="text-center">
          <button
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-base md:text-lg font-bold hover:bg-blue-700 transition shadow-lg"
            dir="rtl"
          >
            באו ניכנס גם לכם ונציג דיגיטלי שישדרג תפיסות
          </button>
        </div>
      </div>
    </section>
  );
}
