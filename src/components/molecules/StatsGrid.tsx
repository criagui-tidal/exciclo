import StatNumber from "@/components/atoms/StatNumber";

export type Stat = { value: string; label: string };

export default function StatsGrid({
  stats,
  className = "",
}: {
  stats: readonly Stat[];
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      {stats.map((stat) => (
        <StatNumber key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
