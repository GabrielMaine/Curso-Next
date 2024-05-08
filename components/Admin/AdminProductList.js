import Link from "next/link"
import Image from "next/image"

const AdminProductList = async () => {
    const items = await fetch(`http://localhost:3000/api/Productos/todos`,
    {cache: "no-store"}
    ).then(r=>r.json())

    return (
        <table className="border-2 border-black text-center">
            <thead className="bg-slate-50 text-xl">
                <tr>
                    <td colSpan="11">Lista de productos</td>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-slate-50 border-2 border-black font-bold">
                    <td>Nombre</td>
                    <td>Categoria</td>
                    <td>Marca</td>
                    <td>Slug</td>
                    <td>Stock</td>
                    <td>Imagen</td>
                    <td>Precio</td>
                    <td className="px-1">Desc.</td>
                    <td>Cuotas</td>
                    <td>Descripcion</td>
                    <td>Administrar</td>
                </tr>
                {items.map(item=>{
                    return<tr
                    className="border-2 border-gray-300 table-row"
                    key={item.slug}>
                        <td>{item.title}</td>
                        <td>{item.type}</td>
                        <td>{item.brand}</td>
                        <td>{item.slug}</td>
                        <td>{item.stock}</td>
                        <td>
                            <Image
                                src={item.image}
                                height={150}
                                width={150}
                                alt={item.title}
                            />
                        </td>
                        <td>{item.price}</td>
                        <td>{item.discount.status?item.discount.amount: "No"}</td>
                        <td>{item.installments.status?item.installments.amount: "No"}</td>
                        <td>{item.description}</td>
                        <td className="p-2 h-full table-cell">
                            <div className="w-full p-0 flex flex-col justify-center gap-2 h-full">
                                <Link
                                className="w-full align-middle border-2 border-black rounded bg-white text-black w-full px-2 hover:bg-black hover:text-white text-center"
                                href={`/Admin/Actualizar/${item.slug}`}
                                >Actualizar
                                </Link>
                                <Link
                                className="w-full align-middle border-2 border-black rounded bg-white text-black w-full px-2 hover:bg-black hover:text-white text-center"
                                href={`/Admin/Eliminar/${item.slug}`}
                                >Eliminar
                                </Link>
                            </div>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default AdminProductList
