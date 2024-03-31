'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { categories } from "@/data/categories"

const CategoryMenu = () => {
    
    const pathName = usePathname()

    return (
        <aside className="flex flex-col gap-3 px-5 py-5 bg-sky-50">
            {categories.map(link=>{
                return <Link
                        key={link.label}
                        href={link.href}
                        className={`${pathName === link.href ? "font-bold" : ""} text-black-100`}
                    >{link.label}
                    </Link>
            })}
        </aside>
    )
}

export default CategoryMenu
