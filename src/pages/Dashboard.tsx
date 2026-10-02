import { useAuth } from "@/hooks/use-auth";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { api } from "@/convex/_generated/api";
import type { Doc, Id } from "@/convex/_generated/dataModel";
import {
  checkBalance,
  generateMenu,
  macroShares,
  PROFIL_LABEL,
  type Meal,
  type Profil,
} from "@/lib/nutrition";
import { forwardChain } from "@/lib/predicates";
import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  ChefHat,
  ChevronDown,
  ChevronUp,
  Copy,
  ListChecks,
  LogOut,
  RefreshCw,
  Save,
  Sigma,
  Trash2,
  Utensils,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const MEAL_TINT: Record<string, string> = {
  "Makan Pagi": "bg-sunny-200",
  "Makan Siang": "bg-leaf-200",
  "Selingan Sore": "bg-berry-200",
  "Makan Malam": "bg-sky-200",
  "Selingan Buah": "bg-leaf-100",
};

const PROFILS: Profil[] = ["sekolah", "rumah-tangga", "umum"];

const MACRO_LABEL: Record<"karbo" | "protein" | "lemak", string> = {
  karbo: "Karbohidrat",
  protein: "Protein",
  lemak: "Lemak",
};

function scoreTint(score: number) {
  if (score >= 85)
    return { chip: "bg-leaf-200 text-leaf-700", bar: "bg-leaf-500" };
  if (score >= 70)
    return { chip: "bg-sunny-200 text-sunny-700", bar: "bg-sunny-500" };
  return { chip: "bg-berry-200 text-berry-700", bar: "bg-berry-500" };
}

