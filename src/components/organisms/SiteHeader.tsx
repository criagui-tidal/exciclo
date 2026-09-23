import Logo from "@/components/atoms/Logo";
import NavMenu from "@/components/molecules/NavMenu";
import type { Content } from "@/content";
import {
  anchorHref,
  href,
  otherLocale,
  type Locale,
  type RouteKey,
} from "@/lib/i18n";

export default function SiteHeader({
  content,
  locale,
  routeKey,
}: {
  content: Content;
  locale: Locale;
  // La página actual, para que el conmutador de idioma lleve a su equivalente
  // y no siempre a la home.
  routeKey: RouteKey;
}) {
  const items = [
    ...content.nav.links.map((link) => ({
      href: href(link.key, locale),
      label: link.label,
    })),
    { href: anchorHref("cycle", locale), label: content.nav.cycleLabel },
  ];

  return (
    <header className="flex h-20 items-center justify-between border-b border-border px-6 sm:h-24 sm:px-10 lg:px-[120px]">
      <Logo href={href("home", locale)} />
      <NavMenu
        items={items}
        ctaLabel={content.nav.cta}
        ctaHref={anchorHref("contact", locale)}
        switchTo={content.nav.switchTo}
        switchLabel={content.nav.switchLabel}
        switchHref={href(routeKey, otherLocale(locale))}
      />
    </header>
  );
}
