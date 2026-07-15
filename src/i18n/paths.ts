/**
 * Route-based i18n path helpers (Tahap 5). EN lives unprefixed at "/" and
 * mirrors under "/id/..." — project slugs are NOT translated, so mapping a
 * path between languages is just adding/removing the "/id" prefix.
 */
export type Lang = "en" | "id";

/** Strips a leading "/id" prefix, if present, back to the EN-style bare path. */
function toBarePath(pathname: string): string {
  if (pathname === "/id" || pathname === "/id/") return "/";
  if (pathname.startsWith("/id/")) return pathname.slice(3);
  return pathname;
}

/** Given ANY pathname (EN or ID) return the equivalent path in `targetLang`. */
export function getLocalizedPath(pathname: string, targetLang: Lang): string {
  const bare = toBarePath(pathname);
  if (targetLang === "en") return bare;
  return bare === "/" ? "/id/" : `/id${bare}`;
}
