/**
 * Mesin nutrisi Menu Giziku.
 *
 * Semua angka gizi per 100 g (bahan matang, siap makan) — sumber praktis:
 * TKPI (Tabel Komposisi Pangan Indonesia) & label kemasan umum. Nilai ini
 * untuk perencanaan menu, bukan diagnosa medis.
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
}

export const NUTRIENTS: Nutrient[] = [
  // ---------- Karbohidrat (sumber energi utama) ----------
<<<<<<< HEAD
  { name: "Nasi putih", kcal: 130, protein: 2.7, karbo: 28, lemak: 0.3, portion: 200, tags: ["karbo"], emoji: "🍚", category: "karbo" },
  { name: "Nasi merah", kcal: 111, protein: 2.4, karbo: 23, lemak: 0.9, portion: 200, tags: ["karbo"], emoji: "🍚", category: "karbo" },
  { name: "Kentang rebus", kcal: 87, protein: 2, karbo: 20, lemak: 0.1, portion: 180, tags: ["karbo"], emoji: "🥔", category: "karbo" },
  { name: "Jagung manis", kcal: 96, protein: 3.3, karbo: 21, lemak: 1.3, portion: 150, tags: ["karbo"], emoji: "🌽", category: "karbo" },
  { name: "Mie telur", kcal: 138, protein: 4.5, karbo: 22, lemak: 4, portion: 160, tags: ["karbo"], emoji: "🍜", category: "karbo" },
  { name: "Ubi jalar", kcal: 86, protein: 1.6, karbo: 20, lemak: 0.1, portion: 160, tags: ["karbo"], emoji: "🍠", category: "karbo" },
  { name: "Roti gandum", kcal: 248, protein: 9, karbo: 41, lemak: 3.4, portion: 60, tags: ["karbo"], emoji: "🍞", category: "karbo" },

  // ---------- Protein hewani ----------
  { name: "Ayam panggang", kcal: 165, protein: 31, karbo: 0, lemak: 3.6, portion: 90, tags: ["protein"], emoji: "🍗", category: "proteinHewani" },
  { name: "Ikan kembung", kcal: 125, protein: 25, karbo: 0, lemak: 2.6, portion: 80, tags: ["protein"], emoji: "🐟", category: "proteinHewani" },
  { name: "Telur rebus", kcal: 155, protein: 13, karbo: 1.1, lemak: 11, portion: 100, tags: ["protein"], emoji: "🥚", category: "proteinHewani" },
  { name: "Ikan tuna", kcal: 108, protein: 24, karbo: 0, lemak: 1, portion: 80, tags: ["protein"], emoji: "🐟", category: "proteinHewani" },
  { name: "Daging sapi tanpa lemak", kcal: 143, protein: 26, karbo: 0, lemak: 3.5, portion: 70, tags: ["protein"], emoji: "🥩", category: "proteinHewani" },
  { name: "Bakso ikan", kcal: 105, protein: 12, karbo: 6, lemak: 3.8, portion: 90, tags: ["protein"], emoji: "🍢", category: "proteinHewani" },

  // ---------- Protein nabati ----------
  { name: "Tahu putih", kcal: 80, protein: 10.9, karbo: 0.9, lemak: 4.7, portion: 100, tags: ["protein"], emoji: "🧈", category: "proteinNabati" },
  { name: "Tempe goreng", kcal: 180, protein: 18, karbo: 8, lemak: 9, portion: 70, tags: ["protein"], emoji: "🟫", category: "proteinNabati" },
  { name: "Kacang hijau", kcal: 323, protein: 22, karbo: 56, lemak: 1.2, portion: 60, tags: ["protein", "karbo"], emoji: "🫘", category: "proteinNabati" },

  // ---------- Sayuran ----------
  { name: "Bayam rebus", kcal: 23, protein: 2.9, karbo: 3.6, lemak: 0.4, portion: 80, tags: ["sayur"], emoji: "🥬", category: "sayur" },
  { name: "Wortel", kcal: 35, protein: 1, karbo: 8, lemak: 0.2, portion: 70, tags: ["sayur"], emoji: "🥕", category: "sayur" },
  { name: "Brokoli kukus", kcal: 35, protein: 2.4, karbo: 7, lemak: 0.4, portion: 80, tags: ["sayur"], emoji: "🥦", category: "sayur" },
  { name: "Kacang panjang", kcal: 35, protein: 2.4, karbo: 6, lemak: 0.2, portion: 70, tags: ["sayur"], emoji: "🌿", category: "sayur" },
  { name: "Tauge", kcal: 30, protein: 3, karbo: 6, lemak: 0.2, portion: 60, tags: ["sayur"], emoji: "🌱", category: "sayur" },
  { name: "Sop labu siam", kcal: 26, protein: 0.6, karbo: 6, lemak: 0.1, portion: 80, tags: ["sayur"], emoji: "🎃", category: "sayur" },
  { name: "Bening daun katuk", kcal: 30, protein: 3.5, karbo: 5, lemak: 0.5, portion: 70, tags: ["sayur"], emoji: "🍃", category: "sayur" },

  // ---------- Buah ----------
  { name: "Pisang ambon", kcal: 92, protein: 1, karbo: 23, lemak: 0.5, portion: 90, tags: ["buah"], emoji: "🍌", category: "buah" },
  { name: "Pepaya", kcal: 46, protein: 0.5, karbo: 12, lemak: 0.1, portion: 120, tags: ["buah"], emoji: "🥭", category: "buah" },
  { name: "Jeruk manis", kcal: 45, protein: 0.9, karbo: 11, lemak: 0.2, portion: 120, tags: ["buah"], emoji: "🍊", category: "buah" },
  { name: "Semangka", kcal: 32, protein: 0.6, karbo: 8, lemak: 0.4, portion: 150, tags: ["buah"], emoji: "🍉", category: "buah" },
  { name: "Mangga harum manis", kcal: 60, protein: 0.8, karbo: 15, lemak: 0.4, portion: 100, tags: ["buah"], emoji: "🥭", category: "buah" },
  { name: "Melon", kcal: 34, protein: 0.8, karbo: 8, lemak: 0.2, portion: 140, tags: ["buah"], emoji: "🍈", category: "buah" },
  { name: "Salak", kcal: 77, protein: 0.4, karbo: 20, lemak: 0, portion: 80, tags: ["buah"], emoji: "🧅", category: "buah" },

  // ---------- Oleinat ----------
  { name: "Susu UHT", kcal: 61, protein: 3.2, karbo: 4.8, lemak: 3.3, portion: 200, tags: ["protein"], emoji: "🥛", category: "oleinat" },
  { name: "Yogurt plain", kcal: 59, protein: 3.5, karbo: 4.7, lemak: 3.3, portion: 150, tags: ["protein"], emoji: "🥛", category: "oleinat" },
  { name: "Kacang tanah", kcal: 567, protein: 26, karbo: 19, lemak: 49, portion: 20, tags: ["protein", "oleinat"], emoji: "🥜", category: "oleinat" },
  { name: "Minyak goreng (bumbu)", kcal: 884, protein: 0, karbo: 0, lemak: 100, portion: 15, tags: ["oleinat"], emoji: "🫗", category: "oleinat" },
];

const drinkOfDay = (i: number) =>
  NUTRIENTS.find(n => n.name === (i % 2 === 0 ? "Susu UHT" : "Yogurt plain"))!;
const cookingOil = NUTRIENTS.find(n => n.name === "Minyak goreng (bumbu)")!;
=======
  {
    name: "Nasi putih",
    kcal: 130,
    protein: 2.7,
    karbo: 28,
    lemak: 0.3,
    portion: 200,
    tags: ["karbo"],
    emoji: "🍚",
    category: "karbo",
  },
  {
    name: "Nasi merah",
    kcal: 111,
    protein: 2.4,
    karbo: 23,
    lemak: 0.9,
    portion: 200,
    tags: ["karbo"],
    emoji: "🍚",
    category: "karbo",
  },
  {
    name: "Kentang rebus",
    kcal: 87,
    protein: 2,
    karbo: 20,
    lemak: 0.1,
    portion: 180,
    tags: ["karbo"],
    emoji: "🥔",
    category: "karbo",
  },
  {
    name: "Jagung manis",
    kcal: 96,
    protein: 3.3,
    karbo: 21,
    lemak: 1.3,
    portion: 150,
    tags: ["karbo"],
    emoji: "🌽",
    category: "karbo",
  },
  {
    name: "Mie telur",
    kcal: 138,
    protein: 4.5,
    karbo: 22,
    lemak: 4,
    portion: 160,
    tags: ["karbo"],
    emoji: "🍜",
    category: "karbo",
  },
  {
    name: "Ubi jalar",
    kcal: 86,
    protein: 1.6,
    karbo: 20,
    lemak: 0.1,
    portion: 160,
    tags: ["karbo"],
    emoji: "🍠",
    category: "karbo",
  },
  {
    name: "Roti gandum",
    kcal: 248,
    protein: 9,
    karbo: 41,
    lemak: 3.4,
    portion: 60,
    tags: ["karbo"],
    emoji: "🍞",
    category: "karbo",
  },

  // ---------- Protein hewani ----------
  {
    name: "Ayam panggang",
    kcal: 165,
    protein: 31,
    karbo: 0,
    lemak: 3.6,
    portion: 90,
    tags: ["protein"],
    emoji: "🍗",
    category: "proteinHewani",
  },
  {
    name: "Ikan kembung",
    kcal: 125,
    protein: 25,
    karbo: 0,
    lemak: 2.6,
    portion: 80,
    tags: ["protein"],
    emoji: "🐟",
    category: "proteinHewani",
  },
  {
    name: "Telur rebus",
    kcal: 155,
    protein: 13,
    karbo: 1.1,
    lemak: 11,
    portion: 100,
    tags: ["protein"],
    emoji: "🥚",
    category: "proteinHewani",
  },
  {
    name: "Ikan tuna",
    kcal: 108,
    protein: 24,
    karbo: 0,
    lemak: 1,
    portion: 80,
    tags: ["protein"],
    emoji: "🐟",
    category: "proteinHewani",
  },
  {
    name: "Daging sapi tanpa lemak",
    kcal: 143,
    protein: 26,
    karbo: 0,
    lemak: 3.5,
    portion: 70,
    tags: ["protein"],
    emoji: "🥩",
    category: "proteinHewani",
  },
  {
    name: "Bakso ikan",
    kcal: 105,
    protein: 12,
    karbo: 6,
    lemak: 3.8,
    portion: 90,
    tags: ["protein"],
    emoji: "🍢",
    category: "proteinHewani",
  },

  // ---------- Protein nabati ----------
  {
    name: "Tahu putih",
    kcal: 80,
    protein: 10.9,
    karbo: 0.9,
    lemak: 4.7,
    portion: 100,
    tags: ["protein"],
    emoji: "🧈",
    category: "proteinNabati",
  },
  {
    name: "Tempe goreng",
    kcal: 180,
    protein: 18,
    karbo: 8,
    lemak: 9,
    portion: 70,
    tags: ["protein"],
    emoji: "🟫",
    category: "proteinNabati",
  },
  {
    name: "Kacang hijau",
    kcal: 323,
    protein: 22,
    karbo: 56,
    lemak: 1.2,
    portion: 60,
    tags: ["protein", "karbo"],
    emoji: "🫘",
    category: "proteinNabati",
  },

  // ---------- Sayuran ----------
  {
    name: "Bayam rebus",
    kcal: 23,
    protein: 2.9,
    karbo: 3.6,
    lemak: 0.4,
    portion: 80,
    tags: ["sayur"],
    emoji: "🥬",
    category: "sayur",
  },
  {
    name: "Wortel",
    kcal: 35,
    protein: 1,
    karbo: 8,
    lemak: 0.2,
    portion: 70,
    tags: ["sayur"],
    emoji: "🥕",
    category: "sayur",
  },
  {
    name: "Brokoli kukus",
    kcal: 35,
    protein: 2.4,
    karbo: 7,
    lemak: 0.4,
    portion: 80,
    tags: ["sayur"],
    emoji: "🥦",
    category: "sayur",
  },
  {
    name: "Kacang panjang",
    kcal: 35,
    protein: 2.4,
    karbo: 6,
    lemak: 0.2,
    portion: 70,
    tags: ["sayur"],
    emoji: "🌿",
    category: "sayur",
  },
  {
    name: "Tauge",
    kcal: 30,
    protein: 3,
    karbo: 6,
    lemak: 0.2,
    portion: 60,
    tags: ["sayur"],
    emoji: "🌱",
    category: "sayur",
  },
  {
    name: "Sop labu siam",
    kcal: 26,
    protein: 0.6,
    karbo: 6,
    lemak: 0.1,
    portion: 80,
    tags: ["sayur"],
    emoji: "🎃",
    category: "sayur",
  },
  {
    name: "Bening daun katuk",
    kcal: 30,
    protein: 3.5,
    karbo: 5,
    lemak: 0.5,
    portion: 70,
    tags: ["sayur"],
    emoji: "🍃",
    category: "sayur",
  },

  // ---------- Buah ----------
  {
    name: "Pisang ambon",
    kcal: 92,
    protein: 1,
    karbo: 23,
    lemak: 0.5,
    portion: 90,
    tags: ["buah"],
    emoji: "🍌",
    category: "buah",
  },
  {
    name: "Pepaya",
    kcal: 46,
    protein: 0.5,
    karbo: 12,
    lemak: 0.1,
    portion: 120,
    tags: ["buah"],
    emoji: "🥭",
    category: "buah",
  },
  {
    name: "Jeruk manis",
    kcal: 45,
    protein: 0.9,
    karbo: 11,
    lemak: 0.2,
    portion: 120,
    tags: ["buah"],
    emoji: "🍊",
    category: "buah",
  },
  {
    name: "Semangka",
    kcal: 32,
    protein: 0.6,
    karbo: 8,
    lemak: 0.4,
    portion: 150,
    tags: ["buah"],
    emoji: "🍉",
    category: "buah",
  },
  {
    name: "Mangga harum manis",
    kcal: 60,
    protein: 0.8,
    karbo: 15,
    lemak: 0.4,
    portion: 100,
    tags: ["buah"],
    emoji: "🥭",
    category: "buah",
  },
  {
    name: "Melon",
    kcal: 34,
    protein: 0.8,
    karbo: 8,
    lemak: 0.2,
    portion: 140,
    tags: ["buah"],
    emoji: "🍈",
    category: "buah",
  },
  {
    name: "Salak",
    kcal: 77,
    protein: 0.4,
    karbo: 20,
    lemak: 0,
    portion: 80,
    tags: ["buah"],
    emoji: "🧅",
    category: "buah",
  },

  // ---------- Oleinat ----------
  {
    name: "Susu UHT",
    kcal: 61,
    protein: 3.2,
    karbo: 4.8,
    lemak: 3.3,
    portion: 200,
    tags: ["protein"],
    emoji: "🥛",
    category: "oleinat",
  },
  {
    name: "Yogurt plain",
    kcal: 59,
    protein: 3.5,
    karbo: 4.7,
    lemak: 3.3,
    portion: 150,
    tags: ["protein"],
    emoji: "🥛",
    category: "oleinat",
  },
  {
    name: "Kacang tanah",
    kcal: 567,
    protein: 26,
    karbo: 19,
    lemak: 49,
    portion: 20,
    tags: ["protein", "oleinat"],
    emoji: "🥜",
    category: "oleinat",
  },
  {
    name: "Minyak goreng (bumbu)",
    kcal: 884,
    protein: 0,
    karbo: 0,
    lemak: 100,
    portion: 15,
    tags: ["oleinat"],
    emoji: "🫗",
    category: "oleinat",
  },
];

const drinkOfDay = (i: number) =>
  NUTRIENTS.find(
    (n) => n.name === (i % 2 === 0 ? "Susu UHT" : "Yogurt plain"),
  )!;
const cookingOil = NUTRIENTS.find((n) => n.name === "Minyak goreng (bumbu)")!;
>>>>>>> f9b8045 (Update semua)

const byCategory = (cat: Nutrient["category"]) =>
  NUTRIENTS.filter((n) => n.category === cat);

/** Satu hidangan siap saji hasil kombinasi bahan. */
export interface Meal {
  slot: string;
  dish: string;
  items: string[];
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
  parts: Array<{ item: Nutrient; grams: number }>,
): Meal {
  let kcal = 0;
  let protein = 0;
  let karbo = 0;
  let lemak = 0;
  const items: string[] = [];
  for (const { item, grams } of parts) {
    const f = grams / 100;
    kcal += item.kcal * f;
    protein += item.protein * f;
    karbo += item.karbo * f;
    lemak += item.lemak * f;
    items.push(`${item.name} ${Math.round(grams)} g`);
  }
  return {
    slot,
    dish,
    items,
    kcal: round(kcal),
    protein: round(protein),
    karbo: round(karbo),
    lemak: round(lemak),
    emoji: parts[0]?.item.emoji ?? "🍽️",
  };
}

