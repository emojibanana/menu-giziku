# Logika Sistem Menu Giziku — Dokumentasi Formal

## 1. Pengantar: Logika Predikat dalam Validasi Gizi

Sistem Menu Giziku menggunakan **Logika Predikat Tingkat Pertama (First-Order Predicate Logic)** untuk validasi keseimbangan gizi menu harian. Sistem ini menggabungkan:

- **Predikat Atomik**: Fungsi boolean atas elemen menu (cek proporsi makro, kehadiran golongan pangan, energi layak)
- **Predikat Majemuk**: Kombinasi predikat dengan operator logika (∧, ∨, ¬)
- **Kuantor**: ∃ (eksistensial) dan ∀ (universal) atas domain bahan & hidangan
- **Basis Aturan Inferensi**: 6 aturan berbasis modus ponens
- **Forward Chaining**: Evaluasi aturan berurutan; fakta turunan langsung dipakai aturan berikutnya

Tujuan: Diberikan satu menu harian m (5 hidangan), tentukan apakah m layak disajikan atau tidak, dengan jejak bukti formal.

---

## 2. Domain Diskusi

**D = {semua menu harian m yang mungkin dibangun oleh generator}**

Setiap menu m terdiri atas:

- **meals**: Array 5 hidangan (slot: Pagi, Siang, Selingan Sore, Malam, Selingan Buah)
- **totals**: Agregat gizi harian (kcal, protein g, karbo g, lemak g)

Setiap hidangan memiliki:

- **items**: Daftar bahan (string format "Nama 123 g")
- **kcal, protein, karbo, lemak**: Nilai nutrisi
- **slot, dish, emoji**: Metadata

---

## 3. Fakta Atomik (Atomic Facts)

Fakta atomik adalah predikat unary yang dihitung langsung dari menu m (bukan diturunkan).

### 3.1 Predikat Komposisi Makro

Rentang ideal (PBG "Isi Piringku"):

- Karbo: 55–65% dari total kkal
- Protein: 10–15% dari total kkal
- Lemak: 20–30% dari total kkal

```
Karbo(m)   ≡ c(m) ∈ [55, 65]          // proporsi kkal karbo
Protein(m) ≡ p(m) ∈ [10, 15]          // proporsi kkal protein
Lemak(m)   ≡ l(m) ∈ [20, 30]          // proporsi kkal lemak
```

### 3.2 Predikat Energi & Porsi

```
LayakEnergi(m) ≡ k(m) ∈ [1400, 2500]  // total kkal menu harian
PorsiWajar(m)  ≡ ∀i ∈ [1..5]: kkal(hidangan_i) ≥ 20  // setiap hidangan ≥ 20 kkal
Lengkap(m)     ≡ |meals(m)| = 5       // semua 5 slot makan terisi
```

### 3.3 Predikat Kehadiran Golongan Pangan (∃)

```
AdaKarbo(m)        ≡ ∃x ∈ items(m) : golongan(x) = karbo
AdaProtein(m)      ≡ (∃x : golongan(x) = proteinHewani) ∨ (∃x : golongan(x) = proteinNabati)
AdaSayur(m)        ≡ ∃x ∈ items(m) : golongan(x) = sayur
AdaBuah(m)         ≡ ∃x ∈ items(m) : golongan(x) = buah
AdaOleinat(m)      ≡ ∃x ∈ items(m) : golongan(x) = oleinat
AdaSlotGizi(m)     ≡ ∃i : kkal(hidangan_i) > 0
```

Golongan pangan dideteksi dari nama bahan di database NUTRIENTS (30+ item bahan).

---

## 4. Predikat Majemuk (Compound Predicates)

### 4.1 Kombinasi Operator Logika

```
SeimbangMakro(m) ≡ Karbo(m) ∧ Protein(m) ∧ Lemak(m)
// Tiga makro dalam rentang sehat
```

### 4.2 Versi Negasi (De Morgan)

```
MakroWajarNeg(m) ≡ ¬(¬Karbo(m) ∨ ¬Protein(m) ∨ ¬Lemak(m))
// Identik dengan SeimbangMakro (hukum De Morgan)
```

---

## 5. Basis Aturan Inferensi (Rule Base)

### Forward Chaining Strategy

Setiap aturan hanya bergantung pada fakta yang sudah tersedia di urutan sebelumnya. Strategi: cek golongan pangan → cek proporsi makro → inferensi final.

### 5.1 Aturan R1: Komposisi Golongan Pangan

```
R1: AdaKarbo(m) ∧ AdaProtein(m) ∧ AdaSayur(m) ∧ AdaBuah(m) ∧ AdaOleinat(m)
    → KomposisiWajar(m)

Deskripsi: Menu mengandung ke-5 golongan pangan (karbo, protein, sayur, buah, oleinat)
Modus Ponens: Jika anteseden benar, KomposisiWajar(m) di-derive sebagai true
```

### 5.2 Aturan R2: Proporsi Karbo & Protein

```
R2: Karbo(m) ∧ Protein(m) → MakroCP(m)

Deskripsi: Karbo & protein dalam rentang sehat
Derive: MakroCP (intermediate fact)
```

