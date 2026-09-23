import Button from "@/components/atoms/Button";
import Section from "@/components/atoms/Section";
import CaseCard from "@/components/molecules/CaseCard";
import SectionHeader from "@/components/molecules/SectionHeader";
import type { Content } from "@/content";
import { href, type Locale } from "@/lib/i18n";

// En la home se muestra un solo caso, el que mejor prueba la escala. El resto
// vive en /casos.
export default function CasesTeaser({
  content,
  locale,
}: {
  content: Content;
  locale: Locale;
}) {
  const teaser = content.home.cases;
  const featured = content.cases.items[0];

  return (
    <Section tone="alt" className="flex flex-col gap-10">
      <SectionHeader eyebrow={teaser.eyebrow} title={teaser.title} align="end">
        <p className="m-0 text-lg leading-relaxed text-body">{teaser.lead}</p>
      </SectionHeader>

      <CaseCard
        item={featured}
        scaleLabel={content.cases.scaleLabel}
        readMore={content.cases.readMore}
        href={href("caseComex", locale)}
      />

      <Button
        href={href("cases", locale)}
        variant="outline-dark"
        className="self-start"
      >
        {teaser.cta}
      </Button>
    </Section>
  );
}
