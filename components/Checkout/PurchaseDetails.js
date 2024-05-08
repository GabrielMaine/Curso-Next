'use client'
import { useCartContext } from "../Context/CartContext"

const PurchaseDetails = () => {
    const { cart, getTotal } = useCartContext()
    return (
        <section className="w-5/12 border-2 border-grey-100 pt-4 p-2 my-5 shadow-lg flex flex-col justify-between">
            <div>
                <h2 className="font-bold text-xl pl-2">Detalle de su compra:</h2>
                <hr/>
                {cart.map(item=>{
                    return <div key={item.slug} className="pl-2 my-2">
                        <li className="list-none font-bold">{item.title}</li>
                        {item.discount.status
                        ?<>
                            <li className="list-none line-through">${item.price}</li>
                            <li className="list-none">${item.price*(1-item.discount.amount)}</li>
                        </>
                        :<li className="list-none">${item.price}</li>}
                        <li className="list-none">{item.quantity} {item.quantity>1?"unidades":"unidad"}</li>
                        <hr className="mx-2"/>
                    </div>
                })}
            </div>
            <div>
                <hr/>
                <p className="pl-2"><span className="font-bold">Total: </span>${getTotal()}</p>
            </div>
        </section>
    )
}

export default PurchaseDetails
