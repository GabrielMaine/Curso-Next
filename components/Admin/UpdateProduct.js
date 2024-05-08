'use client'
import Swal from "sweetalert2"
import { useState } from "react"

const UpdateProduct = ({item}) => {

    const [values, setValues] = useState({
        title: "",
        description: "",
        price: 0,
        stock: 0,
        slug: "",
        brand: "",
        type: "",
        discountStatus: "",
        discountAmount: 0,
        installmentsStatus: "",
        installmentsAmount: 0,
    })
   
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const [file, setFile] = useState(null)

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.append('image', file)
        const response = await fetch(`/api/Producto/${item.slug}`,{
            method: 'put',
            body: formData
        })
        try {
            if(!response.ok) throw new Error (`Response status: ${response.status}`)
            Swal.fire("Producto actualizado exitosamente.")
        } catch (error) {
            Swal.fire("Ocurrio un error. Por favor intente mas tarde.")
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="flex flex-col justify-around  border-2 border-grey-200 my-5 shadow-lg p-2">
            <h2 className="font-bold">Actualizar Producto</h2>

            <label htmlFor="titulo">Título:</label>
            <input 
                type="text" 
                id="titulo" 
                name="title" 
                className="border-2 border-grey-200 rounded"
                placeholder={item.title}
                onChange={handleChange}/>

            <label htmlFor="descripcion">Descripción:</label>
            <textarea 
                id="descripcion" 
                name="description" 
                rows="4" cols="50" 
                className="border-2 border-grey-200 rounded"
                placeholder={item.description}
                onChange={handleChange}>   
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
                onChange={handleChange}/>

            <label htmlFor="stock">Stock:</label>
            <input 
                type="number" 
                id="stock" 
                name="stock" 
                min="0" 
                className="border-2 border-grey-200 rounded"
                placeholder={item.stock}
                onChange={handleChange}/>

            <label htmlFor="slug">Slug:</label>
            <input 
                type="text" 
                id="slug" 
                name="slug" 
                className="border-2 border-grey-200 rounded"
                placeholder={item.slug}
                onChange={handleChange}/>

            <label htmlFor="marca">Marca:</label>
            <input 
                type="text" 
                id="marca" 
                name="brand" 
                className="border-2 border-grey-200 rounded"
                placeholder={item.brand}
                onChange={handleChange}/>

            <label htmlFor="imagen">Imagen:</label>
            <input 
                type="file" 
                id="imagen" 
                name="image" 
                accept="image/*" 
                className="border-2 border-grey-200 rounded"
                onChange={handleFile}
                />

            <label htmlFor="categoria">Categoría:</label>
            <select 
                id="categoria" 
                name="type" 
                className="border-2 border-grey-200 rounded"
                onChange={handleChange}>
                    <option value="">Seleccionar...</option>
                    <option value="Celulares">Celulares</option>
                    <option value="Notebooks">Notebooks</option>
                    <option value="Accesorios">Accesorios</option>
            </select>

            <label htmlFor="descuento">¿Tiene descuento?</label>
            <select 
                id="descuento" 
                name="discountStatus" 
                className="border-2 border-grey-200 rounded"
                onChange={handleChange}>
                    <option value="">Seleccionar...</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
            </select>

            <label htmlFor="cantidad_descuento">Cantidad de descuento (entre 0 y 1):</label>
            <input 
                type="number" 
                id="cantidad_descuento" 
                ame="discountAmount" 
                min="0" max="1" step="0.05" 
                className="border-2 border-grey-200 rounded"
                onChange={handleChange}/>

            <label htmlFor="cuotas">¿Tiene cuotas sin interes?</label>
            <select 
                id="cuotas" 
                name="installmentsStatus" 
                className="border-2 border-grey-200 rounded"
                onChange={handleChange}>
                    <option value="">Seleccionar...</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
            </select>

            <label htmlFor="cantidad_cuotas">Cantidad de cuotas:</label>
            <input 
                type="number" 
                id="cantidad_cuotas" 
                name="installmentsAmount" 
                min="0" max="12" step="1" 
                className="border-2 border-grey-200 rounded"
                onChange={handleChange}/>

            <input type="submit" value="Actualizar Producto" className="self-start border-2 border-black rounded bg-white text-black w-content px-2 h-8 mt-1 hover:bg-black hover:text-white"/>
        </form>
    </div>
    )
}

export default UpdateProduct
