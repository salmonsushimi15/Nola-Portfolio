/**
 * Resume page copy — English (default).
 */
export const resume = {
  eyebrow: "Resume",
  heading: "Resume",
  lead: "A one-page summary of education, experience, and skills. Download the PDF for the full version.",
  download: {
    label: "Download CV (PDF)",
    href: "/nola-amallia-putri-cv.pdf",
    filename: "Nola-Amallia-Putri-CV.pdf",
    meta: "PDF · updated 2026",
  },
  /**
   * Full project portfolio PDF (Revisi klien putaran 2A, poin 5) — a
   * compressed version of the client's source "PORTOFOLIO NOLA 2026.pdf"
   * (~124MB), rendered down via site/scripts/compress-portfolio-pdf.mjs to
   * stay well under GitHub's 100MB file limit. `meta` states the file size
   * so visitors know what they're about to download.
   */
  portfolioDownload: {
    label: "Download Portfolio (PDF)",
    href: "/nola-amallia-putri-portfolio.pdf",
    filename: "Nola-Amallia-Putri-Portfolio.pdf",
    meta: "PDF — 18.6 MB",
  },
  snapshot: {
    label: "At a Glance",
    currentRoleLabel: "Current Role",
    educationLabel: "Education",
    softwareLabel: "Key Software",
    aboutLinkLabel: "Full background on the About page",
    role: { title: "Junior Architect (Intern)", detail: "PT. Hermawan Dasmanto Architect, Surabaya — Feb 2026 – Now" },
    education: [
      "PPAr Architecture, Universitas Indonesia (2025–2026)",
      "B.Arch, Institut Teknologi Sumatera (2021–2025)",
    ],
    skills: ["AutoCAD", "SketchUp", "Revit", "Enscape", "D5 Render", "Photoshop"],
  },
};
