import Button from "@/components/atoms/Button";
import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import PillarCard, { type Pillar } from "@/components/molecules/PillarCard";

// Los tres pilares, en la home (resumidos) y en "Qué resolvemos" (con las
// señales de que el problema existe). Es la misma sección con distinto detalle.

export default function PillarsSection({
  eyebrow,
  title,
  items,
  outcomeLabel,
  signalsLabel,
  cta,
  ctaHref,
  tone = "base",
}: {
  eyebrow?: string;
  title?: string;
  items: readonly Pillar[];
  outcomeLabel: string;
  signalsLabel?: string;
  cta?: string;
  ctaHref?: string;
  tone?: "base" | "alt";
}) {
  return (
    <Section tone={tone} className="flex flex-col gap-10">
      {title ? (
        <div className="flex max-w-[760px] flex-col gap-3.5">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <Heading as="h2">{title}</Heading>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {items.map((pillar) => (
          <PillarCard
            key={pillar.index}
            pillar={pillar}
            outcomeLabel={outcomeLabel}
            signalsLabel={signalsLabel}
          />
        ))}
      </div>

      {cta && ctaHref ? (
        <Button href={ctaHref} variant="outline-dark" className="self-start">
          {cta}
        </Button>
      ) : null}
    </Section>
  );
}
