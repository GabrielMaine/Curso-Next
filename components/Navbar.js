import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const links = [
    {
      label: "Inicio",
      href: "/"
    },
    {
      label: "Tienda",
      href: "/Productos/todos"
    },
    {
      label: "Nosotros",
      href: "/Nosotros"
    },
    {
      label: "Contacto",
      href: "/Contacto"
    },
    {
      label: "Admin",
      href: "/Admin"
    },
    {
      label: "Carrito",
      href: "/Carrito"
    },
  ]

  return (
    <header className="bg-gray-200 px-4 min-h-16">
      <div className="flex justify-between gap-2 h-12 px-3">
        <div className="min-h-16">
          <Link href="/">
          <Image
                  alt={"Logo"}
                  src={`/Logo/Logo1.png`}
                  width={98}
                  height={60}
                  style={{objectFit: "contain"}}
                  />
          </Link>
        </div>
        <div className="space-x-4 flex justify-around items-center min-h-16">
          {links.map(link=>{
            return <Link
            key={link.label}
            href={link.href}
            className={`text-neutral-600 font-bold hover:text-neutral-200`}
            >
            {link.label}
            </Link>
          })}
        </div>
      </div>
    </header>
  )
}

export default Navbar
