import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/CartContext";
import { useContext ,useState} from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
const Cart = props =>{
    const cartCtx=useContext(CartContext);

    const[isCheckout,setIsCheckout] = useState(false);
    
    const cartItemRemoveHandler = (id) => {
        
        cartCtx.removeItems(id);
      };
    
      const cartItemAddHandler = (item) => {
        cartCtx.addItems({...item, amount:1});
      };

      async function submitOrderHandler(userData){
        console.log(userData);
        const num=Math.random();
       const respone=await fetch("http://localhost:8100/orders/add",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderedItems: cartCtx.items,
            totalAmount:cartCtx.totalAmount,
            primaryKey:num
          })
        })
        const responseUser = await fetch("http://localhost:8100/user/add",{
          method:'POST',
          headers:{'Content-type':'application/json'},
          body: JSON.stringify({
            primaryKey:num,
            email:props.uEmail,
            name:userData.name,
            street:userData.street,
            city:userData.city,
            pincode:userData.pincode,
            phoneNumber:userData.phoneNumber
          })
        })
        console.log(respone);
        console.log(responseUser);
      };



      
    const cartItems = (
        <ul className={classes['cart-items']}>
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </ul>
      );
    const totalAmount=`₹${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const amount = totalAmount;
    const OrderButtonHandler = () => {
        setIsCheckout(true);
    }

    const modelItems  = <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>close</button>
    {hasItems && <button className={classes.button} onClick={OrderButtonHandler}>Order</button>}
    </div>;

    return<Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>
                   Your Total Amount
            </span>
            <span>
                    {totalAmount}
            </span>
        </div>
        {isCheckout && <Checkout onConfirm={submitOrderHandler} uName={props.uName} amount={amount} onCancel={props.onClose}/>}
        {!isCheckout && modelItems}
        </Modal>

}
export default Cart;