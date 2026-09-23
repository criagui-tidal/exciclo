export default function BrandsRow({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3 font-display text-2xl text-body sm:text-[30px]">
      {items.map((brand) => (
        <span key={brand}>{brand}</span>
      ))}
    </div>
  );
}
