import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  tone = "accent",
  className = "",
}: {
  children: ReactNode;
  tone?: "accent" | "muted" | "light";
  className?: string;
}) {
  const toneClasses = {
    accent: "text-accent",
    muted: "text-muted",
    light: "text-accent-tint",
  };

  return (
    <div
      className={`text-sm font-semibold uppercase tracking-[0.16em] ${toneClasses[tone]} ${className}`}
    >
      {children}
    </div>
  );
}
