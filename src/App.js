import { useState} from "react";
import Header from "./Component/Layouts/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import AdminLoginForm from "./Component/Admin/AdminLoginform";
import CartProvider from "./Store/CartProvider";

function App(props) {
  const [cartIsShown,setCartIsShown] = useState(false);
 

  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () =>{
    setCartIsShown(false);
  }
  
  return (
    <CartProvider>
  
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} uName={props.uName} uPhone={props.uPhone} uEmail={props.uEmail}/>}
     
      <main>
      <Meals/>
      </main>
      </CartProvider>
   
  );
}

export default App;
