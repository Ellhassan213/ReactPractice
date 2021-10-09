import React, {useState, useEffect} from "react"

const Context = React.createContext()

const ContextProvider = ({children}) => {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])
    const [formInputs, setFormInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: ""
    })
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    
    const toggleFavorite = (id) => {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    }

    const addToFavorite = (newItem) => {
        setFavoriteItems(prevItems => [...prevItems, newItem])
        toggleFavorite(newItem.id)
    }

    const removeFromFavorite = (id) => {
        setFavoriteItems(prevItems => prevItems.filter(item => item.id !== id))
        toggleFavorite(id)
    }
    
    const addToCart = (newItem) => {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    
    const emptyCart = () => {
        setCartItems([])
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormInputs({
            ...formInputs,
            [name]: value
        })
    }
    
    return (
        <Context.Provider value={{
            allPhotos, 
            toggleFavorite, 
            cartItems, 
            addToCart, 
            removeFromCart, 
            emptyCart,
            formInputs,
            handleChange,
            favoriteItems,
            addToFavorite,
            removeFromFavorite
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}