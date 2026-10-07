/**
 * Mesin nutrisi Menu Giziku.
 *
 * Semua angka gizi per 100 g (bahan matang, siap makan) — sumber: tabel-gizi.jpeg.
 * Nilai ini untuk perencanaan menu, bukan diagnosa medis.
 */

export type Tag = "karbo" | "protein" | "sayur" | "buah" | "oleinat";

export interface Nutrient {
  name: string;
  /** kkal per 100 g */
  kcal: number;
  /** gram protein per 100 g */
  protein: number;
  /** gram karbohidrat per 100 g */
  karbo: number;
  /** gram lemak per 100 g */
  lemak: number;
  /** berat porsi siap makan dalam gram */
  portion: number;
  tags: Tag[];
  emoji: string;
  category:
    | "karbo"
    | "proteinHewani"
    | "proteinNabati"
    | "sayur"
    | "buah"
    | "oleinat";
  /** Kegunaan bahan dalam hidangan (ringkas) */
  purpose: string;
}

export const NUTRIENTS: Nutrient[] = [
  // ---------- Sumber Karbohidrat ----------
  {
    name: "Beras cokelat",
    kcal: 111,
    protein: 2.6,
    karbo: 23.0,
    lemak: 0.9,
    portion: 200,
    tags: ["karbo"],
    emoji: "🍚",
    category: "karbo",
    purpose: "Sumber karbohidrat kompleks & serat",
  },
  {
    name: "Jagung manis",
    kcal: 96,
    protein: 3.4,
    karbo: 21.0,
    lemak: 1.2,
    portion: 150,
    tags: ["karbo"],
    emoji: "🌽",
    category: "karbo",
    purpose: "Sumber karbohidrat & energi",
  },
  {
    name: "Singkong",
    kcal: 146,
    protein: 1.2,
    karbo: 34.7,
    lemak: 0.3,
    portion: 180,
    tags: ["karbo"],
    emoji: "🥔",
    category: "karbo",
    purpose: "Sumber karbohidrat & kalori",
  },
  {
    name: "Ubi ungu",
    kcal: 136,
    protein: 1.1,
    karbo: 32.9,
    lemak: 0.2,
    portion: 160,
    tags: ["karbo"],
    emoji: "🍠",
    category: "karbo",
    purpose: "Sumber karbohidrat kompleks & antioksidan",
  },
  {
    name: "Kentang",
    kcal: 77,
    protein: 2.0,
    karbo: 17.5,
    lemak: 0.1,
    portion: 180,
    tags: ["karbo"],
    emoji: "🥔",
    category: "karbo",
    purpose: "Sumber karbohidrat & mineral",
  },
  {
    name: "Sagu",
    kcal: 355,
    protein: 0.2,
    karbo: 87.1,
    lemak: 0.1,
    portion: 150,
    tags: ["karbo"],
    emoji: "🍜",
    category: "karbo",
    purpose: "Sumber karbohidrat murni",
  },
  {
    name: "Roti tawar",
    kcal: 248,
    protein: 8.8,
    karbo: 46.1,
    lemak: 3.3,
    portion: 60,
    tags: ["karbo"],
    emoji: "🍞",
    category: "karbo",
    purpose: "Sumber karbohidrat & protein",
  },
  {
    name: "Mie kering",
    kcal: 356,
    protein: 11.2,
    karbo: 72.9,
    lemak: 1.7,
    portion: 160,
    tags: ["karbo"],
    emoji: "🍜",
    category: "karbo",
    purpose: "Sumber karbohidrat & energi",
  },

  // ---------- Sumber Protein Hewani ----------
  {
    name: "Telur bebek",
    kcal: 185,
    protein: 13.1,
    karbo: 1.1,
    lemak: 14.2,
    portion: 100,
    tags: ["protein"],
    emoji: "🥚",
    category: "proteinHewani",
    purpose: "Sumber protein lengkap & lemak sehat",
  },
  {
    name: "Daging sapi tanpa lemak",
    kcal: 250,
    protein: 26.0,
    karbo: 0.0,
    lemak: 15.0,
    portion: 70,
    tags: ["protein"],
    emoji: "🥩",
    category: "proteinHewani",
    purpose: "Sumber protein hewani tinggi",
  },
  {
    name: "Daging kambing",
    kcal: 294,
    protein: 25.6,
    karbo: 0.0,
    lemak: 21.3,
    portion: 70,
    tags: ["protein"],
    emoji: "🥩",
    category: "proteinHewani",
    purpose: "Sumber protein & lemak hewani",
  },
  {
    name: "Daging ayam tanpa kulit",
    kcal: 165,
    protein: 31.0,
    karbo: 0.0,
    lemak: 3.6,
    portion: 90,
    tags: ["protein"],
    emoji: "🍗",
    category: "proteinHewani",
    purpose: "Sumber protein hewani rendah lemak",
  },
  {
    name: "Ikan tongkol",
    kcal: 144,
    protein: 24.6,
    karbo: 0.0,
    lemak: 4.6,
    portion: 80,
    tags: ["protein"],
    emoji: "🐟",
    category: "proteinHewani",
    purpose: "Sumber protein & omega-3",
  },
  {
    name: "Ikan lele",
    kcal: 105,
    protein: 17.7,
    karbo: 0.0,
    lemak: 2.9,
    portion: 80,
    tags: ["protein"],
    emoji: "🐟",
    category: "proteinHewani",
    purpose: "Sumber protein rendah lemak",
  },
  {
    name: "Ikan nila",
    kcal: 96,
    protein: 20.1,
    karbo: 0.0,
    lemak: 1.7,
    portion: 80,
    tags: ["protein"],
    emoji: "🐟",
    category: "proteinHewani",
    purpose: "Sumber protein & mineral",
  },
  {
    name: "Udang",
    kcal: 99,
    protein: 24.0,
    karbo: 0.0,
    lemak: 0.3,
    portion: 80,
    tags: ["protein"],
    emoji: "🦐",
    category: "proteinHewani",
    purpose: "Sumber protein tinggi & rendah lemak",
  },

  // ---------- Sumber Protein Nabati ----------
  {
    name: "Tempe",
    kcal: 193,
    protein: 20.8,
    karbo: 9.5,
    lemak: 11.5,
    portion: 70,
    tags: ["protein"],
    emoji: "🟫",
    category: "proteinNabati",
    purpose: "Sumber protein nabati & serat",
  },
  {
    name: "Tahu",
    kcal: 76,
    protein: 8.1,
    karbo: 1.9,
    lemak: 4.8,
    portion: 100,
    tags: ["protein"],
    emoji: "🧈",
    category: "proteinNabati",
    purpose: "Sumber protein nabati mudah dicerna",
  },
  {
    name: "Kacang hijau",
    kcal: 347,
    protein: 22.9,
    karbo: 62.9,
    lemak: 1.2,
    portion: 60,
    tags: ["protein", "karbo"],
    emoji: "🫘",
    category: "proteinNabati",
    purpose: "Sumber protein nabati & karbohidrat",
  },
  {
    name: "Kacang kedelai",
    kcal: 381,
    protein: 34.9,
    karbo: 30.2,
    lemak: 19.9,
    portion: 60,
    tags: ["protein", "oleinat"],
    emoji: "🫘",
    category: "proteinNabati",
    purpose: "Sumber protein & lemak nabati",
  },
  {
    name: "Kacang merah",
    kcal: 337,
    protein: 22.1,
    karbo: 59.1,
    lemak: 1.7,
    portion: 60,
    tags: ["protein", "karbo"],
    emoji: "🫘",
    category: "proteinNabati",
    purpose: "Sumber protein nabati & serat",
  },
  {
    name: "Kacang tanah",
    kcal: 567,
    protein: 25.8,
    karbo: 16.1,
    lemak: 49.2,
    portion: 20,
    tags: ["protein", "oleinat"],
    emoji: "🥜",
    category: "oleinat",
    purpose: "Sumber protein & lemak nabati",
  },
  {
    name: "Oncom",
    kcal: 68,
    protein: 4.8,
    karbo: 5.7,
    lemak: 3.0,
    portion: 70,
    tags: ["protein"],
    emoji: "🟫",
    category: "proteinNabati",
    purpose: "Sumber protein nabati & probiotik",
  },
  {
    name: "Kacang tolo",
    kcal: 336,
    protein: 22.2,
    karbo: 60.3,
    lemak: 1.5,
    portion: 60,
    tags: ["protein", "karbo"],
    emoji: "🫘",
    category: "proteinNabati",
    purpose: "Sumber protein nabati & mineral",
  },

  // ---------- Susu dan Olahannya ----------
  {
    name: "Susu sapi segar",
    kcal: 61,
    protein: 3.3,
    karbo: 4.8,
    lemak: 3.5,
    portion: 200,
    tags: ["protein"],
    emoji: "🥛",
    category: "oleinat",
    purpose: "Sumber protein & kalsium",
  },
  {
    name: "Susu bubuk full cream",
    kcal: 496,
    protein: 26.5,
    karbo: 38.4,
    lemak: 26.7,
    portion: 30,
    tags: ["protein"],
    emoji: "🥛",
    category: "oleinat",
    purpose: "Sumber protein & lemak susu",
  },
  {
    name: "Yoghurt",
    kcal: 61,
    protein: 3.5,
    karbo: 4.7,
    lemak: 3.3,
    portion: 150,
    tags: ["protein"],
    emoji: "🥛",
    category: "oleinat",
    purpose: "Sumber protein & probiotik sehat",
  },
  {
    name: "Keju cheddar",
    kcal: 402,
    protein: 25.0,
    karbo: 3.0,
    lemak: 33.0,
    portion: 30,
    tags: ["protein", "oleinat"],
    emoji: "🧀",
    category: "oleinat",
    purpose: "Sumber protein & kalsium tinggi",
  },

  // ---------- Sayur-sayuran ----------
  {
    name: "Bayam",
    kcal: 23,
    protein: 2.9,
    karbo: 3.6,
    lemak: 0.4,
    portion: 80,
    tags: ["sayur"],
    emoji: "🥬",
    category: "sayur",
    purpose: "Sumber zat besi & vitamin",
  },
  {
    name: "Kangkung",
    kcal: 29,
    protein: 3.0,
    karbo: 5.0,
    lemak: 0.3,
    portion: 80,
    tags: ["sayur"],
    emoji: "🥬",
    category: "sayur",
    purpose: "Sumber zat besi & antioksidan",
  },
  {
    name: "Wortel",
    kcal: 41,
    protein: 0.9,
    karbo: 9.6,
    lemak: 0.2,
    portion: 70,
    tags: ["sayur"],
    emoji: "🥕",
    category: "sayur",
    purpose: "Sumber beta-karoten & serat",
  },
  {
    name: "Tomat",
    kcal: 18,
    protein: 0.9,
    karbo: 3.9,
    lemak: 0.2,
    portion: 100,
    tags: ["sayur"],
    emoji: "🍅",
    category: "sayur",
    purpose: "Sumber vitamin C & antioksidan",
  },
  {
    name: "Brokoli",
    kcal: 34,
    protein: 2.8,
    karbo: 6.6,
    lemak: 0.4,
    portion: 80,
    tags: ["sayur"],
    emoji: "🥦",
    category: "sayur",
    purpose: "Sumber vitamin C & mineral",
  },
  {
    name: "Kembang kol",
    kcal: 25,
    protein: 1.9,
    karbo: 4.9,
    lemak: 0.3,
    portion: 80,
    tags: ["sayur"],
    emoji: "🥦",
    category: "sayur",
    purpose: "Sumber vitamin & mineral",
  },
  {
    name: "Sawi hijau",
    kcal: 22,
    protein: 2.3,
    karbo: 3.7,
    lemak: 0.3,
    portion: 80,
    tags: ["sayur"],
    emoji: "🥬",
    category: "sayur",
    purpose: "Sumber zat besi & vitamin",
  },
  {
    name: "Selada",
    kcal: 15,
    protein: 1.4,
    karbo: 2.9,
    lemak: 0.2,
    portion: 80,
    tags: ["sayur"],
    emoji: "🥗",
    category: "sayur",
    purpose: "Sumber serat & mineral",
  },
  {
    name: "Terong",
    kcal: 24,
    protein: 1.0,
    karbo: 5.7,
    lemak: 0.2,
    portion: 80,
    tags: ["sayur"],
    emoji: "🍆",
    category: "sayur",
    purpose: "Sumber serat & antioksidan",
  },
  {
    name: "Buncis",
    kcal: 31,
    protein: 1.8,
    karbo: 7.0,
    lemak: 0.1,
    portion: 70,
    tags: ["sayur"],
    emoji: "🌿",
    category: "sayur",
    purpose: "Sumber serat & mineral",
  },
  {
    name: "Labu siam",
    kcal: 19,
    protein: 1.0,
    karbo: 4.5,
    lemak: 0.1,
    portion: 80,
    tags: ["sayur"],
    emoji: "🎃",
    category: "sayur",
    purpose: "Sumber serat & vitamin",
  },
  {
    name: "Mentimun",
    kcal: 15,
    protein: 0.7,
    karbo: 3.6,
    lemak: 0.1,
    portion: 80,
    tags: ["sayur"],
    emoji: "🥒",
    category: "sayur",
    purpose: "Sumber mineral & hidrasi",
  },

  // ---------- Buah-buahan ----------
  {
    name: "Pisang ambon",
    kcal: 89,
    protein: 1.1,
    karbo: 22.8,
    lemak: 0.3,
    portion: 90,
    tags: ["buah"],
    emoji: "🍌",
    category: "buah",
    purpose: "Sumber karbohidrat & potasium",
  },
  {
    name: "Pepaya",
    kcal: 39,
    protein: 0.5,
    karbo: 9.8,
    lemak: 0.1,
    portion: 120,
    tags: ["buah"],
    emoji: "🥭",
    category: "buah",
    purpose: "Sumber vitamin C & enzim pencernaan",
  },
  {
    name: "Jeruk manis",
    kcal: 47,
    protein: 0.9,
    karbo: 11.8,
    lemak: 0.1,
    portion: 120,
    tags: ["buah"],
    emoji: "🍊",
    category: "buah",
    purpose: "Sumber vitamin C & asam sitrat",
  },
  {
    name: "Apel",
    kcal: 52,
    protein: 0.3,
    karbo: 14.0,
    lemak: 0.2,
    portion: 120,
    tags: ["buah"],
    emoji: "🍎",
    category: "buah",
    purpose: "Sumber serat & antioksidan",
  },
  {
    name: "Mangga",
    kcal: 60,
    protein: 0.8,
    karbo: 15.0,
    lemak: 0.4,
    portion: 100,
    tags: ["buah"],
    emoji: "🥭",
    category: "buah",
    purpose: "Sumber vitamin A & C",
  },
  {
    name: "Semangka",
    kcal: 30,
    protein: 0.6,
    karbo: 7.6,
    lemak: 0.2,
    portion: 150,
    tags: ["buah"],
    emoji: "🍉",
    category: "buah",
    purpose: "Sumber hidrasi & likopen",
  },
  {
    name: "Melon",
    kcal: 34,
    protein: 0.8,
    karbo: 8.2,
    lemak: 0.2,
    portion: 140,
    tags: ["buah"],
    emoji: "🍈",
    category: "buah",
    purpose: "Sumber hidrasi & mineral",
  },
  {
    name: "Nanas",
    kcal: 50,
    protein: 0.5,
    karbo: 13.1,
    lemak: 0.1,
    portion: 100,
    tags: ["buah"],
    emoji: "🍍",
    category: "buah",
    purpose: "Sumber vitamin C & enzim bromelain",
  },
  {
    name: "Alpukat",
    kcal: 160,
    protein: 2.0,
    karbo: 8.5,
    lemak: 14.7,
    portion: 80,
    tags: ["buah", "oleinat"],
    emoji: "🥑",
    category: "buah",
    purpose: "Sumber lemak sehat & kalium",
  },
  {
    name: "Jambu biji",
    kcal: 49,
    protein: 0.9,
    karbo: 12.2,
    lemak: 0.3,
    portion: 100,
    tags: ["buah"],
    emoji: "🍈",
    category: "buah",
    purpose: "Sumber vitamin C tinggi & serat",
  },

  // ---------- Sumber Lemak / Oleinat ----------
  {
    name: "Kelapa parut segar",
    kcal: 354,
    protein: 3.3,
    karbo: 15.2,
    lemak: 33.5,
    portion: 30,
    tags: ["oleinat"],
    emoji: "🥥",
    category: "oleinat",
    purpose: "Sumber lemak & mineral",
  },
  {
    name: "Minyak kelapa",
    kcal: 862,
    protein: 0.0,
    karbo: 0.0,
    lemak: 100.0,
    portion: 15,
    tags: ["oleinat"],
    emoji: "🫗",
    category: "oleinat",
    purpose: "Media goreng & lemak jenuh",
  },
  {
    name: "Minyak sawit",
    kcal: 884,
    protein: 0.0,
    karbo: 0.0,
    lemak: 100.0,
    portion: 15,
    tags: ["oleinat"],
    emoji: "🫗",
    category: "oleinat",
    purpose: "Media masak & penambah energi",
  },
  {
    name: "Minyak zaitun",
    kcal: 884,
    protein: 0.0,
    karbo: 0.0,
    lemak: 100.0,
    portion: 15,
    tags: ["oleinat"],
    emoji: "🫗",
    category: "oleinat",
    purpose: "Sumber lemak tak jenuh tunggal",
  },
  {
    name: "Margarin",
    kcal: 717,
    protein: 0.5,
    karbo: 0.8,
    lemak: 81.1,
    portion: 15,
    tags: ["oleinat"],
    emoji: "🧈",
    category: "oleinat",
    purpose: "Pengganti mentega & lemak trans",
  },
  {
    name: "Kacang mete",
    kcal: 553,
    protein: 18.2,
    karbo: 30.2,
    lemak: 43.9,
    portion: 20,
    tags: ["protein", "oleinat"],
    emoji: "🥜",
    category: "oleinat",
    purpose: "Sumber lemak sehat & mineral",
  },
];

