import Link from "next/link";

import Eyebrow from "@/components/atoms/Eyebrow";
import TechTag from "@/components/atoms/TechTag";
import ScaleGrid, { type ScaleItem } from "@/components/molecules/ScaleGrid";

export type CaseItem = {
  client: string;
  title: string;
  summary: string;
  scale: readonly ScaleItem[];
  tech: readonly string[];
  hasPage: boolean;
};

export default function CaseCard({
  item,
  scaleLabel,
  readMore,
  href,
}: {
  item: CaseItem;
  scaleLabel: string;
  readMore: string;
  // Solo los casos con página propia reciben enlace; el resto se lee entero
  // en la tarjeta, que es preferible a un enlace que no lleva a ningún sitio.
  href?: string;
}) {
  return (
    <article className="flex flex-col gap-6 rounded-[28px] border border-border bg-surface p-7 sm:p-10">
      <div className="flex flex-col gap-3">
        <Eyebrow>{item.client}</Eyebrow>
        <h3 className="m-0 max-w-[620px] font-display text-[28px] font-bold leading-[1.12] text-balance sm:text-[34px]">
          {item.title}
        </h3>
        <p className="m-0 max-w-[680px] text-lg leading-relaxed text-body">
          {item.summary}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Eyebrow tone="muted" className="text-[13px] tracking-[0.12em]">
          {scaleLabel}
        </Eyebrow>
        <ScaleGrid items={item.scale} columns={4} />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {item.tech.map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>

      {href ? (
        <Link
          href={href}
          className="font-semibold text-accent no-underline hover:text-accent-dark"
        >
          {readMore} →
        </Link>
      ) : null}
    </article>
  );
}
