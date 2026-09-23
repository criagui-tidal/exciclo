import ClosingBlock from "@/components/molecules/ClosingBlock";
import PageHero from "@/components/molecules/PageHero";
import ColombiaHelpSection from "@/components/organisms/ColombiaHelpSection";
import CredentialsSection from "@/components/organisms/CredentialsSection";
import PageShell from "@/components/templates/PageShell";
import { getContent } from "@/content";
import { anchorHref, href, type Locale } from "@/lib/i18n";

export default function ColombiaTemplate({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { colombia } = content;

  return (
    <PageShell content={content} locale={locale} routeKey="colombia">
      <PageHero
        content={colombia.hero}
        primaryHref={anchorHref("contact", locale)}
        secondaryHref={href("assessment", locale)}
        image="/img/medellin.jpg"
        imageAlt={colombia.media.alt}
      />
      <ColombiaHelpSection
        eyebrow={colombia.help.eyebrow}
        title={colombia.help.title}
        items={colombia.help.items}
      />
      <CredentialsSection content={content} />
      <ClosingBlock
        title={colombia.closing.title}
        body={colombia.closing.body}
        cta={colombia.closing.cta}
        href={anchorHref("contact", locale)}
      />
    </PageShell>
  );
}