const drinkOfDay = (i: number) =>
  NUTRIENTS.find(
    (n) => n.name === (i % 2 === 0 ? "Susu sapi segar" : "Yoghurt"),
  )!;
const cookingOil = NUTRIENTS.find((n) => n.name === "Minyak sawit")!;

const byCategory = (cat: Nutrient["category"]) =>
  NUTRIENTS.filter((n) => n.category === cat);

/** Satu hidangan siap saji hasil kombinasi bahan. */
export interface Meal {
  slot: string;
  dish: string;
  items: string[];
  rawItems?: Array<{ name: string; grams: number }>; // Detail bahan untuk modal
  notes?: string; // catatan minyak/goreng
  kcal: number;
  protein: number;
  karbo: number;
  lemak: number;
  emoji: string;
}

export interface Totals {
  kcal: number;
  protein: number;
  karbo: number;
  lemak: number;
}

/** Ambil bahan ke-i dari sebuah kategori; i berputar tiap refresh. */
function pick(cat: Nutrient["category"], i: number): Nutrient {
  const list = byCategory(cat);
  return list[((i % list.length) + list.length) % list.length];
}

const round = (x: number) => Math.round(x * 10) / 10;

/** Susun satu hidangan dari beberapa bahan + berat gram masing-masing. */
function compose(
  slot: string,
  dish: string,
  parts: Array<{ item: Nutrient; grams: number; note?: string }>,
): Meal {
  let kcal = 0;
  let protein = 0;
  let karbo = 0;
  let lemak = 0;
  const items: string[] = [];
  const rawItems: Array<{ name: string; grams: number }> = [];
  const notes: string[] = [];
  for (const { item, grams, note } of parts) {
    const f = grams / 100;
    kcal += item.kcal * f;
    protein += item.protein * f;
    karbo += item.karbo * f;
    lemak += item.lemak * f;
    const itemStr = `${item.name} ${Math.round(grams)} g`;
    items.push(itemStr);
    rawItems.push({ name: item.name, grams });
    if (note) notes.push(note);
  }
  return {
    slot,
    dish,
    items,
    rawItems,
    notes: notes.length > 0 ? notes.join(", ") : undefined,
    kcal: round(kcal),
    protein: round(protein),
    karbo: round(karbo),
    lemak: round(lemak),
    emoji: parts[0]?.item.emoji ?? "🍽️",
  };
}