### 5.3 Aturan R3: Tambah Lemak (Komplit Makro)

```
R3: MakroCP(m) ∧ Lemak(m) → MakroWajar(m)

Deskripsi: Ditambah lemak, ketiga makro sehat
Derive: MakroWajar (semua 3 makro seimbang)
```

### 5.4 Aturan R4: Seimbang Lengkap

```
R4: KomposisiWajar(m) ∧ MakroWajar(m) ∧ LayakEnergi(m)
    → MenuSeimbang(m)

Deskripsi: Golongan lengkap + makro sehat + energi layak
Derive: MenuSeimbang
```

### 5.5 Aturan R5: Layak Disajikan

```
R5: MenuSeimbang(m) ∧ PorsiWajar(m) → MenuLayakSajikan(m)

Deskripsi: Seimbang dan seluruh porsi bermakna (≥20 kkal per hidangan)
Derive: MenuLayakSajikan (GOAL AKHIR — menu siap disajikan)
```

### 5.6 Aturan R6: Negasi Energi

```
R6: ¬LayakEnergi(m) → TidakSeimbang(m)

Deskripsi: Energi tidak layak → menu tidak seimbang
Derive: TidakSeimbang (NEGASI)
```

---

## 6. Algoritma Forward Chaining

### Pseudo-code

```
function forwardChain(m: MenuInput) → PredicateReport {
  // 1. Inisialisasi facts atomik (dari perhitungan)
  facts = {
    AdaKarbo: AdaKarbo(m),
    AdaProtein: AdaProtein(m),
    AdaSayur: AdaSayur(m),
    AdaBuah: AdaBuah(m),
    AdaOleinat: AdaOleinat(m),
    LayakEnergi: LayakEnergi(m),
    Karbo: Karbo(m),
    Protein: Protein(m),
    Lemak: Lemak(m),
    PorsiWajar: PorsiWajar(m),
    AdaSlotGizi: AdaSlotGizi(m),

    // 2. Fakta terderivasi mulai false
    KomposisiWajar: false,
    MakroCP: false,
    MakroWajar: false,
    MenuSeimbang: false,
    MenuLayakSajikan: false,
    TidakSeimbang: false
  }

  steps = []

  // 3. Evaluasi setiap aturan berurutan (modus ponens)
  for rule in RULES {
    anteTrue = rule.ante(facts, m)  // cek anteseden
    if (anteTrue) {
      facts[rule.derive] = true       // modus ponens: I ∧ (I → C) ⊢ C
    }
    steps.push({
      id: rule.id,
      formula: rule.formula,
      anteTrue: anteTrue,
      fired: anteTrue
    })
  }

  // 4. Tentukan kesimpulan akhir
  layak = facts.MenuLayakSajikan ∧ ¬facts.TidakSeimbang
  seimbang = facts.MenuSeimbang ∧ ¬facts.TidakSeimbang

  conclusion = layak ? "MenuLayakSajikan"
             : seimbang ? "MenuSeimbang"
             : "MenuTidakSeimbang"

  return PredicateReport {
    facts: facts,
    steps: steps,
    conclusion: conclusion,
    balanced: seimbang,
    summary: human-readable text
  }
}
```

### Jejak Evaluasi (Proof Audit)

Setiap aturan yang dievaluasi dicatat:

```typescript
interface InferenceStep {
  id: string; // "R1", "R2", ..., "R6"
  formula: string; // notasi predikat (∧, ∨, ¬, →)
  desc: string; // deskripsi aturan dalam bahasa lokal
  anteTrue: boolean; // anteseden bernilai benar?
  fired: boolean; // aturan diaktifkan (modus ponens berhasil)?
}
```

---

## 7. Contoh Eksekusi: Menu Seimbang

### Input Menu

```
meals: [
  { slot: "Makan Pagi", dish: "Nasi + Telur Rebus", items: ["Nasi putih 180g", "Telur ayam 2 butir", "Susu full cream 200ml"] },
  { slot: "Makan Siang", dish: "Nasi + Ayam + Tahu", items: ["Nasi putih 200g", "Dada ayam panggang 100g", "Tahu goreng 100g", "Bayam 100g"] },
  { slot: "Selingan Sore", dish: "Buah", items: ["Pisang ambon 1 buah", "Yogurt plain 150ml"] },
  { slot: "Makan Malam", dish: "Nasi + Ikan + Sayur", items: ["Nasi merah 150g", "Ikan bandeng bakar 80g", "Tempe 100g", "Sup wortel 200ml"] },
  { slot: "Selingan Buah", dish: "Buah Segar", items: ["Jeruk siam 1 buah"] }
]

totals: {
  kcal: 2000,
  protein: 75,    // ≈ 15% dari 2000 kkal
  karbo: 300,     // ≈ 60% dari 2000 kkal
  lemak: 55       // ≈ 25% dari 2000 kkal
}
```

### Evaluasi Atomik

