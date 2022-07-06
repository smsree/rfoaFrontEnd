import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";
const HeaderCartButton = props =>{
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
        console.log("header cart button rerendering")
        return curNumber+item.amount;
    },0)
   
    return <button className={classes.button} onClick={props.onClick}>
        <span>
            Your cart
        </span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
}
export default HeaderCartButton;