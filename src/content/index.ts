import { es, type Content } from "./es";
import { en } from "./en";
import type { Locale } from "@/lib/i18n";

const content: Record<Locale, Content> = { es, en };

export function getContent(locale: Locale): Content {
  return content[locale];
}

export type { Content };
