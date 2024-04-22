import Image from "next/image"
import Counter from "./Counter"
import { notFound } from "next/navigation"

const ProductDetail = async ({slug}) => {
    const item = await fetch(`http://localhost:3000/api/Producto/${slug}`,
    {cache: "no-store"}
    ).then(r=>r.json())

    if (!item) {
        notFound()
    }

    return (
        <div className="flex rounded-l border-2 border-black p-2">
            <div className="flex flex-col justify-around px-2">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>${item.price} - Stock: {item.stock}</span>
                <Counter item={item}/>
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
