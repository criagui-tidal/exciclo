import type { Metadata } from "next";

import AboutTemplate from "@/components/templates/AboutTemplate";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/site";

const locale = "en" as const;
const routeKey = "about" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  routeKey,
  ...getContent(locale).about.meta,
});

export default function Page() {
  return <AboutTemplate locale={locale} />;
}
