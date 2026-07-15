/**
 * Konten halaman Home — Bahasa Indonesia. Terjemahan natural dari
 * en/home.ts, bukan kata-per-kata. `href` tetap memakai path gaya EN
 * (mis. "/projects") — template yang menambahkan prefix "/id" saat merender,
 * jadi JANGAN tulis "/id/..." di sini.
 */
export const home = {
  hero: {
    eyebrow: "Junior Architect · Bandar Lampung, Indonesia",
    heading: "Nola Amallia Putri",
    lead: "Junior architect lulusan Program Profesi Arsitek (PPAr) Universitas Indonesia, dengan gelar Sarjana Arsitektur dari Institut Teknologi Sumatera. Pengalaman 1–3 tahun menangani proyek residensial dan komersial — mulai dari pengembangan konsep, desain 2D/3D, gambar kerja, hingga pengawasan konstruksi di lapangan.",
    badges: ["Terbuka untuk posisi penuh waktu", "Tersedia untuk proyek lepas (freelance)"],
    ctaPrimary: { label: "Lihat Proyek", href: "/projects" },
    ctaSecondary: { label: "Hubungi Saya", href: "/contact" },
    profileImageAlt: "Potret Nola Amallia Putri bersama maket arsitektur",
  },
  featured: {
    eyebrow: "Karya Pilihan",
    heading: "Beberapa proyek, beberapa ruang kerja yang berbeda",
    lead: "Dari tugas akhir bertema desain terapeutik hingga karya profesional residensial dan komersial — lihat rangkaian lengkapnya di halaman Proyek.",
    cta: { label: "Lihat semua 9 proyek", href: "/projects" },
    slugs: ["rumah-sejahtera-lansia", "movement-studio", "pancoran-house", "djawara"],
  },
  closing: {
    heading: "Punya proyek — atau posisi — yang cocok?",
    lead: "Baik untuk posisi penuh waktu maupun kolaborasi lepas (freelance), saya ingin mendengarnya.",
    ctaPrimary: { label: "Hubungi Saya", href: "/contact" },
    ctaSecondary: { label: "Unduh Resume", href: "/resume" },
  },
};
