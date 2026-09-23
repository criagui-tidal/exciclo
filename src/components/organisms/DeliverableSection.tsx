import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import CheckList from "@/components/molecules/CheckList";

// Qué se lleva el comité ejecutivo al final de la evaluación.
export default function DeliverableSection({
  eyebrow,
  title,
  lead,
  items,
  closing,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  items: readonly string[];
  closing: string;
}) {
  return (
    <Section tone="alt" className="grid grid-cols-1 gap-10 lg:grid-cols-12">
      <div className="flex flex-col gap-3.5 lg:col-span-5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h2">{title}</Heading>
        <p className="m-0 text-lg leading-relaxed text-body">{lead}</p>
      </div>
      <div className="flex flex-col gap-7 lg:col-span-7">
        <CheckList items={items} columns={1} />
        <p className="m-0 border-t border-border pt-7 font-display text-[22px] leading-snug text-balance">
          {closing}
        </p>
      </div>
    </Section>
  );
}
