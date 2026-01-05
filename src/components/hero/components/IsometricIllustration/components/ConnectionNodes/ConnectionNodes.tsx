import { motion } from 'framer-motion';

export function ConnectionNodes() {
  return (
    <g filter="url(#glow)">
      <motion.path
        d="M230 350 Q280 300 330 280"
        stroke="url(#glowGradient)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
      <motion.path
        d="M330 310 Q365 325 400 340"
        stroke="url(#glowGradient)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
      />
      <motion.path
        d="M230 350 Q315 360 400 340"
        stroke="rgba(0, 208, 132, 0.4)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.4 }}
      />

      <motion.circle
        cx="230"
        cy="350"
        r="3"
        fill="#00D084"
        filter="url(#glow)"
        animate={{
          cx: [230, 280, 330],
          cy: [350, 300, 280],
        }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
      <motion.circle
        cx="330"
        cy="310"
        r="3"
        fill="#0066FF"
        filter="url(#glow)"
        animate={{
          cx: [330, 365, 400],
          cy: [310, 325, 340],
        }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.5, delay: 0.5 }}
      />
    </g>
  );
}

