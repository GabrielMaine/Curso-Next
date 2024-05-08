const AdminTickets = async () => {

    const response = await fetch(`http://localhost:3000/api/Checkout`,
    {cache: "no-store"}
    ).then(r=>r.json())

    const tickets = response.payload

    const printDate = (dateObj) => {
        const milliseconds = dateObj.seconds * 1000 + dateObj.nanoseconds / 1000000;
        const fecha = new Date(milliseconds);
        return fecha.toLocaleString(); 

    }

    return (
        <table className="border-2 border-black text-center w-full">
            <thead className="bg-slate-50 text-xl">
                <tr>
                    <td colSpan="7">Lista de compras</td>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-slate-50 border-2 border-black font-bold">
                    <td>Fecha</td>
                    <td>Comprador</td>
                    <td>Email</td>
                    <td>Direccion</td>
                    <td>Comentarios</td>
                    <td>Carrito</td>
                    <td>Total</td>
                </tr>
                {tickets.map(ticket=>{
                    return<tr
                    className="border-2 border-gray-300 py-1"
                    key={printDate(ticket.date)}>
                        <td className="px-2">{printDate(ticket.date)}</td>
                        <td className="px-2 text-start">{ticket.buyer.nombre}</td>
                        <td className="px-2 text-start">{ticket.buyer.email}</td>
                        <td className="px-2 text-start">{ticket.buyer.direccion}</td>
                        <td className="text-start">{ticket.buyer.comentarios}</td>
                        <td className="px-2 text-start">
                            <ul>
                                {ticket.cart.map((item, index) => (
                                    <li key={index}>
                                        {item.title} - Cantidad: {item.quantity}
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td className="px-2">${ticket.total}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default AdminTickets
