import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Berapa lama proses pencairan kredit pensiun?",
      a: "Proses pencairan biasanya memakan waktu 1-3 hari kerja setelah seluruh dokumen dinyatakan lengkap dan lolos verifikasi internal.",
    },
    {
      q: "Berapa suku bunga yang diterapkan untuk kredit umum?",
      a: "Suku bunga kami sangat kompetitif, mulai dari 0.8% per bulan (flat) tergantung pada tenor dan jenis jaminan yang digunakan.",
    },
    {
      q: "Berapa lama durasi pembuatan software kustom?",
      a: "Untuk sistem skala kecil hingga menengah, durasi pengerjaan berkisar antara 1-3 bulan, sudah termasuk tahap desain, pengembangan, dan testing.",
    },
    {
      q: "Apakah ada biaya perawatan (maintenance) untuk software?",
      a: "Ya, kami menyediakan paket maintenance bulanan atau tahunan untuk memastikan sistem tetap berjalan optimal dan mendapatkan update keamanan berkala.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Pertanyaan Umum</h2>
          <p className="text-slate-500 mt-2">
            Temukan jawaban cepat untuk pertanyaan yang sering diajukan.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition"
              >
                <span className="font-bold text-slate-800">{faq.q}</span>
                <ChevronDown
                  className={`text-slate-400 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 p-6 pt-0 border-t border-slate-100" : "max-h-0"}`}
              >
                <p className="text-slate-600 leading-relaxed text-sm">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
