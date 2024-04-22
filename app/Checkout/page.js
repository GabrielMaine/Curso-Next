import CheckoutDetails from "@/components/Checkout/CheckoutDetails";

export async function generateMetadata({params, searchParams}, parent){

    return {
      title: `Tecno Tienda - Checkout`
    }
}

const page = () => {
    return (
        <CheckoutDetails/>
    )
}

export default page
