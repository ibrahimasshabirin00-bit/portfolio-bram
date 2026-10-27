// Konten diambil dari CV asli Ibrahim Asshabirin (Oktober 2026). Perbarui di sini bila ada pengalaman baru.
export type Project = {
  id: string; category: string; title: string; description: string;
  type: 'analysis' | 'product' | 'support'; tags: string[]; period: string;
  link?: string; challenge: string; approach: string[]; deliverables: string[];
};
export const profile = {
  name: 'Ibrahim Asshabirin', shortName: 'Ibrahim',
  email: 'ibrahimasshabirin00@gmail.com', whatsapp: '6281230737228',
  linkedin: 'https://www.linkedin.com/in/ibrahimasshabirin', photo: '',
  github: 'ibrahimasshabirin00-bit',
  resumeUrl: '/resume-ibrahim-asshabirin.txt',
  summary: 'Lulusan Sistem Informasi Universitas Merdeka Malang (IPK 3,79) dengan pengalaman kerja nyata 2 tahun sebagai IT Support di rumah sakit. Keahlian dalam troubleshooting perangkat keras, pengelolaan sistem informasi berbasis database (SIMRS & BPJS), serta analisis dan perancangan solusi digital.',
};
export const projects: Project[] = [
  { id: 'sipede-scheduling-system', category: 'Product Manager', title: 'SIPeDe — Sistem Penjadwalan Diskopindag Kota Malang',
    description: 'Membangun MVP sistem informasi penjadwalan untuk Dinas Koperasi, Perindustrian, dan Perdagangan Kota Malang bersama tim SEAL Batch 2 — meraih Best Team di Demo Day 2022.',
    type: 'product', period: 'Mar 2022 – Sep 2022', link: 'https://intip.in/ProjectSipede',
    tags: ['Agile Scrum', 'Design Sprint', 'UI/UX Prototyping', 'Usability Testing'],
    challenge: 'Staf Diskopindag Kota Malang membutuhkan sistem penjadwalan yang terstruktur, sementara tim 12 orang harus menerjemahkan kebutuhan dinas menjadi produk digital yang benar-benar dapat digunakan.',
    approach: ['Bertindak sebagai Scrum Master, Product Owner, dan Team Development dalam implementasi Agile Scrum.', 'Memfasilitasi sesi brainstorming tim menggunakan metode Design Thinking dan Sprint.', 'Merancang wireframe, UI high fidelity, dan prototipe 13 halaman: login, dashboard, dan menu aktivitas, dokumentasi, serta laporan.', 'Menyepakati dan memprioritaskan 8 product backlog bersama tim Scrum berdasarkan skala prioritas.', 'Menjalankan evaluasi dan usability testing bersama 10 staf dinas.'],
    deliverables: ['MVP situs web SIPeDe', 'Prototipe UI high fidelity 13 halaman', 'Prioritized product backlog', 'Hasil usability testing 10 staf dinas'] },
  { id: 'marina-digital-services', category: 'Business Analyst', title: 'Digitalisasi Layanan RS Marina Permata',
    description: 'Merancang antarmuka Aplikasi Kunjungan dan situs web resmi rumah sakit, serta mengelola sistem informasi SIMRS dan layanan BPJS agar operasional digital berjalan lancar.',
    type: 'analysis', period: 'Mei 2024 – Mei 2026',
    tags: ['Requirement Analysis', 'UI Design', 'SIMRS', 'BPJS'],
    challenge: 'Layanan digital rumah sakit belum memiliki antarmuka yang memudahkan pasien dan operasional, sementara sistem informasi manajemen rumah sakit dan layanan BPJS harus berjalan tanpa hambatan setiap hari.',
    approach: ['Memahami alur kunjungan pasien dan kebutuhan operasional unit terkait.', 'Merancang antarmuka (UI) Aplikasi Kunjungan dan situs web resmi RS Marina Permata.', 'Mengelola SIMRS dan mengoperasikan layanan BPJS (RS Online, SIRS Online).', 'Mengumpulkan masukan pengguna untuk perbaikan antarmuka secara berkelanjutan.'],
    deliverables: ['UI Aplikasi Kunjungan', 'Situs web resmi RS Marina Permata', 'Pengelolaan SIMRS & BPJS (RS Online, SIRS Online)'] },
  { id: 'marina-it-infrastructure', category: 'IT Support', title: 'Infrastruktur IT & CCTV RS Marina Permata',
    description: 'Menangani operasional IT harian rumah sakit: pemasangan 30 CCTV dengan pemetaan jaringan, konfigurasi perangkat jaringan, inventarisasi aset, dan pemeliharaan berkala.',
    type: 'support', period: 'Mei 2024 – Mei 2026',
    tags: ['Hardware Troubleshooting', 'Networking', 'CCTV', 'Asset Management'],
    challenge: 'Operasional rumah sakit menuntut keandalan perangkat dan jaringan setiap hari — mulai dari printer, PC, dan mesin fotokopi hingga jaringan CCTV dan koneksi internet — dengan kecepatan penanganan yang tinggi.',
    approach: ['Menangani 1–5 troubleshoot IT per hari: printer, laptop, PC/CPU, mesin fotokopi, serta pemeliharaan jaringan (Wifi, LAN, IP Conflict).', 'Memasang 30 CCTV dan menyusun pemetaan jaringan CCTV di lingkungan rumah sakit.', 'Mengonfigurasi router dan access point (TP-Link, Ruijie, Starlink) serta instalasi Ubuntu dan Windows 10/11.', 'Melakukan inventarisasi perangkat komputer, CCTV, dan aset IT dengan pemeliharaan rutin setiap 3 bulan.'],
    deliverables: ['Deployment 30 CCTV & pemetaan jaringan', 'Konfigurasi router & access point', 'Inventarisasi aset IT', 'Jadwal pemeliharaan triwulanan'] },
];
export const skills = ['Hardware Troubleshooting', 'Software Troubleshooting', 'Network Troubleshooting (LAN/WLAN, Router, Access Point)', 'Administrasi SIMRS & BPJS', 'Agile & Scrum', 'Design Thinking', 'UI Design & Wireframe', 'Requirement Analysis', 'Inventarisasi Aset IT', 'Figma & Figjam', 'Jira', 'Remote Desktop (Rustdesk, Anydesk)', 'Microsoft Office & Google Workspace', 'Problem Solving & Komunikasi', 'Storyboard', 'User Journey', 'PRD (Product Requirement Document)', 'Product Backlog & Roadmapping', 'User Flows & User Stories', 'Critical Thinking', 'Time Management', 'Miro', 'Bahasa Indonesia (Aktif)', 'Bahasa Inggris (Basic)'];
export function pageHead(title: string, description: string) { return { meta: [{ title: `${title} — Ibrahim Asshabirin` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} — Ibrahim Asshabirin` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }; }
