import React, {useState, useContext} from "react"
import {Context} from "../Context"
import OrderSummary from "../components/OrderSummary"
import {useHistory} from "react-router-dom"

function Checkout() {
    const history = useHistory()
    const {formInputs, handleChange, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")

    function placeOrder(event) {
        event.preventDefault()
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
            history.push("/confirmation")
        }, 3000)
    }

    return (
        <main className="checkout-page">
            <h1>Checkout Page</h1>
            <div className="columns">
                <div>
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
                        <input
                            type="text"
                            name="phone" 
                            value={formInputs.phone}
                            onChange={handleChange} 
                            placeholder="Phone Number" 
                        />
                        <br />
                        <textarea
                            type="text"
                            name="address"
                            value={formInputs.address}
                            onChange={handleChange}
                            placeholder="Address"
                        />
                        <br />
                        {<button onClick={placeOrder}>{buttonText}</button>}
                    </form>
                </div>
                <div className="order-summary">
                    <OrderSummary />
                </div>
            </div>
        </main>
    )
}

export default Checkout