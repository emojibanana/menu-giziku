# Flowchart Sistem Menu Giziku

## 1. User Journey (Navigasi)

```mermaid
flowchart TD
    A[Kunjungi Landing] --> B{Sudah login?}
    B -->|Tidak| C[Lihat Landing Page]
    C --> D[Klik 'Masuk']
    D --> E[Ke Auth Page]
    E --> F{Login berhasil?}
    F -->|Ya| G[Redirect ke Dashboard]
    F -->|Tidak| E
    B -->|Ya| G
    G --> H[Dashboard dibuka]
    H --> I[Lihat menu + jejak bukti]
    I --> J{Buat menu baru?}
    J -->|Ya| H
    J -->|Tidak| K[Keluar]
```

---

## 2. Menu Generation Flow (Generate Menu Harian & Keluarga)

```mermaid
flowchart TD
    A[User di Dashboard] --> B{Mode?}
    B -->|Individu| C[Pilih Profil<br/>usia/status/aktivitas]
    B -->|Keluarga| K[Input Anggota Keluarga<br/>usia per anggota]

    C --> D[generateMenu Profil]
    K --> L[tentukanKelompokUsia<br/>per anggota]
    L --> M[hitungKebutuhanKeluarga]
    M --> N[generateMenuKeluarga]

    D --> O[Ambil 5 bahan<br/>dari NUTRIENTS DB]
    N --> O

    O --> P["Slot 1: Pagi<br/>Slot 2: Siang<br/>Slot 3: Selingan Sore<br/>Slot 4: Malam<br/>Slot 5: Selingan Buah"]
    P --> Q[Hitung total:<br/>kcal, protein, karbo, lemak]
    Q --> R[Buat GeneratedMenu object]
    R --> S["{ meals: [...],<br/>totals: {...} }"]
    S --> T[Pass ke forwardChain]
```

---

## 3. Forward Chaining Evaluation (Predicate Logic)

```mermaid
flowchart TD
    A["Input: GeneratedMenu m"] --> B["Hitung Fakta Atomik"]
    B --> C["✓ AdaKarbo<br/>✓ AdaProtein<br/>✓ AdaSayur<br/>✓ AdaBuah<br/>✓ AdaOleinat<br/>✓ LayakEnergi<br/>✓ Karbo %<br/>✓ Protein %<br/>✓ Lemak %<br/>✓ PorsiWajar"]

    C --> D["R1: Golongan Pangan?"]
    D --> E{Semua 5 ada?}
    E -->|Ya| F["KomposisiWajar = true"]
    E -->|Tidak| G["KomposisiWajar = false"]

    F --> H["R2: Karbo & Protein OK?"]
    G --> H
    H --> I{Keduanya dalam range?}
    I -->|Ya| J["MakroCP = true"]
    I -->|Tidak| K["MakroCP = false"]

    J --> L["R3: Tambah Lemak OK?"]
    K --> L
    L --> M{Lemak juga dalam range?}
    M -->|Ya| N["MakroWajar = true"]
    M -->|Tidak| O["MakroWajar = false"]

    N --> P["R4: Semuanya Seimbang?"]
    O --> P
    P --> Q{"KomposisiWajar ∧<br/>MakroWajar ∧<br/>LayakEnergi?"}
    Q -->|Ya| R["MenuSeimbang = true"]
    Q -->|Tidak| S["MenuSeimbang = false"]

    R --> T["R5: Porsi Wajar?"]
    S --> T
    T --> U{"MenuSeimbang ∧<br/>PorsiWajar?"}
    U -->|Ya| V["✅ MenuLayakSajikan = true"]
    U -->|Tidak| W["MenuLayakSajikan = false"]

    V --> X["R6: Energi Tidak Layak?"]
    W --> X
    X --> Y{"¬LayakEnergi?"}
    Y -->|Ya| Z["❌ TidakSeimbang = true"]
    Y -->|Tidak| AA["TidakSeimbang = false"]

    Z --> AB["Kesimpulan:<br/>MenuTidakSeimbang"]
    V --> AC["Kesimpulan:<br/>MenuLayakSajikan"]
    AA --> AD["Kesimpulan:<br/>MenuSeimbang"]
```

---

## 4. Dashboard Display (UI Result)

