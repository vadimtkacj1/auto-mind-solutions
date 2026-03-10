import { motion } from "framer-motion";

export function ConnectionNodes() {
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
      {/* Статичные линии связи - без анимации pathLength для производительности */}
      <path
        d="M230 350 Q280 300 330 280"
        stroke="url(#glowGradient)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="4 4"
        opacity="0.8"
      />
      <path
        d="M330 310 Q365 325 400 340"
        stroke="url(#glowGradient)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="4 4"
        opacity="0.8"
      />
      <path
        d="M230 350 Q315 360 400 340"
        stroke="rgba(0, 208, 132, 0.4)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3 3"
      />

      {/* Статичные точки узлов */}
      <circle cx="230" cy="350" r="4" fill="#00D084" className="connection-dot" />
      <circle cx="330" cy="280" r="4" fill="#0066FF" className="connection-dot" style={{ animationDelay: "0.5s" }} />
      <circle cx="400" cy="340" r="4" fill="#00D084" className="connection-dot" style={{ animationDelay: "1s" }} />
    </motion.g>
  );
}
