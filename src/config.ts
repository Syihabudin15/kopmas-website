export const BRAND = {
  name: "Koperasi Jasa Mahardika Artha Sejahtera",
  tagline: "Bersama Tumbuh Sejahtera",
  shortname: "KOPMAS",
  nib: "1004250064076",
  kbli: ["66292", "47112"],
  phone: "082110225036",
  phoneDisplay: "0821-1022-5036",
  email: "mahardikarthasejahtera@gmail.com",
  address: {
    line1: "Plaza Marche No SH-A 19, The Shila Sawangan",
    line2: "Jl. Raya Bojongsari No. 53, Sawangan",
    line3: "Kec. Sawangan, Kota Depok, Jawa Barat 16511",
    pos: "16511",
  },
};

export const LEGAL_INFO = [
  {
    num: "NIB",
    label: "Nomor Induk Berusaha",
    highlight: "1004250064076",
    desc: "Terdaftar pada sistem OSS Pemerintah RI",
  },
  {
    num: "66292",
    label: "KBLI Jasa Keuangan",
    highlight: null,
    desc: "Aktivitas jasa keuangan lainnya — pembiayaan pensiun & UMKM",
  },
  {
    num: "47112",
    label: "KBLI Perdagangan",
    highlight: null,
    desc: "Perdagangan eceran barang — pengiriman barang mitra logistik",
  },
];

export const MITRA = [
  {
    name: "Lion Parcel",
    abbr: "LP",
    color: "#E8340A",
    desc: "Mitra Pengiriman Resmi",
    type: "logistik",
  },
  {
    name: "Taspen",
    abbr: "TP",
    color: "#1B5E20",
    desc: "Dana Pensiun PNS",
    type: "pensiun",
  },
  {
    name: "BPJS Ketenagakerjaan",
    abbr: "BK",
    color: "#00529B",
    desc: "Jaminan Sosial",
    type: "jaminan",
  },
  {
    name: "Pos Indonesia",
    abbr: "PI",
    color: "#F57C00",
    desc: "Layanan Pos & Logistik",
    type: "logistik",
  },
  {
    name: "Bank BRI",
    abbr: "BR",
    color: "#003087",
    desc: "Mitra Perbankan",
    type: "perbankan",
  },
  {
    name: "Kemenkop UKM",
    abbr: "KU",
    color: "#8B0000",
    desc: "Kementerian Koperasi",
    type: "regulasi",
  },
];

export const PRODUCTS = [
  {
    id: "sendiri",
    badge: "Pensiun Sendiri",
    icon: "👴",
    headerBg: "#0f2244",
    headerColor: "rgba(255,255,255,0.65)",
    accentColor: "#c9a84c",
    accentBg: "rgba(201,168,76,0.18)",
    plafonColor: "#c9a84c",
    desc: "Pembiayaan bagi pensiunan aktif yang ingin memenuhi kebutuhan finansial pribadi dengan ketentuan khusus.",
    specs: [
      { label: "Rentang Usia", value: "69 – 85 Tahun" },
      { label: "Tenor Maksimal", value: "180 Bulan (15 Tahun)" },
      { label: "Plafon Maksimal", value: "Rp 200.000.000" },
    ],
    highlight: true,
  },
  {
    id: "terusan",
    badge: "Pensiun Terusan",
    icon: "👩‍👧",
    headerBg: "#e8eef8",
    headerColor: "#64748b",
    accentColor: "#1a3460",
    accentBg: "rgba(26,52,96,0.1)",
    plafonColor: "#1a3460",
    desc: "Pembiayaan untuk ahli waris/penerima manfaat pensiun terusan yang membutuhkan dukungan finansial.",
    specs: [
      { label: "Rentang Usia", value: "55 – 65 Tahun" },
      { label: "Tenor Maksimal", value: "120 Bulan (10 Tahun)" },
      { label: "Plafon Maksimal", value: "Rp 100.000.000" },
    ],
    highlight: false,
  },
];

export const SERVICES = [
  {
    icon: "🏦",
    kbli: "KBLI 66292",
    title: "Pembiayaan Pensiun",
    desc: "Layanan pembiayaan khusus pensiunan dengan proses mudah, cepat, dan bunga kompetitif.",
    tag: "✓ Proses Cepat & Mudah",
  },
  {
    icon: "💼",
    kbli: "KBLI 47112",
    title: "Perdagangan",
    desc: "Perdagangan eceran barang — solusi pengiriman barang mitra logistik",
    tag: "✓ Proses Cepat & Mudah",
  },
];
