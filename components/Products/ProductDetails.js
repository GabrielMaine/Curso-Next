import { mockProducts } from "@/data/products"
import Image from "next/image"
import Counter from "./Counter"
import { notFound } from "next/navigation"

const ProductDetail = ({slug}) => {

    const item = mockProducts.find(item=>item.slug===slug)

    if (!item) {
        notFound()
    }

    return (
        <div className="flex rounded-l border-2 border-black p-2">
            <div className="flex flex-col justify-around px-2">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>${item.price} - Stock: {item.stock}</span>
                <Counter initial={1} max={item.stock} addToCart={true}/>
            </div>
            <div className="">
                <Image
                alt={item.image}
                src={`/products/${item.image}`}
                width={300}
                height={300}
                style={{objectFit: "contain"}}
                />
            </div>
        </div>
    )
}

export default ProductDetail
