import Swal from "sweetalert2"

const AddProduct = () => {

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const response = await fetch(`/api/Producto/${formData.get('slug')}`,{
            method: 'post',
            body: formData
        })
        try {
            if(!response.ok) throw new Error (`Response status: ${response.status}`)
            Swal.fire("Producto creado exitosamente.")
        } catch (error) {
            Swal.fire("Ocurrio un error. Por favor intente mas tarde.")
        }
        console.log(response)
    }

    return (
        <div>
        <form onSubmit={handleSubmit} className="flex flex-col justify-around  border-2 border-grey-200 my-5 shadow-lg p-2">
            <h2 className="font-bold">Agregar Producto</h2>
            <label htmlFor="titulo">Título:</label>
            <input type="text" id="titulo" name="titulo" required className="border-2 border-grey-200 rounded"/>

            <label htmlFor="descripcion">Descripción:</label>
            <textarea id="descripcion" name="descripcion" rows="4" cols="50" required className="border-2 border-grey-200 rounded"></textarea>

            <label htmlFor="precio">Precio:</label>
            <input type="number" id="precio" name="precio" min="0" step="0.01" required className="border-2 border-grey-200 rounded"/>

            <label htmlFor="stock">Stock:</label>
            <input type="number" id="stock" name="stock" min="0" required className="border-2 border-grey-200 rounded"/>

            <label htmlFor="slug">Slug:</label>
            <input type="text" id="slug" name="slug" required className="border-2 border-grey-200 rounded"/>

            <label htmlFor="marca">Marca:</label>
            <input type="text" id="marca" name="marca" required className="border-2 border-grey-200 rounded"/>

            <label htmlFor="imagen">Imagen:</label>
            <input type="file" id="imagen" name="imagen" accept="image/*" required className="border-2 border-grey-200 rounded"/>

            <label htmlFor="categoria">Categoría:</label>
            <select id="categoria" name="categoria" required className="border-2 border-grey-200 rounded">
                <option value="">Seleccionar...</option>
                <option value="Celulares">Celulares</option>
                <option value="Notebooks">Notebooks</option>
                <option value="Accesorios">Accesorios</option>
            </select>
            <input type="submit" value="Agregar Producto" className="self-start border-2 border-black rounded bg-white text-black w-content px-2 h-8 mt-1 hover:bg-black hover:text-white"/>
        </form>
    </div>
    )
}

export default AddProduct
