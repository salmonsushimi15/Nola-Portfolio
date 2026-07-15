/**
 * Konten halaman Resume — Bahasa Indonesia. File CV yang diunduh tetap sama
 * (satu-satunya CV yang diberikan klien berbahasa Inggris) — tidak ada versi
 * PDF berbahasa Indonesia terpisah, jadi `download.href` sengaja tidak diubah.
 */
export const resume = {
  eyebrow: "Resume",
  heading: "Resume",
  lead: "Ringkasan satu halaman berisi pendidikan, pengalaman, dan keahlian. Unduh PDF untuk versi lengkapnya.",
  download: {
    label: "Unduh CV (PDF)",
    href: "/nola-amallia-putri-cv.pdf",
    filename: "Nola-Amallia-Putri-CV.pdf",
    meta: "PDF · diperbarui 2026",
  },
  /**
   * PDF portofolio lengkap (Revisi klien putaran 2A, poin 5) — versi
   * terkompresi dari "PORTOFOLIO NOLA 2026.pdf" (~124MB) milik klien, sama
   * untuk EN & ID (tidak ada versi berbahasa Indonesia terpisah).
   */
  portfolioDownload: {
    label: "Unduh Portofolio (PDF)",
    href: "/nola-amallia-putri-portfolio.pdf",
    filename: "Nola-Amallia-Putri-Portfolio.pdf",
    meta: "PDF — 18.6 MB",
  },
  snapshot: {
    label: "Ringkasan Singkat",
    currentRoleLabel: "Posisi Saat Ini",
    educationLabel: "Pendidikan",
    softwareLabel: "Perangkat Lunak Utama",
    aboutLinkLabel: "Latar belakang lengkap di halaman About",
    role: { title: "Junior Architect (Magang)", detail: "PT. Hermawan Dasmanto Architect, Surabaya — Feb 2026 – Sekarang" },
    education: [
      "PPAr Arsitektur, Universitas Indonesia (2025–2026)",
      "S1 Arsitektur, Institut Teknologi Sumatera (2021–2025)",
    ],
    skills: ["AutoCAD", "SketchUp", "Revit", "Enscape", "D5 Render", "Photoshop"],
  },
};
