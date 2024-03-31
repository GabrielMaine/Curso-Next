import { mockProducts } from "@/data/products"
import Image from "next/image"
import CartCounter from "./CartCounter"
import { mockCart } from "@/data/cart"

const CartDetail = ({slug}) => {

    const item = mockCart.find(item=>item.slug===slug)

    const stock = mockProducts.find(item=>item.slug===slug).stock

    return (
        <div className="flex justify-between border-2 border-black p-2">
            <div className="flex flex-col justify-around px-5">
                <h3>{item.title}</h3>
                <span>Precio por unidad: ${item.price}</span>
                <CartCounter initial={item.quantity} max={stock}/>
            </div>
            <div className="">
                <Image
                alt={item.image}
                src={`/products/${item.image}`}
                width={150}
                height={150}
                style={{objectFit: "contain"}}
                />
            </div>
        </div>
    )
}

export default CartDetail
