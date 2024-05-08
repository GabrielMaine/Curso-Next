'use client'
import { useAuthContext } from "../Context/AuthContext"
import Image from "next/image"
import Link from "next/link"
import LogoutButton from "../Auth/LogoutButton"

const Perfil = () => {

    const { user } = useAuthContext()

    return (
    <>
        {user.logged
        ?<div className="w-[360px] h-[420px] text-center border-2 border-grey-100 py-4 px-6 my-[5vh] shadow-lg">
            <span className="font-bold text-xl">¡Bienvenido usuario!</span>
            <Image
            src="/Users/user.png"
            alt="User pic"
            width={300}
            height={300}
            />
            <div className="flex justify-around mt-2">
                <Link
                href="/Carrito"
                className="border-2 border-black rounded bg-white text-black w-content px-2 py-1 mt-1 hover:bg-black hover:text-white">
                Ver mi carrito
                </Link>
                <LogoutButton/>
            </div>
        </div>
        :<div className="w-[360px] h-[420px] text-center border-2 border-grey-100 py-4 px-6 my-[5vh] shadow-lg">
            <Image
                src="/Users/user.png"
                alt="User pic"
                width={300}
                height={300}
            />
            <div className="mt-1 py-1">
                <span>No estas logeado. <br/>Inicia sesión <Link href="/Login" className="text-sky-600 font-bold">aqui</Link>.</span>
            </div>
        </div>}
    </>
    )
}

export default Perfil
