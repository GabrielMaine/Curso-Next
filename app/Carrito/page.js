import CartList from "@/components/Cart/CartList"

export async function generateMetadata({params, searchParams}, parent){

    return {
      title: `Tecno Tienda - Carrito`
    }
}
  

const page = () => {
    return (
        <main className="min-h-[calc(100vh-15rem)]">
            <CartList />
        </main>
    )
}

export default page
