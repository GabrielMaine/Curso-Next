import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Perfil from "@/components/Inicio/Perfil";
import ProductDetail from "@/components/Products/ProductDetails";
import ProductPreview from "@/components/Inicio/ProductPreview";

export async function generateMetadata({params, searchParams}, parent){

  return {
    title: `Tecno Tienda`
  }
}


export default function Home() {
  const slug = "asus-zenbook14"
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-15rem)]">
        <div className="text-center mt-3">
          <h1 className="text-4xl font-bold">¡Bienvenido a la Tecno Tienda!</h1>
        </div>
        <section className="flex flex-row px-5 gap-2">
          <Perfil/>
          <ProductPreview slug={slug} />
        </section>
      </main>
      <Footer />
    </>
  );
}
