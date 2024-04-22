'use client'
import { useState } from "react";
import { useCartContext } from "../Context/CartContext"
import { collection, addDoc} from "firebase/firestore";
import { db } from "@/firebase/config";
import Swal from "sweetalert2";

const CheckoutDetails = () => {

    const { cart, getTotal, emptyCart } = useCartContext()
    const [orderId, setOrderId] = useState()

    const processPurchase = (e) => {
        e.preventDefault()
        const form = document.getElementById('checkoutForm');
        const formData = new FormData(form);
        const formResult = {};
        formData.forEach((value, key) => {
            formResult[key] = value;
        });
        console.log(formResult)
        const emailWarning = document.getElementById('validarEmail')

        if(formResult.email!==formResult.verificar_email){
            emailWarning.innerHTML="Ingrese el mismo email"
        }else{
            try {
                emailWarning.innerHTML="<br/>"
                const buyer = {
                    nombre: formResult.nombre,
                    email: formResult.email,
                    direccion: formResult.direccion,
                    comentarios: formResult.comentarios
                }
    
                const cartData = cart.map(item => {
                    return {
                        title: item.title,
                        price: item.price,
                        quantity: item.quantity,
                        slug: item.slug
                    };
                });
                const date = new Date()
                const total = getTotal()
                const data = {buyer, cartData, total, date}
                generateOrder(data)
                updateStock(cart)
                emptyCart()                
            } catch (error) {
                Swal.fire(error.message)
            }

        }
    }
    
    const generateOrder = async (data) => {
        const ticketsCollection = collection(db, "tickets");
        const order = await addDoc(ticketsCollection, data)
        setOrderId(order.id)
    }

    const updateStock = async (cart) => {
        await Promise.all(cart.map(async (product)=>{
            const formData = new FormData();
            formData.append('slug', product.slug);
            formData.append('stock', (product.stock - product.quantity).toString());

            const response = await fetch(`/api/Producto/${product.slug}`,{
                method: 'put',
                body: formData,         
            })
            if(!response.ok) throw new Error(`Error al actualizar el producto ${product.slug}`);
        }))
    }

    return (
        <main className="py-5 min-h-[calc(100vh-15rem)] flex justify-around">
        {!orderId?
        <>
            <section className="w-5/12">
                <form id="checkoutForm" onSubmit={processPurchase} className="flex flex-col justify-around border-2 border-grey-100 pt-4 p-2 pl-4 my-5 shadow-lg">
                    <h2 className="font-bold text-xl">Dejanos tus datos:</h2>
                    <hr/>
                    <label htmlFor="nombre">Nombre Completo:</label>
                    <input type="text" id="nombre" name="nombre" required className="border-2 border-grey-200 rounded"/>
                    <span id="spanNombre" className="text-red-600"><br/></span>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required className="border-2 border-grey-200 rounded"/>
                    <span id="spanEmail" className="text-red-600"><br/></span>

                    <label htmlFor="verificar_email">Verificar Email:</label>
                    <input type="email" id="verificar_email" name="verificar_email" required className="border-2 border-grey-200 rounded"/>
                    <span id="validarEmail" className="text-red-600"><br/></span>

                    <label htmlFor="direccion">Dirección:</label>
                    <textarea id="direccion" name="direccion" rows="2" required className="border-2 border-grey-200 rounded"></textarea>

                    <label htmlFor="comentarios">Comentarios Extra:</label>
                    <textarea id="comentarios" name="comentarios" rows="4" className="border-2 border-grey-200 rounded"></textarea>     

                    <input type="submit" id="submitForm" name="submitForm" value="Comprar" className="border-2 border-black rounded bg-white text-black w-1/6 h-8 mt-1 hover:bg-black hover:text-white"/>          
                </form>
            </section>
            <section className="w-5/12 border-2 border-grey-100 pt-4 p-2 my-5 shadow-lg flex flex-col justify-between">
                <div>
                    <h2 className="font-bold text-xl pl-2">Detalle de su compra:</h2>
                    <hr/>
                    {cart.map(item=>{
                        return <div key={item.slug} className="pl-2 my-2">
                            <li className="list-none">{item.title} - ${item.price} * {item.quantity} unidad/es</li>
                            <li className="list-none">${item.price} * {item.quantity} unidad/es</li>
                            <hr className="mx-2"/>
                        </div>
                    })}
                </div>
                <div>
                    <hr/>
                    <p className="pl-2"><span className="font-bold">Total: </span>${getTotal()}</p>
                </div>
            </section>
        </>:
            <section className="w-5/12 border-2 border-grey-100 p-2 my-5 shadow-lg h-content self-center">
                <p><span className="font-bold">¡Gracias por confiar en nosotros!</span><br/>Su ID de compra es {orderId}. Pronto recibira un email con los detalles de su pedido.</p>
            </section>
        }
        </main>
    )
}

export default CheckoutDetails
