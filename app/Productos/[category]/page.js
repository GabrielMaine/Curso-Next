import ProductsList from "@/components/Products/ProductsList"

export async function generateMetadata({params, searchParams}, parent){

  return {
    title: `Tecno Tienda - ${params.category.toUpperCase()}`
  }
}

export async function generateStaticParams(){
  return [
    {categoria: "todos"},
    {categoria: "celulares"},
    {categoria: "notebooks"},
    {categoria: "accesorios"},
  ]
}

export const revalidate = 3600

const page = ({params}) => {
  return (
      <ProductsList categoria={params.category} />
  )
}

export default page
