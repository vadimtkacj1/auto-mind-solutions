import { motion } from "framer-motion";

const hexagons = [
  { x: 130, y: 300, size: 20, delay: 0 },
  { x: 480, y: 280, size: 25, delay: 0.3 },
  { x: 150, y: 150, size: 15, delay: 0.6 },
  { x: 460, y: 120, size: 18, delay: 0.9 },
];

export function DecorativeHexagons() {
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
      {hexagons.map((hex, i) => (
        <motion.path
          key={i}
          d={`M${hex.x} ${hex.y - hex.size} 
              L${hex.x + hex.size * 0.866} ${hex.y - hex.size * 0.5} 
              L${hex.x + hex.size * 0.866} ${hex.y + hex.size * 0.5} 
              L${hex.x} ${hex.y + hex.size} 
              L${hex.x - hex.size * 0.866} ${hex.y + hex.size * 0.5} 
              L${hex.x - hex.size * 0.866} ${hex.y - hex.size * 0.5} Z`}
          fill="none"
          stroke="url(#glowGradient)"
          strokeWidth="1"
          opacity="0.4"
          animate={{
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            opacity: { duration: 3, repeat: Infinity, delay: hex.delay },
          }}
          style={{ transformOrigin: `${hex.x}px ${hex.y}px` }}
        />
      ))}
    </motion.g>
  );
}
