import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'
import {useContext} from 'react'
import CartContext from '../../context/CartContext'

const Header = ({restaurantDetails}) => {
  const {getCartCount} = useContext(CartContext)
  const cartCount = getCartCount()
  const {restaurantName} = restaurantDetails

  return (
    <div className="header-container px-4 d-flex justify-content-between align-items-center">
      <div className="title-container aling-items-center">
        <h1 className="title-heading aling-items-center">{restaurantName}</h1>
      </div>
      <div className="cart-container d-flex justify-content-around align-items-center">
        <p className="d-none m-0 text-center d-md-inline para">My Orders</p>
        <AiOutlineShoppingCart style={{fontSize: '1.5rem'}} />
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </div>
    </div>
  )
}

export default Header
