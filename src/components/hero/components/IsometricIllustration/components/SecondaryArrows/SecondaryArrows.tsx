import { motion } from "framer-motion";

export function SecondaryArrows() {
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>
      <motion.path
        d="M180 220 L195 195 L190 195 L190 225 L170 225 L170 195 L165 195 Z"
        fill="url(#arrowGlassGradient)"
        opacity="0.6"
        filter="url(#glow)"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
      />
      <motion.path
        d="M430 200 L445 175 L440 175 L440 205 L420 205 L420 175 L415 175 Z"
        fill="url(#arrowGlassGradient)"
        opacity="0.5"
        filter="url(#glow)"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.6 }}
      />
    </motion.g>
  );
}
