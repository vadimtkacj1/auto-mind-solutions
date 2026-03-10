import { motion } from "framer-motion";

type IsometricGrowthProps = {
  className?: string;
};

export function IsometricGrowth({ className }: IsometricGrowthProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className={className}
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 760 620"
        className="w-full h-auto"
        initial={false}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="amsCta" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00D084" stopOpacity="1" />
            <stop offset="1" stopColor="#0066FF" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="glassFill" x1="0" y1="0" x2="0.9" y2="1">
            <stop offset="0" stopColor="#A7F3FF" stopOpacity="0.22" />
            <stop offset="0.55" stopColor="#60A5FA" stopOpacity="0.12" />
            <stop offset="1" stopColor="#0B1220" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="edgeGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#00D084" stopOpacity="0.9" />
            <stop offset="1" stopColor="#0066FF" stopOpacity="0.9" />
          </linearGradient>

          <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.75 0"
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="volumetric" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="18" result="b" />
            <feColorMatrix
              in="b"
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.35 0"
              result="c"
            />
            <feMerge>
              <feMergeNode in="c" />
            </feMerge>
          </filter>

          <pattern id="hexGrid" width="44" height="38" patternUnits="userSpaceOnUse">
            <path
              d="M22 1 L42 12.5 L42 25.5 L22 37 L2 25.5 L2 12.5 Z"
              fill="none"
              stroke="url(#edgeGlow)"
              strokeOpacity="0.16"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* Ambient beams */}
        <g filter="url(#volumetric)" opacity="0.9">
          <path d="M505 82 C560 160 625 210 710 250 C615 232 540 198 476 146 Z" fill="url(#amsCta)" opacity="0.22" />
          <path d="M462 128 C520 206 580 256 670 300 C570 280 505 250 430 186 Z" fill="url(#amsCta)" opacity="0.16" />
        </g>

        {/* Hex grid field */}
        <path d="M250 120 L690 340 L510 520 L90 300 Z" fill="url(#hexGrid)" opacity="0.9" />

        {/* Isometric platform */}
        <g filter="url(#softGlow)">
          <path
            d="M140 360 L420 220 L650 360 L370 502 Z"
            fill="url(#glassFill)"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1.2"
          />
          <path
            d="M140 360 L370 502 L370 544 L140 402 Z"
            fill="rgba(0,208,132,0.08)"
            stroke="rgba(0,208,132,0.18)"
            strokeWidth="1"
          />
          <path
            d="M370 502 L650 360 L650 402 L370 544 Z"
            fill="rgba(0,102,255,0.06)"
            stroke="rgba(0,102,255,0.16)"
            strokeWidth="1"
          />
        </g>

        {/* Data blocks (glass) */}
        <g filter="url(#softGlow)">
          {[
            { x: 270, y: 294, w: 92, h: 54 },
            { x: 382, y: 256, w: 104, h: 62 },
            { x: 505, y: 296, w: 86, h: 50 },
            { x: 324, y: 356, w: 110, h: 64 },
            { x: 460, y: 368, w: 98, h: 58 },
          ].map((b, i) => (
            <g key={i} opacity={0.98}>
              <path
                d={`M ${b.x} ${b.y} L ${b.x + b.w} ${b.y - 34} L ${b.x + b.w + 34} ${
                  b.y - 18
                } L ${b.x + 34} ${b.y + 16} Z`}
                fill="rgba(255,255,255,0.06)"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1"
              />
              <path
                d={`M ${b.x + 34} ${b.y + 16} L ${b.x + b.w + 34} ${
                  b.y - 18
                } L ${b.x + b.w + 34} ${b.y + b.h} L ${b.x + 34} ${b.y + b.h + 34} Z`}
                fill="rgba(0,102,255,0.06)"
                stroke="rgba(0,102,255,0.14)"
                strokeWidth="1"
              />
              <path
                d={`M ${b.x} ${b.y} L ${b.x + 34} ${b.y + 16} L ${b.x + 34} ${b.y + b.h + 34} L ${b.x} ${b.y + b.h} Z`}
                fill="rgba(0,208,132,0.06)"
                stroke="rgba(0,208,132,0.14)"
                strokeWidth="1"
              />
              <path
                d={`M ${b.x + 34} ${b.y + 16} L ${b.x + b.w + 34} ${b.y - 18}`}
                stroke="url(#edgeGlow)"
                strokeWidth="2"
                strokeOpacity="0.6"
              />
            </g>
          ))}
        </g>

        {/* Interconnected nodes */}
        <g opacity="0.95" filter="url(#softGlow)">
          {[
            { cx: 260, cy: 330 },
            { cx: 330, cy: 300 },
            { cx: 420, cy: 280 },
            { cx: 520, cy: 308 },
            { cx: 560, cy: 402 },
            { cx: 440, cy: 418 },
            { cx: 300, cy: 398 },
          ].map((n, i, arr) => (
            <g key={i}>
              {i > 0 && (
                <path
                  d={`M ${arr[i - 1].cx} ${arr[i - 1].cy} L ${n.cx} ${n.cy}`}
                  stroke="url(#edgeGlow)"
                  strokeOpacity="0.25"
                  strokeWidth="1.6"
                />
              )}
              <circle cx={n.cx} cy={n.cy} r="5.5" fill="#081423" stroke="url(#edgeGlow)" strokeWidth="2" />
              <circle cx={n.cx} cy={n.cy} r="10" fill="url(#amsCta)" opacity="0.12" />
            </g>
          ))}
        </g>

        {/* Upward arrow (glass) */}
        <motion.g
          initial={false}
          animate={{ y: [0, -8, 0], rotate: [0, -1.2, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "520px 230px" }}
          filter="url(#softGlow)"
        >
          <path
            d="M468 336 L540 264 L584 300 L648 182 L702 214 L600 120 L586 164 L620 190 L566 252 L522 216 L432 310 Z"
            fill="url(#glassFill)"
            stroke="url(#edgeGlow)"
            strokeWidth="2.2"
            opacity="0.98"
          />
          <path d="M468 336 L540 264 L584 300" stroke="rgba(255,255,255,0.5)" strokeWidth="2" opacity="0.55" />
          <path d="M600 120 L586 164 L620 190" stroke="rgba(255,255,255,0.55)" strokeWidth="2" opacity="0.55" />
        </motion.g>

        {/* Foreground sparkles */}
        <g opacity="0.75">
          {[
            { x: 210, y: 210 },
            { x: 640, y: 430 },
            { x: 320, y: 170 },
            { x: 590, y: 240 },
          ].map((s, i) => (
            <g key={i} filter="url(#softGlow)">
              <circle cx={s.x} cy={s.y} r="2.2" fill="url(#amsCta)" />
              <circle cx={s.x} cy={s.y} r="10" fill="url(#amsCta)" opacity="0.12" />
            </g>
          ))}
        </g>
      </motion.svg>
    </motion.div>
  );
}
