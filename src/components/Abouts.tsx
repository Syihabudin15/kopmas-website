import { BRAND, LEGAL_INFO } from "../config";

export default function AboutsPage() {
  return (
    <div>
      <section
        id="tentang"
        title="Tentang Kami"
        style={{ background: "#fff", padding: "5rem 2rem" }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            // display: "grid",
            // gridTemplateColumns: "1fr 1fr",
            gap: 64,
            // alignItems: "center",
          }}
          className="flex flex-col sm:flex-row items-center"
        >
          <div className="flex-1">
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
              Tentang Kami
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(1.6rem,3vw,2.4rem)",
                fontWeight: 700,
                color: "#0f2244",
                lineHeight: 1.25,
                marginBottom: 16,
              }}
            >
              Koperasi yang Hadir untuk Anda
            </h2>
            <p
              style={{
                color: "#64748b",
                fontSize: 15,
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              Koperasi Jasa Mahardika Artha Sejahtera adalah badan usaha
              koperasi berbasis jasa yang berfokus pada pemberdayaan keuangan
              masyarakat — khususnya pensiunan — serta mendukung kelancaran
              distribusi barang.
            </p>
            {[
              {
                icon: "🎯",
                title: "Visi",
                desc: "Menjadi koperasi jasa terdepan yang memberdayakan anggota menuju kemandirian finansial berkelanjutan.",
              },
              {
                icon: "🤝",
                title: "Misi",
                desc: "Memberikan layanan pembiayaan adil, transparan, dan terjangkau serta solusi logistik terintegrasi.",
              },
              {
                icon: "⚖️",
                title: "Nilai",
                desc: "Integritas, gotong royong, profesionalisme, dan komitmen pertumbuhan bersama.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: "#fdf6e3",
                    border: "1px solid rgba(201,168,76,0.4)",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      color: "#0f2244",
                      fontSize: 13,
                      marginBottom: 3,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6 }}
                  >
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <div
              style={{
                background: "#0f2244",
                borderRadius: 20,
                padding: "2.5rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -30,
                  right: -30,
                  width: 140,
                  height: 140,
                  border: "20px solid rgba(201,168,76,0.2)",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  color: "#e8c96a",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  marginBottom: 8,
                }}
              >
                Identitas Resmi
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.55)",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                Terdaftar resmi pada sistem OSS Pemerintah Republik Indonesia.
              </p>
              <div
                style={{
                  background: "#fdf6e3",
                  border: "1px solid rgba(201,168,76,0.3)",
                  borderRadius: 12,
                  padding: "1.25rem",
                }}
              >
                {[
                  { label: "Nama", value: BRAND.name },
                  { label: "NIB", value: BRAND.nib },
                  { label: "KBLI", value: BRAND.kbli.join(" · ") },
                  { label: "Kota", value: BRAND.address.line3 },
                  { label: "Kode Pos", value: BRAND.address.pos },
                ].map(({ label, value }, i, arr) => (
                  <div key={label}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 12,
                      }}
                    >
                      <span style={{ color: "#64748b", fontWeight: 500 }}>
                        {label}
                      </span>
                      <span style={{ color: "#0f2244", fontWeight: 600 }}>
                        {value}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <hr
                        style={{
                          border: "none",
                          borderTop: "1px solid rgba(201,168,76,0.25)",
                          margin: "8px 0",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── LEGALITAS ── */}
      <section
        id="legalitas"
        style={{ background: "#0f2244", padding: "5rem 2rem" }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#e8c96a",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Legalitas & Izin Usaha
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(1.6rem,3vw,2.4rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.25,
              marginBottom: 12,
            }}
          >
            Terdaftar Resmi & Berlisensi
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: 15,
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Seluruh operasional dijalankan secara legal, transparan, dan sesuai
            peraturan perundang-undangan yang berlaku.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 24,
            }}
          >
            {LEGAL_INFO.map(({ num, label, highlight, desc }) => (
              <div
                key={num}
                style={{
                  borderRadius: 12,
                  padding: "1.75rem",
                  textAlign: "center",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: "#e8c96a",
                    marginBottom: 4,
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {label}
                </div>
                {highlight && (
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#e8c96a",
                      marginTop: 4,
                    }}
                  >
                    {highlight}
                  </div>
                )}
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.6,
                    marginTop: 8,
                  }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
