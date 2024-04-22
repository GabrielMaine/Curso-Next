'use client'
import CartDetail from "./CartDetail"
import Link from "next/link"
import { useCartContext } from "../Context/CartContext"

const CartList = () => {

    const { cart, emptyCart } = useCartContext()

    return (
    <section className="m-auto my-5 w-2/3">
    {
    cart.length>0?
    <>
        <div className="flex flex-col gap-3">
            <h1>Carrito:</h1>
            {cart.map(item=><CartDetail key={item.slug} item={item} />)}
            <div className="flex w-100 mt-2">
                <div className="w-1/2 pr-2">
                    <Link href="/Checkout">
                        <button className="border-2 border-black rounded bg-white text-black w-full h-12 mt-1 hover:bg-black hover:text-white">
                            Finalizar compra
                        </button>
                    </Link>
                </div>
                <div className="w-1/2 pl-2">
                    <button className="border-2 border-black rounded bg-white text-black w-full h-12 mt-1 hover:bg-black hover:text-white" onClick={emptyCart}>Vaciar carrito</button>
                </div>
            </div>
        </div>
    </>:
    <>
    <div className="my-2 text-center border-2 border-grey-100 py-4 px-2 my-[10vh] shadow-lg">
        <h1>¡Tu carrito esta vacio!</h1>
        <p>Te invitamos a ver nuestro catalogo <Link href='/Productos/todos' className='text-sky-600 font-bold'> aquí</Link>.</p>
    </div>
    </>
    }
    </section>
    )
}

export default CartList
