const RING_COLORS = ["#1AA0AB", "#58BD8C", "#FBBD0C", "#102A50"];

const weeks = [
  { angle: -84, x: 462, y: 86, title: "Semana 1", subtitle: "Diagnóstico" },
  {
    angle: 6,
    x: 462,
    y: 462,
    title: "Semana 2",
    subtitle: "Diseño y decisión",
  },
  { angle: 96, x: 78, y: 462, title: "Semana 3", subtitle: "Construcción" },
  {
    angle: 186,
    x: 78,
    y: 86,
    title: "Semana 4",
    subtitle: "MVP funcionando",
  },
];

export default function CycleRing({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 540 540"
      aria-label="El Ciclo de Éxito: cuatro semanas"
      role="img"
      className={className}
    >
      <circle cx="270" cy="270" r="200" fill="none" stroke="#E1E6E5" strokeWidth="2" />
      {weeks.map((week, i) => (
        <circle
          key={week.title}
          cx="270"
          cy="270"
          r="200"
          fill="none"
          stroke={RING_COLORS[i]}
          strokeWidth="26"
          strokeLinecap="round"
          strokeDasharray="280 976.6"
          transform={`rotate(${week.angle} 270 270)`}
        />
      ))}
      {weeks.map((week) => {
        return (
          <g key={`${week.title}-label`}>
            <text
              x={week.x}
              y={week.y}
              textAnchor="middle"
              fontFamily="var(--font-sans)"
              fontSize="15"
              fontWeight="600"
              fill="var(--color-ink)"
            >
              {week.title}
            </text>
            <text
              x={week.x}
              y={week.y + 20}
              textAnchor="middle"
              fontFamily="var(--font-sans)"
              fontSize="14"
              fill="var(--color-muted)"
            >
              {week.subtitle}
            </text>
          </g>
        );
      })}
      <text
        x="270"
        y="282"
        textAnchor="middle"
        fontFamily="var(--font-serif)"
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
        SEMANAS
      </text>
      <text
        x="270"
        y="352"
        textAnchor="middle"
        fontFamily="var(--font-serif)"
        fontSize="18"
        fontStyle="italic"
        fill="var(--color-accent)"
      >
        Cada ciclo, un éxito
      </text>
    </svg>
  );
}
