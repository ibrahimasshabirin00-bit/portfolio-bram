# Panduan portofolio

## Hubungkan ke GitHub
Di editor Lovable, buka menu **+** di kolom chat → **GitHub** → **Connect project**. Otorisasi akun GitHub, pilih akun/organisasi, lalu pilih **Create Repository**. Perubahan Lovable dan repository akan tersinkron dua arah. Tidak memerlukan konektor GitHub API.

## Isi data Anda
- Ubah identitas, email, nomor WhatsApp (format internasional tanpa tanda +), LinkedIn, ringkasan, dan proyek pada `src/data/portfolio.ts`.
- Isi `photo` dengan URL foto profil Anda. Ruang kerja yang ditampilkan sekarang adalah ilustrasi, bukan foto pemilik portofolio.
- Resume saat ini: `public/resume-ibrahim-asshabirin.txt` (isi dari CV asli). Untuk CV PDF, tambahkan file PDF ke `public/` dan ubah `resumeUrl` di `src/data/portfolio.ts`.
- Isi halaman Resume di `src/routes/resume.tsx` sudah mengambil data dari CV asli (pengalaman RS Marina Permata, pendidikan, sertifikasi Prakerja, penghargaan Demo Day).
- Proyek, kemampuan, dan isi resume diambil dari CV Ibrahim Asshabirin (Oktober 2026). Perbarui di `src/data/portfolio.ts` bila ada pengalaman baru. Foto profil masih kosong — isi `photo` dengan URL foto Anda.
- Form kontak membuka aplikasi email ketika email profil telah diisi. Tidak ada pengiriman email otomatis atau penyimpanan pesan.

## Menjalankan secara lokal
Gunakan Bun, jalankan `bun install` lalu `bun run dev`. Framework: React dan TanStack Start, dengan Tailwind CSS v4. Gunakan `bun run test` untuk pengujian.