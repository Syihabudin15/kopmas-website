import { useState } from "react";
import { ArrowUpRight, DownloadCloud } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 2,
      title: "Sistem Informasi Kredit Pensiun Terpadu",
      category: "software", // Diubah ke software karena ini merepresentasikan sistemnya
      image: "/p-kredit-system.jpg",
      desc: "Platform manajemen kredit pensiun yang mencakup monitoring pembiayaan dan tagihan, laporan keuangan, serta status penyerahan jaminan dan dokumen nasabah.",
      tech: [
        "Financial Reporting",
        "Document Management",
        "Secure Storage",
        "Cloud Integration",
      ],
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Portfolio & Karya
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Rekam jejak kami dalam menghadirkan solusi digital berkualitas dan
            layanan finansial yang berdampak nyata.
          </p>
        </div>
      </section>

      {/* 2. Filter Buttons */}
      <section className="py-12 container mx-auto px-6">
        {/* 3. Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-sky-900/20 group-hover:bg-transparent transition duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg ${project.category === "software" ? "bg-sky-600 text-white" : "bg-emerald-600 text-white"}`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase rounded-md border border-slate-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="flex items-center gap-2 text-sky-600 font-bold text-sm group/link"
                >
                  Dokumentasi{" "}
                  <DownloadCloud
                    size={16}
                    className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Stats Portfolio */}
      <section className="py-20 bg-slate-900 mt-20">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <h4 className="text-4xl font-bold mb-2">1+</h4>
            <p className="text-slate-400 text-sm">Proyek Selesai</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold mb-2">1</h4>
            <p className="text-slate-400 text-sm">Mitra Koperasi</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold mb-2">99%</h4>
            <p className="text-slate-400 text-sm">Kepuasan Klien</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold mb-2">24/7</h4>
            <p className="text-slate-400 text-sm">Support Sistem</p>
          </div>
        </div>
      </section>
    </div>
  );
}
