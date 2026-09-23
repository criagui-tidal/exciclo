import Link from "next/link";

import Button from "@/components/atoms/Button";
import NavLink from "@/components/atoms/NavLink";

export type NavItem = { href: string; label: string };

// El menú completo solo cabe desde lg. Por debajo se pliega en un <details>,
// que da un desplegable accesible sin convertir el header en componente de
// cliente: sin JS propio, el navegador ya sabe abrirlo y cerrarlo.

export default function NavMenu({
  items,
  ctaLabel,
  ctaHref,
  switchTo,
  switchLabel,
  switchHref,
}: {
  items: NavItem[];
  ctaLabel: string;
  ctaHref: string;
  switchTo: string;
  switchLabel: string;
  switchHref: string;
}) {
  return (
    <nav className="flex items-center gap-4 xl:gap-8">
      <div className="hidden items-center gap-6 lg:flex xl:gap-8">
        {items.map((item) => (
          <NavLink key={item.href} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </div>

      <Link
        href={switchHref}
        hrefLang={switchHref.startsWith("/en") ? "en" : "es"}
        aria-label={switchLabel}
        className="hidden text-base font-semibold text-muted no-underline hover:text-accent sm:block"
      >
        {switchTo}
      </Link>

      <Button href={ctaHref} size="md">
        {ctaLabel}
      </Button>

      <details className="relative lg:hidden">
        <summary
          aria-label={ctaLabel}
          className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-ink text-ink [&::-webkit-details-marker]:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </summary>
        <div className="absolute right-0 top-full z-20 mt-3 flex w-[240px] flex-col gap-1 rounded-2xl border border-border bg-surface p-3 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2.5 text-base font-medium text-ink no-underline hover:bg-surface-alt"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={switchHref}
            hrefLang={switchHref.startsWith("/en") ? "en" : "es"}
            aria-label={switchLabel}
            className="rounded-xl border-t border-border px-3 py-2.5 text-base font-semibold text-muted no-underline hover:bg-surface-alt"
          >
            {switchTo}
          </Link>
        </div>
      </details>
    </nav>
  );
}
