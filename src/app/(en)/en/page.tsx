import type { Metadata } from "next";

import HomeTemplate from "@/components/templates/HomeTemplate";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/site";

const locale = "en" as const;
const routeKey = "home" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  routeKey,
  ...getContent(locale).home.meta,
});

export default function Page() {
  return <HomeTemplate locale={locale} />;
}
