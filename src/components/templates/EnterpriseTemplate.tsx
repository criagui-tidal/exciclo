import ClosingBlock from "@/components/molecules/ClosingBlock";
import PageHero from "@/components/molecules/PageHero";
import BrandsBar from "@/components/organisms/BrandsBar";
import CredentialsSection from "@/components/organisms/CredentialsSection";
import RolesSection from "@/components/organisms/RolesSection";
import PageShell from "@/components/templates/PageShell";
import { getContent } from "@/content";
import { anchorHref, href, type Locale } from "@/lib/i18n";

export default function EnterpriseTemplate({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { enterprise } = content;

  return (
    <PageShell content={content} locale={locale} routeKey="enterprise">
      <PageHero
        content={enterprise.hero}
        primaryHref={anchorHref("contact", locale)}
        secondaryHref={href("assessment", locale)}
        image="/img/empresas.jpg"
        imageAlt={enterprise.media.alt}
      />
      <BrandsBar content={content} />
      <RolesSection
        eyebrow={enterprise.roles.eyebrow}
        title={enterprise.roles.title}
        items={enterprise.roles.items}
      />
      <CredentialsSection content={content} />
      <ClosingBlock
        title={enterprise.closing.title}
        body={enterprise.closing.body}
        cta={enterprise.closing.cta}
        href={anchorHref("contact", locale)}
      />
    </PageShell>
  );
}
