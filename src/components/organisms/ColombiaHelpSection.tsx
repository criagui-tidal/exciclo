import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";

export default function ColombiaHelpSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: readonly { title: string; color: string }[];
}) {
  return (
    <Section tone="alt" className="flex flex-col gap-10">
      <div className="flex max-w-[760px] flex-col gap-3.5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h2">{title}</Heading>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-4 rounded-[20px] border border-border bg-surface p-7"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-12 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <h3 className="m-0 font-display text-[24px] font-bold leading-[1.15] text-balance">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
