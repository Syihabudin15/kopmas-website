import { MITRA } from "../config";

export default function PartnersPage() {
  return (
    <div>
      <section
        id="mitra"
        style={{ background: "#fff", padding: "5rem 2rem" }}
        title="Mitra Pembiayaan"
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
            Mitra Kerjasama
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
            Didukung Mitra Terpercaya
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: 15,
              lineHeight: 1.8,
              maxWidth: 540,
              marginBottom: 48,
            }}
          >
            Kami berkolaborasi dengan institusi dan perusahaan terkemuka untuk
            menghadirkan layanan terbaik bagi anggota dan masyarakat.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 20,
            }}
          >
            {MITRA.map(({ name, abbr, color, desc, type }) => (
              <div
                key={name}
                className="mitra-pill"
                style={{
                  borderRadius: 16,
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  border: "1px solid rgba(15,34,68,0.08)",
                  background: "#faf8f4",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    background: color + "18",
                    border: `1.5px solid ${color}33`,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color,
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: 700,
                    fontSize: 14,
                    flexShrink: 0,
                  }}
                >
                  {abbr}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      color: "#0f2244",
                      fontSize: 13,
                      lineHeight: 1.3,
                    }}
                  >
                    {name}
                  </div>
                  <div style={{ color: "#64748b", fontSize: 11, marginTop: 3 }}>
                    {desc}
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      background: color + "18",
                      color,
                      borderRadius: 4,
                      padding: "1px 8px",
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginTop: 8,
                    }}
                  >
                    {type}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <p style={{ color: "#64748b", fontSize: 13 }}>
              Tertarik menjadi mitra kami?{" "}
              <a
                href="#kontak"
                style={{
                  color: "#c9a84c",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Hubungi tim kami →
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