/** Kelompok usia untuk perhitungan kebutuhan gizi. */
export type KelompokUsia = "anak-5" | "remaja" | "dewasa" | "lansia";

export interface AnggotaKeluarga {
  id: string;
  nama: string;
  usia: number;
  kelompok: KelompokUsia;
}

/** Kebutuhan gizi harian per kelompok usia (kkal, protein g, karbo g, lemak g).
 * Sumber: AKG Kemenkes RI & FAO/WHO. Nilai praktis untuk perencanaan menu.
 */
const KEBUTUHAN_HARIAN: Record<KelompokUsia, Totals> = {
  "anak-5": { kcal: 1500, protein: 40, karbo: 200, lemak: 50 },
  remaja: { kcal: 2200, protein: 60, karbo: 300, lemak: 70 },
  dewasa: { kcal: 2150, protein: 55, karbo: 290, lemak: 65 },
  lansia: { kcal: 1800, protein: 50, karbo: 240, lemak: 55 },
};

/** Tentukan kelompok usia berdasarkan umur. */
export function tentukanKelompokUsia(usia: number): KelompokUsia {
  if (usia < 10) return "anak-5";
  if (usia <= 18) return "remaja";
  if (usia >= 60) return "lansia";
  return "dewasa";
}

/** Hitung total kebutuhan gizi harian untuk seluruh anggota keluarga. */
export function hitungKebutuhanKeluarga(
  anggota: AnggotaKeluarga[],
): Totals & { jumlahAnggota: number } {
  const totals = anggota.reduce(
    (acc, a) => {
      const butuh = KEBUTUHAN_HARIAN[a.kelompok];
      return {
        kcal: acc.kcal + butuh.kcal,
        protein: acc.protein + butuh.protein,
        karbo: acc.karbo + butuh.karbo,
        lemak: acc.lemak + butuh.lemak,
      };
    },
    { kcal: 0, protein: 0, karbo: 0, lemak: 0 },
  );
  return { ...totals, jumlahAnggota: anggota.length };
}

