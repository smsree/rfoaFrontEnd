import classes from "./RemoveItem.module.css"
import { useState } from "react";
const RemoveItem = props => {
    const [isDeleted, setIsDeleted]=useState(false)
    const price = `₹${props.price.toFixed(2)}`;
    const id=props.id;
   
    const removeItemsHandler = () =>{
        const itemId=id;
        fetch("http://localhost:8100/meals/delete/"+itemId,{method:'DELETE'})
        setIsDeleted(true)
    }
    return <li className={classes['cart-item']}>
        <h2>{props.name}</h2>
        <h4 className={classes.price}>{price}</h4>
        <div className={classes.actions}>
            <button onClick={removeItemsHandler}>-</button>
        </div>
        {isDeleted && <div><button>*</button></div>}
    </li>

}
export default RemoveItem;