import {useContext} from "react"
import {Context} from "../Context"

function useTotalCost() {
    const {cartItems} = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    return totalCost
}

export default useTotalCost