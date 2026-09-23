import type { Locale } from "@/lib/i18n";
import type { Content } from "../es";
import { catalog } from "./catalog";
import { common } from "./common";
import { home } from "./home";
import { pages } from "./pages";

// La anotación `: Content` es la que obliga a que el inglés tenga exactamente
// las mismas claves que el español.
export const en: Content = {
  locale: "en" as Locale,
  ...common,
  home,
  ...pages,
  catalog,
};
