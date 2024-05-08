'use client'
import { useState, useEffect } from "react"
import { useAuthContext } from "../Context/AuthContext"
import { useRouter } from "next/navigation";
import Link from "next/link"
import Image from "next/image"
import Swal from "sweetalert2"

const LoginForm = () => {

    const { loginUser, googleLogin, logout } = useAuthContext()

    const router = useRouter()

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await loginUser(values)
            router.push('/')
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: `"Ocurrio un error al iniciar sesion. Por favor intentelo mas tarde.`,
                icon: "error"
              });
        }
    }

    const handlePopup = async (e) =>{
        e.preventDefault()
        try {
            await googleLogin()
            router.push('/')           
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: `"Ocurrio un error al iniciar sesion. Por favor intentelo mas tarde.`,
                icon: "error"
              });
        }
    }

    return (
    <div className="bg-white flex flex-col justify-around border-2 border-black rounded my-20 shadow-lg p-2 w-1/2 mx-auto p-5 text-center">
        <h2 className="font-bold text-2xl">Login</h2>
        <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-around border-t-2 border-b-2 border-black gap-2 p-5 text-center"
        >
            <input
                type="email"
                required
                value={values.email}
                placeholder="Email"
                className="border-2 border-grey-200 rounded"
                name="email"
                onChange={handleChange}
            />
            <input
                type="password"
                required
                value={values.password}
                placeholder="Contraseña"
                className="border-2 border-grey-200 rounded"
                name="password"
                onChange={handleChange}
            />
            <input type="submit" 
                value="Iniciar sesion" 
                className="self-center border-2 border-black rounded bg-white text-black w-content px-2 h-8 mt-1 hover:bg-black hover:text-white"
            />
        </form>
        <div className="w-fit mx-auto">
            <div className="p-1">
                <button 
                    onClick={handlePopup}
                    className="mx-auto flex items-center justify-around gap-2 border-2 border-black rounded bg-white text-black w-full px-2 py-1 mt-1 hover:bg-black hover:text-white">
                    <Image
                        src={'/Icons/Google__G__logo.svg'}
                        alt='Cart Icon'
                        width={16}
                        height={16}
                    />
                    <span className="text-md">Inicia sesion con Google</span>
                </button>
            </div>
            <div className="w-full p-1 flex gap-2 justify-center">
                <Link
                    href="/Register"
                    className="flex items-center border-2 border-black rounded bg-white text-black w-content px-2 h-8 mt-1 hover:bg-black hover:text-white"
                >
                    Registrate aquí
                </Link>
                <Link
                        href="/"
                        className="flex items-center border-2 border-black rounded bg-white text-black w-content px-2 h-8 mt-1 hover:bg-black hover:text-white"
                    >
                        Volver al inicio
                    </Link>
            </div>
        </div>
    </div>
    )
}

export default LoginForm
