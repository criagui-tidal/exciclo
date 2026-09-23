import ClosingBlock from "@/components/molecules/ClosingBlock";
import PageHero from "@/components/molecules/PageHero";
import DeliverableSection from "@/components/organisms/DeliverableSection";
import ListCardSection from "@/components/organisms/ListCardSection";
import PageShell from "@/components/templates/PageShell";
import { getContent } from "@/content";
import { anchorHref, type Locale } from "@/lib/i18n";

export default function AssessmentTemplate({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { assessment } = content;

  return (
    <PageShell content={content} locale={locale} routeKey="assessment">
      <PageHero
        content={assessment.hero}
        primaryHref={anchorHref("contact", locale)}
        secondaryHref={anchorHref("contact", locale)}
        image="/img/datos.jpg"
        imageAlt={assessment.media.alt}
      />
      <ListCardSection
        eyebrow={assessment.dimensions.eyebrow}
        title={assessment.dimensions.title}
        items={assessment.dimensions.items}
      />
      <DeliverableSection
        eyebrow={assessment.deliverable.eyebrow}
        title={assessment.deliverable.title}
        lead={assessment.deliverable.lead}
        items={assessment.deliverable.items}
        closing={assessment.deliverable.closing}
      />
      <ClosingBlock
        title={assessment.next.title}
        body={assessment.next.body}
        cta={assessment.next.cta}
        href={anchorHref("cycle", locale)}
      />
    </PageShell>
  );
}
