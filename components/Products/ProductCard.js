import Link from "next/link"
import Image from "next/image"

const ProductCard = ({item}) => {
    return (
        <Link href={`/Productos/Detalle/${item.slug}`}>
            <div className="border-2 border-black min-h-[400px] flex flex-col justify-between shadow-lg hover:ring-2">
                    <div className="border-b-2 border-grey-200">
                        <Image
                        alt={item.image}
                        src={`/products/${item.image}`}
                        width={300}
                        height={300}
                        style={{objectFit: "contain"}}
                        />
                    </div>
                    <div className="text-center py-3">
                        <span>${item.price}</span>
                        <h3>{item.title}</h3>
                    </div>
            </div>
        </Link>
    )
}

export default ProductCard
