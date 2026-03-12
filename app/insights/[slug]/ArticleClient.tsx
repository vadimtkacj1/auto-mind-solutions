"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(scrollProgress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-0 right-0 top-20 w-full h-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg" style={{ zIndex: 9998 }}>
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Progress trail */}
      <div
        className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{
          width: `${progress}%`
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-sm opacity-60" />
      </div>

      {/* Rocket flying horizontally */}
      {progress > 0 && (
        <div
          className="absolute top-1/2"
          style={{
            left: `${progress}%`,
            transform: `translate(-50%, -50%) rotate(90deg)`
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            {/* Rocket body */}
            <path
              d="M32 4C32 4 48 12 48 32L44 44L32 48L20 44L16 32C16 12 32 4 32 4Z"
              fill="#FF6B6B"
              stroke="#FF5252"
              strokeWidth="2"
            />
            {/* Window */}
            <circle cx="32" cy="24" r="6" fill="#4FC3F7" stroke="#0288D1" strokeWidth="2" />
            {/* Left wing */}
            <path d="M16 32L8 48L16 44L16 32Z" fill="#FFA726" stroke="#F57C00" strokeWidth="2" />
            {/* Right wing */}
            <path d="M48 32L56 48L48 44L48 32Z" fill="#FFA726" stroke="#F57C00" strokeWidth="2" />
            {/* Flame */}
            <g className="animate-pulse">
              <path d="M32 48L28 56L32 54L36 56L32 48Z" fill="#FFEB3B" />
              <path d="M32 48L30 60L32 56L34 60L32 48Z" fill="#FF9800" />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7 7 7M5 19l7-7 7 7" />
      </svg>
    </button>
  );
}
