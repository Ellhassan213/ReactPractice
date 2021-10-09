import React from "react"
import useTotalCost from "../hooks/useTotalCost"

const OrderSummary = () => {
    const deliveryCost = 1.99
    const total = useTotalCost()
    const totalCost = (total + deliveryCost).toLocaleString("en-US", {style: "currency", currency: "USD"})
    return (
        <div className="order-summary">
            <h2> Summary </h2>
            <h3> Items: ${total} </h3>
            <h3> Delivery: ${deliveryCost} </h3>
            <h3> Total: {totalCost}</h3>
        </div>
    )
}

export default OrderSummary