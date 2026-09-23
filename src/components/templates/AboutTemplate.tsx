import PageHero from "@/components/molecules/PageHero";
import StatementBand from "@/components/molecules/StatementBand";
import AboutStorySection from "@/components/organisms/AboutStorySection";
import BrandsBar from "@/components/organisms/BrandsBar";
import PageShell from "@/components/templates/PageShell";
import { getContent } from "@/content";
import { anchorHref, href, type Locale } from "@/lib/i18n";

export default function AboutTemplate({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <PageShell content={content} locale={locale} routeKey="about">
      <PageHero
        content={content.about.hero}
        primaryHref={anchorHref("contact", locale)}
        secondaryHref={href("cases", locale)}
      />
      <BrandsBar content={content} />
      <AboutStorySection content={content} />
      <StatementBand
        lead={content.home.signature.lead}
        emphasis={content.home.signature.emphasis}
        image="/img/band-problema.jpg"
      />
    </PageShell>
  );
}
