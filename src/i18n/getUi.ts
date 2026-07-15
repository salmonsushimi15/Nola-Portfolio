import type { Lang } from "./paths";
import { ui as en } from "./en/ui";
import { ui as id } from "./id/ui";

/** Resolve the shared UI-chrome string dictionary for a given language. */
export function getUi(lang: Lang) {
  return lang === "id" ? id : en;
}
