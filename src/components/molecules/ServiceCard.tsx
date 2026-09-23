import CheckIcon from "@/components/atoms/CheckIcon";
import Eyebrow from "@/components/atoms/Eyebrow";
import TechTag from "@/components/atoms/TechTag";

export type Service = {
  problem: string;
  solution: string;
  tech: readonly string[];
};

export default function ServiceCard({
  service,
  problemLabel,
  solutionLabel,
}: {
  service: Service;
  problemLabel: string;
  solutionLabel: string;
}) {
  return (
    <article className="flex h-full flex-col gap-5 rounded-[20px] border border-border bg-surface p-7">
      <div className="flex flex-col gap-2">
        <Eyebrow tone="muted" className="text-[13px] tracking-[0.12em]">
          {problemLabel}
        </Eyebrow>
        <h3 className="m-0 font-display text-[22px] font-bold leading-[1.15] text-balance">
          {service.problem}
        </h3>
      </div>
      <div className="flex flex-col gap-2 border-t border-border pt-5">
        <Eyebrow className="text-[13px] tracking-[0.12em]">
          {solutionLabel}
        </Eyebrow>
        <div className="flex items-start gap-2.5 text-[17px] leading-snug text-body">
          <CheckIcon />
          <span>{service.solution}</span>
        </div>
      </div>
      <div className="mt-auto flex flex-wrap gap-2 pt-1">
        {service.tech.map((item) => (
          <TechTag key={item}>{item}</TechTag>
        ))}
      </div>
    </article>
  );
}