export type Profil = "sekolah" | "rumah-tangga" | "umum";

export const PROFIL_LABEL: Record<Profil, string> = {
  sekolah: "Kantin Sekolah",
  "rumah-tangga": "Ibu Rumah Tangga",
  umum: "Umum",
};

export interface GeneratedMenu {
  date: string;
  profil: Profil;
  meals: Meal[];
  totals: Totals;
  score: number;
  verdict: string;
  details: MacroDetail[];
}

/**
 * Bangun rencana menu harian otomatis.
 * `refreshCount` digeser setiap kali user menekan refresh sehingga bahan
 * yang terpilih berputar dan tidak mengulang kombinasi sebelumnya.
 */
export function generateMenu(profil: Profil, refreshCount = 0): GeneratedMenu {
  const r = Math.max(0, refreshCount);
  // Porsi dasar per profil (kali dari porsi standar bahan).
  const p = profil === "sekolah" ? 1.15 : profil === "rumah-tangga" ? 1.0 : 0.9;

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
  const karboSore = pick("karbo", r + 2);
  const laukMalam = pick("proteinHewani", r + 2);
  const nabatiMalam = pick("proteinNabati", r + 1);
  const karboMalam = pick("karbo", r + 3);

  // Berat dasar (gram) tiap bahan sebelum penyetelan proporsional.
  const base = (n: Nutrient, mult: number) => Math.round(n.portion * mult);

  /** Rakit ulang rencana menu dengan skala porsi karbo & protein tertentu. */
  const buildPlan = (cs: number, ps: number): Meal[] => [
    compose("Makan Pagi", "Sarapan pembuka energi", [
      { item: pagiKarbo, grams: base(pagiKarbo, 0.9 * p) * cs },
      { item: pagiLauk, grams: base(pagiLauk, 0.5 * p) * ps },
      { item: susuPagi, grams: susuPagi.portion },
      { item: cookingOil, grams: base(cookingOil, 0.55) },
    ]),
    compose("Makan Siang", "Piring utama bergizi seimbang", [
      { item: karboSiang, grams: base(karboSiang, 1.1 * p) * cs },
      { item: laukSiang, grams: base(laukSiang, 0.7 * p) * ps },
      { item: nabatiSiang, grams: base(nabatiSiang, 0.6 * p) * ps },
      { item: sayurSiang, grams: base(sayurSiang, 1.2 * p) },
      { item: cookingOil, grams: cookingOil.portion },
    ]),
    compose("Selingan Sore", "Jajanan sehat pengisi energi", [
      { item: karboSore, grams: base(karboSore, 0.5 * p) * cs },
      { item: sayurSore, grams: base(sayurSore, 0.8 * p) },
      { item: buahSore, grams: base(buahSore, 1.1 * p) },
    ]),
    compose("Makan Malam", "Makan malam hangat keluarga", [
      { item: karboMalam, grams: base(karboMalam, 1.0 * p) * cs },
      { item: laukMalam, grams: base(laukMalam, 0.6 * p) * ps },
      { item: nabatiMalam, grams: base(nabatiMalam, 0.45 * p) * ps },
      { item: cookingOil, grams: cookingOil.portion },
    ]),
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
    profil,
    meals,
    totals,
    score: cek.score,
    verdict: cek.verdict,
    details: cek.details,
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
<<<<<<< HEAD
    return { score: 0, verdict: "Menu masih kosong — buat menu dulu ya.", details: [] };
=======
    return {
      score: 0,
      verdict: "Menu masih kosong — buat menu dulu ya.",
      details: [],
    };
>>>>>>> f9b8045 (Update semua)
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
<<<<<<< HEAD
    { name: "karbo", pct: Math.round(pct(kcalKarbo)), lo: 55, hi: 65, score: Math.round(sKarbo * 100) },
    { name: "protein", pct: Math.round(pct(kcalProtein)), lo: 10, hi: 15, score: Math.round(sProtein * 100) },
    { name: "lemak", pct: Math.round(pct(kcalLemak)), lo: 20, hi: 30, score: Math.round(sLemak * 100) },
=======
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
>>>>>>> f9b8045 (Update semua)
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
