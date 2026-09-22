export default function ComparisonRow({
  label,
  traditional,
  cycle,
}: {
  label: string;
  traditional: string;
  cycle: string;
}) {
  return (
    <div className="grid grid-cols-3 border-t border-border text-[15px] sm:text-lg">
      <div className="px-4 py-4 font-semibold sm:px-7 sm:py-5">{label}</div>
      <div className="px-4 py-4 text-muted sm:px-7 sm:py-5">{traditional}</div>
      <div className="px-4 py-4 font-semibold text-accent sm:px-7 sm:py-5">
        {cycle}
      </div>
    </div>
  );
}
