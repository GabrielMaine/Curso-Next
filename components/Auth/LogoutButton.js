'use client'
import { useAuthContext } from "../Context/AuthContext"

const LogoutButton = () => {
    const { logout } = useAuthContext()
    return (
        <button onClick={logout} className="border-2 border-black rounded bg-white text-black w-content px-2 py-1 mt-1 hover:bg-black hover:text-white">
            Cerrar sesion
        </button>
    )
}

export default LogoutButton
