import type { Metadata } from "next";

import EnterpriseTemplate from "@/components/templates/EnterpriseTemplate";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/site";

const locale = "en" as const;
const routeKey = "enterprise" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  routeKey,
  ...getContent(locale).enterprise.meta,
});

export default function Page() {
  return <EnterpriseTemplate locale={locale} />;
}
