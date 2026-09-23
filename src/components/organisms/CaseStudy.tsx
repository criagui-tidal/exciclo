import Link from "next/link";

import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import TechTag from "@/components/atoms/TechTag";
import ScaleGrid from "@/components/molecules/ScaleGrid";
import type { Content } from "@/content";
import { href, type Locale } from "@/lib/i18n";

// El caso completo: desafío, intervención, resultado y la escala en cifras.
// Sin porcentajes de mejora que no se puedan sostener: la escala es la prueba.
export default function CaseStudy({
  content,
  locale,
}: {
  content: Content;
  locale: Locale;
}) {
  const { comex } = content;

  return (
    <>
      <Section space="md" className="flex flex-col gap-7">
        <Link
          href={href("cases", locale)}
          className="text-[15px] font-semibold text-muted no-underline hover:text-accent"
        >
          ← {comex.backLabel}
        </Link>
        <Eyebrow>{comex.eyebrow}</Eyebrow>
        <Heading as="h1" className="max-w-[880px]">
          {comex.title}
        </Heading>
        <div className="flex flex-col gap-3 border-t border-border pt-8">
          <Eyebrow tone="muted" className="text-[13px] tracking-[0.12em]">
            {comex.scaleLabel}
          </Eyebrow>
          <ScaleGrid items={comex.scale} columns={4} />
        </div>
      </Section>

      <Section className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-10 lg:col-span-8">
          {comex.sections.map((section) => (
            <div key={section.label} className="flex flex-col gap-3">
              <Eyebrow>{section.label}</Eyebrow>
              <p className="m-0 text-lg leading-relaxed text-body">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <aside className="flex h-fit flex-col gap-4 rounded-[20px] bg-surface-alt p-7 lg:col-span-4">
          <Eyebrow tone="muted" className="text-[13px] tracking-[0.12em]">
            {comex.techLabel}
          </Eyebrow>
          <div className="flex flex-wrap gap-2">
            {comex.tech.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>
        </aside>
      </Section>
    </>
  );
}
