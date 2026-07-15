import type { ImageMetadata } from "astro";
import { getImage as getOptimizedImage } from "astro:assets";

/**
 * Canonical project list — order, slugs, titles and categories are FIXED
 * per PRD Bagian 5 (urutan 01-09 mengikuti PDF portfolio). Do not reorder
 * or rename without an explicit instruction from the client/main session.
 *
 * Copy fields (description, concept, etc.) are intentionally NOT included
 * yet — full project content lands in Tahap 3. This file only carries the
 * structural facts needed to render the projects grid.
 */
export interface ProjectMeta {
  number: number;
  slug: string;
  title: string;
  category: string;
  /** true if client has NOT supplied renders for this project (07-09) — use a typographic cover instead of a photo. */
  hasRenders: boolean;
}

export const projects: ProjectMeta[] = [
  {
    number: 1,
    slug: "rumah-sejahtera-lansia",
    title: "Rumah Sejahtera Lansia",
    category: "Bachelor's Thesis — ITERA",
    hasRenders: true,
  },
  {
    number: 2,
    slug: "ruang-literasi",
    title: "Ruang Literasi",
    category: "PPAr Studio — Universitas Indonesia",
    hasRenders: true,
  },
  {
    number: 3,
    slug: "movement-studio",
    title: "Movement Studio",
    category: "Professional — PT. Dakara Sekkei Astama",
    hasRenders: true,
  },
  {
    number: 4,
    slug: "pancoran-house",
    title: "Pancoran House",
    category: "Professional",
    hasRenders: true,
  },
  {
    number: 5,
    slug: "djawara",
    title: "Djawara",
    category: "Professional",
    hasRenders: true,
  },
  {
    number: 6,
    slug: "bibu-house",
    title: "Bibu House",
    category: "Professional",
    hasRenders: true,
  },
  {
    number: 7,
    slug: "topgolf-kemang",
    title: "Topgolf Kemang Private Room",
    category: "Professional (Renovation)",
    hasRenders: false,
  },
  {
    number: 8,
    slug: "revit-modeling",
    title: "Revit Modeling",
    category: "PPAr Studio — Universitas Indonesia",
    hasRenders: false,
  },
  {
    number: 9,
    slug: "production-maket",
    title: "Production Maket",
    category: "Team Project — PPAr UI",
    hasRenders: false,
  },
];

// Eagerly-loaded map of every project render, keyed by its file path, so
// pages/components can pull images without hand-writing an import per file.
// Reused by the projects grid, project detail galleries (Tahap 3), and the
// homepage teaser.
const projectImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/projects/*/*.{png,jpg,jpeg,PNG,JPG,JPEG}",
  { eager: true }
);

/** All images for a given project slug, sorted alphabetically by filename. */
export function getProjectImages(slug: string): ImageMetadata[] {
  return Object.entries(projectImages)
    .filter(([filePath]) => filePath.includes(`/projects/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);
}

/**
 * First available image for a project — a mechanical fallback (alphabetically
 * first file), NOT a curatorial choice. Used only where no explicit cover has
 * been picked yet (e.g. a future project not covered by `curatedCovers`).
 */
export function getCoverImage(slug: string): ImageMetadata | undefined {
  return getProjectImages(slug)[0];
}

/** Look up one specific image within a project's asset folder by filename. */
export function getImage(slug: string, filename: string): ImageMetadata | undefined {
  const match = Object.entries(projectImages).find(([filePath]) =>
    filePath.endsWith(`/projects/${slug}/${filename}`)
  );
  return match?.[1].default;
}

/**
 * Deliberately-chosen hero/cover shot per project (picked by looking at the
 * actual renders, not just "first file alphabetically"). Used for the
 * homepage teaser, the /projects grid, and each project detail hero — the
 * same cover everywhere keeps the site consistent. Covers all 6 projects
 * that have renders (01-06); 07-09 have no renders (typographic cover
 * instead, per client decision — see ProjectMeta.hasRenders).
 */
const curatedCovers: Record<string, string> = {
  "rumah-sejahtera-lansia": "exterior-paviliun-3.png", // bamboo pavilion exterior — signature shot for the therapeutic-garden thesis
  "ruang-literasi": "render-baru-1.png", // elevated establishing shot showing the full colorful perforated facade in context
  "movement-studio": "blur-fasad.png", // facade with legible Movement Studio signage
  "pancoran-house": "exterior-1-postpro.jpg", // polished twilight exterior
  djawara: "depan-2.png", // distinctive dark ridged-roof facade, no people blocking the view
  "bibu-house": "depan-2.png", // twilight facade with warm wood screen + black steel, matches "quiet luxury" concept
};

/** Curated cover if one has been picked for this slug, else the mechanical fallback. */
export function getFeaturedCover(slug: string): ImageMetadata | undefined {
  const filename = curatedCovers[slug];
  if (filename) {
    const img = getImage(slug, filename);
    if (img) return img;
  }
  return getCoverImage(slug);
}

/** All gallery images for a project EXCLUDING its curated cover (avoids showing the hero shot twice). */
export function getGalleryImages(slug: string): ImageMetadata[] {
  const cover = getFeaturedCover(slug);
  return getProjectImages(slug).filter((img) => img !== cover);
}

/**
 * A 1200x630 (standard OG size) crop of a project's cover render, for
 * per-project Open Graph / social share images (Tahap 6). Returns undefined
 * for projects with no renders (07-09) — those fall back to the site's
 * default OG image instead.
 */
export async function getProjectOgImage(slug: string): Promise<string | undefined> {
  const cover = getFeaturedCover(slug);
  if (!cover) return undefined;
  const optimized = await getOptimizedImage({
    src: cover,
    width: 1200,
    height: 630,
    format: "jpg",
  });
  return optimized.src;
}

/**
 * Groups a flat list of images into rows that alternate full-bleed (1 image)
 * and two-column (2 images) — the "editorial rhythm" layout instead of a
 * uniform grid dump. Image ORDER within the list is left as-is (filename
 * order); only the row grouping/size alternates.
 *
 * Revisi klien putaran 2B (book-style detail page): each returned row also
 * becomes one book "page" in ProjectDetailTemplate.astro, so this doubles as
 * the gallery pagination unit — 1-2 renders per book page, per PRD.
 */
export function buildGalleryRows(images: ImageMetadata[]): ImageMetadata[][] {
  const rows: ImageMetadata[][] = [];
  let i = 0;
  let full = true;
  while (i < images.length) {
    const size = full ? 1 : 2;
    rows.push(images.slice(i, i + size));
    i += size;
    full = !full;
  }
  return rows;
}

/**
 * Splits a project's concept paragraphs into "book pages" (Revisi klien
 * putaran 2B — book-style detail page), at most `maxPerPage` paragraphs
 * each. Every current project has 2 or 3 concept paragraphs, so this either
 * keeps a short concept on one page (2 paragraphs) or spreads a longer one
 * across two consecutive book pages (3 -> [2, 1]) — the client's instruction
 * to "pecah jadi 2 halaman buku daripada scroll dalam halaman" (split into
 * two book pages rather than scroll inside one page), implemented as a
 * simple paragraph-count rule instead of a fragile character-count estimate.
 */
export function chunkConceptParagraphs(
  paragraphs: string[],
  maxPerPage = 2
): string[][] {
  if (paragraphs.length === 0) return [[]];
  const pages: string[][] = [];
  for (let i = 0; i < paragraphs.length; i += maxPerPage) {
    pages.push(paragraphs.slice(i, i + maxPerPage));
  }
  return pages;
}