export interface GeneratedMenu {
  date: string;
  meals: Meal[];
  totals: Totals;
  score: number;
  verdict: string;
  details: MacroDetail[];
}

/**
 * Bangun SATU kandidat menu harian (deterministik per refreshCount).
 * Sistem ini dirancang untuk umum tanpa kategori profil khusus.
 */
function _buildMenu(refreshCount: number): GeneratedMenu {
  const r = Math.max(0, refreshCount);
  // Porsi dasar standar (skala 1.0).
  const p = 1.0;

  const pagiKarbo = pick("karbo", r);
  const pagiLauk = pick("proteinHewani", r);
  const buahPagi = pick("buah", r);
  const buahSore = pick("buah", r + 1);
  const susuPagi = drinkOfDay(r);
  const karboSiang = pick("karbo", r + 1);
  const laukSiang = pick("proteinHewani", r + 1);
  const nabatiSiang = pick("proteinNabati", r);
  const sayurSiang = pick("sayur", r);
  const sayurSore = pick("sayur", r + 2);
  const laukMalam = pick("proteinHewani", r + 2);
  const nabatiMalam = pick("proteinNabati", r + 1);
  const karboMalam = pick("karbo", r + 3);

  // Berat dasar (gram) tiap bahan sebelum penyetelan proporsional.
  const base = (n: Nutrient, mult: number) => Math.round(n.portion * mult);

  /** Rakit ulang rencana menu dengan skala porsi karbo & protein tertentu.
   * Menu disesuaikan untuk lidah Indonesia: nasi, tempe, tahu, sayur lokal, buah tropis.
   */
  const buildPlan = (cs: number, ps: number): Meal[] => [
    // Sarapan (karbo + lauk + sayur ringan + minyak untuk menggoreng)
    compose("Makan Pagi", "Sarapan pembuka energi", [
      { item: pagiKarbo, grams: base(pagiKarbo, 0.9 * p) * cs },
      {
        item: pagiLauk,
        grams: base(pagiLauk, 0.5 * p) * ps,
        note: "Goreng dengan minyak sawit",
      },
      { item: cookingOil, grams: base(cookingOil, 0.55) }, // minyak untuk menggoreng
      { item: NUTRIENTS.find((n) => n.name === "Tomat")!, grams: 30 },
      { item: susuPagi, grams: susuPagi.portion },
    ]),
    // Makan Siang (piring lengkap: karbo + lauk hewani + lauk nabati + sayur + minyak)
    compose("Makan Siang", "Piring utama bergizi seimbang", [
      { item: karboSiang, grams: base(karboSiang, 1.1 * p) * cs },
      {
        item: laukSiang,
        grams: base(laukSiang, 0.7 * p) * ps,
        note: "Goreng/direbus dengan minyak",
      },
      { item: nabatiSiang, grams: base(nabatiSiang, 0.6 * p) * ps },
      { item: sayurSiang, grams: base(sayurSiang, 1.2 * p) },
      { item: cookingOil, grams: cookingOil.portion }, // minyak untuk memasak
      { item: NUTRIENTS.find((n) => n.name === "Kangkung")!, grams: 60 },
    ]),
    // Selingan Sore (ringan: buah segar)
    compose("Selingan Sore", "Camilan buah segar pengisi energi", [
      { item: buahSore, grams: base(buahSore, 1.0 * p) },
    ]),
    // Makan Malam (lebih ringan dari siang, tetap seimbang)
    compose("Makan Malam", "Makan malam hangat keluarga", [
      { item: karboMalam, grams: base(karboMalam, 0.8 * p) * cs },
      {
        item: laukMalam,
        grams: base(laukMalam, 0.5 * p) * ps,
        note: "Goreng/rebus dengan minyak",
      },
      { item: nabatiMalam, grams: base(nabatiMalam, 0.4 * p) * ps },
      { item: cookingOil, grams: cookingOil.portion },
      { item: sayurSore, grams: base(sayurSore, 0.7 * p) },
    ]),
    // Selingan Buah (penutup alami)
    compose("Selingan Buah", "Penutup manis alami", [
      { item: buahPagi, grams: base(buahPagi, 1.2 * p) },
    ]),
  ];

  // Penyetel proporsional: geser skala porsi karbo & lauk secara bertahap
  // sampai proporsi makro masuk rentang sehat (karbo 57-63%, protein 11-14%,
  // lemak 21-29% — sedikit lebih ketat dari target cek). Deterministik.
  const clamp = (x: number, lo: number, hi: number) =>
    Math.max(lo, Math.min(hi, x));
  let cs = 1;
  let ps = 1;
  for (let i = 0; i < 80; i++) {
    const trial = buildPlan(cs, ps);
    const t = trial.reduce(
      (acc, m) => ({
        kcal: acc.kcal + m.kcal,
        protein: acc.protein + m.protein,
        karbo: acc.karbo + m.karbo,
        lemak: acc.lemak + m.lemak,
      }),
      { kcal: 0, protein: 0, karbo: 0, lemak: 0 },
    );
    const sh = macroShares(t);
    let changed = false;
    if (sh.protein > 14) {
      ps *= 0.96;
      changed = true;
    } else if (sh.protein < 11) {
      ps *= 1.04;
      changed = true;
    }
    if (sh.lemak > 29) {
      ps *= 0.985;
      cs *= 1.01;
      changed = true;
    } else if (sh.lemak < 21) {
      ps *= 1.01;
      cs *= 0.99;
      changed = true;
    }
    if (sh.karbo < 57) {
      cs *= 1.03;
      changed = true;
    } else if (sh.karbo > 63) {
      cs *= 0.97;
      changed = true;
    }
    if (!changed) break;
    cs = clamp(cs, 0.4, 2.2);
    ps = clamp(ps, 0.4, 2.2);
  }

  const meals = buildPlan(cs, ps);
  const totals = meals.reduce(
    (acc, m) => ({
      kcal: acc.kcal + m.kcal,
      protein: acc.protein + m.protein,
      karbo: acc.karbo + m.karbo,
      lemak: acc.lemak + m.lemak,
    }),
    { kcal: 0, protein: 0, karbo: 0, lemak: 0 },
  );
  const cek = checkBalance(meals, totals);
  return {
    date: new Date().toISOString().slice(0, 10),
    meals,
    totals,
    score: cek.score,
    verdict: cek.verdict,
    details: cek.details,
  };
}

