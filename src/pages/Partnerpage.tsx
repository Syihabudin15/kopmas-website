import { Helmet } from "react-helmet-async";
import PartnersPage from "../components/Partners";

export default function Partnerpage() {
  return (
    <>
      <Helmet>
        <title>Mitra Kerja | KOP MAS</title>
        <meta
          name="description"
          content="Mitra Kerja Koperasi Jasa Mahardika Artha Sejahtera (KOP MAS) termasuk mitra pembiayaan, mitra bantuan potong dan lainnya."
        />
        <meta
          name="keywords"
          content="mitra Koperasi Jasa Mahardika Artha Sejahtera, Mahardika Artha Sejahtera, kopmas, mitra kopmas, mitra kop mas,kop mas, solusi keuangan, investasi aman, konsultasi bisnis, manajemen aset, koperasi pensiun, koperasi depok, koperasi di sawangan"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mitra Kerja | KOP MAS" />
        <meta
          property="og:description"
          content="Mitra Kerja Koperasi Jasa Mahardika Artha Sejahtera (KOP MAS)."
        />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta property="og:url" content="https://www.kopmas.co.id/mitra" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mitra Kerja | KOP MAS" />
        <meta
          name="twitter:description"
          content="Mitra Kerja Koperasi Jasa Mahardika Artha Sejahtera (KOP MAS)."
        />

        <link rel="canonical" href="https://www.kopmas.co.id/mitra" />
      </Helmet>
      <PartnersPage />
    </>
  );
}
