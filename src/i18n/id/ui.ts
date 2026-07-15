/**
 * Terjemahan string UI bersama (Nav, Footer, Base, template proyek).
 * Lihat en/ui.ts untuk konteks penggunaan tiap field.
 */
export const ui = {
  skipToContent: "Langsung ke konten",

  /** Overlay intro kunjungan pertama (Base.astro / IntroOverlay.astro) — muncul sekali per sesi. */
  intro: {
    name: "Nola Amallia Putri",
    role: "Arsitek",
    skipLabel: "Lewati intro",
  },

  nav: {
    home: "Beranda",
    about: "Tentang",
    projects: "Proyek",
    contact: "Kontak",
    resume: "Resume",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    languageGroupLabel: "Bahasa",
  },

  footer: {
    tagline:
      "Junior Architect berbasis di Bandar Lampung, Indonesia — desain residensial & komersial, dari pengembangan konsep hingga dokumen konstruksi.",
    rights: "Hak cipta dilindungi.",
  },

  /** String kanal kontak bersama (Revisi klien putaran 2A, poin 6) — lihat en/ui.ts untuk konteks. */
  contactChannels: {
    whatsappLabel: "Chat via WhatsApp",
  },

  form: {
    honeypot: "Jangan isi ini jika Anda manusia:",
  },

  projectsIndexPage: {
    eyebrow: "Proyek",
    heading: "Semua Proyek",
    lead: "Sembilan proyek, diberi nomor 01–09 sesuai urutan tampil di portofolio — thesis akademik dan tugas studio, berdampingan dengan praktik profesional dan lepas (freelance).",
  },

  projectDetail: {
    conceptHeading: "Konsep",
    deliverablesHeading: "Hasil Kerja (Deliverables)",
    previousLabel: "Sebelumnya",
    nextLabel: "Selanjutnya",
    allProjectsLabel: "Semua Proyek",
    heroImageAlt: "render tampak eksterior",
    renderAlt: "render arsitektur",

    /** Halaman detail proyek bergaya buku (Revisi klien putaran 2B) — kontrol balik halaman + indikator "hal. X / Y". */
    book: {
      pageLabel: "Halaman",
      of: "dari",
      prevPage: "Halaman sebelumnya",
      nextPage: "Halaman berikutnya",
      /** Putaran 3, poin C: navigasi PROYEK kompak yang selalu terlihat di bar kontrol buku — beda dari prevPage/nextPage (pindah antar halaman buku dalam proyek yang sama). */
      prevProject: "Proyek sebelumnya",
      nextProject: "Proyek berikutnya",
    },
  },
};
