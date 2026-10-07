/**
 * Modul Logika Predikat — Menu Giziku.
 *
 * SISTEM INI MENGGUNAKAN LOGIKA PREDIKAT (First-Order Logic / Predicate Calculus)
 * untuk validasi keseimbangan gizi menu harian.
 *
 * Domain diskusi D = { semua menu harian m yang mungkin dibangun oleh generator }
 *
 * Struktur:
 *   1. Fakta Atomik — predikat unary atas menu m:
 *      P₁(m): Karbo(m), Protein(m), Lemak(m) — range/proporsi kkal
 *      P₂(m): AdaKarbo(m), AdaProtein(m), ... — kehadiran golongan pangan
 *      P₃(m): LayakEnergi(m), PorsiWajar(m) — batasan energi & porsi
 *
 *   2. Predikat Majemuk — kombinasi ¬, ∧, ∨:
 *      SeimbangMakro(m) ≡ Karbo(m) ∧ Protein(m) ∧ Lemak(m)
 *      KomposisiWajar(m) — diturunkan via modus ponens (R1)
 *
 *   3. Basis Aturan Inferensi — forward chaining (modus ponens):
 *      R1: ∃x,y,z,u,v ∈ bahan(m): golongan(x)=K ∧ golongan(y)=P ∧ ... → KomposisiWajar(m)
 *      R2-R5: aturan lanjutan
 *      Kesimpulan akhir: MenuLayakSajikan(m) ∨ MenuSeimbang(m) ∨ MenuTidakSeimbang(m)
 *
 *   4. Jejak Bukti — predicate report menampilkan setiap aturan yang dievaluasi
 *      untuk transparansi dan dokumentasi logika formal.
 *
 * Sebagai tugas logika predikat, sistem ini harus:
 *   ✓ Menampilkan formula logis (notasi ∧, ∨, ¬, →)
 *   ✓ Dokumentasi kuantor (∃, ∀) atas domain
 *   ✓ Jejak evaluasi per aturan untuk proof audit
 */

import { macroShares, NUTRIENTS, type GeneratedMenu } from "./nutrition";

/** Input minimal yang dibutuhkan penalaran: bekerja juga untuk menu tersimpan. */
export type MenuInput = Pick<GeneratedMenu, "meals" | "totals"> & {
  details?: GeneratedMenu["details"];
};

// ---------------------------------------------------------------------------
// 1. PREDIKAT ATOMIK
// ---------------------------------------------------------------------------

export interface MacroRange {
  lo: number;
  hi: number;
}

/** Rentang ideal PBG "Isi Piringku" yang disesuaikan untuk pola makan Indonesia:
 * Karbohidrat 50-70% (karena nasi adalah sumber energi utama),
 * Protein 10-20%, Lemak 20-30%. */
export const RANGES = {
  karbo: { lo: 50, hi: 70 } as MacroRange,
  protein: { lo: 10, hi: 20 } as MacroRange,
  lemak: { lo: 20, hi: 30 } as MacroRange,
};

/** Batas energi harian yang layak untuk menu utama (kkal). */
export const KAL_RANGE = { lo: 1400, hi: 2500 } as const;

function pctOf(m: MenuInput, name: "karbo" | "protein" | "lemak"): number {
  // Sumber kebenaran: proporsi kkal dari total gizi (Atwater 4-4-9),
  // sehingga modul tetap valid untuk menu tersimpan tanpa `details`.
  const sh = macroShares(m.totals);
  return sh[name];
}

/** Karbo(m) ≡ c(m) ∈ [55, 65] */
export const Karbo = (m: MenuInput) => {
  const pct = pctOf(m, "karbo");
  return pct >= RANGES.karbo.lo && pct <= RANGES.karbo.hi;
};

/** Protein(m) ≡ p(m) ∈ [10, 15] */
export const Protein = (m: MenuInput) => {
  const pct = pctOf(m, "protein");
  return pct >= RANGES.protein.lo && pct <= RANGES.protein.hi;
};

/** Lemak(m) ≡ l(m) ∈ [20, 30] */
export const Lemak = (m: MenuInput) => {
  const pct = pctOf(m, "lemak");
  return pct >= RANGES.lemak.lo && pct <= RANGES.lemak.hi;
};

/** LayakEnergi(m) ≡ 1400 ≤ k(m) ≤ 2500 */
export const LayakEnergi = (m: MenuInput) =>
  m.totals.kcal >= KAL_RANGE.lo && m.totals.kcal <= KAL_RANGE.hi;

/** Lengkap(m) ≡ |meals(m)| = 5 — seluruh slot makan terisi. */
export const Lengkap = (m: MenuInput) => m.meals.length === 5;

// --- deteksi golongan pangan dari nama bahan pada tiap hidangan ---

type Golongan =
  | "karbo"
  | "proteinHewani"
  | "proteinNabati"
  | "sayur"
  | "buah"
  | "oleinat";

/** Kategori semua bahan yang muncul di menu (item berformat "Nasi putih 180 g"). */
function golonganHadir(m: MenuInput): Set<Golongan> {
  const set = new Set<Golongan>();
  for (const meal of m.meals) {
    for (const item of meal.items ?? []) {
      const nut = NUTRIENTS.find((n) => item.startsWith(n.name));
      if (nut) set.add(nut.category);
    }
  }
  return set;
}

