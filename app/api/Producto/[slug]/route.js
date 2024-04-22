import { NextResponse } from "next/server";
import { collection, getDocs, addDoc, where, query, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { mockProducts } from "@/data/products";

// export async function GET (request, {params}){
//     const { slug } = params
//     console.log(slug)
//     const docRef = doc(db, "productos", slug)
//     const docSnapshot = await getDoc(docRef)
//     console.log("---------------------------------------------------------------------------------------")
//     console.log(docSnapshot.data())

//     const data = mockProducts.find(item=>item.slug===slug)
//     return NextResponse.json(data)
// }

export async function GET (request, {params}){
    try {
        const {slug} = params
        const productsRef = collection(db, 'productos')
        const querySnapshot = await getDocs(productsRef)
        const docs = querySnapshot.docs.map(doc => doc.data())
        const data = docs.find(item=>item.slug===slug)
    
        return NextResponse.json(data)
        
    } catch (error) {
        console.log(error)
    }

}

export async function POST(request, {params}){
    try {
        const {slug} = params

        const formData = await request.formData()
        const productData = {
            title: formData.get('titulo'),
            description: formData.get('descripcion'),
            price: Number(formData.get('precio')),
            stock: Number(formData.get('stock')),
            slug: formData.get('slug'),
            brand: formData.get('marca'),
            image: formData.get('imagen').name,
            type: formData.get('categoria').toLowerCase(),
        }

        const productsRef = collection(db, 'productos')
        const newProduct = addDoc(productsRef, productData)
        
        return NextResponse.json(newProduct)        
        
    } catch (error) {
        console.log(error)      
        return NextResponse.status(500).json(error) 
    }
}

export async function PUT(request, {params}){
    try {
        const {slug} = params

        const formData = await request.formData()
        const productData = {}
        if(Number(formData.get('precio'))) productData.price=Number(formData.get('precio'))
        if(Number(formData.get('stock'))) productData.stock=Number(formData.get('stock'))
        if(formData.get('categoria')) productData.image=formData.get('categoria').toLowerCase()

        const q = query(collection(db, 'productos'), where('slug', '==', slug));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
            return NextResponse.status(404).json({ error: 'Producto no encontrado' });
        } else {
            const productDoc = querySnapshot.docs[0];
            const productRef = doc(db, 'productos', productDoc.id);
            await updateDoc(productRef, productData);
            return NextResponse.json({ message: 'Producto actualizado correctamente' });
        }   
        
    } catch (error) {
        console.log(error)      
        return NextResponse.status(500).json(error) 
    }
}

export async function DELETE(request, {params}){
    try {
        const {slug} = params

        const q = query(collection(db, 'productos'), where('slug', '==', slug));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
            return NextResponse.status(404).json({ error: 'Producto no encontrado' });
        } else {
            const productDoc = querySnapshot.docs[0];
            const productRef = doc(db, 'productos', productDoc.id);
            await deleteDoc(productRef);
            return NextResponse.json({ message: 'Producto eliminado correctamente' });
        }   
        
    } catch (error) {
        console.log(error)      
        return NextResponse.status(500).json(error) 
    }
}

