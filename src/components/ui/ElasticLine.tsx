"use client";

import type React from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

type ElasticLineProps = {
  className?: string;
  height?: number;
  strokeWidth?: number;
};

export function ElasticLine({ className, height = 56, strokeWidth = 1.5 }: ElasticLineProps) {
  const x = useMotionValue(500);
  const y = useMotionValue(50);

  const springX = useSpring(x, { stiffness: 400, damping: 30, mass: 1 });
  const springY = useSpring(y, { stiffness: 400, damping: 30, mass: 1 });

  const path = useMotionTemplate`M 0 50 Q ${springX} ${springY} 1000 50`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;
    x.set((xPos / rect.width) * 1000);
    y.set(((yPos / rect.height) * 100 - 50) * 4 + 50);
  };

  const handleMouseLeave = () => {
    x.set(500);
    y.set(50);
  };

  return (
    <div
      className={className}
      style={{ height, overflow: "visible" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        style={{ overflow: "visible", pointerEvents: "none", display: "block" }}
      >
        <motion.path
          d={path}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
