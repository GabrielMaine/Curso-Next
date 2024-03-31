import CartDetail from "@/components/Cart/CartDetail"
import Link from "next/link"
import { mockCart } from "@/data/cart"

export async function generateMetadata({params, searchParams}, parent){

    return {
      title: `Tecno Tienda - Carrito`
    }
  }
  

const page = () => {
    return (
        <main className="min-h-[calc(100vh-15rem)]">
            <section className="m-auto my-5 w-1/2">
                <h1>Carrito:</h1>
                {mockCart.map(item=><CartDetail key={item.slug} slug={item.slug} />)}
                <div>
                    <Link href="/Checkout">
                        Finalizar compra
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default page
