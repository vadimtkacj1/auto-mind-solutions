import { motion } from 'framer-motion';

export function MainArrow() {
  return (
    <motion.g
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      {/* Упрощенная CSS-анимация вместо JS - использует GPU */}
      <g className="arrow-float">
        <path
          d="M300 100 L340 160 L320 160 L320 260 L280 260 L280 160 L260 160 Z"
          fill="url(#arrowGlassGradient)"
          stroke="url(#arrowGradient)"
          strokeWidth="2"
          filter="url(#arrowGlow)"
        />
        <path
          d="M300 115 L325 155 L315 155 L315 250 L285 250 L285 155 L275 155 Z"
          fill="rgba(255, 255, 255, 0.25)"
        />
        <path
          d="M300 120 L320 150 L310 150 L310 245 L290 245 L290 150 L280 150 Z"
          fill="rgba(0, 245, 155, 0.35)"
          className="arrow-pulse"
        />
        <path
          d="M300 100 L260 160"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="1"
        />
        <path
          d="M300 100 L340 160"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1"
        />
        <ellipse
          cx="300"
          cy="100"
          rx="12"
          ry="6"
          fill="rgba(0, 245, 155, 0.5)"
          className="arrow-tip-glow"
        />
      </g>
    </motion.g>
  );
}

