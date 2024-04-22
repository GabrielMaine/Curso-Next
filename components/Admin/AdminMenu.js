'use client'
import { collection, addDoc} from "firebase/firestore";
import { mockProducts } from "@/data/products";
import { db } from "@/firebase/config";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";

const AdminMenu = () => {
    const productsRef = collection(db, "productos");

    const cargarProductos = () => {
        mockProducts.forEach(producto => {
            addDoc(productsRef, producto);
        });
    
        console.log("Archivos cargados")
    }

    return (
        <>
            <h1 className="font-bold text-xl">Panel de control de Admin</h1>
            <AddProduct/>
            <UpdateProduct/>
            <DeleteProduct/>
        </>
        // <div>
        //     <button onClick={cargarProductos}>Cargar productos</button>
        // </div>
  )
}

export default AdminMenu
