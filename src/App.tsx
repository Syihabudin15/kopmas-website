import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Aboutpage from "./pages/Aboutpage";
import Productpage from "./pages/ProductPage";
import Partnerpage from "./pages/PartnerPage";
import Contactpage from "./pages/Contactpage";

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tentang" element={<Aboutpage />} />
          <Route path="/produk" element={<Productpage />} />
          <Route path="/mitra" element={<Partnerpage />} />
          <Route path="/kontak" element={<Contactpage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
