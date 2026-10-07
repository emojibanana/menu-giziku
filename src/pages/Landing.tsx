import { motion } from "framer-motion";
import {
  ArrowRight,
  RefreshCw,
  Salad,
  Save,
  Scale,
  Sparkles,
  Users,
  Utensils,
} from "lucide-react";
import { Link } from "react-router";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function Landing() {
  return (
    <div className="min-h-screen overflow-x-clip">
      {/* Topbar */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 pt-6 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="clay-chip flex size-12 items-center justify-center bg-leaf-200 text-2xl">
            🥗
          </div>
          <span className="text-lg font-bold tracking-tight text-clay-800">
            Menu Giziku
          </span>
        </div>
        <Link
          to="/auth"
          className="clay-btn-soft px-5 py-2.5 text-sm font-bold text-clay-800"
        >
          Masuk
        </Link>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="clay-chip inline-flex items-center gap-2 bg-cream-100 px-4 py-1.5 text-xs font-bold text-clay-700">
            <Sparkles className="size-3.5 text-leaf-600" />
            Otomatis · Validasi Gizi · Gratis dipakai
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-clay-800 sm:text-5xl">
            Menu bergizi harian,{" "}
            <span className="text-leaf-600">tanpa pusing mikir.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-clay-600 sm:text-lg">
            Satu klik, langsung jadi menu harian lengkap — pagi, siang, sore,
            malam plus selingan — dengan cek gizi seimbang otomatis. Cocok untuk
            keluarga di rumah hingga keperluan umum.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/auth"
              className="clay-btn inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold"
            >
              Buat Menu Harian
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="#cara-kerja"
              className="clay-btn-soft inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold text-clay-800"
            >
              Lihat Cara Kerja
            </a>
          </div>
          <p className="mt-4 text-xs font-semibold text-clay-500">
            Tanpa kartu kredit · Cukup buka dan pakai
          </p>
        </motion.div>

        {/* Hero mockup: piring utama bergaya clay */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="clay-card p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-clay-500">
                  Rencana Hari Ini
                </p>
                <h3 className="mt-1 text-xl font-extrabold text-clay-800">
                  Menu Harian Otomatis
                </h3>
              </div>
              <span className="clay-chip inline-flex items-center gap-1.5 bg-leaf-200 px-4 py-2 text-sm font-extrabold text-leaf-700">
                🌟 Skor 92 · Seimbang
              </span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  e: "🌅",
                  t: "Makan Pagi",
                  d: "Nasi + telur + susu",
                  c: "bg-sunny-200",
                },
                {
                  e: "🍲",
                  t: "Makan Siang",
                  d: "Nasi + ayam + tahu + bayam",
                  c: "bg-leaf-200",
                },
                {
                  e: "🍎",
                  t: "Selingan",
                  d: "Pisang + yogurt",
                  c: "bg-berry-200",
                },
                {
                  e: "🌙",
                  t: "Makan Malam",
                  d: "Nasi merah + ikan + tempe",
                  c: "bg-sky-200",
                },
              ].map((m) => (
                <div key={m.t} className={`clay-inset p-4 ${m.c}`}>
                  <div className="text-2xl">{m.e}</div>
                  <p className="mt-2 text-sm font-extrabold text-clay-800">
                    {m.t}
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-relaxed text-clay-600">
                    {m.d}
                  </p>
                </div>
              ))}
            </div>
            <div className="clay-inset mt-5 flex flex-wrap items-center justify-between gap-3 bg-cream-100 p-4">
              <div className="flex gap-5">
                <div>
                  <p className="text-[11px] font-bold uppercase text-clay-500">
                    Energi
                  </p>
                  <p className="text-lg font-extrabold text-clay-800">
                    ±1.850 kkal
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase text-clay-500">
                    Karbo
                  </p>
                  <p className="text-lg font-extrabold text-leaf-600">60%</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase text-clay-500">
                    Protein
                  </p>
                  <p className="text-lg font-extrabold text-berry-600">14%</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase text-clay-500">
                    Lemak
                  </p>
                  <p className="text-lg font-extrabold text-sunny-600">26%</p>
                </div>
              </div>
              <span className="clay-chip inline-flex items-center gap-2 bg-white/70 px-4 py-2 text-xs font-bold text-clay-700">
                <RefreshCw className="size-3.5" /> Tekan refresh untuk kombinasi
                baru
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Cara kerja */}
      <section
        id="cara-kerja"
        className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8"
      >
        <motion.div {...fadeUp} className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-clay-800 sm:text-4xl">
            Tiga langkah, menu siap saji
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-clay-600">
            Dari bingung “mau masak apa” jadi rencana harian yang terukur.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Utensils,
              color: "bg-sunny-200 text-sunny-700",
              title: "1. Pilih profil dapur",
              desc: "Rumah tangga dan dapur umum — porsi menyesuaikan otomatis.",
            },
            {
              icon: RefreshCw,
              color: "bg-leaf-200 text-leaf-700",
              title: "2. Buat & refresh",
              desc: "Menu harian lengkap tersusun otomatis. Kurang pas? Refresh untuk kombinasi bahan baru.",
            },
            {
              icon: Scale,
              color: "bg-berry-200 text-berry-700",
              title: "3. Cek gizi seimbang",
              desc: "Skor keseimbangan dihitung dari proporsi karbo, protein, dan lemak — langsung terlihat.",
            },
          ].map((f) => (
            <motion.div key={f.title} {...fadeUp}>
              <div className="clay-card h-full p-7">
                <div
                  className={`clay-chip flex size-14 items-center justify-center ${f.color}`}
                >
                  <f.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-clay-800">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-clay-600">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fitur inti */}
      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Salad,
              color: "bg-leaf-200 text-leaf-700",
              title: "Cek gizi seimbang",
              desc: "Logika proporsional memeriksa porsi karbohidrat, protein, dan lemak terhadap rentang sehat (karbo 55–65%, protein 10–15%, lemak 20–30% kkal).",
            },
            {
              icon: RefreshCw,
              color: "bg-sunny-200 text-sunny-700",
              title: "Refresh menu baru",
              desc: "Setiap refresh memutar kombinasi bahan agar tidak ada kombinasi yang sama berulang — tanpa perlu mikir dari nol.",
            },
            {
              icon: Save,
              color: "bg-sky-200 text-sky-700",
              title: "Simpan menu favorit",
              desc: "Rencana yang sudah pas? Simpan sekali klik dan panggil ulang kapan pun dari daftar menu tersimpan.",
            },
            {
              icon: Users,
              color: "bg-berry-200 text-berry-700",
              title: "Untuk semua dapur",
              desc: "Porsi khusus kantin sekolah yang lebih besar, mode rumah tangga, dan mode umum — satu aplikasi untuk semuanya.",
            },
          ].map((f) => (
            <motion.div key={f.title} {...fadeUp}>
              <div className="clay-card flex h-full gap-5 p-7">
                <div
                  className={`clay-chip flex size-14 shrink-0 items-center justify-center ${f.color}`}
                >
                  <f.icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-clay-800">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-clay-600">
                    {f.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA akhir */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <motion.div {...fadeUp}>
          <div className="clay-card bg-leaf-200 p-10 text-center sm:p-14">
            <h2 className="text-3xl font-extrabold tracking-tight text-clay-800 sm:text-4xl">
              Berhenti mikir “masak apa hari ini?”
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-clay-700">
              Biarkan Menu Giziku menyusun menu bergizi harian untuk dapurmu —
              lengkap dengan cek keseimbangannya.
            </p>
            <Link
              to="/auth"
              className="clay-btn mt-8 inline-flex items-center gap-2 px-8 py-4 text-base font-bold"
            >
              Mulai Gratis
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-clay-400/30 py-8 text-center text-sm font-semibold text-clay-500">
        Menu Giziku · Menu harian otomatis dengan cek gizi seimbang
      </footer>
    </div>
  );
}
