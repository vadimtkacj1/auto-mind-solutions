import { motion } from 'framer-motion';

export function LightBeams() {
  return (
    <g className="opacity-40">
      <motion.path
        d="M100 500 L400 100"
        stroke="url(#beamGradient)"
        strokeWidth="80"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.4, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
      />
      <motion.path
        d="M200 550 L500 150"
        stroke="url(#beamGradient)"
        strokeWidth="60"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, delay: 1 }}
      />
    </g>
  );
}

