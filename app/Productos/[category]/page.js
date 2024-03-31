import ProductsList from "@/components/Products/ProductsList"

export async function generateMetadata({params, searchParams}, parent){

  return {
    title: `Tecno Tienda - ${params.category.toUpperCase()}`
  }
}

const page = ({params}) => {
  return (
      <ProductsList categoria={params.category} />
  )
}

export default page
