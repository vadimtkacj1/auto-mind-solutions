'use client';

import { useEffect, useState } from 'react';
import styles from './PageLoadingSpinner.module.css';

export default function PageLoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Проверяем, была ли страница уже загружена в этой сессии
    const hasLoaded = sessionStorage.getItem('pageHasLoaded');

    if (hasLoaded) {
      // Если страница уже загружалась, не показываем спиннер
      setIsLoading(false);
      setIsVisible(false);
      document.body.classList.add('page-loaded');
      return;
    }

    // Ждем полной загрузки страницы
    const handleLoad = () => {
      // Небольшая задержка для плавности
      setTimeout(() => {
        setIsLoading(false);
        // Сохраняем что страница загружена
        sessionStorage.setItem('pageHasLoaded', 'true');

        // Добавляем класс к body
        document.body.classList.add('page-loaded');

        // Через время анимации скрываем компонент полностью
        setTimeout(() => {
          setIsVisible(false);
        }, 600);
      }, 300);
    };

    // Если документ уже загружен
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);

      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  // Не рендерим компонент если он не видим
  if (!isVisible) return null;

  return (
    <div
      className={`${styles.loadingOverlay} ${!isLoading ? styles.fadeOut : ''}`}
      aria-hidden="true"
    >
      <div className={styles.spinnerContainer}>
        {/* Современный спиннер с градиентом */}
        <div className={styles.spinner}>
          <div className={styles.spinnerRing}></div>
          <div className={styles.spinnerRing}></div>
          <div className={styles.spinnerRing}></div>
          <div className={styles.spinnerCore}></div>
        </div>

        {/* Текст загрузки */}
        <div className={styles.loadingText}>
          <span className={styles.loadingLabel}>טוען</span>
          <div className={styles.dots}>
            <span className={styles.dot}>.</span>
            <span className={styles.dot}>.</span>
            <span className={styles.dot}>.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
