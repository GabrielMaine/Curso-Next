import Image from "next/image"
import DetailPrice from "../Products/DetailPrice"
import Link from "next/link"

const ProductPreview = async ({slug}) => {

    const item = await fetch(`http://localhost:3000/api/Producto/${slug}`,
    {cache: "no-store"}
    ).then(r=>r.json())

    if (!item) {
        notFound()
    }

    return (
        <div className="flex rounded-l border-2 border-grey shadow-lg mx-auto h-[420px] my-[5vh]">
            <div className="w-1/2 flex items-center justify-center">
                <Image
                    alt={item.image}
                    src={`${item.image}`}
                    width={400}
                    height={400}
                    style={{objectFit: "contain"}}
                />
            </div>
            <div className="w-1/2 flex flex-col justify-between p-2">
                <div className="gap-4 flex flex-col">
                    <div>
                        <h2 className="text-2xl px-2 mb-1">Producto destacado del mes:</h2>
                        <h3 className="font-bold text-4xl px-2">{item.title}</h3>
                        <p><span className="font-bold px-2">Marca: </span>{item.brand}</p>
                        <hr/>
                    </div>
                    <DetailPrice item={item}/>
                    <p className="text-base pl-2">{item.description}</p>
                    <Link
                    href={`/Productos/Detalle/${item.slug}`}
                    className="border-2 border-black rounded bg-white text-black w-fit self-center px-2 py-1 mt-3 hover:bg-black hover:text-white">
                        Ver en tienda
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductPreview
