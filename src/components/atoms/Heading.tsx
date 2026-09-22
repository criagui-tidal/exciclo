import type { ElementType, ReactNode } from "react";

type Level = "h1" | "h2" | "h3";

const levelClasses: Record<Level, string> = {
  h1: "text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.025em]",
  h2: "text-[34px] sm:text-[40px] lg:text-[48px] leading-[1.08] tracking-[-0.02em]",
  h3: "text-[22px] lg:text-[26px] leading-[1.15]",
};

const toneClasses = {
  ink: "text-ink",
  white: "text-white",
};

export default function Heading({
  as,
  tone = "ink",
  children,
  className = "",
}: {
  as: Level;
  tone?: keyof typeof toneClasses;
  children: ReactNode;
  className?: string;
}) {
  const Tag = as as ElementType;

  return (
    <Tag
      className={`m-0 font-serif font-bold text-balance ${toneClasses[tone]} ${levelClasses[as]} ${className}`}
    >
      {children}
    </Tag>
  );
}
