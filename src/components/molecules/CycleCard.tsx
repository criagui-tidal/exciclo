export type CycleStep = {
  index: string;
  color: string;
  week: string;
  title: string;
  description: string;
  highlight: boolean;
};

export default function CycleCard({ step }: { step: CycleStep }) {
  return (
    <div
      className={`flex h-full min-h-[280px] flex-col gap-3 rounded-2xl p-7 sm:min-h-[300px] ${
        step.highlight
          ? "bg-accent text-white"
          : "border border-border bg-surface text-ink"
      }`}
    >
      <div
        className="font-display text-[44px] font-bold leading-none"
        style={{ color: step.color }}
      >
        {step.index}
      </div>
      <div
        className={`text-sm font-semibold tracking-[0.1em] ${
          step.highlight ? "text-accent-tint" : "text-accent"
        }`}
      >
        {step.week}
      </div>
      <div className="font-display text-2xl font-bold">{step.title}</div>
      <div
        className={`text-[17px] leading-snug ${
          step.highlight ? "text-white" : "text-body"
        }`}
      >
        {step.description}
      </div>
    </div>
  );
}
