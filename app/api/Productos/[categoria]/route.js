import { NextResponse } from "next/server";
import { collection, getDocs, query, getFirestore, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET (request, {params}){
    try {
        const {categoria} = params
        const productsRef = collection(db, 'productos')

        const q= categoria==='todos'
        ? productsRef
        : query(productsRef,where('type','==',categoria))

        const querySnapshot = await getDocs(q)

        const docs = querySnapshot.docs.map(doc => doc.data())
    
        return NextResponse.json(docs)
        
    } catch (error) {
        console.log(error)
    }

}
