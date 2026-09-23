import CheckIcon from "@/components/atoms/CheckIcon";
import Eyebrow from "@/components/atoms/Eyebrow";

// Los tres pilares del posicionamiento V2. La home los muestra sin `signals`;
// la página "Qué resolvemos" los amplía con las señales de que el problema
// existe, que es lo que hace que el lector se reconozca.

export type Pillar = {
  index: string;
  color: string;
  title: string;
  body: string;
  outcome: string;
  signals?: string[];
};

export default function PillarCard({
  pillar,
  outcomeLabel,
  signalsLabel,
}: {
  pillar: Pillar;
  outcomeLabel: string;
  signalsLabel?: string;
}) {
  return (
    <article className="flex h-full flex-col gap-5 rounded-[20px] border border-border bg-surface p-7 lg:p-8">
      <div
        className="font-display text-[40px] font-bold leading-none"
        style={{ color: pillar.color }}
      >
        {pillar.index}
      </div>
      <h3 className="m-0 font-display text-[26px] font-bold leading-[1.12] text-balance">
        {pillar.title}
      </h3>
      <p className="m-0 text-[17px] leading-relaxed text-body">{pillar.body}</p>

      {pillar.signals && signalsLabel ? (
        <div className="flex flex-col gap-2.5 border-t border-border pt-5">
          <Eyebrow tone="muted" className="text-[13px] tracking-[0.12em]">
            {signalsLabel}
          </Eyebrow>
          <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[16px] leading-snug text-body">
            {pillar.signals.map((signal) => (
              <li key={signal} className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: pillar.color }}
                />
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-auto flex flex-col gap-2 border-t border-border pt-5">
        <Eyebrow className="text-[13px] tracking-[0.12em]">
          {outcomeLabel}
        </Eyebrow>
        <div className="flex items-start gap-2.5 text-[17px] leading-snug">
          <CheckIcon />
          <span>{pillar.outcome}</span>
        </div>
      </div>
    </article>
  );
}
