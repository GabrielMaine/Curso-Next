import ProductDetail from "@/components/Products/ProductDetails"

export async function generateMetadata({params, searchParams}, parent){

    return {
      title: `Tecno Tienda - ${params.slug.toUpperCase()}`
    }
  }

const page = ({params}) => {
    return (
        <section className="mx-auto my-5">
            <ProductDetail slug={params.slug} />
        </section>
    )
}

export default page
