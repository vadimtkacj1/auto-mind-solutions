import { motion } from 'framer-motion';

const nodes = [
  { cx: 230, cy: 350, delay: 0 },
  { cx: 330, cy: 280, delay: 0.2 },
  { cx: 400, cy: 340, delay: 0.4 },
  { cx: 220, cy: 260, delay: 0.6 },
  { cx: 420, cy: 240, delay: 0.8 },
];

export function InteractiveNodes() {
  return (
    <>
      {nodes.map((node, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="6"
            fill="url(#nodeGradient)"
            filter="url(#glow)"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
          />
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="12"
            fill="none"
            stroke="url(#glowGradient)"
            strokeWidth="1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0.5, 1.5], opacity: [0.8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: node.delay + 0.5 }}
          />
        </motion.g>
      ))}
    </>
  );
}

