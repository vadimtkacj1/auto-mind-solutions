"use client";

import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type AnimationType = "fade" | "slide" | "scale" | "blur" | "rotate";

type RevealProps = PropsWithChildren<{
  /** Delay in seconds */
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  duration?: number;
  animation?: AnimationType;
  scale?: number;
  rotate?: number;
  blur?: number;
  once?: boolean;
}>;

export function Reveal({
  children,
  delay = 0,
  y = 18,
  x = 0,
  className,
  duration = 0.65,
  animation = "fade",
  scale = 0.95,
  rotate = 0,
  blur = 0,
  once = true,
}: RevealProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // For SSR/hydration: render without animation initially, then animate after mount
  // This ensures server and client render the same initial HTML
  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  const getAnimationVariants = () => {
    switch (animation) {
      case "fade":
        return {
          initial: { opacity: 0, y, x },
          animate: { opacity: 1, y: 0, x: 0 },
        };
      case "slide":
        return {
          initial: { opacity: 0, x: x || -50, y },
          animate: { opacity: 1, x: 0, y: 0 },
        };
      case "scale":
        return {
          initial: { opacity: 0, scale, y, x },
          animate: { opacity: 1, scale: 1, y: 0, x: 0 },
        };
      case "blur":
        return {
          initial: { opacity: 0, filter: `blur(${blur || 10}px)`, y, x },
          animate: { opacity: 1, filter: "blur(0px)", y: 0, x: 0 },
        };
      case "rotate":
        return {
          initial: { opacity: 0, rotate: rotate || -10, y, x },
          animate: { opacity: 1, rotate: 0, y: 0, x: 0 },
        };
      default:
        return {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
        };
    }
  };

  const { initial, animate } = getAnimationVariants();

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount: 0.1, margin: "0px 0px 80px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
