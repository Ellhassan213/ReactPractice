import React, {useState, useContext} from "react"
import PropTypes from "prop-types"

import {Context} from "../Context"

const Image = ({className, img}) => {
    const [hovered, setHovered] = useState(false)
    const {addToCart, cartItems, removeFromCart, favoriteItems, addToFavorite, removeFromFavorite} = useContext(Context)
    
    const heartIcon = () => {
        const alreadyInFavorite = favoriteItems.some(item => item.id === img.id)
        if(alreadyInFavorite) {
            return <i data-testid="heartfill" className="ri-heart-fill favorite" onClick={() => removeFromFavorite(img.id)}></i>
        } else if(hovered) {
            return <i data-testid="heartline" className="ri-heart-line favorite" onClick={() => addToFavorite(img)}></i>
        }
    }
    
    const cartIcon = () => {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i data-testid="cartfill" className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if(hovered) {
            return <i data-testid="cartline" className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }

    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img data-testid="image" src={img.url} className="image-grid" alt={img.id}/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
