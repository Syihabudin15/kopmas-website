import { ShieldCheck, Target, Eye } from "lucide-react";

export default function Profile() {
  return (
    <div className="pt-20">
      {/* Hero Section Profile */}
      <section className="bg-slate-900 py-24 text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Profil Perusahaan
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Mengenal lebih dekat Sena Jaya Mandiri sebagai mitra solusi
            teknologi dan finansial Anda.
          </p>
        </div>
      </section>

      {/* Sejarah & Tentang Kami */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img
              src="/profile.png"
              alt="Sena Jaya Mandiri Office"
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Membangun Masa Depan Sejak 2020
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Sena Jaya Mandiri (SJM) lahir dengan visi untuk menjembatani
              kebutuhan finansial masyarakat, khususnya pensiunan, serta
              menghadirkan inovasi teknologi informasi yang efisien melalui
              divisi Software Development kami.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Berawal dari kantor kecil di wilayah strategis, kini kami telah
              berkembang menjadi mitra terpercaya bagi ribuan nasabah dan
              berbagai koperasi dalam mengelola sistem digital mereka.
            </p>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
              <p className="text-slate-600 italic">
                "Menjadi perusahaan penyedia solusi terintegrasi yang paling
                terpercaya di Indonesia dalam bidang layanan keuangan dan
                pengembangan perangkat lunak."
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Target />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-2">
                  <span>•</span> Menyediakan layanan kredit dengan proses
                  termudah dan tercepat.
                </li>
                <li className="flex gap-2">
                  <span>•</span> Menghasilkan produk perangkat lunak inovatif
                  yang meningkatkan efisiensi bisnis.
                </li>
                <li className="flex gap-2">
                  <span>•</span> Memberikan nilai tambah bagi seluruh
                  stakeholder dan mitra kerja.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Nilai Utama Kami (Core Values) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Nilai-Nilai Utama Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 group hover:bg-slate-900 transition-all duration-300 rounded-2xl border border-slate-100 hover:shadow-xl">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-white">
                Integritas
              </h4>
              <p className="text-slate-600 group-hover:text-slate-300">
                Kami menjunjung tinggi transparansi dan etika dalam setiap
                layanan keuangan dan pengembangan kode.
              </p>
            </div>

            <div className="p-8 group hover:bg-slate-900 transition-all duration-300 rounded-2xl border border-slate-100 hover:shadow-xl">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Target size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-white">
                Inovasi
              </h4>
              <p className="text-slate-600 group-hover:text-slate-300">
                Terus beradaptasi dengan teknologi terbaru untuk memberikan
                solusi yang relevan bagi tantangan bisnis modern.
              </p>
            </div>

            <div className="p-8 group hover:bg-slate-900 transition-all duration-300 rounded-2xl border border-slate-100 hover:shadow-xl">
              <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Eye size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-white">
                Kepuasan Mitra
              </h4>
              <p className="text-slate-600 group-hover:text-slate-300">
                Keberhasilan kami diukur dari seberapa besar dampak positif yang
                dirasakan oleh nasabah dan mitra kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              href="https://wa.me/6281313293991"
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
