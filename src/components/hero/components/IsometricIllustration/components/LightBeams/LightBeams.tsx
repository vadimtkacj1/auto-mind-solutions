export function LightBeams() {
  return (
    <g className="opacity-40">
      {/* Статичные лучи света - CSS анимации для opacity */}
      <path
        d="M100 500 L400 100"
        stroke="url(#beamGradient)"
        strokeWidth="80"
        strokeLinecap="round"
        className="light-beam"
        style={{ animationDelay: '0s' }}
      />
      <path
        d="M200 550 L500 150"
        stroke="url(#beamGradient)"
        strokeWidth="60"
        strokeLinecap="round"
        className="light-beam"
        style={{ animationDelay: '2s' }}
      />
    </g>
  );
}

