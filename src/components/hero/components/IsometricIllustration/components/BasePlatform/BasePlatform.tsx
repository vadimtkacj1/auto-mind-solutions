import { motion } from "framer-motion";

export function BasePlatform() {
  return (
    <motion.g initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
      <path
        d="M150 400 L300 480 L450 400 L300 320 Z"
        fill="url(#glassGradient)"
        stroke="url(#glowGradient)"
        strokeWidth="1.5"
        filter="url(#glow)"
      />
      <path
        d="M150 400 L150 420 L300 500 L300 480 Z"
        fill="rgba(0, 208, 132, 0.08)"
        stroke="rgba(0, 208, 132, 0.3)"
        strokeWidth="1"
      />
      <path
        d="M300 480 L300 500 L450 420 L450 400 Z"
        fill="rgba(0, 102, 255, 0.08)"
        stroke="rgba(0, 102, 255, 0.3)"
        strokeWidth="1"
      />
    </motion.g>
  );
}
