import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { categories } from '@/data/categories'

const Footer = () => {
  return (
    <footer>
        <div className="bg-gray-200 flex justify-around py-3">
          <div>
            <Image
                    alt={"Logo"}
                    src={`/Logo/Logo2.png`}
                    width={210}
                    height={120}
                    style={{objectFit: "contain"}}
                    />
          </div>
          <div>
            <div className="flex flex-col align-start">
              <div>
                <span>Lunes a Viernes 9 a 18hs</span><br/><span>Sabados 9 a 13hs</span>
              </div>
              <div>
                <span>Av. Pellegrini 1234 - Rosario, Santa Fe</span>
              </div>
              <div>
                <span>tecnotienda@gmail.com</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold">Categorias</h2>
            <div className="flex flex-col align-start">
              {categories.map(e=>{
                return <div key={e.label}>
                  <Link href={e.href}>{e.label}</Link>
                </div>
              })}
            </div>
          </div>
          <div>
            <h2 className="font-bold">Institucionales</h2>
            <div className="flex flex-col align-start">
              <div>
                <Link href="/Nosotros">Nosotros</Link><br/>
                <Link href="/Contacto">Contacto</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between bg-gray-600 py-2 px-4 min-h-11">
            <p className="font-medium">Desarrollado por Gabriel Maine</p>
            <div className="flex gap-3">
                <p>Powered by</p>
                <Image
                    src={"/Icons/next.svg"}
                    alt="Next logo"
                    width={50}
                    height={50}
                />
            </div>
        </div>
    </footer>
  )
}

export default Footer
