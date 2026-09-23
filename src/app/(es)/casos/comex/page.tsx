import type { Metadata } from "next";

import ComexTemplate from "@/components/templates/ComexTemplate";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/site";

const locale = "es" as const;
const routeKey = "caseComex" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  routeKey,
  ...getContent(locale).comex.meta,
});

export default function Page() {
  return <ComexTemplate locale={locale} />;
}
