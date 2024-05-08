const CardPrice = ({item}) => {
    return (
        <>
            {item.stock===0
            ?<span className="font-bold text-red-600">Sin stock</span>
            :item.discount.status
                ?<> <span className="font-black text-sky-600">${Math.round(item.price*(1-item.discount.amount))}</span><br/>
                    <span className="font-bold line-through text-red-600">${item.price}</span></>
                :item.installments.status
                    ?<> <span className="font-bold text-slate-100 bg-black rounded px-1">{item.installments.amount} cuotas sin interes</span><br/>
                        <span className="font-bold text-sky-300">${item.price}</span></>
                    :<span className="font-bold text-sky-300">${item.price}</span>}
        </>
    )
}

export default CardPrice
