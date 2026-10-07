import { describe, expect, test } from "bun:test";
import { generateMenu } from "../src/lib/nutrition";
import {
  forwardChain,
  Karbo,
  KomposisiWajarLangsung,
  LayakEnergi,
  Lemak,
  MakroWajarNeg,
  PorsiWajar,
  predicateSummaryText,
  Protein,
  SeimbangMakro,
} from "../src/lib/predicates";

const menu = generateMenu(0);

describe("predikat atomik", () => {
  test("menu dari generator seimbang memenuhi Karbo ∧ Protein ∧ Lemak", () => {
    expect(Karbo(menu)).toBe(true);
    expect(Protein(menu)).toBe(true);
    expect(Lemak(menu)).toBe(true);
    expect(SeimbangMakro(menu)).toBe(true);
  });

  test("¬(¬Karbo ∨ ¬Protein ∨ ¬Lemak) ≡ Karbo ∧ Protein ∧ Lemak (De Morgan)", () => {
    expect(MakroWajarNeg(menu)).toBe(SeimbangMakro(menu));
  });

  test("LayakEnergi: kkal menu harian dalam pita 1400-3000", () => {
    expect(LayakEnergi(menu)).toBe(true);
    expect(menu.totals.kcal).toBeGreaterThanOrEqual(1400);
    expect(menu.totals.kcal).toBeLessThanOrEqual(3000);
  });

  test("PorsiWajar: kuantor ∀ atas 5 slot (tiap slot ≥ 20 kkal)", () => {
    expect(PorsiWajar(menu)).toBe(true);
    expect(menu.meals.every((m) => m.kcal >= 20)).toBe(true);
  });

  test("kuantor ∃: minimal satu slot bergizi", () => {
    expect(menu.meals.some((m) => m.kcal > 0)).toBe(true);
  });

  test("KomposisiWajar: semua golongan pangan hadir", () => {
    expect(KomposisiWajarLangsung(menu)).toBe(true);
  });
});

describe("forward chaining (modus ponens)", () => {
  test("menu seimbang → kesimpulan MenuLayakSajikan atau MenuSeimbang", () => {
    const r = forwardChain(menu);
    expect(r.balanced).toBe(true);
    expect(["MenuLayakSajikan", "MenuSeimbang"]).toContain(r.conclusion);
  });

  test("semua aturan R1-R5 ter-fire untuk menu seimbang", () => {
    const r = forwardChain(menu);
    const aktif = r.steps.filter((s) => s.fired).map((s) => s.id);
    for (const id of ["R1", "R2", "R3", "R4", "R5"]) {
      expect(aktif).toContain(id);
    }
  });

  test("menu kosong → R6 aktif → TidakSeimbang", () => {
    const kosong = {
      date: "2026-01-01",
      meals: [],
      totals: { kcal: 0, protein: 0, karbo: 0, lemak: 0 },
      score: 0,
      verdict: "",
      details: [],
    };
    const r = forwardChain(kosong);
    expect(r.conclusion).toBe("MenuTidakSeimbang");
    const r6 = r.steps.find((s) => s.id === "R6");
    expect(r6?.fired).toBe(true);
  });

  test("menu lemak timpang (40%) → MakroWajar tidak terderivasi", () => {
    const timpang = generateMenu(0);
    const skewed = {
      ...timpang,
      totals: { kcal: 2000, protein: 60, karbo: 250, lemak: 89 },
    };
    const r = forwardChain(skewed);
    expect(r.facts.MakroWajar).toBe(false);
    expect(r.facts.MenuSeimbang).toBe(false);
    expect(r.conclusion).toBe("MenuTidakSeimbang");
  });

  test("jejak inferensi bisa dicetak sebagai teks", () => {
    const txt = predicateSummaryText(menu);
    expect(txt).toContain("KESIMPULAN");
    expect(txt).toContain("R5");
  });
});
