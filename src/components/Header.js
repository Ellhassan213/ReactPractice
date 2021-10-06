import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {Context} from "../Context"

function Header() {
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
            <Link to="/" className="header-link"><h2>Pic Some</h2></Link>
            <Link to="/cart" className="header-link">
                <i className={`${cartClassName} ri-fw ri-2x`} data-testid="cartIcon"></i>
            </Link>
        </header>
    )
}

export default Header
