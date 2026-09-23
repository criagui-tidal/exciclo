import type { Locale } from "@/lib/i18n";
import { catalog } from "./catalog";
import { common } from "./common";
import { home } from "./home";
import { pages } from "./pages";

// El español es la fuente de la verdad: `Content` se infiere de aquí y el
// inglés se tipa contra él, así que una sección nueva no compila hasta estar
// traducida. `locale` se anota como `Locale` (no como literal) justamente para
// que el objeto inglés encaje en el mismo tipo.
export const es = {
  locale: "es" as Locale,
  ...common,
  home,
  ...pages,
  catalog,
};

export type Content = typeof es;
