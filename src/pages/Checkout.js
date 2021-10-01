import React, {useState, useContext} from "react"
import {Context} from "../Context"
import OrderSummary from "../components/OrderSummary"

function Checkout() {
    const [buttonText, setButtonText] = useState("Place Order")
    const [formInputs, setFormInputs] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })
    const {emptyCart} = useContext(Context)

    function placeOrder(event) {
        event.preventDefault()
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    function handleChange(event) {
        const {name, value} = event.target
        setFormInputs({
            ...formInputs,
            [name]: value
        })
    }

    return (
        <main className="checkout-page">
            <h1>Checkout Page</h1>
            <h2>Delivery</h2>
            <form onSubmit={placeOrder}>
                <input
                    type="text"
                    name="firstName" 
                    value={formInputs.firstName}
                    onChange={handleChange} 
                    placeholder="First Name" 
                />
                <br />
                <input
                    type="text"
                    name="lastName" 
                    value={formInputs.lastName}
                    onChange={handleChange} 
                    placeholder="Last Name" 
                />
                <br />
                <input
                    type="text"
                    name="email" 
                    value={formInputs.email}
                    onChange={handleChange} 
                    placeholder="Email" 
                />
                <br />
                <button onClick={placeOrder}>{buttonText}</button>
            </form>
            <OrderSummary />
        </main>
    )
}

export default Checkout