import Link from "next/link";

import Logo from "@/components/atoms/Logo";
import type { Content } from "@/content";
import { anchorHref, href, type Locale } from "@/lib/i18n";
import { contact } from "@/lib/site";

export default function SiteFooter({
  content,
  locale,
}: {
  content: Content;
  locale: Locale;
}) {
  const siteLinks = content.nav.links.map((link) => ({
    href: href(link.key, locale),
    label: link.label,
  }));

  const moreLinks = content.footer.moreLinks.map((link) => ({
    href: href(link.key, locale),
    label: link.label,
  }));

  const contactLinks = [
    { href: contact.email, label: contact.emailLabel },
    { href: contact.whatsapp, label: contact.whatsappLabel },
    { href: contact.linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="flex flex-col gap-10 border-t border-border px-6 py-12 sm:px-10 lg:px-[120px]">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-1">
          <Logo size="footer" href={href("home", locale)} />
          <div className="text-sm text-muted">
            {content.site.tagline} · {content.site.location}
          </div>
        </div>

        {/* El header solo muestra cuatro secciones; el sitio entero se alcanza
            desde aquí, que además es lo que deja las páginas rastreables. */}
        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3 lg:gap-16">
          <FooterColumn title={content.footer.navLabel} links={siteLinks}>
            <Link
              href={anchorHref("cycle", locale)}
              className="no-underline hover:text-accent"
            >
              {content.nav.cycleLabel}
            </Link>
          </FooterColumn>
          <FooterColumn title={content.footer.moreLabel} links={moreLinks} />
          <FooterColumn
            title={content.footer.contactLabel}
            links={contactLinks}
          />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  children,
}: {
  title: string;
  links: { href: string; label: string }[];
  children?: React.ReactNode;
}) {
  return (
    <nav className="flex flex-col gap-3">
      <div className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
        {title}
      </div>
      <div className="flex flex-col gap-2 font-medium text-ink">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="no-underline hover:text-accent"
          >
            {link.label}
          </Link>
        ))}
        {children}
      </div>
    </nav>
  );
}
