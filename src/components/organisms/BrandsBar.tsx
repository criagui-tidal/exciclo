import BrandsRow from "@/components/molecules/BrandsRow";
import type { Content } from "@/content";

export default function BrandsBar({ content }: { content: Content }) {
  const { brands } = content.home;

  return (
    <section className="flex flex-col justify-center gap-5 border-y border-border bg-surface-alt px-6 py-9 sm:px-10 lg:px-[120px]">
      <div className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-muted">
        {brands.label}
      </div>
      <BrandsRow items={brands.items} />
    </section>
  );
}
