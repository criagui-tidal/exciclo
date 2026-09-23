import type { ReactNode } from "react";

// Tarjeta de texto con una barra de color arriba. La reutilizan la sección del
// problema (Operaciones · Tecnología · IA) y la página Para empresas, donde lo
// único que cambia es el rótulo y el cuerpo.

export default function AccentCard({
  label,
  title,
  body,
  color,
  children,
}: {
  label?: string;
  title: string;
  body?: string;
  color: string;
  children?: ReactNode;
}) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-[20px] border border-border bg-surface p-7">
      <div
        aria-hidden="true"
        className="h-1.5 w-12 rounded-full"
        style={{ backgroundColor: color }}
      />
      {label ? (
        <div className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
          {label}
        </div>
      ) : null}
      <h3 className="m-0 font-display text-[24px] font-bold leading-[1.15] text-balance">
        {title}
      </h3>
      {body ? (
        <p className="m-0 text-[17px] leading-relaxed text-body">{body}</p>
      ) : null}
      {children}
    </article>
  );
}
