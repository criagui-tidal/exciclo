import Button from "@/components/atoms/Button";
import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import CheckList from "@/components/molecules/CheckList";
import type { Content } from "@/content";
import { anchorHref, type Locale } from "@/lib/i18n";

export default function IdealClientSection({
  content,
  locale,
}: {
  content: Content;
  locale: Locale;
}) {
  const { idealClient } = content.home;

  return (
    <Section className="grid grid-cols-1 gap-10 lg:grid-cols-12">
      <div className="flex flex-col gap-3.5 lg:col-span-5">
        <Eyebrow>{idealClient.eyebrow}</Eyebrow>
        <Heading as="h2">{idealClient.title}</Heading>
        <p className="m-0 text-lg leading-relaxed text-body">
          {idealClient.lead}
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:col-span-7">
        <CheckList items={idealClient.items} columns={1} />
        <div className="flex flex-col gap-3 border-t border-border pt-7">
          <p className="m-0 text-lg leading-relaxed text-muted">
            {idealClient.closingLead}
          </p>
          <p className="m-0 font-display text-[26px] font-bold leading-[1.2] text-balance sm:text-[30px]">
            {idealClient.closingEmphasis}
          </p>
          <Button
            href={anchorHref("contact", locale)}
            className="mt-2 self-start"
          >
            {idealClient.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
