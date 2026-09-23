const RING_COLORS = ["#1AA0AB", "#58BD8C", "#FBBD0C", "#102A50"];

// Geometría fija del anillo: ángulo del arco y punto donde cae su rótulo. Solo
// el texto viene del contenido, así que el mismo anillo sirve en los dos
// idiomas sin recalcular nada.
const geometry = [
  { angle: -84, x: 462, y: 86 },
  { angle: 6, x: 462, y: 462 },
  { angle: 96, x: 78, y: 462 },
  { angle: 186, x: 78, y: 86 },
];

export type RingContent = {
  ariaLabel: string;
  weeks: { title: string; subtitle: string }[];
  unit: string;
  tagline: string;
};

export default function CycleRing({
  content,
  className = "",
}: {
  content: RingContent;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 540 540"
      aria-label={content.ariaLabel}
      role="img"
      className={className}
    >
      <circle
        cx="270"
        cy="270"
        r="200"
        fill="none"
        stroke="#E4E0E0"
        strokeWidth="2"
      />
      {geometry.map((arc, i) => (
        <circle
          key={arc.angle}
          cx="270"
          cy="270"
          r="200"
          fill="none"
          stroke={RING_COLORS[i]}
          strokeWidth="26"
          strokeLinecap="round"
          strokeDasharray="280 976.6"
          transform={`rotate(${arc.angle} 270 270)`}
        />
      ))}
      {content.weeks.map((week, i) => (
        <g key={week.title}>
          <text
            x={geometry[i].x}
            y={geometry[i].y}
            textAnchor="middle"
            fontFamily="var(--font-sans)"
            fontSize="15"
            fontWeight="600"
            fill="var(--color-ink)"
          >
            {week.title}
          </text>
          <text
            x={geometry[i].x}
            y={geometry[i].y + 20}
            textAnchor="middle"
            fontFamily="var(--font-sans)"
            fontSize="14"
            fill="var(--color-muted)"
          >
            {week.subtitle}
          </text>
        </g>
      ))}
      <text
        x="270"
        y="282"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="150"
        fontWeight="700"
        fill="var(--color-ink)"
      >
        4
      </text>
      <text
        x="270"
        y="322"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="18"
        fontWeight="600"
        letterSpacing="3"
        fill="var(--color-ink)"
      >
        {content.unit}
      </text>
      <text
        x="270"
        y="352"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="18"
        fontStyle="italic"
        fill="var(--color-accent)"
      >
        {content.tagline}
      </text>
    </svg>
  );
}
