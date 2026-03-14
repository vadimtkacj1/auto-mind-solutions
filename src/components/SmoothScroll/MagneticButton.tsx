"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

export interface MagneticButtonProps {
  children: ReactNode;
  /** Радиус магнетического притяжения в пикселях (по умолчанию 120) */
  radius?: number;
  /** Сила смещения (0-1, по умолчанию 0.35) */
  strength?: number;
  /** Дополнительные классы */
  className?: string;
  /** onClick обработчик */
  onClick?: () => void;
  /** type кнопки */
  type?: "button" | "submit" | "reset";
  /** disabled */
  disabled?: boolean;
}

/**
 * Кнопка с магнитным эффектом — слегка притягивается к курсору при наведении (фирменный стиль Cuberto).
 */
export function MagneticButton({
  children,
  radius = 120,
  strength = 0.35,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < radius) {
      const factor = 1 - distance / radius;
      const moveX = dx * strength * factor;
      const moveY = dy * strength * factor;
      setPosition({ x: moveX, y: moveY });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ overflow: "hidden" }}
    >
      <motion.span
        style={{ display: "inline-block" }}
        animate={{ x: position.x, y: position.y }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        {children}
      </motion.span>
    </button>
  );
}
