import type { Metadata } from "next";

import AssessmentTemplate from "@/components/templates/AssessmentTemplate";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/site";

const locale = "en" as const;
const routeKey = "assessment" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  routeKey,
  ...getContent(locale).assessment.meta,
});

export default function Page() {
  return <AssessmentTemplate locale={locale} />;
}
