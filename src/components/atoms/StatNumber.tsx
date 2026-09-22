export default function StatNumber({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-1 border-t-2 border-ink pt-3.5 ${className}`}
    >
      <div className="font-serif text-4xl font-bold leading-none">
        {value}
      </div>
      <div className="text-base text-body">{label}</div>
    </div>
  );
}
