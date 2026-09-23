import Section from "@/components/atoms/Section";
import CaseCard from "@/components/molecules/CaseCard";
import type { Content } from "@/content";
import { href, type Locale } from "@/lib/i18n";

export default function CasesList({
  content,
  locale,
}: {
  content: Content;
  locale: Locale;
}) {
  const { cases } = content;

  return (
    <Section className="flex flex-col gap-6">
      {cases.items.map((item) => (
        <CaseCard
          key={item.slug}
          item={item}
          scaleLabel={cases.scaleLabel}
          readMore={cases.readMore}
          href={item.hasPage ? href("caseComex", locale) : undefined}
        />
      ))}
    </Section>
  );
}
