const DetailPrice = ({item}) => {
    return (
        <>
            {item.stock===0
            ?<div className="pl-2">
                <p className="font-black text-red-600 text-3xl mb-1">${item.price}</p>
            </div>
            :item.discount.status
                ?   <div className="pl-2">
                        <p className="font-black text-sky-600 text-3xl mb-1">${Math.round(item.price*(1-item.discount.amount))}</p>
                        <p className="font-bold text-gray-500">Precio de lista:  
                            <span className="font-normal line-through px-1">${item.price}</span>
                            <span className="font-normal">({item.discount.amount*100}% de descuento) </span>
                        </p>
                    </div>
                :item.installments.status
                    ?<div className="pl-2">
                        <p className="font-black text-sky-600 text-3xl mb-1">${item.price}</p>
                        <span className="font-bold text-slate-100 bg-black rounded p-1">{item.installments.amount} cuotas sin interes</span>
                    </div>
                    :<div className="pl-2">
                        <p className="font-black text-sky-600 text-3xl mb-1">${item.price}</p>
                    </div>
                    }
        </>
    )
}

export default DetailPrice
