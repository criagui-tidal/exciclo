import Button from "@/components/atoms/Button";
import Section from "@/components/atoms/Section";
import CycleCard from "@/components/molecules/CycleCard";
import SectionHeader from "@/components/molecules/SectionHeader";
import type { Content } from "@/content";
import { anchorHref, anchorId, type Locale } from "@/lib/i18n";

export default function CycleSection({
  content,
  locale,
}: {
  content: Content;
  locale: Locale;
}) {
  const { cycle } = content.home;

  return (
    <Section id={anchorId("cycle", locale)} className="flex flex-col gap-10">
      <SectionHeader eyebrow={cycle.eyebrow} title={cycle.title} align="end">
        <p className="m-0 text-lg leading-relaxed text-body">{cycle.lead}</p>
      </SectionHeader>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cycle.cards.map((step) => (
          <CycleCard key={step.index} step={step} />
        ))}
      </div>

      <div className="flex flex-col items-start gap-6 rounded-2xl bg-surface-alt p-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-1.5">
          <div className="font-display text-[22px] font-bold">
            {cycle.footnoteTitle}
          </div>
          <div className="max-w-[640px] text-[17px] leading-snug text-body">
            {cycle.footnoteBody}
          </div>
        </div>
        <Button href={anchorHref("contact", locale)} className="shrink-0">
          {cycle.cta}
        </Button>
      </div>
    </Section>
  );
}
