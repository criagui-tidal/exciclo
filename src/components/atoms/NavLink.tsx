import Link from "next/link";
import type { ReactNode } from "react";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-base font-medium text-ink no-underline hover:text-accent"
    >
      {children}
    </Link>
  );
}
