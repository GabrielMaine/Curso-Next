import { NextResponse } from "next/server";
import { collection, getDocs, addDoc, where, query, doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET (request){
    try {
        const adminRef = collection(db, 'admin')

        const querySnapshot = await getDocs(adminRef)

        const docs = querySnapshot.docs.map(doc => doc.data())
    
        return NextResponse.json(docs)

    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error, status: 500})
    }

}

export async function POST (request){
    try {
        const formData = await request.formData()

        const user = {
            email: formData.get('email')
        }

        const adminRef = collection(db, 'admin')
        const newAdmin = addDoc(adminRef, user)
    
        return NextResponse.json(newAdmin)

    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error, status: 500})
    }

}

export async function DELETE(request){
    try {
        const formData = await request.formData()

        const user = {
            email: formData.get('email')
        }

        const q = query(collection(db, 'admin'), where('email', '==', user.email));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
            return NextResponse.json({ error: 'Usuario no encontrado', status:404 });
        } else {
            const adminDoc = querySnapshot.docs[0];
            const adminRef = doc(db, 'admin', adminDoc.id);
            await deleteDoc(adminRef);
            return NextResponse.json({ message: 'Admin eliminado correctamente' });
        }   
        
    } catch (error) {
        console.log(error)      
        return NextResponse.status(500).json(error) 
    }
}