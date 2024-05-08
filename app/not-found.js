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
                <div className="mx-[5vw] text-center border-2 border-grey-100 py-4 px-2 my-[10vh] shadow-lg">
                    <h1 className="font-bold text-2xl">404 - Not Found</h1>
                    <p>La página que estabas buscando no existe</p>
                    <button onClick={()=>router.back()} className="border-2 border-black rounded bg-white text-black w-fit px-2 h-8 mt-1 hover:bg-black hover:text-white">Volver</button>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default notFound
