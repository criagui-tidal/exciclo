import Section from "@/components/atoms/Section";
import AccentCard from "@/components/molecules/AccentCard";
import SectionHeader from "@/components/molecules/SectionHeader";
import type { Content } from "@/content";

export default function ProblemSection({ content }: { content: Content }) {
  const { problem } = content.home;

  return (
    <Section className="flex flex-col gap-12">
      <SectionHeader eyebrow={problem.eyebrow} title={problem.title}>
        {problem.paragraphs.map((paragraph) => (
          <p key={paragraph} className="m-0 text-lg leading-relaxed text-body">
            {paragraph}
          </p>
        ))}
      </SectionHeader>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {problem.cards.map((card) => (
          <AccentCard
            key={card.title}
            title={card.title}
            body={card.body}
            color={card.color}
          />
        ))}
      </div>

      <p className="m-0 max-w-[900px] font-display text-[26px] font-bold leading-[1.2] text-balance sm:text-[32px]">
        {problem.closing}
      </p>
    </Section>
  );
}
