/**
 * Home page copy — English (default per PRD Bagian 3).
 * Kept as a flat, serializable object so an `id.ts` sibling can be added in
 * Tahap 4 without touching the page template — the page just swaps which
 * object it imports based on locale.
 */
export const home = {
  hero: {
    eyebrow: "Junior Architect · Bandar Lampung, Indonesia",
    heading: "Nola Amallia Putri",
    lead: "Junior architect graduating from the Architect Professional Program (PPAr) at Universitas Indonesia, with a Bachelor of Architecture from Institut Teknologi Sumatera. 1–3 years across residential and commercial work — concept development, 2D/3D design, working drawings, and on-site construction supervision.",
    // Two short badges to keep the "ready to be hired" and "ready to be booked"
    // signals equal weight (PRD Bagian 2) instead of leaning on one framing.
    badges: ["Open to full-time roles", "Available for freelance projects"],
    ctaPrimary: { label: "View Projects", href: "/projects" },
    ctaSecondary: { label: "Get in Touch", href: "/contact" },
    profileImageAlt: "Portrait of Nola Amallia Putri with an architectural model",
  },
  featured: {
    eyebrow: "Selected Work",
    heading: "A few projects, a few different rooms to work in",
    lead: "From a therapeutic-design thesis to professional residential and commercial work — see the full range on the Projects page.",
    cta: { label: "See all 9 projects", href: "/projects" },
    // Slugs must exist in src/lib/projects.ts. Curated per coordinator brief:
    // one academic thesis + three professional projects across different
    // typologies (fitness, residential, hospitality) for variety.
    slugs: ["rumah-sejahtera-lansia", "movement-studio", "pancoran-house", "djawara"],
  },
  closing: {
    heading: "Have a project — or a role — in mind?",
    lead: "Whether it's a full-time position or a freelance collaboration, I'd like to hear about it.",
    ctaPrimary: { label: "Contact Me", href: "/contact" },
    ctaSecondary: { label: "Download Resume", href: "/resume" },
  },
};
