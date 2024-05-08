'use client'
import Swal from "sweetalert2"

const DeleteProduct = ({item}) => {

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const response = await fetch(`/api/Producto/${item.slug}`,{
            method: 'delete',
        })
        try {
            if(!response.ok) throw new Error (`Response status: ${response.status}`)
            Swal.fire("Producto eliminado exitosamente.")
        } catch (error) {
            Swal.fire("Ocurrio un error. Por favor intente mas tarde.")
        }
        console.log(response)
    }

    return (
        <div>
        <form onSubmit={handleSubmit} className="flex flex-col justify-around  border-2 border-grey-200 my-5 shadow-lg p-2">
            <h2 className="font-bold">Eliminar Producto</h2>

            <label htmlFor="titulo">Título:</label>
            <input 
                type="text" 
                id="titulo" 
                name="title" 
                className="border-2 border-grey-200 rounded"
                placeholder={item.title}
                disabled
                />

            <label htmlFor="descripcion">Descripción:</label>
            <textarea 
                id="descripcion" 
                name="description" 
                rows="4" cols="50" 
                className="border-2 border-grey-200 rounded"
                placeholder={item.description}
                disabled
                >   
            </textarea>

            <label htmlFor="precio">Precio:</label>
            <input 
                type="number" 
                id="precio" 
                name="price" 
                min="0" 
                step="0.01" 
                className="border-2 border-grey-200 rounded"
                placeholder={item.price}
                disabled
                />

            <label htmlFor="stock">Stock:</label>
            <input 
                type="number" 
                id="stock" 
                name="stock" 
                min="0" 
                className="border-2 border-grey-200 rounded"
                placeholder={item.stock}
                disabled
                />

            <label htmlFor="slug">Slug:</label>
            <input 
                type="text" 
                id="slug" 
                name="slug" 
                className="border-2 border-grey-200 rounded"
                placeholder={item.slug}
                disabled
                />

            <label htmlFor="marca">Marca:</label>
            <input 
                type="text" 
                id="marca" 
                name="brand" 
                className="border-2 border-grey-200 rounded"
                placeholder={item.brand}
                disabled
                />

            <label htmlFor="categoria">Categoría:</label>
            <input 
                type="text" 
                id="categoria" 
                name="type" 
                className="border-2 border-grey-200 rounded"
                placeholder={item.type}
                disabled
                />

            <input type="submit" value="Eliminar Producto" className="self-start border-2 border-black rounded bg-white text-black w-content px-2 h-8 mt-1 hover:bg-black hover:text-white"/>
        </form>
        </div>
    )
}

export default DeleteProduct
