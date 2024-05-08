'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartContext } from "../Context/CartContext"
import Swal from "sweetalert2";

const CheckoutForm = () => {

    const { cart, getTotal, emptyCart } = useCartContext()

    const router = useRouter()

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        verificar_email: "",
        direccion: "",
        comentarios: ""
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const emailWarning = document.getElementById('validarEmail')
        if(values.email!==values.verificar_email){
            emailWarning.innerHTML="Ingrese el mismo email"
            return null
        }else{
            emailWarning.innerHTML="<br/>"
            try {
                const formData = new FormData()
                formData.append('values', JSON.stringify(values))
                formData.append('cart', JSON.stringify(cart))
                formData.append('total',getTotal())
                const response = await fetch(`/api/Checkout`,{
                    method: 'POST',
                    body: formData}
                )
                if (response.ok) {
                    const data = await response.json(); // Convertir el cuerpo de la respuesta a JSON
                    console.log(data.order); // Hacer algo con los datos recibidos
                    emptyCart()
                    Swal.fire({
                        title: "Su compra se realizo correctamente",
                        text: `El id de su compra es ${data.order}. Pronto recibira un email con los detalles.`,
                        icon: "success"
                      });
                    router.push('/')
                }
                if(!response.ok) throw new Error ("Ocurrio un error en su compra. Por favor intentelo mas tarde.")
                return null
            } catch (error) {
                Swal.fire({
                    title: "Error",
                    text: `Ocurrio un error en su compra. Por favor intentelo mas tarde.`,
                    icon: "error"
                  });
                return null
            }
        }
    }

    return (
        <section className="w-5/12">
            <form id="checkoutForm" onSubmit={handleSubmit} className="flex flex-col justify-around border-2 border-grey-100 pt-4 p-2 pl-4 my-5 shadow-lg">
                <h2 className="font-bold text-xl">Dejanos tus datos:</h2>
                <hr/>
                <label htmlFor="nombre">Nombre Completo:</label>
                <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    required 
                    onChange={handleChange}
                    className="border-2 border-grey-200 rounded"
                />
                <span id="spanNombre" className="text-red-600"><br/></span>

                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    onChange={handleChange}
                    className="border-2 border-grey-200 rounded"
                />
                <span id="spanEmail" className="text-red-600"><br/></span>

                <label htmlFor="verificar_email">Verificar Email:</label>
                <input 
                    type="email" 
                    id="verificar_email" 
                    name="verificar_email" 
                    required 
                    onChange={handleChange}
                    className="border-2 border-grey-200 rounded"
                />
                <span id="validarEmail" className="text-red-600"><br/></span>

                <label htmlFor="direccion">Dirección:</label>
                <textarea 
                    id="direccion" 
                    name="direccion" 
                    rows="2" 
                    required 
                    onChange={handleChange}
                    className="border-2 border-grey-200 rounded">
                </textarea>

                <label htmlFor="comentarios">Comentarios Extra:</label>
                <textarea 
                    id="comentarios" 
                    name="comentarios" 
                    rows="4"
                    onChange={handleChange} 
                    className="border-2 border-grey-200 rounded">
                </textarea>     

                <input type="submit" id="submitForm" name="submitForm" value="Comprar" className="border-2 border-black rounded bg-white text-black w-1/6 h-8 mt-1 hover:bg-black hover:text-white"/>          
            </form>
        </section>
  )
}

export default CheckoutForm
