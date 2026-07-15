import type { Lang } from "./paths";
import type { ProjectMeta } from "../lib/projects";
import { projectsCopy as en } from "./en/projects";
import { projectsCopy as id } from "./id/projects";

/** Resolve the project narrative-copy dictionary (keyed by slug) for a language. */
export function getProjectsCopy(lang: Lang) {
  return lang === "id" ? id : en;
}

/**
 * Category label for a project in the given language. Falls back to the
 * (English) ProjectMeta.category when no localized override is set.
 */
export function getCategoryLabel(project: ProjectMeta, lang: Lang): string {
  const override = getProjectsCopy(lang)[project.slug]?.category;
  return override ?? project.category;
}
