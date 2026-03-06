'use client';

import { useEffect } from 'react';

export default function ScrollAnimationProvider() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            if (!element.classList.contains('animate-in-view')) {
              element.classList.add('animate-in-view');
            }
          }
        });
      },
      observerOptions
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('.scroll-animate:not(.animate-in-view)');
      elements.forEach((element) => {
        observer.observe(element);
      });
    };

    const checkVisibleElements = () => {
      const elements = document.querySelectorAll('.scroll-animate:not(.animate-in-view)');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible) {
          setTimeout(() => {
            element.classList.add('animate-in-view');
          }, 150);
        } else {
          observer.observe(element);
        }
      });
    };

    const init = () => {
      checkVisibleElements();
      observeElements();
    };

    // Запускаем после полной загрузки страницы
    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('load', init);
    }
    
    const timeoutId = setTimeout(init, 100);
    const timeoutId2 = setTimeout(init, 300);
    const timeoutId3 = setTimeout(init, 600);

    // Используем MutationObserver для отслеживания новых элементов
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Также слушаем скролл для более точного определения
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate:not(.animate-in-view)');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const isVisible = rect.top < windowHeight * 0.85 && rect.bottom > -50;
        
        if (isVisible) {
          element.classList.add('animate-in-view');
          observer.unobserve(element);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      window.removeEventListener('load', init);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}

