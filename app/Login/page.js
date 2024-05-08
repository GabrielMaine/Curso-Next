import LoginForm from "@/components/Auth/LoginForm"

export async function generateMetadata({params, searchParams}, parent){

    return {
      title: `Tecno Tienda - Login`
    }
  }

const page = () => {
    return (
    <section>
        <LoginForm />  
    </section>
    )
}

export default page
