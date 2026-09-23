import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import AccentCard from "@/components/molecules/AccentCard";

// Una conversación distinta por silla ejecutiva. Es la sección que saca a
// Exciclo del casillero de "proveedor técnico".
export default function RolesSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: readonly { role: string; body: string; color: string }[];
}) {
  return (
    <Section tone="alt" className="flex flex-col gap-10">
      <div className="flex max-w-[760px] flex-col gap-3.5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h2">{title}</Heading>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <AccentCard
            key={item.role}
            title={item.role}
            body={item.body}
            color={item.color}
          />
        ))}
      </div>
    </Section>
  );
}
