"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { CUBERTO_EASING } from "./constants";

export interface RevealElementProps {
  children: ReactNode;
  /** Смещение по Y при появлении (по умолчанию 100) */
  y?: number;
  /** Задержка анимации в секундах */
  delay?: number;
  /** Длительность анимации в секундах */
  duration?: number;
  /** Анимировать только при первом появлении (по умолчанию true) */
  once?: boolean;
  /** Доля видимости для триггера (0-1, по умолчанию 0.2) */
  amount?: number;
  /** Дополнительные классы */
  className?: string;
  /** Тег-обёртка (по умолчанию div) */
  as?: "div" | "section" | "article" | "span";
}

/**
 * Компонент для scroll-driven анимаций в стиле Cuberto.
 * Элементы выезжают снизу вверх (y: 100 → 0) с плавным появлением opacity.
 */
export function RevealElement({
  children,
  y = 100,
  delay = 0,
  duration = 0.8,
  once = true,
  amount = 0.2,
  className,
  as = "div",
}: RevealElementProps) {
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px 120px 0px" }}
      transition={{
        duration,
        delay,
        ease: CUBERTO_EASING as [number, number, number, number],
      }}
    >
      {children}
    </MotionTag>
  );
}
