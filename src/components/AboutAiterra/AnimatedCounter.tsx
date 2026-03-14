"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};

export function AnimatedCounter({ value, suffix = "", prefix = "", decimals = 0, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 75, damping: 15 });
  const [displayValue, setDisplayValue] = useState(0);

  useMotionValueEvent(springValue, "change", (v) => {
    setDisplayValue(decimals > 0 ? parseFloat(v.toFixed(decimals)) : Math.round(v));
  });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
