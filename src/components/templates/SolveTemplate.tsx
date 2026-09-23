import PageHero from "@/components/molecules/PageHero";
import CatalogSection from "@/components/organisms/CatalogSection";
import PillarsSection from "@/components/organisms/PillarsSection";
import PageShell from "@/components/templates/PageShell";
import { getContent } from "@/content";
import { anchorHref, type Locale } from "@/lib/i18n";

export default function SolveTemplate({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { solve } = content;

  return (
    <PageShell content={content} locale={locale} routeKey="solve">
      <PageHero
        content={solve.hero}
        primaryHref={anchorHref("contact", locale)}
        secondaryHref={anchorHref("cycle", locale)}
      />
      <PillarsSection
        items={solve.pillars.items}
        outcomeLabel={solve.pillars.outcomeLabel}
        signalsLabel={solve.pillars.signalsLabel}
        tone="alt"
      />
      <CatalogSection content={content} />
    </PageShell>
  );
}