function MacroBar({
  label,
  value,
  lo,
  hi,
  bar,
}: {
  label: string;
  value: number;
  lo: number;
  hi: number;
  bar: string;
}) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div>
      <div className="flex items-baseline justify-between text-xs font-bold">
        <span className="text-clay-700">{label}</span>
        <span
          className={
            value >= lo && value <= hi ? "text-leaf-600" : "text-berry-600"
          }
        >
          {value}%{" "}
          <span className="font-semibold text-clay-500">
            (target {lo}–{hi}%)
          </span>
        </span>
      </div>
      <div className="clay-inset mt-1.5 h-4 w-full bg-cream-200 p-0">
        <div
          className={`h-full rounded-full ${bar} transition-all duration-700`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function MealCard({ meal, index }: { meal: Meal; index: number }) {
  const tint = MEAL_TINT[meal.slot] ?? "bg-cream-200";
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
    >
      <div className={`clay-inset h-full p-5 ${tint}`}>
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-clay-600">
            {meal.slot}
          </span>
          <span className="clay-chip bg-white/70 px-2.5 py-1 text-[11px] font-bold text-clay-700">
            {meal.kcal} kkal
          </span>
        </div>
        <p className="mt-2 text-lg font-extrabold leading-snug text-clay-800">
          <span className="mr-1.5">{meal.emoji}</span>
          {meal.dish}
        </p>
        <ul className="mt-3 space-y-1">
          {meal.items.map((it) => (
            <li
              key={it}
              className="flex items-center gap-1.5 text-xs font-semibold text-clay-700"
            >
              <span className="size-1.5 rounded-full bg-clay-500/50" />
              {it}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[11px] font-bold text-clay-500">
          P {meal.protein} g · K {meal.karbo} g · L {meal.lemak} g
        </p>
      </div>
    </motion.div>
  );
}

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const [profil, setProfil] = useState<Profil>("sekolah");
  const [refreshCount, setRefreshCount] = useState(0);
  const [formulaOpen, setFormulaOpen] = useState(false);
  const [savingOpen, setSavingOpen] = useState(false);
  const [saveName, setSaveName] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const menu = useMemo(
    () => generateMenu(profil, refreshCount),
    [profil, refreshCount],
  );
  const shares = macroShares(menu.totals);
  const tint = scoreTint(menu.score);
  // Hitung ulang cek gizi untuk mendapatkan rincian rumus per makro.
  const cekDetail = useMemo(
    () => checkBalance(menu.meals, menu.totals),
    [menu],
  );

  // Logika predikat: forward chaining atas menu aktif (fakta → aturan → kesimpulan).
  const proof = useMemo(() => forwardChain(menu), [menu]);
  const savedMenus = (useQuery(api.menus.list) ?? []) as Array<
    Doc<"menus"> & { _id: Id<"menus"> }
  >;
  const saveMenu = useMutation(api.menus.save);
  const removeMenu = useMutation(api.menus.remove);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleSave = async () => {
    const name = saveName.trim() || `Menu ${PROFIL_LABEL[profil]} ${menu.date}`;
    setIsSaving(true);
    try {
      await saveMenu({
        name,
        date: menu.date,
        profil,
        meals: menu.meals,
        totals: menu.totals,
        score: menu.score,
      });
      toast.success("Menu tersimpan!", {
        description: `"${name}" ada di daftar menu tersimpan.`,
      });
      setSavingOpen(false);
      setSaveName("");
    } catch {
      toast.error("Gagal menyimpan menu. Coba lagi ya.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleCopy = async () => {
    const text = [
      `Menu Harian ${PROFIL_LABEL[profil]} — ${menu.date}`,
      `Skor keseimbangan: ${menu.score}/100 (${menu.verdict})`,
      "",
      ...menu.meals.map(
        (m) => `${m.slot}: ${m.dish}\n  - ${m.items.join("\n  - ")}`,
      ),
      "",
      `Total: ${menu.totals.kcal} kkal · Karbo ${shares.karbo}% · Protein ${shares.protein}% · Lemak ${shares.lemak}%`,
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Menu dikopi ke clipboard.");
    } catch {
      toast.error("Browser menolak akses clipboard.");
    }
  };

  const savedTyped = savedMenus;

  return (
    <div className="min-h-screen">
      {/* Topbar */}
      <header className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 pt-6 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="clay-chip flex size-11 items-center justify-center bg-leaf-200 text-xl">
            🥗
          </div>
          <div>
            <p className="text-sm font-extrabold leading-tight text-clay-800">
              Menu Giziku
            </p>
            <p className="text-[11px] font-semibold text-clay-500">
              Hai{user?.name ? `, ${user.name}` : ""}! Siap masak apa hari ini?
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleSignOut}
          className="clay-btn-soft inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-clay-800"
        >
          <LogOut className="size-3.5" />
          Keluar
        </button>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 sm:px-8">
        {/* Kontrol generator */}
        <section className="clay-card p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="flex items-center gap-2 text-2xl font-extrabold text-clay-800 sm:text-3xl">
                <ChefHat className="size-7 text-leaf-600" />
                Buat Menu Harian
              </h1>
              <p className="mt-1.5 max-w-md text-sm font-semibold text-clay-600">
                Pilih profil dapur, lalu tekan buat. Kurang pas? Refresh —
                kombinasi bahan langsung diputar.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {PROFILS.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setProfil(p)}
                  className={`clay-btn-soft px-4 py-2.5 text-xs font-extrabold transition-colors ${
                    profil === p ? "bg-leaf-500! text-white!" : "text-clay-700"
                  }`}
                >
                  {PROFIL_LABEL[p]}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setRefreshCount((c) => c + 1)}
              className="clay-btn inline-flex items-center gap-2 px-7 py-3.5 text-sm font-extrabold"
            >
              <RefreshCw className="size-4" />
              {refreshCount === 0 ? "Buat Menu Harian" : "Refresh Menu Baru"}
            </button>
            <button
              type="button"
              onClick={() => setSavingOpen(true)}
              className="clay-btn-soft inline-flex items-center gap-2 px-6 py-3.5 text-sm font-extrabold text-clay-800"
            >
              <Save className="size-4" />
              Simpan Menu
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="clay-btn-soft inline-flex items-center gap-2 px-6 py-3.5 text-sm font-extrabold text-clay-800"
            >
              <Copy className="size-4" />
              Kopi Menu
            </button>
            <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold text-clay-500">
              <CalendarDays className="size-3.5" />
              {menu.date}
            </span>
          </div>
        </section>

        {/* Cek gizi seimbang */}
        <section className="clay-card mt-6 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-clay-800">
              <ListChecks className="size-5 text-leaf-600" />
              Cek Gizi Seimbang
            </h2>
            <span
              className={`clay-chip px-4 py-2 text-sm font-extrabold ${tint.chip}`}
            >
              🌟 Skor {menu.score}/100
            </span>
          </div>
          <p className="mt-2 text-sm font-semibold text-clay-600">
            {menu.verdict}
          </p>

          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            <MacroBar
              label="Karbohidrat"
              value={shares.karbo}
              lo={55}
              hi={65}
              bar="bg-leaf-500"
            />
            <MacroBar
              label="Protein"
              value={shares.protein}
              lo={10}
              hi={15}
              bar="bg-berry-500"
            />
            <MacroBar
              label="Lemak"
              value={shares.lemak}
              lo={20}
              hi={30}
              bar="bg-sunny-500"
            />
          </div>

          <div className="clay-inset mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 bg-cream-100 p-4 text-sm font-extrabold text-clay-800">
            <span>
              Total Energi{" "}
              <span className="text-leaf-600">{menu.totals.kcal} kkal</span>
            </span>
            <span>
              Protein{" "}
              <span className="text-berry-600">{menu.totals.protein} g</span>
            </span>
            <span>
              Karbo <span className="text-leaf-600">{menu.totals.karbo} g</span>
            </span>
            <span>
              Lemak{" "}
              <span className="text-sunny-600">{menu.totals.lemak} g</span>
            </span>
          </div>

          {/* Penjelasan logika proporsional + rumus */}
          <button
            type="button"
            onClick={() => setFormulaOpen((v) => !v)}
            className="clay-btn-soft mt-5 inline-flex w-full items-center justify-between px-5 py-3 text-left text-sm font-extrabold text-clay-800"
          >
            <span className="inline-flex items-center gap-2">
              <Sigma className="size-4 text-leaf-600" />
              Bagaimana skor ini dihitung? — Logika Proporsional
            </span>
            {formulaOpen ? (
              <ChevronUp className="size-4 shrink-0" />
            ) : (
              <ChevronDown className="size-4 shrink-0" />
            )}
          </button>
          {formulaOpen && (
            <div className="clay-inset mt-3 space-y-4 bg-cream-100 p-5 text-sm text-clay-700">
              <p className="font-semibold leading-relaxed">
                Sistem memakai{" "}
                <span className="font-extrabold text-clay-800">
                  logika proporsional
                </span>
                : menu dinilai seimbang bila proporsi energi tiap makronutrien
                berada di rentang sehat pedoman gizi seimbang — karbohidrat
                55–65%, protein 10–15%, lemak 20–30% dari total kkal.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {cekDetail.details.map((d) => (
                  <div key={d.name} className="clay-chip bg-white/70 px-4 py-3">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-clay-500">
                      {MACRO_LABEL[d.name]}
                    </p>
                    <p className="mt-1 text-lg font-extrabold text-clay-800">
                      {d.pct}%
                      <span className="ml-1 text-xs font-bold text-clay-500">
                        (target {d.lo}–{d.hi}%)
                      </span>
                    </p>
                    <p
                      className={`mt-0.5 text-xs font-extrabold ${
                        d.score >= 70
                          ? "text-leaf-600"
                          : d.score >= 40
                            ? "text-sunny-600"
                            : "text-berry-600"
                      }`}
                    >
                      skor makro: {d.score}/100
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 rounded-2xl bg-white/70 p-4">
                <p className="text-xs font-extrabold uppercase tracking-wider text-clay-500">
                  Rumus lengkap (5 langkah)
                </p>

                <div>
                  <p className="text-sm font-extrabold text-clay-800">
                    Langkah 1 — Total gram tiap makro dari porsi bahan
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-relaxed text-clay-600">
                    Setiap bahan punya nilai gizi per 100 g (database TKPI).
                    Gizi satu bahan = nilai × (gram bahan ÷ 100), lalu
                    dijumlahkan dari semua bahan di 5 waktu makan.
                  </p>
                  <div className="mt-2 space-y-1 font-mono text-[11px] leading-relaxed text-clay-700">
                    <p>protein_g = Σ ( protein_per100 × gram ÷ 100 )</p>
                    <p>karbo_g = Σ ( karbo_per100 × gram ÷ 100 )</p>
                    <p>lemak_g = Σ ( lemak_per100 × gram ÷ 100 )</p>
                  </div>
                  <p className="mt-1.5 text-[11px] font-bold text-clay-500">
                    Menu kamu sekarang: protein {menu.totals.protein} g · karbo{" "}
                    {menu.totals.karbo} g · lemak {menu.totals.lemak} g
                  </p>
                </div>

                <div>
                  <p className="text-sm font-extrabold text-clay-800">
                    Langkah 2 — Energi tiap makro (faktor Atwater 4-4-9)
                  </p>
                  <div className="mt-2 space-y-1 font-mono text-[11px] leading-relaxed text-clay-700">
                    <p>
                      E_karbo = karbo_g × 4 kkal ={" "}
                      {Math.round(menu.totals.karbo * 4)} kkal
                    </p>
                    <p>
                      E_protein = protein_g × 4 kkal ={" "}
                      {Math.round(menu.totals.protein * 4)} kkal
                    </p>
                    <p>
                      E_lemak = lemak_g × 9 kkal ={" "}
                      {Math.round(menu.totals.lemak * 9)} kkal
                    </p>
                    <p>
                      E_total = {menu.totals.kcal} kkal (jumlah kkal seluruh
                      bahan; bila kosong dipakai 4P + 4K + 9L)
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-extrabold text-clay-800">
                    Langkah 3 — Proporsi energi tiap makro
                  </p>
                  <div className="mt-2 space-y-1 font-mono text-[11px] leading-relaxed text-clay-700">
                    <p>p_i = E_i ÷ E_total × 100%</p>
                    <p>p_karbo = {shares.karbo}% (target 55–65%)</p>
                    <p>p_protein = {shares.protein}% (target 10–15%)</p>
                    <p>p_lemak = {shares.lemak}% (target 20–30%)</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-extrabold text-clay-800">
                    Langkah 4 — Skor tiap makro (fungsi pita, 0–100)
                  </p>
                  <div className="mt-2 space-y-1 font-mono text-[11px] leading-relaxed text-clay-700">
                    <p>s_i = 100 jika lo ≤ p_i ≤ hi</p>
                    <p>
                      s_i = max(0, 100 − (d ÷ L) × 100) jika p_i di luar rentang
                    </p>
                    <p>d = jarak p_i ke tepi rentang terdekat</p>
                    <p>L = lebar rentang = hi − lo</p>
                  </div>
                  <p className="mt-1.5 text-[11px] font-semibold leading-relaxed text-clay-600">
                    Artinya: selama proporsi ada di pita sehat, skornya penuh
                    (100). Di luar pita, skor menurun linier — meleset satu
                    lebar rentang penuh berarti skor 0. Contoh rentang lemak (L
                    = 30 − 20 = 10): meleset 5 poin → skor 50.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-extrabold text-clay-800">
                    Langkah 5 — Skor menu & kesimpulan
                  </p>
                  <div className="mt-2 space-y-1 font-mono text-[11px] leading-relaxed text-clay-700">
                    <p>Skor menu = ( s_karbo + s_protein + s_lemak ) ÷ 3</p>
                  </div>
                  <ul className="mt-2 space-y-1 text-[11px] font-bold text-clay-600">
                    <li>• Skor 85–100 → “Seimbang! Proporsi makro pas.”</li>
                    <li>• Skor 70–84 → “Cukup seimbang.”</li>
                    <li>• Skor &lt; 70 → “Belum seimbang — refresh menu.”</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl bg-white/70 p-4">
                <p className="text-xs font-extrabold uppercase tracking-wider text-clay-500">
                  Contoh hitung end-to-end (angka riil menu di atas)
                </p>
                <ol className="mt-2 space-y-1 text-xs font-semibold leading-relaxed text-clay-700">
                  <li>
                    1) Gram gram makro sudah terkumpul: protein{" "}
                    {menu.totals.protein} g, karbo {menu.totals.karbo} g, lemak{" "}
                    {menu.totals.lemak} g (Langkah 1).
                  </li>
                  <li>
                    2) Energi: 4 × {menu.totals.karbo} + 4 ×{" "}
                    {menu.totals.protein} + 9 × {menu.totals.lemak} ={" "}
                    {Math.round(
                      4 * menu.totals.karbo +
                        4 * menu.totals.protein +
                        9 * menu.totals.lemak,
                    )}{" "}
                    kkal ≈ total {menu.totals.kcal} kkal (Langkah 2).
                  </li>
                  <li>
                    3) Proporsi: karbo {shares.karbo}%, protein {shares.protein}
                    %, lemak {shares.lemak}% (Langkah 3).
                  </li>
                  <li>
                    4) Skor makro: s_karbo ={" "}
                    {cekDetail.details.find((d) => d.name === "karbo")?.score ??
                      0}{" "}
                    · s_protein ={" "}
                    {cekDetail.details.find((d) => d.name === "protein")
                      ?.score ?? 0}{" "}
                    · s_lemak ={" "}
                    {cekDetail.details.find((d) => d.name === "lemak")?.score ??
                      0}{" "}
                    (Langkah 4).
                  </li>
                  <li>
                    5) Skor menu = (
                    {cekDetail.details.find((d) => d.name === "karbo")?.score ??
                      0}{" "}
                    +{" "}
                    {cekDetail.details.find((d) => d.name === "protein")
                      ?.score ?? 0}{" "}
                    +{" "}
                    {cekDetail.details.find((d) => d.name === "lemak")?.score ??
                      0}
                    ) ÷ 3 ={" "}
                    <span className="font-extrabold text-leaf-700">
                      {menu.score}/100
                    </span>{" "}
                    → {menu.verdict} (Langkah 5).
                  </li>
                </ol>
                <div className="mt-3 space-y-2 border-t border-clay-400/30 pt-3 text-xs font-semibold leading-relaxed text-clay-600">
                  <p>
                    Contoh hipotesis: bila lemak mencapai 36% (meleset 6 poin
                    dari batas 30%, lebar rentang L = 30 − 20 = 10) → skor lemak
                    = 100 − (6 ÷ 10) × 100 = <b>40</b>; bila karbo dan protein
                    tetap di rentang sehat (100 keduanya), skor menu = (100 +
                    100 + 40) ÷ 3 = <b>80</b> → “Cukup seimbang.”
                  </p>
                  <p>
                    Penyusun menu otomatis memakai penyetel proporsional: skala
                    porsi karbo (cs) dan lauk-pauk (ps) digeser bertahap
                    (×0,96–×1,04 per iterasi, maksimum 80 iterasi) sampai
                    proporsi masuk pita lebih ketat dari target cek — karbo
                    57–63%, protein 11–14%, lemak 21–29% — sehingga kombinasi
                    yang muncul selalu lolos Langkah 4–5.
                  </p>
                  <p>
                    Angka gizi per 100 g bersumber dari TKPI (Tabel Komposisi
                    Pangan Indonesia) untuk perencanaan menu, bukan diagnosis
                    medis.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Logika predikat — jejak inferensi */}
        <section className="clay-card mt-6 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-clay-800">
              <ListChecks className="size-5 text-leaf-600" />
              Logika Predikat — Jejak Inferensi
            </h2>
            <span
              className={`clay-chip px-4 py-2 text-xs font-extrabold ${
                proof.balanced
                  ? "bg-leaf-200 text-leaf-700"
                  : "bg-berry-200 text-berry-700"
              }`}
            >
              {proof.conclusion === "MenuLayakSajikan"
                ? "✅ MenuLayakSajikan(m)"
                : proof.conclusion === "MenuSeimbang"
                  ? "✅ MenuSeimbang(m)"
                  : "❌ MenuTidakSeimbang(m)"}
            </span>
          </div>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-clay-600">
            {proof.summary}
          </p>
          <div className="mt-4 space-y-2">
            {proof.steps.map((s) => (
              <div
                key={s.id}
                className={`clay-chip flex flex-wrap items-center gap-2 px-4 py-2.5 text-xs font-bold ${
                  s.fired
                    ? "bg-leaf-100 text-clay-800"
                    : "bg-cream-200 text-clay-500"
                }`}
              >
                <span className="font-extrabold">{s.id}</span>
                <span className="font-mono text-[11px]">{s.formula}</span>
                <span className="ml-auto">
                  {s.fired ? "✓ aktif" : "— tidak aktif"}
                </span>
              </div>
            ))}
          </div>

          <div className="clay-inset mt-4 bg-cream-100 p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-clay-500">
              Fakta (predikat atomik yang bernilai benar)
            </p>
            <p className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs font-bold text-clay-700">
              {Object.entries(proof.facts)
                .filter(([, v]) => v)
                .map(([k]) => (
                  <span key={k} className="font-mono">
                    {k} = benar
                  </span>
                ))}
            </p>
          </div>
        </section>

        {/* Menu harian */}
        <section className="mt-6">
          <h2 className="flex items-center gap-2 px-1 text-xl font-extrabold text-clay-800">
            <Utensils className="size-5 text-leaf-600" />
            Menu Harian — {PROFIL_LABEL[profil]}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {menu.meals.map((m, i) => (
              <MealCard key={m.slot + i} meal={m} index={i} />
            ))}
          </div>
        </section>

        {/* Menu tersimpan */}
        <section className="mt-10">
          <h2 className="flex items-center gap-2 px-1 text-xl font-extrabold text-clay-800">
            <Save className="size-5 text-sky-600" />
            Menu Tersimpan
            <span className="clay-chip bg-sky-200 px-3 py-1 text-xs font-extrabold text-sky-700">
              {savedTyped.length}
            </span>
          </h2>
          {savedTyped.length === 0 ? (
            <div className="clay-card mt-4 p-8 text-center">
              <p className="text-3xl">📭</p>
              <p className="mt-3 text-sm font-bold text-clay-800">
                Belum ada menu tersimpan
              </p>
              <p className="mt-1 text-xs font-semibold text-clay-500">
                Buat menu harian, lalu tekan “Simpan Menu” untuk menyimpannya di
                sini.
              </p>
            </div>
          ) : (
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {savedTyped.map((m) => {
                const st = scoreTint(m.score);
                return (
                  <div key={m._id} className="clay-card p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="text-base font-extrabold text-clay-800">
                          {m.name}
                        </p>
                        <p className="mt-0.5 text-[11px] font-bold text-clay-500">
                          {PROFIL_LABEL[m.profil as Profil] ?? m.profil} ·{" "}
                          {m.date} · {m.totals.kcal} kkal
                        </p>
                      </div>
                      <span
                        className={`clay-chip px-3 py-1 text-xs font-extrabold ${st.chip}`}
                      >
                        {m.score}/100
                      </span>
                    </div>
                    <ul className="mt-3 space-y-1">
                      {m.meals.map((mm) => (
                        <li
                          key={mm.slot}
                          className="flex items-center gap-1.5 text-xs font-semibold text-clay-700"
                        >
                          <CheckCircle2 className="size-3.5 shrink-0 text-leaf-500" />
                          <span className="font-extrabold">{mm.slot}:</span>
                          {mm.dish}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-[11px] font-bold text-clay-500">
                        P {m.totals.protein} g · K {m.totals.karbo} g · L{" "}
                        {m.totals.lemak} g
                      </p>
                      <button
                        type="button"
                        onClick={async () => {
                          try {
                            await removeMenu({ id: m._id });
                            toast.success("Menu dihapus.");
                          } catch {
                            toast.error("Gagal menghapus menu.");
                          }
                        }}
                        className="clay-chip inline-flex items-center gap-1.5 bg-berry-100 px-3 py-1.5 text-xs font-extrabold text-berry-700"
                      >
                        <Trash2 className="size-3.5" />
                        Hapus
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>

      {/* Dialog simpan */}
      <Dialog open={savingOpen} onOpenChange={setSavingOpen}>
        <DialogContent className="clay-pop max-w-sm border-0 p-7 [&>button]:rounded-full">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold text-clay-800">
              Simpan Menu Ini
            </DialogTitle>
            <DialogDescription className="text-sm font-semibold text-clay-600">
              Beri nama agar mudah dicari lagi nanti.
            </DialogDescription>
          </DialogHeader>
          <Input
            value={saveName}
            onChange={(e) => setSaveName(e.target.value)}
            placeholder={`Menu ${PROFIL_LABEL[profil]} ${menu.date}`}
            className="clay-inset h-11 rounded-2xl border-0 bg-cream-100 px-4 text-sm font-bold text-clay-800 placeholder:text-clay-400 focus-visible:ring-leaf-500"
          />
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="clay-btn w-full py-3.5 text-sm font-extrabold disabled:opacity-60"
          >
            {isSaving ? "Menyimpan..." : "Simpan ke Daftar Menu"}
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