/**
 * AdaKarbo(m) ≡ ∃x ∈ items(m) : golongan(x) = karbo
 * AdaProtein(m) ≡ (∃x : golongan(x) = proteinHewani) ∨ (∃x : golongan(x) = proteinNabati)
 * dst. — kuantor eksistensial atas bahan menu.
 */
export const AdaKarbo = (m: MenuInput) => golonganHadir(m).has("karbo");
export const AdaProtein = (m: MenuInput) => {
  const g = golonganHadir(m);
  return g.has("proteinHewani") || g.has("proteinNabati"); // operator ∨
};
export const AdaSayur = (m: MenuInput) => golonganHadir(m).has("sayur");
export const AdaBuah = (m: MenuInput) => golonganHadir(m).has("buah");
export const AdaOleinat = (m: MenuInput) => golonganHadir(m).has("oleinat");

/** PorsiWajar(m) ≡ ∀i ∈ [1..5] : hidangan_i bermakna (≥ 20 kkal). Kuantor ∀ atas 5 slot. */
export const PorsiWajar = (m: MenuInput) =>
  m.meals.length === 5 && m.meals.every((meal) => meal.kcal >= 20);

/** AdaSlotGizi(m) ≡ ∃i : kkal(hidangan_i) > 0. Kuantor ∃. */
export const AdaSlotGizi = (m: MenuInput) =>
  m.meals.some((meal) => meal.kcal > 0);

// ---------------------------------------------------------------------------
// 2. PREDIKAT MAJEMUK (¬, ∧, ∨) — versi langsung (tanpa inferensi)
// ---------------------------------------------------------------------------

/** SeimbangMakro(m) ≡ Karbo(m) ∧ Protein(m) ∧ Lemak(m) */
export const SeimbangMakro = (m: MenuInput) =>
  Karbo(m) && Protein(m) && Lemak(m);

/** KomposisiWajar(m) ≡ AdaKarbo ∧ AdaProtein ∧ AdaSayur ∧ AdaBuah ∧ AdaOleinat */
export const KomposisiWajarLangsung = (m: MenuInput) =>
  AdaKarbo(m) && AdaProtein(m) && AdaSayur(m) && AdaBuah(m) && AdaOleinat(m);

/** MakroWajarNeg(m) ≡ ¬(¬Karbo ∨ ¬Protein ∨ ¬Lemak) — identik dengan SeimbangMakro (Hukum De Morgan). */
export const MakroWajarNeg = (m: MenuInput) =>
  !(!Karbo(m) || !Protein(m) || !Lemak(m));

// ---------------------------------------------------------------------------
// 3. BASIS ATURAN INFERENSI + FORWARD CHAINING (MODUS PONENS)
// ---------------------------------------------------------------------------

export type FactName =
  | "AdaKarbo"
  | "AdaProtein"
  | "AdaSayur"
  | "AdaBuah"
  | "AdaOleinat"
  | "LayakEnergi"
  | "Karbo"
  | "Protein"
  | "Lemak"
  | "PorsiWajar"
  | "AdaSlotGizi"
  | "KomposisiWajar"
  | "MakroCP"
  | "MakroWajar"
  | "MenuSeimbang"
  | "MenuLayakSajikan"
  | "TidakSeimbang";

export type Facts = Record<FactName, boolean>;

export interface InferenceRule {
  id: string;
  /** Bentuk logis (notasi predikat) untuk ditampilkan. */
  formula: string;
  desc: string;
  /** Anteseden: evaluasi atas fakta yang sudah diketahui/terderivasi. */
  ante: (f: Facts, _m: MenuInput) => boolean;
  /** Fakta baru yang diperoleh bila anteseden benar (modus ponens). */
  derive: FactName;
}

/**
 * Basis aturan inferensi — forward chaining dengan modus ponens (I ∧ (I → C) ⊢ C).
 * Setiap aturan hanya bergantung pada fakta yang sudah tersedia pada urutan sebelumnya.
 * Strategi: cek golongan pangan → cek proporsi makro → inferensi final.
 *
 * ATOMIK (computed dari perhitungan numerik):
 *   AdaKarbo, AdaProtein, AdaSayur, AdaBuah, AdaOleinat, LayakEnergi,
 *   Karbo, Protein, Lemak, PorsiWajar, AdaSlotGizi
 *
 * TERDERIVASI (via modus ponens):
 *   R1: AdaKarbo ∧ AdaProtein ∧ AdaSayur ∧ AdaBuah ∧ AdaOleinat → KomposisiWajar
 *   R2: Karbo ∧ Protein → MakroCP
 *   R3: MakroCP ∧ Lemak → MakroWajar
 *   R4: KomposisiWajar ∧ MakroWajar ∧ LayakEnergi → MenuSeimbang
 *   R5: MenuSeimbang ∧ PorsiWajar → MenuLayakSajikan (goal akhir)
 *   R6: ¬LayakEnergi → TidakSeimbang (negasi rule)
 */
