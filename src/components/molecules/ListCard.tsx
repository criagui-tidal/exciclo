// Tarjeta que es, sobre todo, una lista: las cuatro dimensiones de la
// evaluación (Tecnología · Operaciones · Economía · IA) y las tres columnas de
// IA y valor (Identificamos · Construimos · Medimos).

export default function ListCard({
  title,
  items,
  color,
}: {
  title: string;
  items: readonly string[];
  color: string;
}) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-[20px] border border-border bg-surface p-7">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-3 w-3 shrink-0 rounded-full"
          style={{ backgroundColor: color }}
        />
        <h3 className="m-0 font-display text-[24px] font-bold leading-[1.15]">
          {title}
        </h3>
      </div>
      <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
        {items.map((item) => (
          <li
            key={item}
            className="border-b border-border pb-2.5 text-[17px] leading-snug text-body last:border-b-0 last:pb-0"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
