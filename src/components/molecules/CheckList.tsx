import CheckIcon from "@/components/atoms/CheckIcon";

// Lista con palomita. La usan lo que incluye el ciclo, el entregable de la
// evaluación y el perfil de cliente ideal.

export default function CheckList({
  items,
  columns = 2,
  className = "",
}: {
  items: readonly string[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 gap-3.5 text-[17px] leading-snug ${
        columns === 2 ? "sm:grid-cols-2 sm:gap-x-6" : ""
      } ${className}`}
    >
      {items.map((item) => (
        <div key={item} className="flex items-start gap-2.5">
          <CheckIcon />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
