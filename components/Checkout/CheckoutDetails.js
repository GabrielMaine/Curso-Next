import PurchaseDetails from "./PurchaseDetails";
import CheckoutForm from "./CheckoutForm";

const CheckoutDetails = () => {

    return (
        <main className="py-5 min-h-[calc(100vh-15rem)] flex justify-around">
            <CheckoutForm/>
            <PurchaseDetails/>
        </main>
    )
}

export default CheckoutDetails
