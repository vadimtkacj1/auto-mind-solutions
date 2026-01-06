import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { HeroBackground } from './components/HeroBackground/HeroBackground';
import { HeroGrid } from './components/HeroGrid/HeroGrid';
import { HeroContent } from './components/HeroContent/HeroContent';
import { ScrollIndicator } from './components/ScrollIndicator/ScrollIndicator';
import { CornerDecorations } from './components/CornerDecorations/CornerDecorations';
import { useIsMobile } from '../ui/use-mobile';
import styles from './Hero.module.css';

const LazyIsometricIllustration = lazy(() =>
  import('./components/IsometricIllustration/IsometricIllustration').then((m) => ({
    default: m.IsometricIllustration,
  })),
);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  // Disable expensive scroll animations for better performance
  // Only use simple fade out, no parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = 0;
  const scale = 1;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isMobile || reduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX - innerWidth / 2) / innerWidth,
        y: (clientY - innerHeight / 2) / innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile, reduceMotion]);

  return (
    <section ref={containerRef} id="home" className={`${styles.container} hero-premium-bg`}>
      <HeroBackground mousePosition={mousePosition} />
      <HeroGrid />

      <div className={styles.contentWrapper}>
        <div className={styles.grid}>
          <HeroContent opacity={opacity} scale={scale} />

          {!isMobile && (
            <motion.div
              style={{ y: shouldAnimate ? y : 0, opacity: shouldAnimate ? opacity : 1 }}
              className={styles.illustrationWrapper}
              aria-hidden="true"
              initial={false}
            >
              <Suspense fallback={<div className={styles.illustrationSkeleton} />}>
                <LazyIsometricIllustration />
              </Suspense>
            </motion.div>
          )}
        </div>
      </div>

      <ScrollIndicator />
      <CornerDecorations />
    </section>
  );
}
