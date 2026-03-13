import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* 1. Header Section */}
      <section className="bg-white border-b border-slate-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Hubungi Kami
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            Punya pertanyaan mengenai kredit atau proyek software? Tim kami siap
            membantu Anda kapan saja.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* 2. Informasi Kontak (Kiri) */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                      Telepon / WA
                    </p>
                    <p className="text-slate-700 font-medium">
                      +62 813-1329-3991
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                      Email Resmi
                    </p>
                    <p className="text-slate-700 font-medium">
                      kopjassjm@sjm.biz.id
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                      Kantor Pusat
                    </p>
                    <p className="text-slate-700 font-medium text-sm leading-relaxed">
                      Perum Griya Bandung Asrri Barat (GBA Barat) Blok C3 No.
                      07,- Kabupaten Bandung Jawa Barat
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                      Jam Operasional
                    </p>
                    <p className="text-slate-700 font-medium text-sm">
                      Senin - Jumat: 08:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Mini */}
            <div className="p-6 bg-sky-600 rounded-3xl text-white">
              <h4 className="font-bold mb-2">Respon Cepat?</h4>
              <p className="text-sky-100 text-sm mb-4">
                Chat langsung dengan admin kami via WhatsApp untuk konsultasi
                instan.
              </p>
              <a
                href="https://wa.me/6281313293991"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-sky-600 p-3 rounded-xl font-bold text-sm hover:bg-sky-50 transition"
              >
                WhatsApp Sekarang
              </a>
            </div>
          </div>

          {/* 3. Formulir Pesan (Kanan) */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Kirim Pesan
              </h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@contoh.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Subjek
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 outline-none transition">
                    <option>Konsultasi Kredit Pensiun</option>
                    <option>Layanan Software Development</option>
                    <option>Kerja Sama Bisnis</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Pesan Anda
                  </label>
                  <textarea
                    placeholder="Tuliskan pesan atau pertanyaan Anda..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full md:w-fit bg-sky-600 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-sky-700 transition shadow-lg shadow-sky-200"
                  >
                    Kirim Pesan <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Google Maps Placeholder */}
      <section className="h-96 w-full bg-slate-200 overflow-hidden rounded-xl shadow-inner">
        <iframe
          title="Lokasi Kantor"
          src="https://maps.google.com/maps?q=-6.9762084,107.6482254&z=17&output=embed"
          className="w-full h-full border-0  transition-all duration-700"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
