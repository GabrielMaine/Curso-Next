import { NextResponse } from "next/server";
import { collection, getDocs, addDoc, where, query, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET (request, {params}){
    try {
        const productsRef = collection(db, 'tickets')

        const querySnapshot = await getDocs(productsRef)

        const docs = querySnapshot.docs.map(doc => doc.data())
    
        return NextResponse.json({payload: docs, status: 200})
    } catch (error) {
        return NextResponse({error:error, status:500})
    }
}

export async function POST (request, {params}){
    try {
        const formData = await request.formData()
        const values = JSON.parse(formData.get("values"))
        const cart = JSON.parse(formData.get("cart"))
        const total = formData.get("total")

        const productsRef = collection(db, 'productos')
        
        cart.map(async (item) => {
            const q = query(productsRef, where('slug', '==', item.slug))
            const querySnapshot = await getDocs(q)
            const productDoc = querySnapshot.docs[0];
            if (querySnapshot.empty) {
                throw new Error (`Producto ${item.title} no encontrado en la base de datos`)
            } else {
                if(productDoc.data().stock<item.quantity) {
                    throw new Error (`Stock insuficiente para el producto ${item.title}`)
                } else {
                    return null 
                }
            }   
        })

        cart.map(async (item) => {
            const q = query(productsRef, where('slug', '==', item.slug))
            const querySnapshot = await getDocs(q)
            const productDoc = querySnapshot.docs[0];
            const productRef = doc(db, 'productos', productDoc.id);
            const productData = { stock: productDoc.data().stock-item.quantity }
            await updateDoc(productRef, productData);
        })

        const ticketsCollection = collection(db, "tickets");
        const data = {
            date: new Date(),
            buyer: values,
            cart: cart,
            total: total,
        }
        const order = await addDoc(ticketsCollection, data)

        return NextResponse.json({ order: order.id }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}