/**
 * Bangun menu harian yang seimbang.
 * Sistem akan retry otomatis dengan kombinasi bahan berbeda (maks 50x)
 * jika menu tidak seimbang (score < 70).
 */
export function generateMenu(refreshCount = 0): GeneratedMenu {
  for (let attempt = 0; attempt < 50; attempt++) {
    const menu = _buildMenu(refreshCount + attempt * 13);
    if (menu.score >= 70) {
      return menu;
    }
  }
  // Fallback: kembalikan menu terakhir yang dihasilkan (seharusnya sudah mendekati seimbang karena scaler)
  return _buildMenu(refreshCount);
}

/** Interface menu hasil generate untuk keluarga. */
export interface GeneratedMenuKeluarga extends GeneratedMenu {
  anggota: AnggotaKeluarga[];
  kebutuhanKeluarga: Totals & { jumlahAnggota: number };
}

/**
 * Bangun rencana menu harian untuk keluarga berdasarkan daftar anggota.
 * Porsi disesuaikan agar total gizi mendekati kebutuhan gabungan semua anggota.
 */
export function generateMenuKeluarga(
  anggota: AnggotaKeluarga[],
  refreshCount = 0,
): GeneratedMenuKeluarga {
  if (anggota.length === 0) {
    // Fallback ke menu dasar jika tidak ada anggota
    const base = generateMenu(refreshCount);
    return {
      ...base,
      anggota: [],
      kebutuhanKeluarga: {
        kcal: 0,
        protein: 0,
        karbo: 0,
        lemak: 0,
        jumlahAnggota: 0,
      },
    };
  }

  const kebutuhan = hitungKebutuhanKeluarga(anggota);
  // Gunakan menu dasar (tanpa profil), lalu sesuaikan skala porsi
  const baseMenu = generateMenu(refreshCount);

  // Hitung rasio kebutuhan vs menu dasar untuk menentukan skala porsi
  const rasioKcal = kebutuhan.kcal / (baseMenu.totals.kcal || 1);
  const skalaPorsi = Math.max(0.5, Math.min(3.0, rasioKcal));

  // Skalakan ulang setiap meal berdasarkan kebutuhan keluarga
  const scaledMeals: Meal[] = baseMenu.meals.map((meal) => ({
    ...meal,
    items: meal.items.map((item) => {
      // Parse berat dari string "Nama Bahan XXX g"
      const match = item.match(/^(.+?)\s+(\d+)\s*g$/);
      if (match) {
        const nama = match[1];
        const beratLama = parseInt(match[2], 10);
        const beratBaru = Math.round(beratLama * skalaPorsi);
        return `${nama} ${beratBaru} g`;
      }
      return item;
    }),
    kcal: Math.round(meal.kcal * skalaPorsi),
    protein: Math.round(meal.protein * skalaPorsi * 10) / 10,
    karbo: Math.round(meal.karbo * skalaPorsi * 10) / 10,
    lemak: Math.round(meal.lemak * skalaPorsi * 10) / 10,
  }));

  const totals = scaledMeals.reduce(
    (acc, m) => ({
      kcal: acc.kcal + m.kcal,
      protein: acc.protein + m.protein,
      karbo: acc.karbo + m.karbo,
      lemak: acc.lemak + m.lemak,
    }),
    { kcal: 0, protein: 0, karbo: 0, lemak: 0 },
  );

  const cek = checkBalance(scaledMeals, totals);

  return {
    date: new Date().toISOString().slice(0, 10),
    meals: scaledMeals,
    totals,
    score: cek.score,
    verdict: cek.verdict,
    details: cek.details,
    anggota,
    kebutuhanKeluarga: kebutuhan,
  };
}