```
AdaKarbo(m)     = true    // nasi, roti ada
AdaProtein(m)   = true    // telur, ayam, ikan, tahu ada
AdaSayur(m)     = true    // bayam, wortel ada
AdaBuah(m)      = true    // pisang, jeruk ada
AdaOleinat(m)   = true    // minyak dalam masakan ada

LayakEnergi(m)  = true    // 2000 ∈ [1400, 2500]
Karbo(m)        = true    // 60% ∈ [55, 65]
Protein(m)      = true    // 15% ∈ [10, 15]
Lemak(m)        = true    // 25% ∈ [20, 30]
PorsiWajar(m)   = true    // setiap hidangan ≥ 20 kkal
AdaSlotGizi(m)  = true    // semua slot ada kkal > 0
```

### Forward Chaining: Setiap Aturan

```
R1: AdaKarbo ∧ AdaProtein ∧ AdaSayur ∧ AdaBuah ∧ AdaOleinat
    = true ∧ true ∧ true ∧ true ∧ true = true
    → KomposisiWajar = true  [FIRED]

R2: Karbo ∧ Protein
    = true ∧ true = true
    → MakroCP = true  [FIRED]

R3: MakroCP ∧ Lemak
    = true ∧ true = true
    → MakroWajar = true  [FIRED]

R4: KomposisiWajar ∧ MakroWajar ∧ LayakEnergi
    = true ∧ true ∧ true = true
    → MenuSeimbang = true  [FIRED]

R5: MenuSeimbang ∧ PorsiWajar
    = true ∧ true = true
    → MenuLayakSajikan = true  [FIRED]

R6: ¬LayakEnergi
    = ¬true = false  [NOT FIRED]
```

### Kesimpulan Akhir

```
conclusion: "MenuLayakSajikan"
balanced: true
summary: "KESIMPULAN: MenuLayakSajikan(m) — menu seimbang, lengkap 5 golongan,
          dan porsinya layak disajikan."
```

---

## 8. Contoh Eksekusi: Menu Tidak Seimbang

### Input Menu (Energi Kurang)

```
totals: {
  kcal: 800,      // < 1400 (LayakEnergi = false)
  ...
}
```

### Evaluasi

```
LayakEnergi(m) = false  // 800 ∉ [1400, 2500]

R1: KomposisiWajar = true  [FIRED]
R2: MakroCP = ? (tergantung Karbo & Protein)
R3: MakroWajar = ?
R4: MenuSeimbang = ? (perlu KomposisiWajar ∧ MakroWajar ∧ LayakEnergi)
    LayakEnergi = false → R4 NOT FIRED (atau fired tapi MenuSeimbang = false)
R5: MenuLayakSajikan = false (karena MenuSeimbang = false)
R6: ¬LayakEnergi = ¬false = true  [FIRED]
    → TidakSeimbang = true
```

### Kesimpulan

```
conclusion: "MenuTidakSeimbang"
balanced: false
summary: "KESIMPULAN: MenuTidakSeimbang(m) — ada aturan seimbang yang tidak terpenuhi."
```

---

## 9. Integrasi dalam Sistem

### File Implementasi

- **`src/lib/predicates.ts`**: Semua predikat atomik, aturan, dan forward chaining
- **`src/lib/nutrition.ts`**: Perhitungan gizi, generator menu, database bahan (NUTRIENTS)
- **`src/pages/Dashboard.tsx`**: Tampil hasil forwardChain sebagai jejak bukti UI

### Data Flow

```
User pilih profil
    ↓
generateMenu(profil) → GeneratedMenu
    ↓
forwardChain(menu) → PredicateReport
    ↓
Dashboard render:
  - Menu cards (5 hidangan)
  - Macro bars (Karbo, Protein, Lemak) dengan warna status
  - Jejak inferensi (R1–R6 dan hasil masing-masing aturan)
  - Skor & kesimpulan (LayakSajikan / Seimbang / TidakSeimbang)
```

### Backend Persistence

Menu yang disimpan disimpan di Convex DB dengan:

- name, date, profil
- meals, totals, score
- (Jejak bukti forwardChain dihitung ulang saat load, bukan disimpan)

---

## 10. Properti Logika

### Soundness

Setiap aturan berbasis modus ponens (I ∧ (I → C) ⊢ C), yang merupakan inference rule valid.

### Completeness

Forward chaining mencari solusi dari fakta menuju goal. Jika ada path R1→R2→R3→...→goal, maka akan ditemukan.

### Determinism

Setiap evaluasi aturan dan kesimpulan deterministik (bukan probabilistik).

---

## 11. Ekstensi Masa Depan

- [ ] Backward chaining (dari goal, tentukan sub-goal yang harus dipenuhi)
- [ ] Logika fuzzy untuk toleransi rentang (misal: "hampir seimbang")
- [ ] Aturan tambahan (vit. A, Fe, dll.)
- [ ] Constraint satisfaction (minimasi bahan tertentu, maksimalkan durabilitas)

---

## Referensi

1. **First-Order Logic**: Genesereth & Nilsson, _Logical Foundations of Artificial Intelligence_
2. **Forward Chaining**: Negnevitsky, _Artificial Intelligence: A Guide to Intelligent Systems_
3. **Modus Ponens**: Aristotle, _Posterior Analytics_
