import './App.css'
import Home from './components/Home'
import {CartProvider} from './context/CartContext'

const App = () => (
  <CartProvider>
    <Home />
  </CartProvider>
)

export default App
