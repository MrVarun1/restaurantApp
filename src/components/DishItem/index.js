import {useContext} from 'react'
import './index.css'
import CartContext from '../../context/CartContext'

const DishItem = ({dish}) => {
  const {
    dishId,
    dishName,
    dishPrice,
    dishImage,
    dishCurrency,
    dishCalories,
    dishDescription,
    dishAvailability,
    dishType,
    addonCategories,
  } = dish

  const {cartItems, updateCart} = useContext(CartContext)
  const count = cartItems[dishId] || 0

  const dishTypeOutter = dishType === 2 ? 'non-veg-outter' : 'veg-outter'
  const dishTypeInner = dishType === 2 ? 'non-veg-inner' : 'veg-inner'

  const renderAddtoCart = () => (
    <div className="d-flex justify-content-around text-center align-items-center add-to-cart-container">
      <button
        onClick={() => updateCart(dish.dishId, -1)}
        className="button"
        type="button"
      >
        -
      </button>
      <span className="px-2">{count}</span>
      <button
        onClick={() => updateCart(dish.dishId, 1)}
        className="button"
        type="button"
      >
        +
      </button>
    </div>
  )
  const isCustomizable = addonCategories.length > 0

  return (
    <li className="dish-item-container m-2 ml-2 d-flex justify-content-center ">
      <div className="type-container m-3">
        <div
          className={`type-outter ${dishTypeOutter} d-flex justify-content-center align-items-center`}
        >
          <div className={`type-inner ${dishTypeInner}`} />
        </div>
      </div>
      <div className="content-container">
        <h1>{dishName}</h1>
        <p>{`${dishCurrency} ${dishPrice}`}</p>
        <p>{dishDescription}</p>
        {dishAvailability ? renderAddtoCart() : <p>Not available</p>}
        {isCustomizable && <p>Customizations available</p>}
      </div>
      <div className="text-center d-flex justify-content-center align-items-center">
        <p>{`${dishCalories} calories`}</p>
      </div>
      <div className="img-container d-flex justify-content-center align-items-center">
        <img className="img" src={dishImage} alt={dishName} />
      </div>
    </li>
  )
}

export default DishItem
