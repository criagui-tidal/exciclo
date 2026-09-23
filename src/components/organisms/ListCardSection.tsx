import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import ListCard from "@/components/molecules/ListCard";

// Rejilla de tarjetas-lista. La usan las cuatro dimensiones de la evaluación y
// las tres columnas de IA y valor.
export default function ListCardSection({
  eyebrow,
  title,
  items,
  tone = "base",
}: {
  eyebrow: string;
  title: string;
  items: readonly { title: string; items: readonly string[]; color: string }[];
  tone?: "base" | "alt";
}) {
  return (
    <Section tone={tone} className="flex flex-col gap-10">
      <div className="flex max-w-[760px] flex-col gap-3.5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h2">{title}</Heading>
      </div>
      <div
        className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${
          items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
        }`}
      >
        {items.map((item) => (
          <ListCard
            key={item.title}
            title={item.title}
            items={item.items}
            color={item.color}
          />
        ))}
      </div>
    </Section>
  );
}
