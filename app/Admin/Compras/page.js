import AdminTickets from "@/components/Admin/AdminTickets"

export async function generateMetadata({params, searchParams}, parent){

  return {
    title: `Tecno Tienda - Admin - Compras`
  }
}

const page =  () => {

  return (
    <section className="min-h-[calc(100vh-15rem)] py-5 px-2">
        <AdminTickets/>
    </section>
    )
}

export default page