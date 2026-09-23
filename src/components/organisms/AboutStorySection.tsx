import Image from "next/image";

import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import StatsGrid from "@/components/molecules/StatsGrid";
import type { Content } from "@/content";

export default function AboutStorySection({ content }: { content: Content }) {
  const { about } = content;

  return (
    <Section className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
      <div className="relative h-[320px] overflow-hidden rounded-[20px] bg-surface-alt lg:col-span-5 lg:h-[620px]">
        <Image
          src="/mifoto.jpg"
          alt={about.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col gap-6 lg:col-span-7 lg:pl-8">
        <Eyebrow>{about.story.eyebrow}</Eyebrow>
        <Heading as="h2">{about.story.title}</Heading>
        {about.story.paragraphs.map((paragraph) => (
          <p key={paragraph} className="m-0 text-lg leading-relaxed text-body">
            {paragraph}
          </p>
        ))}
        <div className="flex flex-col gap-4 pt-2">
          <Eyebrow tone="muted" className="text-[13px] tracking-[0.12em]">
            {about.statsLabel}
          </Eyebrow>
          <StatsGrid stats={about.stats} />
        </div>
      </div>
    </Section>
  );
}
