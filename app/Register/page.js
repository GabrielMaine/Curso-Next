import RegisterForm from "@/components/Auth/RegisterForm"

export async function generateMetadata({params, searchParams}, parent){

    return {
      title: `Tecno Tienda - Registro`
    }
  }

const page = () => {
    return (
    <main>
        <RegisterForm />  
    </main>
    )
}

export default page