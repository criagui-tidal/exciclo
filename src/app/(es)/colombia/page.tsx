import type { Metadata } from "next";

import ColombiaTemplate from "@/components/templates/ColombiaTemplate";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/site";

const locale = "es" as const;
const routeKey = "colombia" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  routeKey,
  ...getContent(locale).colombia.meta,
});

export default function Page() {
  return <ColombiaTemplate locale={locale} />;
}
