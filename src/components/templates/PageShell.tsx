import type { ReactNode } from "react";

import JsonLd from "@/components/atoms/JsonLd";
import CtaSection from "@/components/organisms/CtaSection";
import SiteFooter from "@/components/organisms/SiteFooter";
import SiteHeader from "@/components/organisms/SiteHeader";
import type { Content } from "@/content";
import type { Locale, RouteKey } from "@/lib/i18n";
import { siteJsonLd } from "@/lib/structured-data";

// Todas las páginas interiores comparten el mismo marco: header, contenido,
// llamada a la acción y footer. El CTA final se repite a propósito: es el
// único destino del sitio.
export default function PageShell({
  content,
  locale,
  routeKey,
  children,
}: {
  content: Content;
  locale: Locale;
  routeKey: RouteKey;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <JsonLd data={siteJsonLd(locale)} />
      <SiteHeader content={content} locale={locale} routeKey={routeKey} />
      {children}
      <CtaSection content={content} locale={locale} />
      <SiteFooter content={content} locale={locale} />
    </div>
  );
}
