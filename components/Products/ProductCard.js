import Link from "next/link"
import Image from "next/image"
import CardPrice from "./CardPrice"

const ProductCard = ({item}) => {
    return (
        <Link href={`/Productos/Detalle/${item.slug}`}>
            <div className={`border-2 border-black min-h-[400px] flex flex-col justify-between shadow-lg hover:ring-2 ${item.stock===0?"hover:ring-red-400":""}`}>
                    <div className="border-b-2 border-grey-200">
                        <Image
                        alt={item.image}
                        src={`${item.image}`}
                        width={300}
                        height={300}
                        style={{objectFit: "contain"}}
                        />
                    </div>
                    <div className="text-center py-3">
                        <CardPrice item={item} />
                        <h3 className="font-bold text-l">{item.title}</h3>
                    </div>
            </div>
        </Link>
    )
}

export default ProductCard
