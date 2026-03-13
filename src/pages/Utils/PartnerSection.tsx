export default function PartnerSection() {
  const partners = [
    { name: "Bank BRI", logo: "/path-to-bri.png" },
    { name: "OJK", logo: "/path-to-ojk.png" },
    { name: "KPF", logo: "/path-to-kpf.png" },
    { name: "ASPI", logo: "/path-to-aspi.png" },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-[0.2em] mb-8">
          Telah Dipercaya Oleh & Bermitra Dengan
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className="h-8 md:h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition duration-500 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
