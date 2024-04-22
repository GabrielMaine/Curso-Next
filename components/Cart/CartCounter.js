'use client'
import { useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import Image from 'next/image'

const CartCounter = ({item}) => {
    const [counter, setCounter] = useState(item.quantity)

    const {deleteFromCart, addToCart} = useCartContext()

    const increase = () => {
        if (counter<item.stock){
            setCounter(counter+1)
            addToCart({
                ...item,
                quantity: 1
            })
        }
    }

    const decrease = () => {
        if(counter>1){
            setCounter(counter-1)
            addToCart({
                ...item,
                quantity: -1
            })
        }
    }

    return (
        <>
            <div className="mx-auto w-[fit-content] text-center">
                <button onClick={decrease} className="border-2 border-black bg-white text-black rounded-l w-8 hover:bg-black hover:text-white h-full">-</button>
                <button className="border-t-2 border-b-2 border-black bg-white text-black w-8  h-full">{counter}</button>
                <button onClick={increase} className="border-2 border-black bg-white text-black rounded-r w-8 hover:bg-black hover:text-white h-full">+</button>
                <button className="ml-1 border-2 border-black rounded bg-white text-black w-8 h-full hover:bg-black hover:text-white" onClick={()=>deleteFromCart(item.slug)}> X
                    {/* <Image
                        src={'/Icons/trash.svg'}
                        alt='Cart Icon'
                        width={16}
                        height={16}
                        className="m-auto my-0 p-0 bg-red-100"
                    /> */}
                </button>
            </div>
            <div>
                <span>Unidades en stock: {item.stock}</span>
            </div>
        </>
    )
}

export default CartCounter
