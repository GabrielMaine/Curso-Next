'use client'
import { useRouter } from "next/navigation"
import Navbar from "@/components/Layout/Navbar"
import Footer from "@/components/Layout/Footer"

const notFound = () => {
    const router=useRouter()
    return (
        <>
            <Navbar/>
            <main className="min-h-[calc(100vh-15rem)]">
                <h1>404 - Not Found</h1>
                <p>La página que estabas buscando no existe</p>
                <button onClick={()=>router.back()}>Volver</button>
            </main>
            <Footer/>
        </>
    )
}

export default notFound
