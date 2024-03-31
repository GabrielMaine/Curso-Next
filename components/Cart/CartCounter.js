'use client'
import { useState } from 'react'

const CartCounter = ({initial, max}) => {
    const [counter, setCounter] = useState(initial)

    const increase = () => {
        if (counter<max) setCounter(counter+1)
    }

    const decrease = () => {
        if(counter>0) setCounter(counter-1)
    }

    return (
    <div className="mx-auto w-[fit-content] text-center">
        <button onClick={decrease} className="border-2 border-black bg-white text-black rounded-l w-8 h-6 hover:bg-black hover:text-white">-</button>
        <button className="border-t-2 border-b-2 border-black bg-white text-black w-8 h-6">{counter}</button>
        <button onClick={increase} className="border-2 border-black bg-white text-black rounded-r w-8 h-6 hover:bg-black hover:text-white">+</button>
        <button className="ml-1 border-2 border-black rounded bg-white text-black w-8 h-6 hover:bg-black hover:text-white">x</button>
    </div>
    )
}

export default CartCounter
