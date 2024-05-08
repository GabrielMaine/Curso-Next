import Image from "next/image"

export async function generateMetadata({params, searchParams}, parent){

  return {
    title: `Tecno Tienda - Nosotros`
  }
}

const page = () => {
  return (
    <main className="min-h-[calc(100vh-15rem)]">
      <div className="text-center my-5 bg-gray-100">
        <h1 className="font-bold text-2xl">¡Bienvenido a Tecno Tienda!</h1>
      </div>
      <section>
        <div className="text-center my-5 border-2 border-gray-200 shadow-lg mx-[3vw] py-5 px-6">
          <p className="text-start my-1">
          Bienvenido a Tecno Tienda, tu destino confiable para tecnología de vanguardia y accesorios innovadores. Desde nuestra fundación, nos hemos comprometido a ofrecer a nuestros clientes una experiencia de compra excepcional, respaldada por productos de calidad, servicio al cliente excepcional y un profundo conocimiento de la industria tecnológica.</p>

        <Image
          src="/Nosotros/Nosotros_1.jpg"
          alt="Nuestra tienda"
          width={600}
          height={600}
          className="mx-auto my-2"
        />

          <p className="text-start my-1">En Tecno Tienda, creemos que la tecnología no solo mejora nuestras vidas, sino que también nos conecta con el mundo que nos rodea. Ya sea que estés buscando el último smartphone con características innovadoras, una potente laptop para tus necesidades profesionales o accesorios que complementen tu estilo de vida digital, estamos aquí para ayudarte a encontrar exactamente lo que necesitas.</p>

          <p className="text-start my-1">Nuestro equipo está formado por apasionados expertos en tecnología que están dedicados a brindarte orientación personalizada y recomendaciones informadas para que tomes decisiones de compra inteligentes. Nos esforzamos por mantenernos al tanto de las últimas tendencias y avances tecnológicos para garantizar que siempre tengas acceso a lo mejor y más actualizado en el mercado.</p>

          <p className="text-start my-1">En Tecno Tienda, no solo nos preocupamos por vender productos, sino que también nos preocupamos por construir relaciones duraderas con nuestros clientes. Tu satisfacción es nuestra máxima prioridad, y nos comprometemos a brindarte un servicio excepcional en cada paso del camino.</p>

          <p className="text-start my-1">Explora nuestra amplia selección de productos, experimenta la excelencia en atención al cliente y únete a nuestra comunidad de entusiastas de la tecnología en Tecno Tienda. Estamos emocionados de ser parte de tu viaje tecnológico y esperamos ayudarte a encontrar los dispositivos perfectos para satisfacer todas tus necesidades digitales.</p>

          <p className="text-start my-1">¡Bienvenido a Tecno Tienda!
          </p>
        </div>
      </section>
    </main>
  )
}

export default page
