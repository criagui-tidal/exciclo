export default function CycleCard({
  index,
  numberColor,
  week,
  title,
  description,
  highlight = false,
}: {
  index: string;
  numberColor: string;
  week: string;
  title: string;
  description: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex h-[280px] flex-col gap-3 rounded-2xl p-7 sm:h-[300px] ${
        highlight
          ? "bg-accent text-white"
          : "border border-border bg-surface text-ink"
      }`}
    >
      <div
        className="font-serif text-[44px] font-bold leading-none"
        style={{ color: numberColor }}
      >
        {index}
      </div>
      <div
        className={`text-sm font-semibold tracking-[0.1em] ${
          highlight ? "text-accent-tint" : "text-accent"
        }`}
      >
        {week}
      </div>
      <div className="font-serif text-2xl font-bold">{title}</div>
      <div
        className={`text-[17px] leading-snug ${
          highlight ? "text-white" : "text-body"
        }`}
      >
        {description}
      </div>
    </div>
  );
}
