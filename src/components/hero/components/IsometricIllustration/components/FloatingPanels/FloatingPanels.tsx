import { motion } from "framer-motion";

export function FloatingPanels() {
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}>
      {/* Панель 1 - CSS анимация */}
      <g className="floating-panel" style={{ animationDelay: "0s" }}>
        <rect
          x="180"
          y="200"
          width="80"
          height="100"
          rx="4"
          fill="rgba(0, 208, 132, 0.08)"
          stroke="rgba(0, 208, 132, 0.4)"
          strokeWidth="1"
          transform="skewY(-10)"
        />
        <rect x="190" y="215" width="40" height="3" rx="1" fill="rgba(0, 208, 132, 0.5)" transform="skewY(-10)" />
        <rect x="190" y="230" width="55" height="3" rx="1" fill="rgba(0, 102, 255, 0.4)" transform="skewY(-10)" />
        <rect x="190" y="245" width="35" height="3" rx="1" fill="rgba(0, 208, 132, 0.3)" transform="skewY(-10)" />
      </g>

      {/* Панель 2 - CSS анимация */}
      <g className="floating-panel" style={{ animationDelay: "0.5s" }}>
        <rect
          x="380"
          y="180"
          width="70"
          height="90"
          rx="4"
          fill="rgba(0, 102, 255, 0.08)"
          stroke="rgba(0, 102, 255, 0.4)"
          strokeWidth="1"
          transform="skewY(10)"
        />
        <rect x="390" y="220" width="8" height="25" rx="1" fill="rgba(0, 208, 132, 0.5)" transform="skewY(10)" />
        <rect x="402" y="210" width="8" height="35" rx="1" fill="rgba(0, 102, 255, 0.5)" transform="skewY(10)" />
        <rect x="414" y="200" width="8" height="45" rx="1" fill="rgba(0, 245, 155, 0.5)" transform="skewY(10)" />
        <rect x="426" y="190" width="8" height="55" rx="1" fill="rgba(61, 139, 255, 0.5)" transform="skewY(10)" />
      </g>
    </motion.g>
  );
}
