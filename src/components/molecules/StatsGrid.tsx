import StatNumber from "@/components/atoms/StatNumber";

const stats = [
  { value: "20+", label: "años liderando tecnología" },
  { value: "5", label: "continentes con proyectos entregados" },
  { value: "6.500", label: "tiendas en una sola plataforma" },
  { value: "2025", label: "Team of the Year, Valtech Global Awards" },
];

export default function StatsGrid() {
  return (
    <div className="mt-2 grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <StatNumber key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
