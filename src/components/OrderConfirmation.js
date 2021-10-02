import React, {useContext} from "react";
import { Context } from "../Context";

function OrderConfirmation() {
    const {formInputs} = useContext(Context)
    // const userDetails = Object.keys(formInputs).map((keyName, i) => (
    //     <p key={i}>{keyName}: {formInputs[keyName]}</p>
    // ))

    return (
        <div>
            <h1> Congratulations {formInputs["firstName"]}, your order is successful. </h1>
            <p> Your brilliant piece(s) of Art will be delievered to: </p>
            <p> {formInputs["address"]} </p>
        </div>
    )
}

export default OrderConfirmation