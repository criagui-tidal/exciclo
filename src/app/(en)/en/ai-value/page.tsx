import type { Metadata } from "next";

import AiValueTemplate from "@/components/templates/AiValueTemplate";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/site";

const locale = "en" as const;
const routeKey = "aiValue" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  routeKey,
  ...getContent(locale).aiValue.meta,
});

export default function Page() {
  return <AiValueTemplate locale={locale} />;
}
