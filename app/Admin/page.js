import AdminProductList from "@/components/Admin/AdminProductList"

export async function generateMetadata({params, searchParams}, parent){

    return {
      title: `Tecno Tienda - Admin`
    }
  }
  
  const page = () => {
      return (
        <section className="min-h-[calc(100vh-15rem)] py-5 px-2">
            <AdminProductList/>
        </section>
      )
    }
    
    export default page
    