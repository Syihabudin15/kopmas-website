import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Profile from "./Profile";
import Struktur from "./Utils/Organized";
import Careers from "./Career";
import Contact from "./Contact";
import FAQSection from "./Utils/FAQSection";
import Portfolio from "./Utils/Portfolio";

function AppRouter() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-slate-50">
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* Grouping Route Tentang Kami */}
          <Route path="/tentang-kami">
            <Route index element={<>Tentang Kami</>} />
            <Route path="profile" element={<Profile />} />
            <Route path="struktur" element={<Struktur />} />
          </Route>

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/karir" element={<Careers />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/faq" element={<FAQSection />} />

          {/* 404 Page (Opsional) */}
          <Route
            path="*"
            element={
              <div className="py-20 text-center text-2xl font-bold">
                404 - Halaman Tidak Ditemukan
              </div>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default AppRouter;
