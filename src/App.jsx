import { useState } from "react";
import { FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import AppRouter from "./pages/Router";

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="bg-slate-50">
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-2 bg-transparent border-b border-slate-200">
        <div>
          <div className="text-2xl font-bold tracking-tighter">KOPJAS SJM</div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="/"
            className="text-slate-600 hover:text-slate-900 font-medium transition"
          >
            Beranda
          </a>

          {/* Dropdown Tentang Kami */}
          <div
            className="relative"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <button className="flex items-center text-slate-600 hover:text-slate-900 font-medium transition py-2">
              Tentang Kami
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${isAboutOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="Stack 19 9l-7 7-7-7"
                />
                <path d="m19 9-7 7-7-7" />
              </svg>
            </button>

            {/* Sub-menu Dropdown */}
            {isAboutOpen && (
              <div className="absolute left-0 w-48 bg-white border border-slate-100 shadow-xl rounded-xl py-2 animate-in fade-in slide-in-from-top-2">
                <a
                  href="/tentang-kami/profile"
                  className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                >
                  Profile
                </a>
                <a
                  href="/tentang-kami/struktur"
                  className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                >
                  Struktur
                </a>
              </div>
            )}
          </div>

          <a
            href="/portfolio"
            className="text-slate-600 hover:text-slate-900 font-medium transition"
          >
            Portfolio
          </a>
          <a
            href="/karir"
            className="text-slate-600 hover:text-slate-900 font-medium transition"
          >
            Karir
          </a>
          <a
            href="/kontak"
            className="text-slate-600 hover:text-slate-900 font-medium transition"
          >
            Kontak
          </a>
          <a
            href="/faq"
            className="text-slate-600 hover:text-slate-900 font-medium transition"
          >
            FAQ
          </a>
          <a
            href="https://wa.me/6281313293991"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 font-medium transition border border-slate-200 px-4 py-2 rounded-lg hover:bg-green-500 flex gap-1 items-center bg-green-400"
          >
            <FaWhatsapp className="text-xl" />
            <span>Whatsapp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1">
            <a href="/" className="block px-3 py-2 text-slate-600 font-medium">
              Beranda
            </a>
            <div className="pl-3 py-2 space-y-1">
              <span className="text-slate-400 text-xs uppercase font-bold tracking-wider">
                Tentang Kami
              </span>
              <a
                href="/tentang-kami/profile"
                className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md"
              >
                Profile
              </a>
              <a
                href="/tentang-kami/struktur"
                className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md"
              >
                Struktur
              </a>
            </div>
            <a
              href="/portfolio"
              className="block px-3 py-2 text-slate-600 font-medium"
            >
              Portfolio
            </a>
            <a
              href="/karir"
              className="block px-3 py-2 text-slate-600 font-medium"
            >
              Karir
            </a>
            <a
              href="/kontak"
              className="block px-3 py-2 text-slate-600 font-medium"
            >
              Kontak
            </a>
            <a
              href="/faq"
              className="block px-3 py-2 text-slate-600 font-medium"
            >
              FAQ
            </a>
          </div>
        )}
      </nav>

      {/* Router */}
      <div>
        <div className="mt-13 p-4">
          <AppRouter />
        </div>
      </div>
      {/* Router */}

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Kolom 1: Branding & Deskripsi */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tighter">
                KOPJAS{" "}
                <span className="text-sky-500 underline decoration-2 underline-offset-4">
                  SJM
                </span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">
                Solusi finansial terpercaya melalui Kredit Pensiun yang mudah
                dan cepat, serta inovasi Software Development untuk transformasi
                digital bisnis Anda yang berkelanjutan.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons (Placeholder) */}
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-600 transition cursor-pointer">
                  <a href="#" className="text-xs">
                    <FaLinkedin />
                  </a>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-600 transition cursor-pointer">
                  <a href="#" className="text-xs">
                    <FaInstagram />
                  </a>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-600 transition cursor-pointer">
                  <a href="#" className="text-xs">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>

            {/* Kolom 2: Tautan Cepat */}
            <div>
              <h3 className="text-white font-semibold mb-6">Navigasi</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="/" className="hover:text-sky-400 transition">
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="/tentang-kami/profile"
                    className="hover:text-sky-400 transition"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="/karir" className="hover:text-sky-400 transition">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="/kontak" className="hover:text-sky-400 transition">
                    Kontak
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-sky-400 transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Kolom 3: Layanan/Produk */}
            <div>
              <h3 className="text-white font-semibold mb-6">Layanan Kami</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <div className="hover:text-sky-400 transition">
                    Kredit Pensiun
                  </div>
                </li>
                <li>
                  <div className="hover:text-sky-400 transition">
                    Software Development
                  </div>
                </li>
                <li>
                  <div className="hover:text-sky-400 transition">
                    Cloud Integration
                  </div>
                </li>
                <li>
                  <div className="hover:text-sky-400 transition">
                    IT Consultation
                  </div>
                </li>
              </ul>
            </div>

            {/* Kolom 4: Kontak & Alamat */}
            <div>
              <h3 className="text-white font-semibold mb-6">Hubungi Kami</h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-sky-500">📍</span>
                  <span>
                    Perum Griya Bandung Asrri Barat (GBA Barat) Blok C3 No. 07,-
                    Kabupaten Bandung Jawa Barat
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-sky-500">📞</span>
                  <span>+62 857-2266-7673</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-sky-500">✉️</span>
                  <span>kopjassjm@sjm.biz.id</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Garis Pembatas & Copyright */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
            <p>
              © {new Date().getFullYear()} KOPJAS Sena Jaya Mandiri. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
