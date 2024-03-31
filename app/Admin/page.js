export async function generateMetadata({params, searchParams}, parent){

    return {
      title: `Tecno Tienda - Admin`
    }
  }
  
  
  const page = () => {
      return (
        <main className="min-h-[calc(100vh-15rem)] py-5 px-2">
            <h1>Admin</h1>
            <div>
                <form action="procesar_formulario.php" method="POST" enctype="multipart/form-data"  className="flex flex-col justify-around border-2 border-black bg-sky-100 p-2">
                    <h2>Agregar Producto</h2>
                    <label for="titulo">Título:</label>
                    <input type="text" id="titulo" name="titulo" required/>

                    <label for="descripcion">Descripción:</label>
                    <textarea id="descripcion" name="descripcion" rows="4" cols="50" required></textarea>

                    <label for="precio">Precio:</label>
                    <input type="number" id="precio" name="precio" min="0" step="0.01" required/>

                    <label for="stock">Stock:</label>
                    <input type="number" id="stock" name="stock" min="0" required/>

                    <label for="slug">Slug:</label>
                    <input type="text" id="slug" name="slug" required/>

                    <label for="imagen">Imagen:</label>
                    <input type="file" id="imagen" name="imagen" accept="image/*" required/>

                    <label for="categoria">Categoría:</label>
                    <select id="categoria" name="categoria" required>
                        <option value="">Seleccionar...</option>
                        <option value="categoria1">Celulares</option>
                        <option value="categoria2">Notebooks</option>
                        <option value="categoria3">Accesorios</option>
                    </select>

                    <input type="submit" value="Agregar Producto" className="self-start"/>
                </form>
            </div>
            <div>
                <form className="flex flex-col justify-around border-2 border-black bg-sky-100 p-2">
                    <h2>Actualizar Producto</h2>

                    <label for="slug">Slug:</label>
                    <input type="text" id="slug" name="slug" required/>

                    <label for="precio">Precio:</label>
                    <input type="number" id="precio" name="precio" min="0" step="0.01" required/>

                    <label for="stock">Stock:</label>
                    <input type="number" id="stock" name="stock" min="0" required/>

                    <label for="imagen">Imagen:</label>
                    <input type="file" id="imagen" name="imagen" accept="image/*" required/>

                    <input type="submit" value="Actualizar Producto" className="self-start"/>
                </form>
            </div>
            <div>
                <form className="flex flex-col justify-around border-2 border-black bg-sky-100 p-2">
                    <h2>Eliminar Producto</h2>

                    <label for="slug">Slug:</label>
                    <input type="text" id="slug" name="slug" required/>

                    <input type="submit" value="Eliminar Producto" className="self-start"/>
                </form>
            </div>
        </main>
      )
    }
    
    export default page
    