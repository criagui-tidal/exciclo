import Image from "next/image";

import Button from "@/components/atoms/Button";
import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import type { Content } from "@/content";
import { anchorId, href, type Locale } from "@/lib/i18n";

export default function AboutSection({
  content,
  locale,
}: {
  content: Content;
  locale: Locale;
}) {
  const about = content.home.about;

  return (
    <Section
      id={anchorId("about", locale)}
      className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8"
    >
      <div className="relative h-[320px] overflow-hidden rounded-[20px] bg-surface-alt lg:col-span-5 lg:h-[600px]">
        <Image
          src="/mifoto.jpg"
          alt={about.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col gap-6 lg:col-span-7 lg:pl-8">
        <Eyebrow>{about.eyebrow}</Eyebrow>
        <Heading as="h2">{about.title}</Heading>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="m-0 text-lg leading-relaxed text-body">
            {paragraph}
          </p>
        ))}
        <Button
          href={href("about", locale)}
          variant="outline-dark"
          className="mt-2 self-start"
        >
          {about.cta}
        </Button>
      </div>
    </Section>
  );
}
