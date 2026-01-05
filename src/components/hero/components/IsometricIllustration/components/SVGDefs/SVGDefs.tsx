export function SVGDefs() {
  return (
    <defs>
      <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(0, 208, 132, 0.15)" />
        <stop offset="50%" stopColor="rgba(0, 102, 255, 0.1)" />
        <stop offset="100%" stopColor="rgba(0, 208, 132, 0.05)" />
      </linearGradient>

      <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00D084" />
        <stop offset="100%" stopColor="#0066FF" />
      </linearGradient>

      <linearGradient id="arrowGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00D084" />
        <stop offset="40%" stopColor="#00F59B" />
        <stop offset="70%" stopColor="#0066FF" />
        <stop offset="100%" stopColor="#3D8BFF" />
      </linearGradient>

      <linearGradient id="arrowGlassGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(0, 208, 132, 0.9)" />
        <stop offset="50%" stopColor="rgba(0, 245, 155, 0.7)" />
        <stop offset="100%" stopColor="rgba(0, 102, 255, 0.8)" />
      </linearGradient>

      <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00D084" />
        <stop offset="100%" stopColor="#0066FF" />
      </linearGradient>

      <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(0, 208, 132, 0)" />
        <stop offset="50%" stopColor="rgba(0, 208, 132, 0.6)" />
        <stop offset="100%" stopColor="rgba(0, 102, 255, 0)" />
      </linearGradient>

      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="arrowGlow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="6" result="blur1" />
        <feGaussianBlur stdDeviation="12" result="blur2" />
        <feMerge>
          <feMergeNode in="blur2" />
          <feMergeNode in="blur1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <pattern id="hexPattern" patternUnits="userSpaceOnUse" width="30" height="26">
        <path
          d="M15 0 L30 7.5 L30 18.5 L15 26 L0 18.5 L0 7.5 Z"
          fill="none"
          stroke="rgba(0, 208, 132, 0.15)"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
  );
}

