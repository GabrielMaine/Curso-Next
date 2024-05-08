import Link from "next/link"

const LoginPage = () => {
  return (
    <div className="mx-[5vw] text-center border-2 border-grey-100 py-4 px-2 my-[10vh] shadow-lg z-10">
        <h1>¡No estas autorizado!</h1>
        <p>Si eres admin inicia sesión <Link href='/Login' className='text-sky-600 font-bold'> aquí</Link></p>
    </div>
  )
}

export default LoginPage
