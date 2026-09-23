import JsonLd from "@/components/atoms/JsonLd";
import StatementBand from "@/components/molecules/StatementBand";
import AboutSection from "@/components/organisms/AboutSection";
import BrandsBar from "@/components/organisms/BrandsBar";
import CasesTeaser from "@/components/organisms/CasesTeaser";
import CredentialsSection from "@/components/organisms/CredentialsSection";
import CtaSection from "@/components/organisms/CtaSection";
import CycleSection from "@/components/organisms/CycleSection";
import DifferentiatorSection from "@/components/organisms/DifferentiatorSection";
import HeroSection from "@/components/organisms/HeroSection";
import IdealClientSection from "@/components/organisms/IdealClientSection";
import PillarsSection from "@/components/organisms/PillarsSection";
import PricingSection from "@/components/organisms/PricingSection";
import ProblemSection from "@/components/organisms/ProblemSection";
import SiteFooter from "@/components/organisms/SiteFooter";
import SiteHeader from "@/components/organisms/SiteHeader";
import { getContent } from "@/content";
import { href, type Locale } from "@/lib/i18n";
import { cycleOfferJsonLd, siteJsonLd } from "@/lib/structured-data";

// El orden es el argumento de venta: problema del negocio → qué resolvemos →
// por qué nosotros → cómo → qué cuesta → prueba → para quién → quién lo hace.
export default function HomeTemplate({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { home } = content;

  return (
    <div className="flex flex-col">
      <JsonLd data={siteJsonLd(locale)} />
      <JsonLd data={cycleOfferJsonLd(locale)} />
      <SiteHeader content={content} locale={locale} routeKey="home" />
      <HeroSection content={content} locale={locale} />
      <BrandsBar content={content} />
      <ProblemSection content={content} />
      <PillarsSection
        eyebrow={home.pillars.eyebrow}
        title={home.pillars.title}
        items={home.pillars.items}
        outcomeLabel={home.pillars.outcomeLabel}
        cta={home.pillars.cta}
        ctaHref={href("solve", locale)}
      />
      <DifferentiatorSection content={content} locale={locale} />
      <CycleSection content={content} locale={locale} />
      <StatementBand
        lead={home.deliverable.lead}
        emphasis={home.deliverable.emphasis}
        tone="accent"
        image="/img/band-solucion.jpg"
      />
      <PricingSection content={content} locale={locale} />
      <CredentialsSection content={content} />
      <CasesTeaser content={content} locale={locale} />
      <IdealClientSection content={content} locale={locale} />
      <AboutSection content={content} locale={locale} />
      <StatementBand
        lead={home.signature.lead}
        emphasis={home.signature.emphasis}
        image="/img/band-problema.jpg"
      />
      <CtaSection content={content} locale={locale} />
      <SiteFooter content={content} locale={locale} />
    </div>
  );
}
