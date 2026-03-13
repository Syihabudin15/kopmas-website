import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Zap,
  Coffee,
  Heart,
} from "lucide-react";

export default function Careers() {
  const jobs = [
    {
      title: "Fullstack Developer (Next Js)",
      category: "Software Development",
      location: "Bandung / Remote",
      type: "Full-time",
      link: "#",
    },
    {
      title: "Account Officer (Kredit Pensiun)",
      category: "Operations",
      location: "Jakarta",
      type: "Full-time",
      link: "#",
    },
    // {
    //   title: "UI/UX Designer",
    //   category: "Software Development",
    //   location: "Hybrid",
    //   type: "Contract",
    //   link: "#",
    // },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* 1. Hero Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-600/10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
            Bangun Masa Depan <br /> Bersama{" "}
            <span className="text-sky-500">Sena Jaya Mandiri</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Kami mencari individu yang inovatif dan berintegritas untuk
            memberikan dampak nyata di bidang teknologi dan finansial.
          </p>
        </div>
      </section>

      {/* 2. Perks & Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Kenapa Bergabung Dengan Kami?
            </h2>
            <p className="text-slate-500 mt-2">
              Kesejahteraan dan perkembangan Anda adalah prioritas kami.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-amber-500" />,
                title: "Inovasi Tanpa Batas",
                desc: "Bekerja dengan teknologi terbaru (Vite, React, Node.js) dalam ekosistem software development kami.",
              },
              {
                icon: <Heart className="text-red-500" />,
                title: "Asuransi & Kesehatan",
                desc: "Perlindungan kesehatan lengkap untuk Anda dan keluarga tercinta.",
              },
              {
                icon: <Coffee className="text-sky-500" />,
                title: "Budaya Kerja Fleksibel",
                desc: "Keseimbangan kehidupan kerja dengan opsi hybrid dan lingkungan kantor yang nyaman.",
              },
            ].map((perk, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition"
              >
                <div className="mb-6 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  {perk.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Job Listings */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-slate-900">
              Posisi Tersedia
            </h2>
            <p className="text-slate-500 mt-2">
              Temukan peran yang sesuai dengan passion dan keahlian Anda.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-4 py-2 bg-sky-50 text-sky-600 rounded-full text-sm font-semibold">
              Semua Departemen
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-500 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  {job.category}
                </span>
                <h4 className="text-xl font-bold text-slate-800 group-hover:text-sky-600 transition">
                  {job.title}
                </h4>
                <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} /> {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} /> {job.type}
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-sky-600 transition self-start md:self-center">
                Lamar Sekarang <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Empty State / Newsletter */}
        <div className="mt-16 bg-slate-900 p-10 rounded-3xl text-center text-white">
          <h3 className="text-xl font-bold mb-2">
            Tidak menemukan posisi yang cocok?
          </h3>
          <p className="text-slate-400 mb-6 text-sm">
            Kirimkan CV Anda ke{" "}
            <span className="text-sky-400">hrd@sjm.biz.id</span> untuk kami
            simpan di database talenta kami.
          </p>
        </div>
      </section>
    </div>
  );
}
