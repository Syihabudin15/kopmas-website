import { PRODUCTS, SERVICES } from "../config";

export default function ProductsPage() {
  return (
    <div>
      {/* ── LAYANAN ── */}
      <section
        id="layanan"
        title="Layanan"
        style={{ background: "#faf8f4", padding: "5rem 2rem" }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#c9a84c",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Layanan Kami
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(1.6rem,3vw,2.4rem)",
              fontWeight: 700,
              color: "#0f2244",
              lineHeight: 1.25,
              marginBottom: 12,
            }}
          >
            Solusi Lengkap untuk Kebutuhan Anda
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: 15,
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Berbagai layanan keuangan dan jasa untuk mendukung kesejahteraan
            anggota, pensiunan dan masyarakat.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 24,
            }}
          >
            {SERVICES.map(({ icon, kbli, title, desc, tag }) => (
              <div
                key={title}
                className="svc-card"
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "2rem",
                  border: "1px solid rgba(15,34,68,0.08)",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    background: "#0f2244",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    marginBottom: 20,
                  }}
                >
                  {icon}
                </div>
                <div
                  style={{
                    display: "inline-block",
                    background: "#fdf6e3",
                    border: "1px solid rgba(201,168,76,0.4)",
                    borderRadius: 4,
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#c9a84c",
                    padding: "2px 8px",
                    letterSpacing: "0.05em",
                    marginBottom: 12,
                  }}
                >
                  {kbli}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#0f2244",
                    marginBottom: 8,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#64748b",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  {desc}
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    background: "rgba(15,34,68,0.05)",
                    borderRadius: 4,
                    padding: "3px 8px",
                    fontSize: 11,
                    color: "#0f2244",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── TENTANG ── */}
      <section
        id="produk"
        title="Produk"
        style={{ background: "#faf8f4", padding: "5rem 2rem" }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#c9a84c",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Produk Unggulan
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(1.6rem,3vw,2.4rem)",
              fontWeight: 700,
              color: "#0f2244",
              lineHeight: 1.25,
              marginBottom: 12,
            }}
          >
            Produk Pembiayaan Pensiun
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: 15,
              lineHeight: 1.8,
              maxWidth: 560,
              marginBottom: 48,
            }}
          >
            Dua skema pembiayaan dirancang khusus untuk memenuhi kebutuhan
            pensiunan dan penerima manfaat pensiun terusan.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 32,
            }}
          >
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                className="prod-card"
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  border: p.highlight
                    ? "2px solid #c9a84c"
                    : "1px solid rgba(15,34,68,0.1)",
                  background: "#fff",
                }}
              >
                {/* header */}
                <div
                  style={{
                    padding: "2rem 2rem 1.5rem",
                    position: "relative",
                    background: p.headerBg,
                  }}
                >
                  {p.highlight && (
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        background: "#c9a84c",
                        color: "#0f2244",
                        borderRadius: 20,
                        padding: "3px 12px",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                      }}
                    >
                      POPULER
                    </div>
                  )}
                  <div style={{ fontSize: 40, marginBottom: 12 }}>{p.icon}</div>
                  <div
                    style={{
                      display: "inline-block",
                      background: p.accentBg,
                      color: p.accentColor,
                      borderRadius: 20,
                      padding: "4px 14px",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      marginBottom: 12,
                    }}
                  >
                    {p.badge}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: p.headerColor,
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
                {/* specs */}
                <div style={{ padding: "1.5rem 2rem 2rem" }}>
                  {p.specs.map(({ label, value }) => (
                    <div key={label} className="spec-row">
                      <span
                        style={{
                          fontSize: 13,
                          color: "#64748b",
                          fontWeight: 500,
                        }}
                      >
                        {label}
                      </span>
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#0f2244",
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                  <div
                    style={{
                      marginTop: 20,
                      borderRadius: 12,
                      padding: "1rem",
                      textAlign: "center",
                      background: p.highlight
                        ? "#fdf6e3"
                        : "rgba(26,52,96,0.06)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "1.7rem",
                        fontWeight: 700,
                        color: p.plafonColor,
                      }}
                    >
                      {p.id === "sendiri" ? "Rp 200.000.000" : "Rp 100.000.000"}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: "#64748b",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginTop: 4,
                      }}
                    >
                      Plafon Maksimal
                    </div>
                  </div>
                  <a
                    href="#kontak"
                    style={{
                      display: "block",
                      textAlign: "center",
                      borderRadius: 12,
                      padding: "12px",
                      marginTop: 20,
                      background: p.highlight ? "#0f2244" : "#1a3460",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 14,
                      textDecoration: "none",
                    }}
                  >
                    Ajukan Sekarang →
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* note */}
          <div
            style={{
              marginTop: 32,
              borderRadius: 16,
              padding: "1.25rem 1.5rem",
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
              background: "#fff",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            <div style={{ fontSize: 22, flexShrink: 0 }}>ℹ️</div>
            <div>
              <div
                style={{
                  fontWeight: 600,
                  color: "#0f2244",
                  fontSize: 14,
                  marginBottom: 4,
                }}
              >
                Syarat & Ketentuan Umum
              </div>
              <p
                style={{
                  color: "#64748b",
                  fontSize: 13,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Dokumen: KTP, Kartu Pensiun (KARIP), Slip Pensiun terakhir, NPWP
                (jika ada), dan dokumen pendukung lainnya. Persetujuan tunduk
                pada analisis kelayakan. Hubungi kami untuk informasi lengkap.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
