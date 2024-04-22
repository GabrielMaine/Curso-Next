import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

export async function generateMetadata({params, searchParams}, parent){

  return {
    title: `Tecno Tienda`
  }
}


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-15rem)]">
        <h1>Pagina de inicio</h1>
      </main>
      <Footer />
    </>
  );
}
