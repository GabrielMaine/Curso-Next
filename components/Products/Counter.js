'use client'
import { useState } from 'react'

const Counter = ({initial, max, addToCart}) => {
    const [counter, setCounter] = useState(initial)

    const increase = () => {
        if (counter<max) setCounter(counter+1)
    }

    const decrease = () => {
        if(counter>1) setCounter(counter-1)
    }

    return (
    <div className="shadow-xl mx-auto w-[fit-content] text-center">
        <button onClick={decrease} className="border-2 border-black bg-white text-black rounded-l w-16 h-12 hover:bg-black hover:text-white">-</button>
        <button className="border-t-2 border-b-2 border-black bg-white text-black w-16 h-12">{counter}</button>
        <button onClick={increase} className="border-2 border-black bg-white text-black rounded-r w-16 h-12 hover:bg-black hover:text-white">+</button>
        <br/>
        {
        addToCart?
        <button className="border-2 border-black rounded bg-white text-black w-full h-12 mt-1 hover:bg-black hover:text-white">Añadir al carrito</button>
        :""
        }
    </div>
    )
}

export default Counter
