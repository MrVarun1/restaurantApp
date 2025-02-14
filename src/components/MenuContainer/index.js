import DishItem from '../DishItem'
import './index.css'

const MenuContainer = ({activeCategory}) => {
  const {categoryDishes} = activeCategory
  return (
    <ul className="dish-container p-3">
      {categoryDishes.map(dish => (
        <DishItem key={dish.dishId} dish={dish} />
      ))}
    </ul>
  )
}

export default MenuContainer
