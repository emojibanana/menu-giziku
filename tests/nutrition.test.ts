import { describe, expect, test } from "bun:test";
import {
  checkBalance,
  generateMenu,
  macroShares,
  PROFIL_LABEL,
  type Meal,
  type Profil,
  type Totals,
} from "../src/lib/nutrition";

const PROFILS: Profil[] = ["sekolah", "rumah-tangga", "umum"];

const SLOT_WAJIB = [
  "Makan Pagi",
  "Makan Siang",
  "Selingan Sore",
  "Makan Malam",
  "Selingan Buah",
];

function sumTotals(meals: Meal[]): Totals {
  return meals.reduce(
    (acc, m) => ({
      kcal: acc.kcal + m.kcal,
      protein: acc.protein + m.protein,
      karbo: acc.karbo + m.karbo,
      lemak: acc.lemak + m.lemak,
    }),
    { kcal: 0, protein: 0, karbo: 0, lemak: 0 },
  );
}

describe("generateMenu — menu harian otomatis", () => {
  test("menghasilkan 5 waktu makan sesuai slot wajib", () => {
    for (const p of PROFILS) {
      const menu = generateMenu(p, 0);
      expect(menu.meals).toHaveLength(5);
      expect(menu.meals.map((m) => m.slot)).toEqual(SLOT_WAJIB);
    }
  });

  test("setiap hidangan punya bahan bergram dan gizi valid", () => {
    const menu = generateMenu("sekolah", 3);
    for (const meal of menu.meals) {
      expect(meal.items.length).toBeGreaterThan(0);
      for (const item of meal.items) {
        expect(item).toMatch(/\d+ g$/);
      }
      expect(meal.kcal).toBeGreaterThanOrEqual(0);
      expect(meal.protein).toBeGreaterThanOrEqual(0);
      expect(meal.karbo).toBeGreaterThanOrEqual(0);
      expect(meal.lemak).toBeGreaterThanOrEqual(0);
    }
  });

  test("total kkal masuk rentang wajar untuk menu harian", () => {
    for (const p of PROFILS) {
      for (let r = 0; r < 4; r++) {
        const menu = generateMenu(p, r);
        const t = sumTotals(menu.meals);
        // Menu harian dewasa/anak sekolah: sekitar 1.400-2.500 kkal.
        expect(t.kcal).toBeGreaterThan(1400);
        expect(t.kcal).toBeLessThan(2500);
        // Total yang dihitung mesin harus konsisten dengan jumlah hidangan.
        expect(Math.abs(menu.totals.kcal - t.kcal)).toBeLessThan(1);
      }
    }
  });

  test("porsi kantin sekolah lebih besar dari profil umum", () => {
    const sekolah = generateMenu("sekolah", 1);
    const umum = generateMenu("umum", 1);
    expect(sekolah.totals.kcal).toBeGreaterThan(umum.totals.kcal);
  });

  test("label profil terdefinisi untuk semua profil", () => {
    for (const p of PROFILS) {
      expect(PROFIL_LABEL[p].length).toBeGreaterThan(0);
    }
  });
});

describe("refresh — kombinasi menu baru", () => {
  test("refresh menghasilkan kombinasi bahan yang berbeda", () => {
    const a = generateMenu("sekolah", 0);
    const b = generateMenu("sekolah", 1);
    const keyA = a.meals.map((m) => m.items.join("|")).join("#");
    const keyB = b.meals.map((m) => m.items.join("|")).join("#");
    expect(keyA).not.toEqual(keyB);
  });

  test("refreshCount sama menghasilkan menu yang identik (deterministik)", () => {
    const a = generateMenu("rumah-tangga", 5);
    const b = generateMenu("rumah-tangga", 5);
    expect(a.meals).toEqual(b.meals);
  });

  test("24 kombinasi (8 refresh x 3 profil) semuanya unik", () => {
    const seen = new Set<string>();
    for (let r = 0; r < 8; r++) {
      for (const p of PROFILS) {
        const menu = generateMenu(p, r);
        seen.add(menu.meals.map((m) => m.items.join("|")).join("#"));
      }
    }
    expect(seen.size).toBe(24);
  });
});

describe("checkBalance — cek gizi seimbang proporsional", () => {
  test("menu hasil generator selalu mendapat skor seimbang (>= 85)", () => {
    for (let r = 0; r < 6; r++) {
      for (const p of PROFILS) {
        const menu = generateMenu(p, r);
        expect(menu.score).toBeGreaterThanOrEqual(85);
        expect(menu.score).toBeLessThanOrEqual(100);
      }
    }
  });

  test("proporsi ideal mendapat skor sempurna", () => {
    // 60% karbo, 12% protein, 28% lemak dari 2000 kkal.
    const ideal: Totals = {
      kcal: 2000,
      karbo: Math.round((0.6 * 2000) / 4), // 300 g
      protein: Math.round((0.12 * 2000) / 4), // 60 g
      lemak: Math.round((0.28 * 2000) / 9), // 62 g
    };
    const hasil = checkBalance([], ideal);
    expect(hasil.score).toBe(100);
  });

  test("menu timpang karbo rendah terdeteksi tidak seimbang", () => {
    const timpang: Totals = {
      kcal: 2000,
      karbo: Math.round((0.2 * 2000) / 4), // karbo hanya 20%
      protein: Math.round((0.2 * 2000) / 4), // protein 20%
      lemak: Math.round((0.6 * 2000) / 9), // lemak 60%
    };
    const hasil = checkBalance([], timpang);
    expect(hasil.score).toBeLessThan(50);
    expect(hasil.verdict).toContain("Belum seimbang");
  });

  test("menu dengan kkal 0 memberi skor 0 dengan pesan khusus", () => {
    const kosong: Totals = { kcal: 0, protein: 0, karbo: 0, lemak: 0 };
    const hasil = checkBalance([], kosong);
    expect(hasil.score).toBe(0);
    expect(hasil.verdict).toContain("kosong");
  });
});

describe("macroShares — persentase makro", () => {
  test("proporsi ideal menghasilkan 60/12/28 persen kkal", () => {
    const shares = macroShares({
      kcal: 2000,
      karbo: 300,
      protein: 60,
      lemak: 62,
    });
    expect(shares.karbo).toBe(60);
    expect(shares.protein).toBe(12);
    expect(shares.lemak).toBe(28);
  });

  test("kkal 0 aman dibagi (tanpa NaN)", () => {
    const shares = macroShares({ kcal: 0, protein: 0, karbo: 0, lemak: 0 });
    expect(Number.isFinite(shares.karbo)).toBe(true);
    expect(shares.karbo).toBe(0);
  });
});
