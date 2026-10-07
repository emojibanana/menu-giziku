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
    name: "Nasi putih",
    kcal: 175,
    protein: 2.6,
    karbo: 39.8,
    lemak: 0.3,
    portion: 200,
    tags: ["karbo"],
    emoji: "🍚",
    category: "karbo",
    purpose: "Sumber energi utama sehari-hari",
  },
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
    name: "Lontong",
    kcal: 144,
    protein: 2.8,
    karbo: 32.0,
    lemak: 0.2,
    portion: 200,
    tags: ["karbo"],
    emoji: "🍙",
    category: "karbo",
    purpose: "Karbohidrat padat untuk soto/gado-gado",
  },
  {
    name: "Ketupat",
    kcal: 144,
    protein: 2.8,
    karbo: 32.0,
    lemak: 0.2,
    portion: 200,
    tags: ["karbo"],
    emoji: "🍙",
    category: "karbo",
    purpose: "Karbohidrat khas hari raya",
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
    name: "Singkong rebus",
    kcal: 146,
    protein: 1.2,
    karbo: 34.7,
    lemak: 0.3,
    portion: 180,
    tags: ["karbo"],
    emoji: "🥔",
    category: "karbo",
    purpose: "Sumber karbohidrat lokal pengganti nasi",
  },
  {
    name: "Ubi merah",
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
    name: "Kentang rebus",
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
    name: "Mie goreng",
    kcal: 356,
    protein: 11.2,
    karbo: 72.9,
    lemak: 1.7,
    portion: 200,
    tags: ["karbo"],
    emoji: "🍜",
    category: "karbo",
    purpose: "Hidangan mie khas Indonesia",
  },
  {
    name: "Bihun goreng",
    kcal: 330,
    protein: 8.0,
    karbo: 68.0,
    lemak: 2.5,
    portion: 180,
    tags: ["karbo"],
    emoji: "🍜",
    category: "karbo",
    purpose: "Alternatif mie dari tepung beras",
  },

  // ---------- Lauk Pauk Khas Indonesia ----------
  {
    name: "Rendang daging",
    kcal: 280,
    protein: 22.0,
    karbo: 3.0,
    lemak: 20.0,
    portion: 80,
    tags: ["protein"],
    emoji: "🥩",
    category: "proteinHewani",
    purpose: "Lauk padang kaya rempah & protein",
  },
  {
    name: "Ayam goreng bumbu kuning",
    kcal: 220,
    protein: 25.0,
    karbo: 2.0,
    lemak: 13.0,
    portion: 90,
    tags: ["protein"],
    emoji: "🍗",
    category: "proteinHewani",
    purpose: "Lauk ayam goreng tradisional",
  },
  {
    name: "Ikan bakar",
    kcal: 160,
    protein: 24.0,
    karbo: 1.0,
    lemak: 7.0,
    portion: 100,
    tags: ["protein"],
    emoji: "🐟",
    category: "proteinHewani",
    purpose: "Protein hewani rendah lemak jenuh",
  },
  {
    name: "Pepes ikan",
    kcal: 130,
    protein: 20.0,
    karbo: 2.0,
    lemak: 5.0,
    portion: 100,
    tags: ["protein"],
    emoji: "🐟",
    category: "proteinHewani",
    purpose: "Olahan ikan kukus daun pisang sehat",
  },
  {
    name: "Telur balado",
    kcal: 190,
    protein: 13.0,
    karbo: 4.0,
    lemak: 14.0,
    portion: 80,
    tags: ["protein"],
    emoji: "🥚",
    category: "proteinHewani",
    purpose: "Lauk telur pedas khas Minang",
  },
  {
    name: "Sate ayam",
    kcal: 240,
    protein: 22.0,
    karbo: 8.0,
    lemak: 14.0,
    portion: 80,
    tags: ["protein"],
    emoji: "🍢",
    category: "proteinHewani",
    purpose: "Lauk tusuk bakar dengan bumbu kacang",
  },
  {
    name: "Gulai kambing",
    kcal: 260,
    protein: 18.0,
    karbo: 3.0,
    lemak: 20.0,
    portion: 80,
    tags: ["protein"],
    emoji: "🍛",
    category: "proteinHewani",
    purpose: "Lauk bersantan kaya rempah",
  },
  {
    name: "Tempe goreng",
    kcal: 210,
    protein: 18.0,
    karbo: 10.0,
    lemak: 12.0,
    portion: 70,
    tags: ["protein"],
    emoji: "🟫",
    category: "proteinNabati",
    purpose: "Lauk nabati fermentasi kedelai",
  },
  {
    name: "Tahu bacem",
    kcal: 140,
    protein: 10.0,
    karbo: 8.0,
    lemak: 8.0,
    portion: 80,
    tags: ["protein"],
    emoji: "🧈",
    category: "proteinNabati",
    purpose: "Olahan tahu manis gurih khas Jawa",
  },
  {
    name: "Perkedel kentang",
    kcal: 180,
    protein: 4.0,
    karbo: 22.0,
    lemak: 9.0,
    portion: 60,
    tags: ["protein", "karbo"],
    emoji: "🥔",
    category: "proteinNabati",
    purpose: "Pelengkap lauk dari kentang tumbuk",
  },

  // ---------- Sayuran Olahan Lokal ----------
  {
    name: "Sayur lodeh",
    kcal: 80,
    protein: 3.0,
    karbo: 6.0,
    lemak: 5.0,
    portion: 150,
    tags: ["sayur"],
    emoji: "🥘",
    category: "sayur",
    purpose: "Sayur bersantan campuran labu/nangka",
  },
  {
    name: "Capcay",
    kcal: 60,
    protein: 3.0,
    karbo: 8.0,
    lemak: 2.0,
    portion: 150,
    tags: ["sayur"],
    emoji: "🥬",
    category: "sayur",
    purpose: "Tumis sayur campuran gaya Tionghoa-Indo",
  },
  {
    name: "Urap sayuran",
    kcal: 90,
    protein: 4.0,
    karbo: 8.0,
    lemak: 5.0,
    portion: 120,
    tags: ["sayur"],
    emoji: "🥗",
    category: "sayur",
    purpose: "Sayuran rebus dengan bumbu kelapa parut",
  },
  {
    name: "Gado-gado",
    kcal: 150,
    protein: 6.0,
    karbo: 12.0,
    lemak: 9.0,
    portion: 200,
    tags: ["sayur", "protein"],
    emoji: "🥗",
    category: "sayur",
    purpose: "Salad sayur dengan bumbu kacang lengkap",
  },
  {
    name: "Pecel",
    kcal: 140,
    protein: 5.0,
    karbo: 10.0,
    lemak: 9.0,
    portion: 200,
    tags: ["sayur"],
    emoji: "🥗",
    category: "sayur",
    purpose: "Sayuran rebus bumbu kacang khas Jawa Timur",
  },

  // ---------- Minuman & Camilan Lokal ----------
  {
    name: "Teh manis hangat",
    kcal: 40,
    protein: 0.1,
    karbo: 10.0,
    lemak: 0.0,
    portion: 200,
    tags: [],
    emoji: "🍵",
    category: "buah", // placeholder category for beverage slot
    purpose: "Minuman pendamping makan harian",
  },
  {
    name: "Kopi tubruk",
    kcal: 30,
    protein: 0.2,
    karbo: 7.0,
    lemak: 0.1,
    portion: 150,
    tags: [],
    emoji: "☕",
    category: "buah",
    purpose: "Minuman pagi khas Indonesia",
  },
  {
    name: "Es cendol",
    kcal: 120,
    protein: 1.0,
    karbo: 25.0,
    lemak: 3.0,
    portion: 200,
    tags: ["karbo"],
    emoji: "🥤",
    category: "karbo",
    purpose: "Camilan/minuman penutup manis tradisional",
  },
  {
    name: "Kolak pisang",
    kcal: 140,
    protein: 1.5,
    karbo: 28.0,
    lemak: 4.0,
    portion: 150,
    tags: ["buah", "karbo"],
    emoji: "🍌",
    category: "buah",
    purpose: "Penutup manis bersantan khas Ramadhan",
  },

  // ---------- Buah-buahan Tropis ----------
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

  // ---------- Sayuran Mentah/Lokal ----------
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
    name: "Timun",
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
    name: "Kacang tanah sangrai",
    kcal: 567,
    protein: 25.8,
    karbo: 16.1,
    lemak: 49.2,
    portion: 20,
    tags: ["protein", "oleinat"],
    emoji: "🥜",
    category: "oleinat",
    purpose: "Bumbu kacang & camilan sehat",
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
    (n) => n.name === (i % 2 === 0 ? "Teh manis hangat" : "Kopi tubruk"),
  )!;
const cookingOil = NUTRIENTS.find((n) => n.name === "Minyak kelapa")!;

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
