import AdminMenu from "@/components/Admin/AdminMenu"

export async function generateMetadata({params, searchParams}, parent){

    return {
      title: `Tecno Tienda - Admin`
    }
  }
  
  const page = () => {
      return (
        <main className="min-h-[calc(100vh-15rem)] py-5 px-2">
            <AdminMenu/>
        </main>
      )
    }
    
    export default page
    