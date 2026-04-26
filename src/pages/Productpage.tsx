import { Helmet } from "react-helmet-async";
import ProductsPage from "../components/Products";

export default function Productpage() {
  return (
    <>
      <Helmet>
        <title>Produk & Layanan | KOP MAS</title>
        <meta
          name="description"
          content="Koperasi Jasa Mahardika Artha Sejahtera (KOP MAS) menyediakan Dua Produk pembiayaan dirancang khusus untuk memenuhi kebutuhan
            pensiunan dan penerima manfaat pensiun terusan."
        />
        <meta
          name="keywords"
          content="Produk Koperasi Jasa Mahardika Artha Sejahtera, Mahardika Artha Sejahtera, kopmas, koperasi mas, produk kopmas, produk kop mas,kop mas, solusi keuangan, investasi aman, konsultasi bisnis, manajemen aset, koperasi pensiun, koperasi depok, koperasi di sawangan, koperasi mahardika, koperasi mahardika artha sejahtera"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Produk & Layanan | KOP MAS" />
        <meta
          property="og:description"
          content="Produk & Layanan Koperasi Jasa Mahardika Artha Sejahtera (KOP MAS)."
        />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta property="og:url" content="https://www.kopmas.co.id/produk" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Produk & Layanan | KOP MAS" />
        <meta
          name="twitter:description"
          content="Produk & Layanan Koperasi Jasa Mahardika Artha Sejahtera (KOP MAS)."
        />

        <link rel="canonical" href="https://www.kopmas.co.id/produk" />
      </Helmet>
      <ProductsPage />
    </>
  );
}
