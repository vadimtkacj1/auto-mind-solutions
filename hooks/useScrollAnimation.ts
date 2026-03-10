"use client";

import { useEffect, useRef } from "react";

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>() {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    // Если элемент уже имеет класс scroll-animate, ScrollAnimationProvider обработает его
    // Этот хук просто обеспечивает, что элемент отслеживается
    if (!currentElement.classList.contains("scroll-animate")) {
      currentElement.classList.add("scroll-animate");
    }

    // Проверяем, виден ли элемент сразу
    const checkVisibility = () => {
      if (currentElement.classList.contains("animate-in-view")) return;

      const rect = currentElement.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const isVisible = rect.top < windowHeight * 0.85 && rect.bottom > -50;

      if (isVisible) {
        setTimeout(() => {
          currentElement.classList.add("animate-in-view");
        }, 100);
      }
    };

    // Проверяем после небольшой задержки
    const timeoutId = setTimeout(checkVisibility, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return elementRef;
}
