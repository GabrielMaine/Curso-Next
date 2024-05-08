'use client'
import { useRouter } from "next/navigation"

const notFound = () => {
    const router=useRouter()
    return (
        <section className="min-h-[calc(100vh-15rem)]">
                <h1>404 - Not Found</h1>
                <p>El producto que estabas buscando no existe</p>
                <button onClick={()=>router.back()}>Volver</button>
        </section>
    )
}

export default notFound