/** Skor satu makro (0-100) beserta persentase dan rentang sehatnya. */
export interface MacroDetail {
  name: "karbo" | "protein" | "lemak";
  /** persentase kkal makro terhadap total energi */
  pct: number;
  /** rentang sehat (% kkal) */
  lo: number;
  hi: number;
  /** skor proporsional makro ini, 0-100 */
  score: number;
}

export interface CekResult {
  score: number;
  verdict: string;
  /** rincian skor per makro untuk ditampilkan di rumus */
  details: MacroDetail[];
}

/**
 * Cek gizi seimbang dengan logika proporsional:
 * - Porsi makro ideal: karbo ~55-65%, protein ~10-15%, lemak ~20-30% dari
 *   total kkal (PBG "Isi Piringku" + AKG, dibulatkan untuk v1).
 * - Skor = rata-rata kedekatan tiap makro ke rentang idealnya.
 */
export function checkBalance(meals: Meal[], totals: Totals): CekResult {
  const kcal =
    totals.kcal > 0
      ? totals.kcal
      : totals.karbo * 4 + totals.protein * 4 + totals.lemak * 9;
  if (kcal <= 0) {
    return {
      score: 0,
      verdict: "Menu masih kosong — buat menu dulu ya.",
      details: [],
    };
  }

  const kcalKarbo = totals.karbo * 4;
  const kcalProtein = totals.protein * 4;
  const kcalLemak = totals.lemak * 9;

  // Nilai 1 saat proporsi berada di rentang sehat, menurun linier di
  // luarnya (menyimpang sebesar lebar rentang = skor 0 untuk makro itu).
  const inRangeScore = (v: number, lo: number, hi: number) => {
    if (v >= lo && v <= hi) return 1;
    const span = hi - lo;
    const over = v < lo ? lo - v : v - hi;
    return Math.max(0, 1 - over / span);
  };
  const pct = (x: number) => (x / kcal) * 100;

  const sKarbo = inRangeScore(pct(kcalKarbo), 55, 65);
  const sProtein = inRangeScore(pct(kcalProtein), 10, 15);
  const sLemak = inRangeScore(pct(kcalLemak), 20, 30);

  const score = Math.round(((sKarbo + sProtein + sLemak) / 3) * 100);

  let verdict: string;
  if (score >= 85) {
    verdict = "Seimbang! Proporsi makro pas untuk menu harian.";
  } else if (score >= 70) {
    verdict = "Cukup seimbang. Sedikit lebih perhatikan porsi di bawah.";
  } else {
    verdict = "Belum seimbang — coba refresh menu untuk kombinasi baru.";
  }
  const details: MacroDetail[] = [
    {
      name: "karbo",
      pct: Math.round(pct(kcalKarbo)),
      lo: 55,
      hi: 65,
      score: Math.round(sKarbo * 100),
    },
    {
      name: "protein",
      pct: Math.round(pct(kcalProtein)),
      lo: 10,
      hi: 15,
      score: Math.round(sProtein * 100),
    },
    {
      name: "lemak",
      pct: Math.round(pct(kcalLemak)),
      lo: 20,
      hi: 30,
      score: Math.round(sLemak * 100),
    },
  ];
  return { score, verdict, details };
}

/** Ringkasan proporsi makro dalam persen kkal, untuk ditampilkan. */
export function macroShares(totals: Totals): {
  karbo: number;
  protein: number;
  lemak: number;
} {
  const kcal =
    totals.kcal > 0
      ? totals.kcal
      : totals.karbo * 4 + totals.protein * 4 + totals.lemak * 9;
  if (kcal <= 0) return { karbo: 0, protein: 0, lemak: 0 };
  return {
    karbo: Math.round(((totals.karbo * 4) / kcal) * 100),
    protein: Math.round(((totals.protein * 4) / kcal) * 100),
    lemak: Math.round(((totals.lemak * 9) / kcal) * 100),
  };
}
