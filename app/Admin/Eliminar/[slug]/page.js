import DeleteProduct from '@/components/Admin/DeleteProduct'
import { notFound } from 'next/navigation'

export async function generateMetadata({params, searchParams}, parent){

    return {
      title: `Tecno Tienda - Eliminar - ${params.slug.toUpperCase()}`
    }
  }

const page = async ({params}) => {
    const {slug} = params
    const item = await fetch(`http://localhost:3000/api/Producto/${slug}`,
    {cache: "no-store"}

    ).then(r=>r.json())

    
    if (!item) {
        notFound()
    }

    return (
    <section>
        <DeleteProduct item={item}/>
    </section>
    )
}

export default page