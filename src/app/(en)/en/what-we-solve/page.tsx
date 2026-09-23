import type { Metadata } from "next";

import SolveTemplate from "@/components/templates/SolveTemplate";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/site";

const locale = "en" as const;
const routeKey = "solve" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  routeKey,
  ...getContent(locale).solve.meta,
});

export default function Page() {
  return <SolveTemplate locale={locale} />;
}
