import Swal from "sweetalert2"

const handleSubmit = async (e) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const response = await fetch(`/api/Producto/${formData.get('slug')}`,{
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

const DeleteProduct = () => {
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-around  border-2 border-grey-200 my-5 shadow-lg p-2">
                <h2 className="font-bold">Eliminar Producto</h2>

                <label htmlFor="slug">Slug:</label>
                <input type="text" id="slug" name="slug" required className="border-2 border-grey-200 rounded"/>

                <input type="submit" value="Eliminar Producto" className="self-start border-2 border-black rounded bg-white text-black w-content px-2 h-8 mt-1 hover:bg-black hover:text-white"/>
            </form>
        </div>
    )
}

export default DeleteProduct
