export default function Struktur() {
  const members = {
    top: { name: "RAT", role: "Rapat Anggota Tahunan" },
    middle: [
      { name: "Pengurus", role: "Pengurus Koperasi" },
      { name: "Pengawas", role: "Pengawas Koperasi" },
    ],
    staff: [
      { name: "Ketua", role: "Ketua Koperasi" },
      { name: "Sekretaris", role: "Sekretaris Koperasi" },
      { name: "Bendahara", role: "Bendahara Koperasi" },
    ],
    pengelola: [{ name: "Pengelola", role: "Pengelola Koperasi" }],
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen pb-24">
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">
          Struktur Organisasi
        </h1>
        <p className="text-slate-500">
          Tim profesional di balik Sena Jaya Mandiri
        </p>
      </section>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Level 1: CEO */}
          <div className="relative">
            <div className="bg-sky-600 text-white p-6 rounded-2xl shadow-xl w-64 text-center">
              <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 border-4 border-white/20"></div>
              <h4 className="font-bold">{members.top.name}</h4>
              <p className="text-sky-100 text-sm">{members.top.role}</p>
            </div>
            <div className="w-0.5 h-12 bg-slate-300 mx-auto"></div>
          </div>

          {/* Level 2: Managers */}
          <div className="flex flex-wrap justify-center gap-12 relative">
            {/* Garis Horizontal Penghubung */}
            <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-slate-300 -translate-y-6 hidden md:block"></div>

            {members.middle.map((manager, i) => (
              <div key={i} className="relative">
                <div className="bg-white border-2 border-sky-600 p-6 rounded-2xl shadow-md w-60 text-center">
                  <h4 className="font-bold text-slate-800">{manager.name}</h4>
                  <p className="text-sky-600 text-sm font-medium">
                    {manager.role}
                  </p>
                </div>
                {i === 0 && (
                  <div className="w-0.5 h-12 bg-slate-300 mx-auto"></div>
                )}
              </div>
            ))}
          </div>

          {/* Level 3: Staff/Teams */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {members.staff.map((staff, i) => (
              <div key={i} className="relative">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-center w-52">
                  <h5 className="font-bold text-slate-800 text-sm">
                    {staff.name}
                  </h5>
                  <p className="text-slate-400 text-xs">{staff.role}</p>
                </div>
                {i === 0 && (
                  <div className="w-0.5 h-12 bg-slate-300 mx-auto"></div>
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {members.pengelola.map((staff, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-center w-52"
              >
                <h5 className="font-bold text-slate-800 text-sm">
                  {staff.name}
                </h5>
                <p className="text-slate-400 text-xs">{staff.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
