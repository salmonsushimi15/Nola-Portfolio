/**
 * Project detail copy — English (default). Keyed by slug so it's easy to
 * add an `id.ts` sibling later (Tahap 4) and easy for the client to update
 * a single project's copy without touching the page template.
 *
 * All content is expanded from PRD Bagian 5 ("Konsep Inti" column) and the
 * CV. Nothing here introduces a new fact (material, client name, location,
 * year) that isn't already in those sources — paragraphs are written out
 * in fuller prose, not invented.
 */
export interface ProjectContent {
  /**
   * Localized override for ProjectMeta.category (lib/projects.ts). Optional
   * because the English category text already lives in ProjectMeta — only
   * the `id` dictionary needs to set this (proper nouns like "PT. Dakara
   * Sekkei Astama" or "ITERA" stay as-is; only the descriptive words like
   * "Professional"/"Bachelor's Thesis" actually get translated).
   */
  category?: string;
  /** One-sentence summary shown under the title in the hero. */
  summary: string;
  /** 2-3 narrative paragraphs, expanded from the PRD's "Konsep Inti" bullet. */
  concept: string[];
  /** Only set for projects presented as a deliverables list rather than prose (08). */
  deliverables?: string[];
}

export const projectsCopy: Record<string, ProjectContent> = {
  "rumah-sejahtera-lansia": {
    summary:
      "A bachelor's thesis exploring therapeutic architecture for the elderly, designed to improve quality of life through the senses.",
    concept: [
      "This project began as a bachelor's thesis at Institut Teknologi Sumatera, framed around therapeutic architecture — a design approach that treats the building itself as part of an elderly resident's care and wellbeing, not just a place to live.",
      "The layout draws on the Tanean Lanjhang concept, a courtyard-based settlement pattern that arranges dwellings and shared spaces around a communal open ground, encouraging residents to move through and gather in shared outdoor space rather than staying isolated indoors.",
      "Bamboo was chosen as the primary material, and a garden is designed to wrap around the building rather than sit apart from it — placing planting, texture, and open air within easy reach so the surrounding landscape can actively stimulate the senses as part of the therapeutic design.",
    ],
  },

  "ruang-literasi": {
    summary:
      "An interactive children's reading space responding to national reading-interest data, designed during the Architect Professional Program at Universitas Indonesia.",
    concept: [
      "Developed as a design studio project during the Architect Professional Program (PPAr) at Universitas Indonesia, this reading space starts from a specific problem: data on reading interest (referencing UNESCO figures) points to a need for spaces that make reading feel more inviting to children, not less.",
      "The response is an interactive interior built from textured, modular materials — assembled in a way that echoes LEGO-like building blocks, so the space itself invites hands-on exploration rather than passive, quiet study.",
      "On the exterior, a vertical shading facade filters daylight into the building while giving Ruang Literasi its colorful, distinctive street presence.",
    ],
  },

  "movement-studio": {
    summary:
      'A fitness center built around a courtyard, developed at PT. Dakara Sekkei Astama under the concept "Urban Retreat Through Courtyard."',
    concept: [
      'Designed while working at PT. Dakara Sekkei Astama, Movement Studio is organized around the idea of "Urban Retreat Through Courtyard" — using a central courtyard to give a fitness program, normally dense and enclosed, a moment of open-air pause within the city.',
      "The courtyard sits at the center of the plan, letting light, air, and views reach further into the building than a conventional enclosed gym layout would allow.",
      "Inside, the changing rooms are finished in a terracotta palette — a deliberate warmth applied to a part of the program that's usually left purely utilitarian.",
    ],
  },

  "pancoran-house": {
    summary:
      'A retirement home for an elderly couple, designed around "Warm Connected Living" with an open floor plan.',
    concept: [
      'Pancoran House is a retirement home designed for an elderly couple around the concept of "Warm Connected Living" — prioritizing everyday closeness over separation between rooms.',
      "The floor plan stays open, with minimal partitions between the couple's living spaces, so daily life — cooking, resting, moving through the house — happens within sight and reach of one another rather than behind closed doors.",
      "The result is a home whose spatial planning quietly supports the couple's day-to-day companionship rather than treating it as separate from the design.",
    ],
  },

  djawara: {
    summary:
      "A café designed as a warm, elegant gathering space, combining wood, black steel, glass, natural stone, and green ceramic accents.",
    concept: [
      "Djawara is designed as a gathering space first — a café meant to feel warm and elegant rather than purely commercial, giving guests a reason to stay rather than pass through.",
      "That atmosphere comes from a deliberate material mix: wood and natural stone for warmth, black steel and glass for a more contemporary edge, and green ceramic accents that give the palette a distinct, memorable note.",
      "Together, the materials are balanced so the space reads as considered and inviting at once, rather than leaning too far toward either the rustic or the industrial.",
    ],
  },

  "bibu-house": {
    summary:
      'A modern "quiet luxury" home built on a neutral palette, natural materials, and considered lighting.',
    concept: [
      'Bibu House takes cues from "quiet luxury" — a residential approach that reads as refined without relying on loud finishes or ornamentation.',
      "The material and color palette stays neutral throughout, letting natural materials carry most of the visual interest instead of applied decoration.",
      "Lighting is used strategically rather than decoratively — placed to shape how each space feels at different times of day, reinforcing the same restrained, considered atmosphere as the materials.",
    ],
  },

  "topgolf-kemang": {
    summary:
      "A renovation of a private room at Topgolf Kemang, preserving the venue's visual identity while introducing a more flexible space.",
    concept: [
      "This project is a renovation of a private room at Topgolf Kemang, an addition to the practice's professional renovation work.",
      "The brief centered on preserving Topgolf's existing visual identity — the renovation works within that established look rather than replacing it.",
      "Within those constraints, the room was reworked into a more flexible space, with brass accents introduced as the project's distinguishing material detail.",
    ],
  },

  "revit-modeling": {
    summary:
      "Technical Revit documentation produced during the Architect Professional Program at Universitas Indonesia.",
    concept: [
      "Produced during the Architect Professional Program (PPAr) at Universitas Indonesia, this project is a set of technical Revit deliverables rather than a single building design — the kind of construction documentation a project needs to move from concept to buildable drawings.",
      "The set covers modeling, technical drawing, and quantity/material documentation in one coordinated Revit workflow.",
    ],
    deliverables: [
      "Isometric view",
      "Isometric plumbing",
      "Floor plan & section",
      "Net area calculation",
      "Floor pattern",
      "Material specification",
    ],
  },

  "production-maket": {
    summary:
      "Coordinated 3D-printing production of architectural models for the Museum Tekstil Jakarta, as part of a team project during the Architect Professional Program.",
    concept: [
      "As a team project during the Architect Professional Program (PPAr) at Universitas Indonesia, this project covers the physical production side of architectural presentation: turning digital models into printed, physical models.",
      "Within the team, the role was 3D Printing Coordinator — responsible for coordinating the 3D-printing production process for a set of 5 models made for the Museum Tekstil Jakarta.",
    ],
  },
};
