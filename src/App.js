import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import Checkout from "./pages/Checkout"
import OrderConfirmation from "./components/OrderConfirmation"

const App = () => {    
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>
                
                <Route path="/cart">
                    <Cart />
                </Route>

                <Route path="/checkout">
                    <Checkout />
                </Route>

                <Route path="/confirmation">
                    <OrderConfirmation />
                </Route>
            </Switch>
        </div>
    )
}

export default App