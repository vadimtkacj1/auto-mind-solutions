import { motion } from "framer-motion";

export function DataBlocks() {
  return (
    <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
      {/* Block 1 - Left - CSS анимация вместо JS */}
      <g className="data-block" style={{ animationDelay: "0s" }}>
        <path
          d="M170 350 L230 320 L290 350 L230 380 Z"
          fill="url(#glassGradient)"
          stroke="url(#glowGradient)"
          strokeWidth="1.5"
        />
        <path
          d="M170 350 L170 390 L230 420 L230 380 Z"
          fill="rgba(0, 208, 132, 0.1)"
          stroke="rgba(0, 208, 132, 0.4)"
          strokeWidth="1"
        />
        <path
          d="M230 380 L230 420 L290 390 L290 350 Z"
          fill="rgba(0, 102, 255, 0.1)"
          stroke="rgba(0, 102, 255, 0.4)"
          strokeWidth="1"
        />
        <line x1="200" y1="345" x2="260" y2="365" stroke="rgba(0, 245, 155, 0.5)" strokeWidth="2" />
      </g>

      {/* Block 2 - Center Back */}
      <g className="data-block" style={{ animationDelay: "0.3s" }}>
        <path
          d="M270 280 L330 250 L390 280 L330 310 Z"
          fill="url(#glassGradient)"
          stroke="url(#glowGradient)"
          strokeWidth="1.5"
        />
        <path
          d="M270 280 L270 360 L330 390 L330 310 Z"
          fill="rgba(0, 208, 132, 0.08)"
          stroke="rgba(0, 208, 132, 0.35)"
          strokeWidth="1"
        />
        <path
          d="M330 310 L330 390 L390 360 L390 280 Z"
          fill="rgba(0, 102, 255, 0.08)"
          stroke="rgba(0, 102, 255, 0.35)"
          strokeWidth="1"
        />
        <line x1="295" y1="300" x2="355" y2="320" stroke="rgba(0, 245, 155, 0.4)" strokeWidth="1.5" />
        <line x1="295" y1="315" x2="340" y2="330" stroke="rgba(0, 102, 255, 0.4)" strokeWidth="1.5" />
        <line x1="295" y1="330" x2="325" y2="340" stroke="rgba(0, 245, 155, 0.3)" strokeWidth="1.5" />
      </g>

      {/* Block 3 - Right */}
      <g className="data-block" style={{ animationDelay: "0.6s" }}>
        <path
          d="M340 340 L400 310 L460 340 L400 370 Z"
          fill="url(#glassGradient)"
          stroke="url(#glowGradient)"
          strokeWidth="1.5"
        />
        <path
          d="M340 340 L340 370 L400 400 L400 370 Z"
          fill="rgba(0, 208, 132, 0.1)"
          stroke="rgba(0, 208, 132, 0.4)"
          strokeWidth="1"
        />
        <path
          d="M400 370 L400 400 L460 370 L460 340 Z"
          fill="rgba(0, 102, 255, 0.1)"
          stroke="rgba(0, 102, 255, 0.4)"
          strokeWidth="1"
        />
      </g>
    </motion.g>
  );
}
