import { motion } from "framer-motion";

const nodes = [
  { cx: 230, cy: 350 },
  { cx: 330, cy: 280 },
  { cx: 400, cy: 340 },
  { cx: 220, cy: 260 },
  { cx: 420, cy: 240 },
];

export function InteractiveNodes() {
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
      {nodes.map((node, i) => (
        <g key={i}>
          {/* Статичный внешний круг с CSS анимацией */}
          <circle
            cx={node.cx}
            cy={node.cy}
            r="10"
            fill="none"
            stroke="url(#glowGradient)"
            strokeWidth="1"
            opacity="0.3"
            className="node-ring"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
          {/* Основной узел - без фильтра для производительности */}
          <circle
            cx={node.cx}
            cy={node.cy}
            r="5"
            fill="url(#nodeGradient)"
            className="node-core"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        </g>
      ))}
    </motion.g>
  );
}
