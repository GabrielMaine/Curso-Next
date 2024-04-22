export async function generateMetadata({params, searchParams}, parent){

  return {
    title: `Tecno Tienda - Nosotros`
  }
}

const page = () => {
  return (
    <main className="min-h-[calc(100vh-15rem)]">
        <h1>Nosotros</h1>
    </main>
  )
}

export default page
