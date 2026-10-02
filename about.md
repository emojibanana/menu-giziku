# Penjelasan FLOWCHART_SISTEM.md

File **FLOWCHART_SISTEM.md** menggambarkan alur kerja aplikasi _Menu Giziku_ menggunakan diagram flowchart Mermaid. Diagram tersebut dibagi menjadi beberapa bagian yang masing‑masing menjelaskan satu tahapan dalam sistem, mulai dari pengunjung pertama kali sampai penyimpanan menu yang dihasilkan ke database.

## 1. User Journey (Navigasi)

Bagian ini menunjukkan langkah‑langkah pengguna mulai dari membuka halaman landing, memeriksa apakah sudah login, jika belum maka dialihkan ke halaman autentikasi, setelah login berhasil pengguna dibawa ke dashboard. Pada dashboard pengguna dapat melihat menu serta jejak bukti, dan memilih apakah ingin membuat menu baru atau keluar.

## 2. Menu Generation Flow (Generate Menu Harian)

Di sini dijelaskan proses pembuatan menu harian berdasarkan profil pengguna (usia, status, aktivitas). Sistem mengambil 5 bahan dari database nutrisi, membaginya menjadi 5 slot makan (pagi, siang, selingan sore, malam, selingan buah), lalu menghitung total kalori, protein, karbohidrat, dan lemak. Hasilnya berupa objek _GeneratedMenu_ yang berisi daftar makanan dan nilai nutrisi total.

## 3. Forward Chaining Evaluation (Predicate Logic)

Bagian ini menjelaskan logika penilaian menu menggunakan _forward chaining_ (rantai ke depan). Dari menu yang sudah dibuat, sistem menghitung fakta‑faktanya (misalnya ada karbohidrat, ada protein, ada sayur, dll). Selanjutnya melalui serangkaian aturan (R1–R6) sistem menentukan apakah menu tersebut:

- memiliki komposisi pangan yang wajar,
- makronutrien (karbohidrat, protein, lemak) dalam rentang yang diinginkan,
- total energi mencukupi,
- porsi yang sesuai,
- dan akhirnya menghasilkan kesimpulan apakah menu _layak sajikan_, _seimbang_, atau _tidak seimbang_.

## 4. Dashboard Display (UI Result)

Hasil evaluasi dari forward chain ditampilkan pada dashboard. Dashboard menampilkan:

- 5 hidangan sesuai slot makan,
- bar chart makronutrien (warna hijau/kuning/merah menunjukkan status),
- jejak inferensi (tiap regel R1–R6 dengan status FIRED / NOT FIRED),
- badge kesimpulan (✅ Layak / Seimbang atau ❌ Tidak Seimbang),
- serta tombol untuk menyimpan hasil ke database.

## 5. Backend & Database Flow

Bagian ini menjelaskan interaksi antara frontend dan backend (Convex). Ketika pengguna menekan tombol _Save to DB_, frontend mengirim permintaan _useMutation_ ke backend, yang kemudian menyimpan data menu (nama, tanggal, profil, daftar makanan, total nutrisi, dan skor) ke tabel **menus** dalam database Convex. Setelah berhasil, frontend menampilkan toast notifikasi. Untuk riwayat, frontend menjalankan _useQuery_ untuk mengambil data menu dari tabel yang sama dan menampilkannya sebagai daftar.

## 6. Alur Lengkap End‑to‑End & Forward Chaining

**Alur Utama:**

1. Buka app → Landing → Cek login → Auth → Dashboard
2. Pilih profil → `generateMenu` → Menu dihasilkan (5 hidangan + nutrisi)
3. `forwardChain` mengevaluasi menu pakai 6 aturan logika
4. Dashboard tampilkan hasil + jejak inferensi + status
5. User bisa simpan, lihat history, buat baru, atau keluar

---

**Forward Chaining?** Teknik logika: mulai dari fakta → terapkan aturan secara berurutan → hasilkan kesimpulan.

**6 Aturan Inferensi (R1‑R6):**

- **R1** - Ada 5 golongan pangan? (karbo, protein, sayur, buah, lemak sehat)
- **R2** - Karbo 45-65% & Protein 10-35% dari total kalori?
- **R3** - Lemak 20-35% dari total kalori?
- **R4** - Kombinasi R1+R2+R3 OK? → Menu seimbang dasar?
- **R5** - Porsi realistis? → Menu layak sajikan?
- **R6** - Energi mencukupi? (deteksi kasus seimbang tapi kalori kurang)

**Kesimpulan Output:**

- ✅ **LAYAK SAJIKAN** — Menu seimbang & porsi wajar
- ⚠️ **SEIMBANG** — Gizi OK tapi ada masalah porsi
- ❌ **TIDAK SEIMBANG** — Ada masalah signifikan

## 7. Legend (Keterangan Simbol)

- `→` : menunjukkan alur proses
- `{...}` : kondisi / keputusan (ya/tidak)
- `✓` : berhasil / nilai true
- `❌` : gagal / nilai false
- `R1‑R6` : enam aturan inferensi yang digunakan dalam forward chaining
- `Convex` : nama backend basis data yang digunakan

### Cara Melihat Diagram

File ini menggunakan sintaksis Mermaid. Untuk melihat diagram secara visual, buka file `FLOWCHART_SISTEM.md` dengan ekstensi `.md` di Visual Studio Code dan pastikan ekstensi Mermaid diaktifkan, atau buka file di salah satu preview Mermaid online (misalnya https://mermaid.live).

---

_Penjelasan di atas disusun dalam bahasa yang mudah dipahami agar dapat digunakan saat presentasi kepada dosen._
