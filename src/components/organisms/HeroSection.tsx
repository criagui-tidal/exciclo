import Button from "@/components/atoms/Button";
import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import CycleRing from "@/components/molecules/CycleRing";
import PriceBadge from "@/components/molecules/PriceBadge";
import type { Content } from "@/content";
import { anchorHref, type Locale } from "@/lib/i18n";

export default function HeroSection({
  content,
  locale,
}: {
  content: Content;
  locale: Locale;
}) {
  const { hero, cycle, pricing } = content.home;

  return (
    <section className="grid grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-[120px] lg:py-0 lg:min-h-[760px]">
      <div className="flex flex-col gap-7">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <Heading as="h1">
          {hero.titleLead}{" "}
          <span className="text-accent">{hero.titleAccent}</span>
        </Heading>
        <div className="flex max-w-[560px] flex-col gap-4">
          {hero.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="m-0 text-lg leading-relaxed text-body sm:text-xl"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
          {hero.note}
        </div>
        <div className="flex flex-wrap items-center gap-3.5">
          <Button href={anchorHref("contact", locale)}>
            {hero.ctaPrimary}
          </Button>
          <Button href={anchorHref("cycle", locale)} variant="outline-dark">
            {hero.ctaSecondary}
          </Button>
        </div>
      </div>
      {/* El precio iba superpuesto sobre el anillo y tapaba el rótulo de la
          semana 2. Los cuatro rótulos ocupan las cuatro esquinas, así que no
          hay esquina libre: va debajo, en flujo. */}
      <div className="flex flex-col items-center gap-6 py-6 lg:py-0">
        <CycleRing
          content={cycle.ring}
          className="w-full max-w-[400px] sm:max-w-[460px] lg:max-w-[500px]"
        />
        <PriceBadge
          label={pricing.eyebrow}
          amount={pricing.amount}
          per={pricing.per}
        />
      </div>
    </section>
  );
}
