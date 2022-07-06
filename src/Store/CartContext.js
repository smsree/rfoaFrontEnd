import React from "react";
const CartContext = React.createContext(
    {
        items:[],
        totalAmount:0,
        addItems:(items)=>{},
        removeItems:(id)=>{}
        

    }
);
export default CartContext;