import HomeCarousel from "./Utils/HomeCarousel";
import { FaCalculator, FaCodepen } from "react-icons/fa";

export default function Homepage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Carousel Section */}
      <HomeCarousel />

      {/* 2. Stats Section (Angka Kepercayaan) */}
      <div className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50">
          <div className="text-center border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0">
            <h3 className="text-3xl font-bold text-sky-600">10rb+</h3>
            <p className="text-slate-500 font-medium">Nasabah Aktif</p>
          </div>
          <div className="text-center border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0">
            <h3 className="text-3xl font-bold text-sky-600">24 Jam</h3>
            <p className="text-slate-500 font-medium">Layanan Bantuan</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-sky-600">Mudah</h3>
            <p className="text-slate-500 font-medium">Proses Administrasi</p>
          </div>
        </div>
      </div>

      {/* 3. Services Section (Layanan Utama) */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Layanan Unggulan Kami
          </h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card Layanan */}
          <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center mb-6 text-2xl">
              <FaCalculator />
            </div>
            <h3 className="text-xl font-bold mb-3">Kredit Pensiun</h3>
            <p className="text-slate-600 text-sm">
              Pinjaman khusus pensiunan dengan bunga ringan dan tenor fleksibel
              sesuai kebutuhan.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center mb-6 text-2xl">
              <FaCalculator />
            </div>
            <h3 className="text-xl font-bold mb-3">Kredit UMKM</h3>
            <p className="text-slate-600 text-sm">
              Pinjaman khusus UMKM dengan bunga ringan dan tenor maksimal 5
              tahun.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center mb-6 text-2xl">
              <FaCodepen />
            </div>
            <h3 className="text-xl font-bold mb-3">Software Development</h3>
            <p className="text-slate-600 text-sm">
              Pengembangan sistem informasi sesuai kebutuhan dengan skema
              sewa/pembelian langsung.
            </p>
          </div>
          {/* Tambahkan card lainnya... */}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Solusi Terpercaya untuk Kebutuhan Finansial & Teknologi Anda
              </h2>
              <p className="text-slate-600 mb-8">
                Kami menggabungkan keahlian manajemen keuangan dengan inovasi
                teknologi untuk memberikan layanan terbaik bagi setiap mitra dan
                nasabah kami.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Proses Transparan",
                    desc: "Setiap tahapan pengajuan dipantau secara terbuka.",
                  },
                  {
                    title: "Keamanan Data",
                    desc: "Data nasabah dilindungi dengan sistem enkripsi standar industri.",
                  },
                  {
                    title: "Tim Ahli",
                    desc: "Dukungan dari profesional berpengalaman di bidangnya.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-slate-100 h-64 rounded-2xl">
                <img src="credit.png" />
              </div>{" "}
              {/* Ganti dengan Image */}
              <div className="bg-sky-600 h-64 rounded-2xl mt-8">
                <img src="tech.png" />
              </div>{" "}
              {/* Ganti dengan Image */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">Cara Kerja Kami</h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Garis penghubung (Desktop saja) */}
            <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

            {[
              {
                step: "01",
                title: "Konsultasi",
                desc: "Hubungi tim kami untuk konsultasi awal.",
              },
              {
                step: "02",
                title: "Analisis",
                desc: "Kami menganalisis kebutuhan atau kelayakan kredit.",
              },
              {
                step: "03",
                title: "Persetujuan",
                desc: "Proses verifikasi dan persetujuan cepat.",
              },
              {
                step: "04",
                title: "Penyelesaian",
                desc: "Dana dicairkan atau software mulai dibangun.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
              >
                <span className="text-4xl font-black text-slate-100 block mb-4">
                  {item.step}
                </span>
                <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-6">
        <div className="bg-sky-600 rounded-3xl p-12 text-center text-white overflow-hidden relative">
          {/* Dekorasi lingkaran */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
            Siap Mengembangkan Bisnis Anda?
          </h2>
          <p className="text-sky-100 mb-10 max-w-xl mx-auto relative z-10">
            Hubungi kami sekarang untuk mendapatkan penawaran terbaik atau
            solusi teknologi yang tepat sasaran.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a
              className="bg-white text-sky-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition"
              href="https://wa.me/6285722667673"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Kami
            </a>
            <a
              href="/portfolio"
              rel="noopener noreferrer"
              className="bg-transparent border border-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition"
            >
              Lihat Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
