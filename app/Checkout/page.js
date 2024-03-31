import { mockCart } from "@/data/cart"

const page = () => {
    const totalCompra = mockCart.reduce((total, producto) => {
        return total + (producto.quantity * producto.price);
    }, 0);

    return (
        <main className="py-5 min-h-[calc(100vh-15rem)] flex justify-around">
            <section className="w-5/12">
                <form id="checkoutForm" className="flex flex-col justify-around border-2 border-black bg-sky-100 p-2">
                    <label for="nombre">Nombre Completo:</label>
                    <input type="text" id="nombre" name="nombre" required/>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>

                    <label for="verificar_email">Verificar Email:</label>
                    <input type="email" id="verificar_email" name="verificar_email" required/>

                    <label for="direccion">Dirección:</label>
                    <textarea id="direccion" name="direccion" rows="4" required></textarea>

                    <label for="comentarios">Comentarios Extra:</label>
                    <textarea id="comentarios" name="comentarios" rows="4"></textarea>     

                    <input type="submit" id="submitForm" name="submitForm" />          
                </form>
            </section>
            <section className="w-5/12 border-2 border-black bg-sky-100 p-2">
                <h2>Detalle de su compra:</h2>
                <hr/>
                {mockCart.map(item=>{
                    return <div key={item.slug}>
                        <span>{item.title}</span><br/>
                        <span>${item.price} * {item.quantity} unidad/es</span>
                    </div>
                })}
                <span>Total: ${totalCompra}</span>
            </section>
        </main>
    )
}

export default page
