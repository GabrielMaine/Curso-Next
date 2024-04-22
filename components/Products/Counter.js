'use client'
import { useState } from 'react'
import { useCartContext } from '../Context/CartContext'

const Counter = ({item}) => {
    const {addToCart} = useCartContext()

    const [quantity, setQuantity] = useState(1)

    const increase = () => {
        if (quantity<item.stock) setQuantity(quantity+1)
    }

    const decrease = () => {
        if(quantity>1) setQuantity(quantity-1)
    }

    const handleAdd = () => {
        addToCart({
            ...item,
            quantity
        })
    }

    return (
    <div className="shadow-xl mx-auto w-[fit-content] text-center">
        <button onClick={decrease} className="border-2 border-black bg-white text-black rounded-l w-16 h-12 hover:bg-black hover:text-white">-</button>
        <button className="border-t-2 border-b-2 border-black bg-white text-black w-16 h-12">{quantity}</button>
        <button onClick={increase} className="border-2 border-black bg-white text-black rounded-r w-16 h-12 hover:bg-black hover:text-white">+</button>
        <br/>
        <button onClick={handleAdd} className="border-2 border-black rounded bg-white text-black w-full h-12 mt-1 hover:bg-black hover:text-white">Añadir al carrito</button>
    </div>
    )
}

export default Counter
