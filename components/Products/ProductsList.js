import { mockProducts } from "@/data/products"
import ProductCard from "./ProductCard"

const ProductsList = ({categoria}) => {
    const items = categoria === 'todos' ? mockProducts : mockProducts.filter(item => item.type === categoria)

    return (
    <section className="container m-auto flex justify-center items-center gap-12 flex-wrap py-5 min-h-[calc(100vh-15rem)]">
        {items.map(item=> <ProductCard key={item.slug} item={item}/> )}
    </section>
    )
}

export default ProductsList
