'use client'
import Link from "next/link"
import Image from "next/image"
import { useCartContext } from "../Context/CartContext"

const CartWidget = () => {
    const {getQuantity} = useCartContext()

    return (
        <Link href={'/Carrito'} className={'text-neutral-600 font-bold hover:text-neutral-200 flex items-center'}>
            <Image
                src={'/Icons/cart.svg'}
                alt='Cart Icon'
                width={30}
                height={30}
            />
            <span>{getQuantity()}</span>
        </Link>
    )
}

export default CartWidget
