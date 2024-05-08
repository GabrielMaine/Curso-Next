'use client'
import { useState } from "react"
import { useAuthContext } from "../Context/AuthContext"
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"
import Link from "next/link"

const RegisterForm = () => {

    const { registerUser } = useAuthContext()

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
            await registerUser(values)
            router.push('/')
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: `"Ocurrio un error al registrar su usuario. Por favor intentelo mas tarde.`,
                icon: "error"
              });
        }
    }

    return (
    <div className="bg-white flex flex-col justify-around border-2 border-black rounded my-20 shadow-lg p-2 w-1/2 mx-auto p-5 text-center">
        <h2 className="font-bold text-2xl">Registrate</h2>
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
                value="Crear cuenta" 
                className="self-center border-2 border-black rounded bg-white text-black w-content px-2 h-8 mt-1 hover:bg-black hover:text-white"
            />
        </form>
        <div className="w-fit mx-auto">
            <div className="w-full p-1 flex gap-2 justify-center">
                <Link
                    href="/Login"
                    className="flex items-center border-2 border-black rounded bg-white text-black w-content px-2 h-8 mt-1 hover:bg-black hover:text-white"
                >
                    Inicia sesion aquí
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

export default RegisterForm
