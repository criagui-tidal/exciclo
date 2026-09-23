import StatNumber from "@/components/atoms/StatNumber";

// La escala de un caso: cifras verificables y nada más. Se usa tanto en la
// tarjeta del índice de casos como dentro del caso completo.

export type ScaleItem = { value: string; label: string };

export default function ScaleGrid({
  items,
  columns = 4,
}: {
  items: readonly ScaleItem[];
  columns?: 2 | 3 | 4;
}) {
  const columnClasses = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-2 gap-4 ${columnClasses[columns]}`}>
      {items.map((item) => (
        <StatNumber key={item.label} value={item.value} label={item.label} />
      ))}
    </div>
  );
}
