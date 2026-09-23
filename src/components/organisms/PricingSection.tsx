import Button from "@/components/atoms/Button";
import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import CheckList from "@/components/molecules/CheckList";
import type { Content } from "@/content";
import { anchorHref, anchorId, type Locale } from "@/lib/i18n";

export default function PricingSection({
  content,
  locale,
}: {
  content: Content;
  locale: Locale;
}) {
  const { pricing } = content.home;

  return (
    <Section id={anchorId("pricing", locale)} className="flex flex-col gap-10">
      <Heading as="h2">{pricing.title}</Heading>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="flex flex-col gap-6 rounded-[20px] border-[1.5px] border-ink bg-surface p-8 sm:p-10 lg:col-span-7">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="flex flex-col gap-1.5">
              <Eyebrow tone="muted" className="tracking-[0.12em]">
                {pricing.eyebrow}
              </Eyebrow>
              <div className="font-display text-5xl font-bold leading-none sm:text-[64px]">
                {pricing.amount}
              </div>
            </div>
            <div className="text-[17px] text-body sm:pb-2">{pricing.per}</div>
          </div>

          <div className="flex flex-col gap-3 border-t border-border pt-6">
            <Eyebrow className="text-[13px] tracking-[0.12em]">
              {pricing.includesLabel}
            </Eyebrow>
            <CheckList items={pricing.includes} />
          </div>

          <div className="text-[15px] font-medium text-muted">
            {pricing.note}
          </div>

          <Button href={anchorHref("contact", locale)} className="self-start">
            {pricing.cta}
          </Button>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="flex flex-1 flex-col gap-2.5 rounded-[20px] bg-surface-alt p-8">
            <div className="font-display text-2xl font-bold">
              {pricing.asideTitle}
            </div>
            <p className="m-0 text-[17px] leading-relaxed text-body">
              {pricing.asideBody}
            </p>
          </div>

          {/* Exciclo Continuo: el ciclo deja de ser un techo y pasa a ser la
              puerta de entrada a una relación mensual. */}
          <div className="flex flex-1 flex-col gap-2.5 rounded-[20px] bg-accent p-8 text-white">
            <Eyebrow tone="light" className="text-[13px] tracking-[0.12em]">
              {pricing.continuousEyebrow}
            </Eyebrow>
            <div className="font-display text-2xl font-bold">
              {pricing.continuousTitle}
            </div>
            <p className="m-0 text-[17px] leading-relaxed text-accent-tint">
              {pricing.continuousBody}
            </p>
            <div className="mt-auto pt-2 font-semibold">
              {pricing.continuousPrice}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
