import ClosingBlock from "@/components/molecules/ClosingBlock";
import MediaBand from "@/components/molecules/MediaBand";
import CaseStudy from "@/components/organisms/CaseStudy";
import PageShell from "@/components/templates/PageShell";
import { getContent } from "@/content";
import { anchorHref, type Locale } from "@/lib/i18n";

export default function ComexTemplate({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <PageShell content={content} locale={locale} routeKey="caseComex">
      <CaseStudy content={content} locale={locale} />
      <MediaBand src="/img/operacion.jpg" alt={content.comex.media.alt} />
      <ClosingBlock
        title={content.comex.closing.title}
        body={content.comex.closing.body}
        cta={content.comex.closing.cta}
        href={anchorHref("contact", locale)}
      />
    </PageShell>
  );
}
