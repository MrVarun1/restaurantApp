import {createContext, useState} from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cartItems, setCartItem] = useState({})

  const updateCart = (dishId, change) => {
    setCartItem(prevCart => {
      const count = (prevCart[dishId] || 0) + change
      if (count < 0) return prevCart
      return {...prevCart, [dishId]: count}
    })
  }

  const getCartCount = () =>
    Object.values(cartItems).reduce((total, count) => total + count, 0)

  return (
    <CartContext.Provider value={{cartItems, updateCart, getCartCount}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
