import { Helmet } from "react-helmet-async";
import ProductsPage from "../components/Products";

export default function Contactpage() {
  return (
    <>
      <Helmet>
        <title>Hubungi Kami | KOP MAS</title>
        <meta
          name="description"
          content="Kontak Koperasi Jasa Mahardika Artha Sejahtera (KOP MAS)."
        />
        <meta
          name="keywords"
          content="kontak Koperasi Jasa Mahardika Artha Sejahtera, Mahardika Artha Sejahtera, kopmas, kontak kopmas, kontak kop mas, kop mas, hubungi kop mas, solusi keuangan, investasi aman, konsultasi bisnis, manajemen aset, koperasi pensiun, koperasi depok, koperasi di sawangan"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hubungi Kami | KOP MAS" />
        <meta
          property="og:description"
          content="Kontak Koperasi Jasa Mahardika Artha Sejahtera (KOP MAS)."
        />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta property="og:url" content="https://www.kopmas.co.id/kontak" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hubungi Kami | KOP MAS" />
        <meta
          name="twitter:description"
          content="Hubungi Kami Koperasi Jasa Mahardika Artha Sejahtera (KOP MAS)."
        />

        <link rel="canonical" href="https://www.kopmas.co.id/kontak" />
      </Helmet>
      <ProductsPage />
    </>
  );
}
