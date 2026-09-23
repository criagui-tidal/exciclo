import type { ReactNode } from "react";

export default function TechTag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-cream px-3 py-1 text-[13px] font-medium text-muted">
      {children}
    </span>
  );
}
