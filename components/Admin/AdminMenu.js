'use client'
import Link from "next/link"
import LogoutButton from "../Auth/LogoutButton"

const AdminMenu = () => {

    const links = [
        {
            href: "/Admin",
            label: "Ver productos"
        },
        {
            href: "/Admin/Crear",
            label: "Crear producto"
        },
        {
            href: "/Admin/Compras",
            label: "Ver compras"
        },
    ]

    return (
        <section className="bg-gray-100 py-2">
            <div className="text-center">
                <h1 className="font-bold text-2xl">Panel de control de Admin</h1>
            </div>
            <div className="flex justify-around mt-1">
                {links.map(link=>{
                return <Link
                key={link.label}
                href={link.href}
                className={`border-2 border-black rounded bg-white text-black w-content px-2 py-1 mt-1 hover:bg-black hover:text-white`}
                >
                {link.label}
                </Link>
                })}
                <LogoutButton/>
            </div>
        </section>
  )
}

export default AdminMenu
