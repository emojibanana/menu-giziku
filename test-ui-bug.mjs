import {
  generateMenuKeluarga,
  tentukanKelompokUsia,
} from "./src/lib/nutrition.ts";
import { forwardChain } from "./src/lib/predicates.ts";

const anggota = [
  { id: "1", nama: "Ayah", usia: 35, kelompok: tentukanKelompokUsia(35) },
  { id: "2", nama: "Ibu", usia: 33, kelompok: tentukanKelompokUsia(33) },
  { id: "3", nama: "Anak 1", usia: 8, kelompok: tentukanKelompokUsia(8) },
  { id: "4", nama: "Anak 2", usia: 5, kelompok: tentukanKelompokUsia(5) },
  { id: "5", nama: "Bayi", usia: 2, kelompok: tentukanKelompokUsia(2) },
];

console.log("\n=== Test: Menu Keluarga 5 Orang ===");
const menu = generateMenuKeluarga(anggota, 0);

console.log(`Total kalori: ${menu.totals.kcal} kkal`);
console.log(`Jumlah anggota: ${anggota.length}`);
console.log(
  `Rata-rata per orang: ${(menu.totals.kcal / anggota.length).toFixed(0)} kkal`,
);
console.log(`Score (dari checkBalance): ${menu.score}`);

// Simulasi exact seperti di Dashboard.tsx line 212
const proof = forwardChain({ ...menu, jumlahAnggota: anggota.length });

console.log(`\nForwardChain hasil:`);
console.log(`  proof.balanced: ${proof.balanced}`);
console.log(
  `  LayakEnergi: ${proof.steps.find((s) => s.fact === "LayakEnergi")?.value}`,
);
console.log(`\nSummary: ${proof.summary}`);
console.log(`\nJejak inferensi:`);
proof.steps.forEach((s) => {
  console.log(`  [${s.fact}] = ${s.value} — ${s.reason}`);
});