```mermaid
flowchart TD
    A["PredicateReport dari<br/>forwardChain()"] --> B["Dashboard.tsx render"]
    B --> C["Tampilkan 5 Hidangan<br/>Pagi, Siang, Selingan Sore,<br/>Malam, Selingan Buah"]
    B --> D["Tampilkan Macro Bars<br/>Karbo %, Protein %, Lemak %<br/>warna: hijau/kuning/merah"]
    B --> E["Tampilkan Jejak Inferensi<br/>R1, R2, R3, R4, R5, R6<br/>status: FIRED / NOT FIRED"]
    B --> F["Tampilkan Kesimpulan<br/>✅ Layak / Seimbang<br/>❌ Tidak Seimbang"]
    B --> G["Tombol Save to DB<br/>simpan ke Convex"]

    C --> H["Cards per hidangan"]
    D --> I["Bar chart / progress"]
    E --> J["Step-by-step trace"]
    F --> K["Badge status"]
    G --> L["Success toast"]
```

---

## 5. Backend & Database Flow

```mermaid
flowchart TD
    A["Frontend:<br/>Dashboard.tsx"] -->|useMutation| B["Backend:<br/>Convex"]
    B --> C["saveMenu mutation"]
    C --> D["Insert ke table 'menus'<br/>name, date, profil,<br/>meals, totals, score"]
    D --> E["Simpan di DB"]
    E --> F["Return _id menu baru"]
    F -->|Success| G["Toast: Menu tersimpan"]

    H["User buka history"] -->|useQuery| I["Backend: getMenus query"]
    I --> J["Query table 'menus'<br/>filter by userId"]
    J --> K["Return daftar menu"]
    K --> L["Frontend render list"]
```

---

## 6. Alur Lengkap End-to-End

```mermaid
flowchart TD
    Start[User buka app] --> Landing["Landing Page<br/>(publik)"]
    Landing --> LoginCheck{"Sudah login?"}

    LoginCheck -->|Tidak| Auth["Auth Page<br/>Email OTP / Anonym"]
    Auth --> AuthOK["Login berhasil"]

    LoginCheck -->|Ya| AuthOK
    AuthOK --> Dashboard["Dashboard<br/>(protected)"]

    Dashboard --> SelectMode{"Mode?"}
    SelectMode -->|Individu| SelectProfile["Pilih Profil"]
    SelectMode -->|Keluarga| InputKeluarga["Input Anggota Keluarga"]

    SelectProfile --> GenerateMenuCall["generateMenu<br/>profil"]
    InputKeluarga --> KelUsia["tentukanKelompokUsia"]
    KelUsia --> KelHitung["hitungKebutuhanKeluarga"]
    KelHitung --> GenKeluarga["generateMenuKeluarga"]

    GenerateMenuCall --> GeneratedMenu["GeneratedMenu:<br/>5 meals +<br/>totals"]
    GenKeluarga --> GeneratedMenu

    GeneratedMenu --> ForwardChain["forwardChain<br/>GeneratedMenu"]
    ForwardChain --> R1["R1: Golongan?"]
    R1 --> R2["R2: Macro C+P?"]
    R2 --> R3["R3: Macro L?"]
    R3 --> R4["R4: Seimbang?"]
    R4 --> R5["R5: Porsi Wajar?"]
    R5 --> R6["R6: Energi Tidak Layak?"]

    R6 --> Report["PredicateReport<br/>steps + conclusion"]
    Report --> DashboardRender["Render Dashboard<br/>Menu + Macro +<br/>Jejak + Status"]

    DashboardRender --> UserAction{"User action?"}
    UserAction -->|Simpan Menu| SaveDB["saveMenu mutation<br/>→ Convex DB"]
    SaveDB --> Toast["✅ Toast"]

    UserAction -->|Lihat History| History["Query getMenus<br/>tampilkan list"]
    UserAction -->|Buat Baru| SelectProfile
    UserAction -->|Keluar| Logout["Logout"]
    Logout --> Landing

    Toast --> End[Done]
    History --> End
```

---

## 7. Legend

| Simbol   | Arti                |
| -------- | ------------------- |
| `→`      | Alur proses         |
| `{...}`  | Keputusan / kondisi |
| `✓`      | Berhasil / true     |
| `❌`     | Gagal / false       |
| `R1-R6`  | 6 aturan inferensi  |
| `Convex` | Backend database    |

---

Buka file ini dengan extension Mermaid di VS Code untuk melihat diagram visual secara langsung. 🎨
