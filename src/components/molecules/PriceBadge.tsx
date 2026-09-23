import Eyebrow from "@/components/atoms/Eyebrow";

export default function PriceBadge({
  label,
  amount,
  per,
  className = "",
}: {
  label: string;
  amount: string;
  per: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-0.5 rounded-2xl border border-border bg-surface px-6 py-4 shadow-[0_12px_30px_rgba(11,32,54,0.08)] ${className}`}
    >
      <Eyebrow tone="muted" className="text-[13px] tracking-[0.12em]">
        {label}
      </Eyebrow>
      <div className="font-display text-3xl font-bold">{amount}</div>
      <div className="text-sm text-body">{per}</div>
    </div>
  );
}
