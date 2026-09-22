import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline-dark" | "outline-light" | "solid-light";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  "outline-dark": "border border-ink text-ink hover:bg-ink hover:text-cream",
  "outline-light":
    "border border-white text-white hover:bg-white hover:text-accent",
  "solid-light": "bg-surface text-ink hover:bg-white",
};

const sizeClasses: Record<Size, string> = {
  md: "h-11 px-6 text-base",
  lg: "h-14 px-7 text-[17px]",
};

export default function Button({
  href,
  variant = "primary",
  size = "lg",
  external,
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold no-underline transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
