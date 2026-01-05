import { motion } from 'framer-motion';

export function MainArrow() {
  return (
    <motion.g
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.8, type: "spring", stiffness: 100 }}
      filter="url(#arrowGlow)"
    >
      <motion.g
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M300 100 L340 160 L320 160 L320 260 L280 260 L280 160 L260 160 Z"
          fill="url(#arrowGlassGradient)"
          stroke="url(#arrowGradient)"
          strokeWidth="2"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(0, 208, 132, 0.8)) drop-shadow(0 0 40px rgba(0, 102, 255, 0.6))'
          }}
        />
        <path
          d="M300 115 L325 155 L315 155 L315 250 L285 250 L285 155 L275 155 Z"
          fill="rgba(255, 255, 255, 0.3)"
          className="mix-blend-overlay"
        />
        <motion.path
          d="M300 120 L320 150 L310 150 L310 245 L290 245 L290 150 L280 150 Z"
          fill="rgba(0, 245, 155, 0.4)"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <path
          d="M300 100 L260 160"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="1"
        />
        <path
          d="M300 100 L340 160"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="1"
        />
        <motion.ellipse
          cx="300"
          cy="100"
          rx="15"
          ry="8"
          fill="rgba(0, 245, 155, 0.6)"
          filter="url(#strongGlow)"
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.g>
    </motion.g>
  );
}

