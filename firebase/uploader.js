import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { mockProducts } from "@/data/products";
import { db } from "./config";

const itemsCollection = collection(db, "productos");

mockProducts.forEach(producto => {
    addDoc(itemsCollection, producto);
});

console.log("Archivos cargados")