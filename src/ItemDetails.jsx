import { useContext } from "react"
import CartContext from "./context/CartContext"

export default function ItemDetails({item}) {
  let { name, price, emoji, id} = item
const {cart, setCart} = useContext(CartContext)
  return (
    <div>
        <h2>{id} | {name}</h2>
        <h1>{emoji}</h1>
        <h4>{price}</h4>
        <div>
          <button onClick={() => handlePlus(id)}>+</button>
          <span>{cart[id]?.qty||0}</span>
          <button onClick={() => handleMinus(id)}>-</button>
        </div>
      </div>
  )
}
