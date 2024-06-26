import Image from "next/image"
import Counter from "./Counter"
import DetailPrice from "./DetailPrice"
import { notFound } from "next/navigation"

const ProductDetail = async ({slug}) => {
    const item = await fetch(`http://localhost:3000/api/Producto/${slug}`,
    {cache: "no-store"}
    ).then(r=>r.json())

    if (!item) {
        notFound()
    }

    return (
        <div className="flex rounded-l border-2 border-black mx-auto w-[80vw]">
            <div className="w-1/2">
                <Image
                    alt={item.image}
                    src={`${item.image}`}
                    width={500}
                    height={500}
                    style={{objectFit: "contain"}}
                />
            </div>
            <div className="w-1/2 flex flex-col justify-between p-2">
                <div className="gap-4 flex flex-col">
                    <div>
                        <h3 className="font-bold text-4xl px-2">{item.title}</h3>
                        <p><span className="font-bold px-2">Marca: </span>{item.brand}</p>
                        <hr/>
                    </div>
                    <DetailPrice item={item}/>
                    <p className="text-base pl-2">{item.description}</p>
                </div>
                <div>
                    <hr className="pb-2"/>
                    <Counter item={item}/>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
