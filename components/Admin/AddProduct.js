'use client'
import Swal from "sweetalert2"
import { useState } from "react"

const AddProduct = () => {

    const [values, setValues] = useState({
        title: "",
        description: "",
        price: 0,
        stock: 0,
        slug: "",
        brand: "",
        type: ""
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
    }

    return (
        <div>
        <form onSubmit={handleSubmit} className="flex flex-col justify-around  border-2 border-grey-200 my-5 shadow-lg p-2">
            <h2 className="font-bold">Agregar Producto</h2>
            <label htmlFor="titulo">Título:</label>
            <input 
                type="text" 
                id="titulo" 
                name="title" 
                required 
                className="border-2 border-grey-200 rounded"
                onChange={handleChange}/>

            <label htmlFor="descripcion">Descripción:</label>
            <textarea 
                id="descripcion" 
                name="description" 
                rows="4" cols="50" 
                required 
                className="border-2 border-grey-200 rounded"
                onChange={handleChange}>   
            </textarea>

            <label htmlFor="precio">Precio:</label>
            <input 
                type="number" 
                id="precio" 
                name="price" 
                min="0" 
                step="0.01" 
                required 
                className="border-2 border-grey-200 rounded"
                onChange={handleChange}/>

            <label htmlFor="stock">Stock:</label>
            <input 
                type="number" 
                id="stock" 
                name="stock" 
                min="0" 
                required 
                className="border-2 border-grey-200 rounded"
                onChange={handleChange}/>

            <label htmlFor="slug">Slug:</label>
            <input 
                type="text" 
                id="slug" 
                name="slug" 
                required 
                className="border-2 border-grey-200 rounded"
                onChange={handleChange}/>

            <label htmlFor="marca">Marca:</label>
            <input 
                type="text" 
                id="marca" 
                name="brand" 
                required 
                className="border-2 border-grey-200 rounded"
                onChange={handleChange}/>

            <label htmlFor="imagen">Imagen:</label>
            <input 
                type="file" 
                id="imagen" 
                name="image" 
                accept="image/*" 
                required 
                className="border-2 border-grey-200 rounded"
                onChange={handleFile}
                />

            <label htmlFor="categoria">Categoría:</label>
            <select 
                id="categoria" 
                name="type" 
                required 
                className="border-2 border-grey-200 rounded"
                onChange={handleChange}>
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
