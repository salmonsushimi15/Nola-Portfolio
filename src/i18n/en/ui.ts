/**
 * Shared UI "chrome" strings — used by Nav, Footer, Base, and any template
 * reused across many page instances (project detail, projects index). Page
 * body copy lives in the per-page files (home.ts, about.ts, etc.) instead.
 */
export const ui = {
  skipToContent: "Skip to content",

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
  },
};
