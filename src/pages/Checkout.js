import React from "react"
import CheckoutForm from "../forms/CheckoutForm"
import OrderSummary from "../components/OrderSummary"


const Checkout = () => {
    
    return (
        <main className="checkout-page">
            <h1>Checkout Page</h1>
            <div className="columns">
                <div>
                    <h2>Delivery</h2>
                    <CheckoutForm />
                </div>
                <div className="order-summary">
                    <OrderSummary />
                </div>
            </div>
        </main>
    )
}

export default Checkout