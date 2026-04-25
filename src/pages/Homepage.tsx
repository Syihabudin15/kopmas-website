import { useState, useEffect, useRef, useCallback } from "react";
import AboutsPage from "../components/Abouts";
import ProductsPage from "../components/Products";
import PartnersPage from "../components/Partners";
import ContactsPage from "../components/Contacts";

export default function Homepage() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((idx: number) => {
    setSlide((idx + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => goTo(slide + 1), 4500);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [slide, paused, goTo]);

  useEffect(() => {
    const anchors =
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchors.forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        document
          .querySelector(a.getAttribute("href") ?? "")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }, []);

  const cur = SLIDES[slide];

  return (
    <div>
      <section
        id="beranda"
        title="Beranda"
        style={{
          position: "relative",
          minHeight: "100vh", // Menggunakan vh agar penuh di layar mana pun
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Background Slide */}
        <div
          key={cur.id}
          className="slide-enter"
          style={{
            position: "absolute",
            inset: 0,
            background: cur.bg,
            transition: "background 0.8s ease-in-out",
          }}
        />

        {/* Dekorasi Rings - Disembunyikan di Mobile jika terlalu mengganggu */}
        <div
          style={{
            position: "absolute",
            right: window.innerWidth < 768 ? "-150px" : "-100px",
            top: "-100px",
            width: window.innerWidth < 768 ? "400px" : "600px",
            height: window.innerWidth < 768 ? "400px" : "600px",
            border: "clamp(30px, 10vw, 70px) solid rgba(201,168,76,0.07)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        {/* Slide Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            // Padding responsif: kecil di HP, besar di Desktop
            padding: window.innerWidth < 768 ? "2rem 1.5rem" : "4rem 10%",
          }}
        >
          <div
            key={`cnt-${cur.id}`}
            className="slide-enter"
            style={{ maxWidth: 650 }}
          >
            {/* Tag/Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.4)",
                borderRadius: 20,
                padding: "6px 16px",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#c9a84c",
                }}
              />
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#e8c96a",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                {cur.tag}
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                // Font size otomatis menyesuaikan lebar layar
                fontSize: "clamp(2rem, 8vw, 3.5rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              {cur.title}
            </h1>

            <p
              style={{
                fontSize: "clamp(14px, 2vw, 17px)",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                fontWeight: 300,
                maxWidth: 500,
                marginBottom: 35,
              }}
            >
              {cur.subtitle}
            </p>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
              <a
                href="#produk"
                style={{
                  background: "#c9a84c",
                  color: "#0f2244",
                  padding: "14px 32px",
                  borderRadius: 50, // Lebih modern dengan pill shape
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: "none",
                  boxShadow: "0 10px 20px rgba(201, 168, 76, 0.2)",
                  transition: "transform 0.2s",
                }}
              >
                Lihat Produk
              </a>
              <a
                href="#kontak"
                style={{
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: 50,
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(5px)",
                }}
              >
                Konsultasi Gratis
              </a>
            </div>

            {/* Stats Section - Responsif menggunakan Grid atau Flex Wrap */}
            <div
              style={{
                display: "flex",
                gap: window.innerWidth < 768 ? "20px" : "50px",
                marginTop: 60,
                paddingTop: 30,
                borderTop: "1px solid rgba(255,255,255,0.1)",
                flexWrap: "wrap",
              }}
            >
              {[
                { num: "Rp 200 JT", label: "Plafon Maks" },
                { num: "180 Bln", label: "Tenor" },
                { num: "100%", label: "Legalitas" },
              ].map(({ num, label }) => (
                <div key={label} style={{ minWidth: "100px" }}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#e8c96a",
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontSize: 9,
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Sembunyikan di mobile agar tidak mengganggu jempol */}
        {window.innerWidth > 768 &&
          (["‹", "›"] as const).map((arrow, i) => (
            <button
              key={arrow}
              onClick={() => goTo(slide + (i === 0 ? -1 : 1))}
              style={{
                position: "absolute",
                [i === 0 ? "left" : "right"]: 30,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 30,
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: 30,
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
              }
            >
              {arrow}
            </button>
          ))}
      </section>
      <AboutsPage />
      <ProductsPage />
      <PartnersPage />
      <ContactsPage />
    </div>
  );
}

const SLIDES = [
  {
    id: 1,
    bg: "linear-gradient(135deg,#0f2244 0%,#1a3460 60%,#c9a84c22 100%)",
    emoji: "🏛️",
    tag: "Kantor Kami",
    title: "Plaza Marche The Shila Sawangan",
    subtitle:
      "Lokasi strategis di jantung Sawangan, Depok — mudah dijangkau dan siap melayani Anda.",
  },
  {
    id: 2,
    bg: "linear-gradient(135deg,#1a3460 0%,#0f2244 50%,#7c5a1c55 100%)",
    emoji: "💰",
    tag: "Pembiayaan Pensiun",
    title: "Solusi Finansial untuk Masa Pensiun Anda",
    subtitle:
      "Plafon hingga Rp 200 juta dengan tenor fleksibel hingga 180 bulan. Proses cepat dan aman.",
  },
  {
    id: 4,
    bg: "linear-gradient(135deg,#102347 0%,#193261 55%,#8B6914aa 100%)",
    emoji: "📦",
    tag: "Mitra Lion Parcel",
    title: "Kirim Barang ke Seluruh Indonesia",
    subtitle:
      "Kami adalah mitra resmi Lion Parcel. Pengiriman terpercaya, harga bersaing, tracking real-time.",
  },
  {
    id: 5,
    bg: "linear-gradient(135deg,#0a1b36 0%,#1a3460 65%,#c9a84c44 100%)",
    emoji: "🤝",
    tag: "Bergabung Bersama Kami",
    title: "Jadilah Bagian dari Keluarga Mahardika",
    subtitle:
      "Koperasi yang terdaftar resmi, transparan, dan berkomitmen untuk kesejahteraan anggota.",
  },
];
