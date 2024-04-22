export async function generateMetadata({params, searchParams}, parent){

  return {
    title: `Tecno Tienda - Contacto`
  }
}


const page = () => {
    return (
      <main className="min-h-[calc(100vh-15rem)] flex justify-around">
          <section className="w-content bg-gray-50 flex flex-col border-2 border-grey-200 my-5 shadow-lg">
              <div className="flex flex-col align-start gap-2 py-4 px-5 w-full">
                  <h2 className="font-bold">Horarios de atención:</h2>
                  <li>Lunes a Viernes 9 a 18hs</li>
                  <li>Sabados 9 a 13hs</li>
                  <span>Av. Pellegrini 1234 - Rosario, Santa Fe</span>
              </div>
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.7852341431585!2d-60.645452624487895!3d-32.95667917358904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab0fab4466a5%3A0xa701c7ec0f6298cf!2sAv.%20Pellegrini%201234%2C%20S2000BTZ%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1713300181878!5m2!1ses!2sar" width={450} height={300} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </section>
          <section className="w-7/12 h-100">
                <form id="checkoutForm" className="border-2 border-grey-100 pt-4 p-2 my-5 shadow-lg">
                  <h2 className="font-bold">¡Dejanos tu mensaje!</h2>
                  <span>Llena el formulario con tus datos y nos contactaremos a la brevedad.</span>
                  <div className="flex flex-col justify-around border-y border-black py-2">
                    <label htmlFor="nombre">Nombre Completo:</label>
                    <input type="text" id="nombre" name="nombre" required className="border-2 border-grey-200 rounded"/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required className="border-2 border-grey-200 rounded"/>

                    <label htmlFor="verificar_email">Verificar Email:</label>
                    <input type="email" id="verificar_email" name="verificar_email" required className="border-2 border-grey-200 rounded"/>

                    <label htmlFor="comentarios">Dejanos tu comentario:</label>
                    <textarea id="comentarios" name="comentarios" rows="6" className="border-2 border-grey-200 rounded"></textarea>     
                  </div>
                  <input type="submit" id="submitForm" name="submitForm"  className="border-2 border-black rounded bg-white text-black w-1/6 h-8 mt-1 hover:bg-black hover:text-white"/>          
                </form>
            </section>
      </main>
    )
  }
  
  export default page
  