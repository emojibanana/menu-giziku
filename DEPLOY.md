# Panduan Deploy Menu Giziku

## Kenapa dulu hasilnya putih kosong?

1. **Path asset absolut.** Build lama memakai `/assets/index-xxx.js`. Di GitHub Pages
   (`username.github.io/nama-repo/`) path itu mencari file di domain utama → 404 →
   HTML ter-load tapi JS/CSS tidak pernah jalan → putih kosong.
2. **`VITE_CONVEX_URL` kosong saat build.** Tanpa env ini, `ConvexReactClient` error
   di level modul sebelum React sempat render apa pun.

Keduanya sudah diperbaiki: workflow build memakai `--base=./` (path relatif) dan
aplikasi menampilkan pesan jelas — bukan putih — jika `VITE_CONVEX_URL` belum diset.

## Deploy ke GitHub Pages (sekali setup)

### 1. Set secret `VITE_CONVEX_URL`

Dapatkan URL deployment Convex (lihat file `.env.local` di proyek ini, nilai
`CONVEX_DEPLOYMENT`-nya `lovely-rooster-760`) — URL-nya berbentuk:

```
https://lovely-rooster-760.convex.cloud
```

Jalankan ini di proyek kalau tidak yakin:

```bash
bun convex deployment url
```

Lalu di GitHub repo:
**Settings → Secrets and variables → Actions → New repository secret**

- Name: `VITE_CONVEX_URL`
- Secret: URL di atas

### 2. Aktifkan Pages dari Actions

**Settings → Pages → Build and deployment → Source: pilih `GitHub Actions`**

### 3. Push

Workflow `.github/workflows/deploy.yml` berjalan otomatis setiap push ke `main`
(bisa juga manual via tab **Actions → Run workflow**). Hasilnya ada di:

```
https://<username>.github.io/<nama-repo>/
```

## Yang diperbaiki di repo

<<<<<<< HEAD
| File | Perubahan |
| --- | --- |
| `.github/workflows/deploy.yml` | Workflow baru: install → `convex codegen` → build `--base=./` → salin `404.html` → deploy Pages |
| `.gitignore` | `src/convex/_generated` ikut di-commit agar CI bisa build tanpa login Convex |
| `src/main.tsx` | Guard: kalau `VITE_CONVEX_URL` kosong, tampil pesan panduan (bukan putih kosong) |
| `index.html` & `public/manifest.webmanifest` | Referensi `logo.svg` / manifest jadi relatif |

## Troubleshooting

| Gejala | Penyebab | Solusi |
| --- | --- | --- |
| Putih kosong, console: `assets/index-*.js 404` | Build lama (path absolut) masih ter-deploy | Pastikan workflow jalan & Pages Source = `GitHub Actions` |
| Halaman menampilkan "Konfigurasi belum lengkap" | Secret `VITE_CONVEX_URL` belum diset / kosong | Ulangi langkah 1, lalu deploy ulang |
| Refresh di `/dashboard` → 404 | `404.html` SPA fallback tidak ada | Sudah ditangani workflow (`cp dist/index.html dist/404.html`) |
| Data tidak muncul / error di console soal Convex | URL Convex salah | Cek lagi dengan `bun convex deployment url` |
=======
| File                                         | Perubahan                                                                                       |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `.github/workflows/deploy.yml`               | Workflow baru: install → `convex codegen` → build `--base=./` → salin `404.html` → deploy Pages |
| `.gitignore`                                 | `src/convex/_generated` ikut di-commit agar CI bisa build tanpa login Convex                    |
| `src/main.tsx`                               | Guard: kalau `VITE_CONVEX_URL` kosong, tampil pesan panduan (bukan putih kosong)                |
| `index.html` & `public/manifest.webmanifest` | Referensi `logo.svg` / manifest jadi relatif                                                    |

## Troubleshooting

| Gejala                                           | Penyebab                                      | Solusi                                                        |
| ------------------------------------------------ | --------------------------------------------- | ------------------------------------------------------------- |
| Putih kosong, console: `assets/index-*.js 404`   | Build lama (path absolut) masih ter-deploy    | Pastikan workflow jalan & Pages Source = `GitHub Actions`     |
| Halaman menampilkan "Konfigurasi belum lengkap"  | Secret `VITE_CONVEX_URL` belum diset / kosong | Ulangi langkah 1, lalu deploy ulang                           |
| Refresh di `/dashboard` → 404                    | `404.html` SPA fallback tidak ada             | Sudah ditangani workflow (`cp dist/index.html dist/404.html`) |
| Data tidak muncul / error di console soal Convex | URL Convex salah                              | Cek lagi dengan `bun convex deployment url`                   |
>>>>>>> f9b8045 (Update semua)

## Deploy alternatif: VPS dengan Deno (main.ts)

```bash
bun install --frozen-lockfile
bunx convex codegen
VITE_CONVEX_URL=https://lovely-rooster-760.convex.cloud bunx vite build --base=./
deno run --allow-net --allow-read main.ts
```

Pastikan folder `dist/` berada di direktori yang sama dengan `main.ts`.
