"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface ParallaxImageProps {
  src: string;
  alt: string;
  /** Скорость параллакса (0.5 = медленнее текста, по умолчанию 0.5) */
  speed?: number;
  /** Классы для обёртки */
  className?: string;
  /** Классы для изображения */
  imageClassName?: string;
  /** fill | ширину и высоту Next Image */
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

/**
 * Изображение с эффектом параллакса — двигается чуть медленнее контента при скролле.
 * Использует Lenis scroll при наличии, иначе нативный scroll.
 */
export function ParallaxImage({
  src,
  alt,
  speed = 0.5,
  className = "",
  imageClassName = "",
  fill = false,
  width,
  height,
  sizes,
  priority = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateParallax = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const delta = (viewportCenter - elementCenter) * (1 - speed) * 0.2;
      setTranslateY(delta);
    };

    const raf = () => {
      updateParallax();
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div
        className={imageClassName}
        style={{
          transform: `translate3d(0, ${translateY}px, 0)`,
          willChange: "transform",
        }}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width ?? 0}
            height={height ?? 0}
            sizes={sizes}
            priority={priority}
          />
        )}
      </div>
    </div>
  );
}
