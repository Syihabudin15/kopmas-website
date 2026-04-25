import { BRAND } from "../config";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080f1e",
        padding: "3rem 2rem 1.5rem",
        borderTop: "2px solid #c9a84c",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          // display: "grid",
          // gridTemplateColumns: "2fr 1fr 1fr",
          gap: 48,
          marginBottom: 32,
        }}
      >
        <div className="flex flex-col sm:flex-row gap-8 justify-between">
          <div className="flex-1">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
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
                    fontFamily: "'Playfair Display',serif",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  {BRAND.name}
                </div>
                <div
                  style={{
                    color: "#e8c96a",
                    fontSize: 10,
                    fontWeight: 300,
                    letterSpacing: "0.05em",
                  }}
                >
                  {BRAND.tagline}
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.8,
                fontWeight: 300,
                margin: 0,
              }}
            >
              Koperasi resmi melayani pembiayaan pensiun, dan pengiriman barang
              di Depok, Jawa Barat.
            </p>
          </div>
          <div className="flex-1 flex flex-wrap mt-8 sm:mt-0">
            <div className="flex-1">
              <h5
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#c9a84c",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: 16,
                }}
              >
                Produk & Layanan
              </h5>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {[
                  "Pensiun Sendiri",
                  "Pensiun Terusan",
                  "Pengiriman Barang",
                ].map((s) => (
                  <li key={s}>
                    <a
                      href="#produk"
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                      }}
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <h5
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#c9a84c",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: 16,
                }}
              >
                Informasi
              </h5>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {[
                  { label: "Tentang Koperasi", href: "#tentang" },
                  { label: "Mitra Kerjasama", href: "#mitra" },
                  { label: "Legalitas", href: "#legalitas" },
                  { label: `📧 Email Kami`, href: `mailto:${BRAND.email}` },
                  {
                    label: `📞 ${BRAND.phoneDisplay}`,
                    href: `tel:${BRAND.phone}`,
                  },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                      }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
          © 2025 Koperasi Jasa Mahardika Artha Sejahtera. Seluruh hak
          dilindungi.
        </div>
        <div style={{ fontSize: 11, color: "rgba(201,168,76,0.6)" }}>
          NIB: {BRAND.nib} · KBLI: {BRAND.kbli.join(", ")}
        </div>
      </div>
    </footer>
  );
}
