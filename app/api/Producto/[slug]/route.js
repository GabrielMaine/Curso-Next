import { NextResponse } from "next/server";
import { collection, getDocs, addDoc, setDoc, where, query, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebase/config";
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
        return NextResponse.json(data)
    }

}

export async function POST(request, {params}){
    try {
        const {slug} = params

        const formData = await request.formData()
        const data = {
            title: formData.get('title'),
            description: formData.get('description'),
            price: Number(formData.get('price')),
            stock: Number(formData.get('stock')),
            slug: formData.get('slug'),
            brand: formData.get('brand'),
            image: formData.get('image'),
            type: formData.get('type').toLowerCase(),
            discount:{
                status: false,
                amount: 0,
            },
            installments:{
                status: false,
                amount: 0,
            }
        }
        console.log(data)

        const storageRef = ref(storage, `${slug}/${image.name}`)
        const fileSnapshot = await uploadBytes(storageRef, data.image)
        const fileURL = await getDownloadURL(fileSnapshot.ref)

        const productData = {...data, image: fileURL}

        console.log(productData)

        const productsRef = collection(db, 'productos')
        const newProduct = addDoc(productsRef, productData)
        
        return NextResponse.json(newProduct)  
        
    } catch (error) {
        console.log(error)      
        return NextResponse.json({error: error, status: 500}) 
    }
}

export async function PUT(request, {params}){
    try {
        const {slug} = params

        const formData = await request.formData()

        const productData = {}
        if(formData.get('title')!=="") productData.title=formData.get('title')
        if(formData.get('description')!=="") productData.description=formData.get('description')
        if(formData.get('price')!=="") productData.price=Number(formData.get('price'))
        if(formData.get('stock')!=="") productData.stock=Number(formData.get('stock'))
        if(formData.get('slug')!=="") productData.slug=formData.get('slug')
        if(formData.get('brand')!=="") productData.brand=formData.get('brand')
        if(formData.get('type')!=="") productData.type=formData.get('type').toLowerCase()
        if(formData.get('discountStatus')==='si'){
            productData.discount={
                status:true,
                amount:formData.get('discountAmount')||0
            }
        }
        if(formData.get('installmentsStatus')==='si'){
            productData.installments={
                status:true,
                amount:formData.get('installmentsAmount')||0
            }
        }

        const image = formData.get('image')

        if(image.size>0){
            const storageRef = ref(storage, `${slug}/${image.name}`)
            const fileSnapshot = await uploadBytes(storageRef, image)
            const fileURL = await getDownloadURL(fileSnapshot.ref)
            productData.image = fileURL
        }

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
            return NextResponse.json({ error: 'Producto no encontrado', status:404 });
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

