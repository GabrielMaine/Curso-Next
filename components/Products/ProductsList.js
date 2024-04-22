import ProductCard from "./ProductCard"

const ProductsList = async ({categoria}) => {
    const items = await fetch(`http://localhost:3000/api/Productos/${categoria}`,
    {cache: "no-store"}
    ).then(r=>r.json())

    return (
    <section className="container m-auto flex justify-center items-center gap-12 flex-wrap py-5 min-h-[calc(100vh-15rem)]">
        {items.map(item=> <ProductCard key={item.slug} item={item}/> )}
    </section>
    )
}

export default ProductsList