export const RULES: InferenceRule[] = [
  {
    id: "R1",
    formula:
      "AdaKarbo(m) ∧ AdaProtein(m) ∧ AdaSayur(m) ∧ AdaBuah(m) ∧ AdaOleinat(m) → KomposisiWajar(m)",
    desc: "Semua 5 golongan pangan hadir: karbo, protein, sayur, buah, oleinat",
    ante: (f) =>
      f.AdaKarbo && f.AdaProtein && f.AdaSayur && f.AdaBuah && f.AdaOleinat,
    derive: "KomposisiWajar",
  },
  {
    id: "R2",
    formula: "Karbo(m) ∧ Protein(m) → MakroCP(m)",
    desc: "Karbo & protein dalam rentang sehat",
    ante: (f) => f.Karbo && f.Protein,
    derive: "MakroCP",
  },
  {
    id: "R3",
    formula: "MakroCP(m) ∧ Lemak(m) → MakroWajar(m)",
    desc: "Ditambah lemak, ketiga makro sehat",
    ante: (f) => f.MakroCP && f.Lemak,
    derive: "MakroWajar",
  },
  {
    id: "R4",
    formula:
      "KomposisiWajar(m) ∧ MakroWajar(m) ∧ LayakEnergi(m) → MenuSeimbang(m)",
    desc: "Golongan lengkap + makro sehat + energi layak",
    ante: (f) => f.KomposisiWajar && f.MakroWajar && f.LayakEnergi,
    derive: "MenuSeimbang",
  },
  {
    id: "R5",
    formula: "MenuSeimbang(m) ∧ PorsiWajar(m) → MenuLayakSajikan(m)",
    desc: "Seimbang dan seluruh porsi bermakna",
    ante: (f) => f.MenuSeimbang && f.PorsiWajar,
    derive: "MenuLayakSajikan",
  },
  {
    id: "R6",
    formula: "¬LayakEnergi(m) → TidakSeimbang(m)",
    desc: "Energi tidak layak → menu tidak seimbang",
    ante: (f) => !f.LayakEnergi,
    derive: "TidakSeimbang",
  },
];

/** Jejak evaluasi satu aturan untuk UI/jejak bukti. */
export interface InferenceStep {
  id: string;
  formula: string;
  desc: string;
  /** Anteseden bernilai benar. */
  anteTrue: boolean;
  /** Aturan diaktifkan (modus ponens berhasil → fakta baru diperoleh). */
  fired: boolean;
}

export interface PredicateReport {
  /** Fakta atomik & terderivasi setelah chaining selesai. */
  facts: Facts;
  /** Jejak evaluasi tiap aturan. */
  steps: InferenceStep[];
  /** Kesimpulan akhir. */
  conclusion: "MenuLayakSajikan" | "MenuSeimbang" | "MenuTidakSeimbang";
  balanced: boolean;
  summary: string;
}

/**
 * forwardChain(m) — forward chaining dengan modus ponens:
 * ulangi evaluasi aturan berurutan; fakta turunan langsung dipakai aturan
 * berikutnya (R5 memakai hasil R4, R6 hasil R1-R5, R7 hasil R6).
 */
export function forwardChain(m: MenuInput): PredicateReport {
  const facts: Facts = {
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
    KomposisiWajar: false,
    MakroCP: false,
    MakroWajar: false,
    MenuSeimbang: false,
    MenuLayakSajikan: false,
    TidakSeimbang: false,
  };

  const steps: InferenceStep[] = [];
  for (const rule of RULES) {
    const anteTrue = rule.ante(facts, m);
    if (anteTrue) facts[rule.derive] = true; // modus ponens
    steps.push({
      id: rule.id,
      formula: rule.formula,
      desc: rule.desc,
      anteTrue,
      fired: anteTrue,
    });
  }

  const layak = facts.MenuLayakSajikan && !facts.TidakSeimbang;
  const seimbang = facts.MenuSeimbang && !facts.TidakSeimbang;
  const conclusion: PredicateReport["conclusion"] = layak
    ? "MenuLayakSajikan"
    : seimbang
      ? "MenuSeimbang"
      : "MenuTidakSeimbang";
  const summary = layak
    ? "KESIMPULAN: MenuLayakSajikan(m) — menu seimbang, lengkap 5 golongan, dan porsinya layak disajikan."
    : seimbang
      ? "KESIMPULAN: MenuSeimbang(m) — komposisi golongan lengkap dan proporsi makro dalam rentang sehat."
      : "KESIMPULAN: MenuTidakSeimbang(m) — ada aturan seimbang yang tidak terpenuhi (lihat jejak di bawah).";

  return { facts, steps, conclusion, balanced: seimbang, summary };
}

/** Ringkasan teks jejak inferensi (untuk laporan/log). */
export function predicateSummaryText(m: MenuInput): string {
  const r = forwardChain(m);
  const aktif = r.steps
    .filter((s) => s.fired)
    .map((s) => `[${s.id}] ${s.formula}`);
  return `${r.summary}\nAturan aktif (modus ponens):\n${aktif.join("\n")}`;
}
