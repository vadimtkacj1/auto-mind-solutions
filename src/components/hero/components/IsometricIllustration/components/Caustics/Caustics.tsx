import { motion } from 'framer-motion';

const spots = [
  { cx: 250, cy: 380, r: 30 },
  { cx: 350, cy: 360, r: 25 },
  { cx: 300, cy: 300, r: 35 },
];

export function Caustics() {
  return (
    <motion.g>
      {spots.map((spot, i) => (
        <motion.ellipse
          key={i}
          cx={spot.cx}
          cy={spot.cy}
          rx={spot.r}
          ry={spot.r * 0.4}
          fill="rgba(0, 208, 132, 0.1)"
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </motion.g>
  );
}

