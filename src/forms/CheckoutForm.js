import React, {useState, useContext} from "react"
import { Context } from "../Context"
import useForm from "../hooks/useForm"
import FormFieldErrorDisplay from "../components/FormFieldErrorDisplay"

const CheckoutForm = () => {
    const {emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Submit")

    const {formInputs, formInputsErrors,
        handleChange, handleBlur, handleSubmit} = useForm()

    const placeOrder = (event) => {
        event.preventDefault()
        const errors = handleSubmit()
        if(errors === 0) {
            setButtonText("Submitting...")
            setTimeout(() => {
                console.log("Order placed!")
                setButtonText("Submit")
                emptyCart()
            }, 3000)
        }
    }

    return (
        <form className="checkout-form" onSubmit={placeOrder}>
            <input
                type="text"
                name="firstName" 
                value={formInputs.firstName}
                onChange={handleChange} 
                onBlur={handleBlur}
                placeholder="First Name"
            />
            <FormFieldErrorDisplay errors={formInputsErrors} inputField="firstName" />
            <input
                type="text"
                name="lastName" 
                value={formInputs.lastName}
                onChange={handleChange} 
                onBlur={handleBlur}
                placeholder="Last Name" 
            />
           <FormFieldErrorDisplay errors={formInputsErrors} inputField="lastName" />
            <input
                type="text"
                name="email" 
                value={formInputs.email}
                onChange={handleChange} 
                onBlur={handleBlur}
                placeholder="Email" 
            />
            <FormFieldErrorDisplay errors={formInputsErrors} inputField="email" />
            <input
                type="text"
                name="phone" 
                value={formInputs.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Phone Number" 
            />
            <FormFieldErrorDisplay errors={formInputsErrors} inputField="phone" />
            <textarea
                type="text"
                name="address"
                value={formInputs.address}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Address"
            />
            <FormFieldErrorDisplay errors={formInputsErrors} inputField="address" />
            <button>{buttonText}</button>
        </form>
    )
}

export default CheckoutForm