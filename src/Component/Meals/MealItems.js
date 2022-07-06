import classes from "./MealItems.module.css"
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";
const MealItems = (props) =>{
    const price=`₹${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);
    const addToCartHandler = enteredAmountNumber=>{
      console.log("meal item")
        cartCtx.addItems({
          id:props.id,
          amount:enteredAmountNumber,
          price:props.price,
          name:props.name

        })
    }
    return    <li className={classes.meal}>
    <div>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
    </div>
    <div><MealItemForm id={props.id} onAddToCart = {addToCartHandler}/></div>
  </li>
}
export default MealItems;