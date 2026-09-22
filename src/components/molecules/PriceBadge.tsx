import Eyebrow from "@/components/atoms/Eyebrow";

export default function PriceBadge({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-0.5 rounded-2xl border border-border bg-surface px-6 py-4 shadow-[0_12px_30px_rgba(27,26,23,0.08)] ${className}`}
    >
      <Eyebrow tone="muted" className="text-[13px] tracking-[0.12em]">
        Precio fijo
      </Eyebrow>
      <div className="font-serif text-3xl font-bold">USD 9.000</div>
      <div className="text-sm text-body">por ciclo de 4 semanas</div>
    </div>
  );
}
