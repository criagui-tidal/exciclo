import PageHero from "@/components/molecules/PageHero";
import StatementBand from "@/components/molecules/StatementBand";
import ListCardSection from "@/components/organisms/ListCardSection";
import PageShell from "@/components/templates/PageShell";
import { getContent } from "@/content";
import { anchorHref, href, type Locale } from "@/lib/i18n";

export default function AiValueTemplate({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { aiValue } = content;

  return (
    <PageShell content={content} locale={locale} routeKey="aiValue">
      <PageHero
        content={aiValue.hero}
        primaryHref={anchorHref("contact", locale)}
        secondaryHref={href("assessment", locale)}
      />
      <ListCardSection
        eyebrow={aiValue.columns.eyebrow}
        title={aiValue.columns.title}
        items={aiValue.columns.items}
        tone="alt"
      />
      <StatementBand
        lead={aiValue.statement.lead}
        emphasis={aiValue.statement.emphasis}
        image="/img/band-ia.jpg"
      />
    </PageShell>
  );
}
