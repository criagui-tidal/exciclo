import type { Metadata } from "next";

import CasesTemplate from "@/components/templates/CasesTemplate";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/site";

const locale = "es" as const;
const routeKey = "cases" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  routeKey,
  ...getContent(locale).cases.meta,
});

export default function Page() {
  return <CasesTemplate locale={locale} />;
}
