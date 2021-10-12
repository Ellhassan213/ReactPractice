import React, {useState, useContext} from "react"
import { Context } from "../Context"
import {useHistory} from "react-router-dom"

const CheckoutForm = () => {
    const history = useHistory()
    const {emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")
    const [formInputs, setFormInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormInputs({
            ...formInputs,
            [name]: value
        })
    }

    const placeOrder = (event) => {
        event.preventDefault()
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
            // history.push("/confirmation")
        }, 3000)
    }

    return (
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
            <button className="place-order" onClick={placeOrder}>{buttonText}</button>
        </form>
    )
}

export default CheckoutForm