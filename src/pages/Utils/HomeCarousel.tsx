import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "carousel3.png", // Ganti dengan path file gambar tersebut
    title: "Solusi Dana Pensiun Terpercaya",
    desc: "Wujudkan masa tua yang tenang dengan layanan keuangan dari Sena Jaya Mandiri.",
  },
  {
    image: "carousel1.png", // Ganti dengan path file gambar tersebut
    title: "",
    desc: "",
  },
  {
    image: "carousel2.png", // Ganti dengan path file gambar tersebut
    title: "",
    desc: "",
  },
  {
    image: "carousel4.png", // Ganti dengan path file gambar tersebut
    title: "Sistem Informasi Cerdas, Aman, dan Terintegrasi",
    desc: "Tingkatkan kredibilitas perusahaan dengan infrastruktur teknologi yang dirancang khusus untuk pengelolaan data finansial dan administrasi yang akurat",
  },
];

export default function HomeCarousel() {
  return (
    <section className="relative h-125 md:h-150 w-full overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-5000 ease-out ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-slate-900/40"></div>

                {/* Konten teks tetap di sini */}
                <div className="relative z-10 text-center text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
                    {slide.desc}
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
