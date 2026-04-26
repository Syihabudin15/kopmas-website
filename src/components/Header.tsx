import { useState, useEffect } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Menangani perubahan ukuran layar dengan benar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 968);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Beranda", value: "/" },
    { label: "Tentang Kami", value: "/tentang" },
    { label: "Produk & Layanan", value: "/produk" },
    { label: "Mitra", value: "/mitra" },
    { label: "Kontak", value: "/kontak" },
  ];

  return (
    <header
      style={{
        background: "linear-gradient(to right, #0f2244, #1a3a73)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isMobile ? "0 1.5rem" : "0 4rem",
        height: 75,
        borderBottom: "3px solid #c9a84c",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* --- LOGO SECTION --- */}
      <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
        <div
          style={{
            width: 45,
            height: 45,
            background: "#c9a84c",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            boxShadow: "0 0 15px rgba(201, 168, 76, 0.3)",
          }}
        >
          <img
            src="/android-chrome-512x512.png"
            alt="Logo MAS"
            style={{ width: "80%", height: "80%", objectFit: "contain" }}
          />
        </div>
        <div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#fff",
              fontSize: isMobile ? 14 : 18,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "0.5px",
            }}
          >
            {isMobile ? "KOP MAS" : "Mahardika Artha Sejahtera"}
          </div>
          {!isMobile && (
            <div
              style={{
                color: "#e8c96a",
                fontSize: 11,
                fontWeight: 300,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginTop: 2,
              }}
            >
              Bersama Tumbuh Sejahtera
            </div>
          )}
        </div>
      </div>

      {/* --- DESKTOP NAVIGATION --- */}
      {!isMobile && (
        <nav style={{ display: "flex", gap: 35, alignItems: "center" }}>
          {navItems.map((item) => (
            <a
              key={item.value}
              href={item.value}
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#e8c96a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.85)";
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontak"
            style={{
              background: "#c9a84c",
              color: "#0f2244",
              padding: "10px 24px",
              borderRadius: "50px",
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 15px rgba(201, 168, 76, 0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#e8c96a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(255,255,255,0.85)";
            }}
          >
            Hubungi Kami
          </a>
        </nav>
      )}

      {/* --- MOBILE HAMBURGER --- */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      )}

      {/* --- MOBILE OVERLAY MENU --- */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 75,
            left: 0,
            width: "100%",
            background: "#0f2244",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            borderBottom: "2px solid #c9a84c",
            animation: "slideDown 0.3s ease-out",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.value}
              href={item.value}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-a:hover { color: #e8c96a !important; }
      `}</style>
    </header>
  );
}
