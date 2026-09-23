import Button from "@/components/atoms/Button";
import Section from "@/components/atoms/Section";
import SectionHeader from "@/components/molecules/SectionHeader";
import type { Content } from "@/content";
import { anchorHref, type Locale } from "@/lib/i18n";

export default function DifferentiatorSection({
  content,
  locale,
}: {
  content: Content;
  locale: Locale;
}) {
  const { differentiator } = content.home;

  return (
    <Section tone="alt" className="flex flex-col gap-10">
      <SectionHeader title={differentiator.title}>
        <p className="m-0 text-lg leading-relaxed text-body">
          {differentiator.lead}
        </p>
      </SectionHeader>

      {/* Lo que Exciclo no hace. Se marca con una cruz, no con una palomita:
          son ausencias, y leerlas como ventajas es justo el punto. */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {differentiator.points.map((point) => (
          <div
            key={point}
            className="flex items-start gap-3 rounded-[20px] border border-border bg-surface p-6 text-[17px] leading-snug"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-muted"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
            <span>{point}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 font-display text-[28px] font-bold leading-[1.15] sm:text-[36px]">
          {differentiator.closing}
        </p>
        <Button href={anchorHref("cycle", locale)} className="shrink-0">
          {differentiator.cta}
        </Button>
      </div>
    </Section>
  );
}
