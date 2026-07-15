/**
 * Shared UI "chrome" strings — used by Nav, Footer, Base, and any template
 * reused across many page instances (project detail, projects index). Page
 * body copy lives in the per-page files (home.ts, about.ts, etc.) instead.
 */
export const ui = {
  skipToContent: "Skip to content",

  /** First-visit intro overlay (Base.astro / IntroOverlay.astro) — shown once per session. */
  intro: {
    name: "Nola Amallia Putri",
    role: "Architect",
    skipLabel: "Skip intro",
  },

  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    /** aria-label on the group wrapping the EN/ID links. */
    languageGroupLabel: "Language",
  },

  footer: {
    tagline:
      "Junior Architect based in Bandar Lampung, Indonesia — residential & commercial design, from concept to construction documentation.",
    rights: "All rights reserved.",
  },

  /**
   * Shared contact-channel strings (Revisi klien putaran 2A, poin 6) — used
   * by both Footer.astro and ContactTemplate.astro, which each keep their
   * own `contacts` array (icon/href per channel) but pull this label in
   * for the WhatsApp entry instead of hardcoding "Phone"/"WhatsApp" twice.
   * The phone number itself is still shown as plain text alongside the
   * link, per client request, for anyone who wants to dial it manually.
   */
  contactChannels: {
    whatsappLabel: "Chat on WhatsApp",
  },

  form: {
    honeypot: "Don't fill this out if you're human:",
  },

  projectsIndexPage: {
    eyebrow: "Projects",
    heading: "All Projects",
    lead: "Nine projects, numbered 01–09 in the order they appear in the portfolio — academic thesis and studio work alongside professional and freelance practice.",
  },

  projectDetail: {
    conceptHeading: "The Concept",
    deliverablesHeading: "Deliverables",
    previousLabel: "Previous",
    nextLabel: "Next",
    allProjectsLabel: "All Projects",
    heroImageAlt: "exterior view render",
    renderAlt: "architectural render",

    /**
     * Book-style detail page (Revisi klien putaran 2B) — page-flip controls
     * and the "page X of Y" indicator shared by every project's book.
     */
    book: {
      pageLabel: "Page",
      of: "of",
      prevPage: "Previous page",
      nextPage: "Next page",
      /** Putaran 3, poin C: always-visible compact PROJECT nav in the book's control bar — distinct from prevPage/nextPage (which move between book pages within the same project). */
      prevProject: "Previous project",
      nextProject: "Next project",
    },
  },
};
