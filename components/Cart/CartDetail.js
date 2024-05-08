'use client'
import Image from "next/image"
import CartCounter from "./CartCounter"

const CartDetail = ({item}) => {

    return (
        <div className="flex justify-between border-2 border-black p-2">
            <div className="flex flex-col justify-around px-5">
                <h3>{item.title}</h3>
                <span>Precio por unidad: ${item.price}</span>
                <CartCounter item={item}/>
            </div>
            <div className="">
                <Image
                alt={item.image}
                src={`${item.image}`}
                width={150}
                height={150}
                style={{objectFit: "contain"}}
                />
            </div>
        </div>
    )
}

export default CartDetail
