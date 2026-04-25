import { BRAND } from "../config";

export default function ContactsPage() {
  return (
    <section
      id="kontak"
      style={{ background: "#fff", padding: "5rem 2rem" }}
      title="Hubungi Kami"
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
          Hubungi Kami
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
          Kami Siap Membantu Anda
        </h2>
        <p
          style={{
            color: "#64748b",
            fontSize: 15,
            lineHeight: 1.8,
            marginBottom: 40,
          }}
        >
          Konsultasikan kebutuhan pembiayaan atau pengiriman barang Anda bersama
          tim kami.
        </p>
        <div
          style={{
            // display: "grid",
            // gridTemplateColumns: "1fr 1fr",
            gap: 64,
            // alignItems: "start",
          }}
          className="flex flex-col sm:flex-row items-center"
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: 24 }}
            className="flex-1"
          >
            {[
              {
                icon: "📍",
                label: "Alamat Kantor",
                val: `${BRAND.address.line1}\n${BRAND.address.line2}\n${BRAND.address.line3}`,
              },
              {
                icon: "📞",
                label: "Nomor Telepon / WhatsApp",
                val: BRAND.phoneDisplay,
                href: `tel:${BRAND.phone}`,
              },
              {
                icon: "✉️",
                label: "Email",
                val: BRAND.email,
                href: `mailto:${BRAND.email}`,
              },
              {
                icon: "🕐",
                label: "Jam Operasional",
                val: "Senin – Jumat: 08.00 – 17.00 WIB\nSabtu: 08.00 – 13.00 WIB",
              },
            ].map(({ icon, label, val, href }) => (
              <div
                key={label}
                style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: "#fdf6e3",
                    border: "1px solid rgba(201,168,76,0.35)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#c9a84c",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      style={{
                        fontSize: 14,
                        color: "#0f2244",
                        fontWeight: 500,
                        textDecoration: "none",
                        lineHeight: 1.6,
                      }}
                    >
                      {val}
                    </a>
                  ) : (
                    <div
                      style={{
                        fontSize: 14,
                        color: "#0f2244",
                        fontWeight: 500,
                        lineHeight: 1.6,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {val}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              background: "#faf8f4",
              borderRadius: 16,
              padding: "2rem",
              border: "1px solid rgba(15,34,68,0.08)",
            }}
            className="flex-1"
          >
            <section className="h-96 w-full bg-slate-200 overflow-hidden rounded-xl shadow-inner">
              <iframe
                title="Lokasi Kantor"
                src="https://maps.google.com/maps?q=-6.405081, 106.750331&z=17&output=embed"
                className="w-full h-full border-0  transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
