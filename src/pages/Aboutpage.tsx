import { Helmet } from "react-helmet-async";
import AboutsPage from "../components/Abouts";

export default function Aboutpage() {
  return (
    <>
      <Helmet>
        <title>Tentang | KOP MAS</title>
        <meta
          name="description"
          content="Koperasi Jasa Mahardika Artha Sejahtera (KOP MAS) menyediakan layanan solusi keuangan, investasi, dan konsultasi bisnis profesional untuk masa depan yang lebih mapan."
        />
        <meta
          name="keywords"
          content="Tentang Koperasi Jasa Mahardika Artha Sejahtera, Mahardika Artha Sejahtera, kopmas, tentang kopmas, tentang kop mas,kop mas, solusi keuangan, investasi aman, konsultasi bisnis, manajemen aset, koperasi pensiun, koperasi depok, koperasi di sawangan"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tentang | KOP MAS" />
        <meta
          property="og:description"
          content="Tentang Kami Koperasi Jasa Mahardika Artha Sejahtera (KOP MAS)."
        />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta property="og:url" content="https://www.kopmas.co.id/tentang" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tentang | KOP MAS" />
        <meta
          name="twitter:description"
          content="Tentang Kami Koperasi Jasa Mahardika Artha Sejahtera (KOP MAS)."
        />

        <link rel="canonical" href="https://www.kopmas.co.id/tentang" />
      </Helmet>
      <AboutsPage />
    </>
  );
}
