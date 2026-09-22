const brands = [
  "Ray-Ban",
  "Versace",
  "Persol",
  "Sunglass Hut",
  "Kering",
  "Comex",
];

export default function BrandsRow() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3 font-serif text-2xl text-body sm:text-[30px]">
      {brands.map((brand) => (
        <span key={brand}>{brand}</span>
      ))}
    </div>
  );
}
