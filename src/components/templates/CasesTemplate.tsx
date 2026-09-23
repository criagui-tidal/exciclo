import PageHero from "@/components/molecules/PageHero";
import BrandsBar from "@/components/organisms/BrandsBar";
import CasesList from "@/components/organisms/CasesList";
import PageShell from "@/components/templates/PageShell";
import { getContent } from "@/content";
import { anchorHref, type Locale } from "@/lib/i18n";

export default function CasesTemplate({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <PageShell content={content} locale={locale} routeKey="cases">
      <PageHero
        content={content.cases.hero}
        primaryHref={anchorHref("contact", locale)}
        image="/img/operacion.jpg"
        imageAlt={content.cases.media.alt}
      />
      <BrandsBar content={content} />
      <CasesList content={content} locale={locale} />
    </PageShell>
  );
}
