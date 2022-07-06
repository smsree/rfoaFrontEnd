import React,{useContext, useState} from 'react';
import classes from "./RazorPay.module.css";
import CartContext from '../../Store/CartContext';
function RazorpayModule(props) {
  const cartCtx=useContext(CartContext);
  const [amount, setamount] = useState('');
  function cashOnDelivary (){
      alert("Order placed succesfully");
  }
const handleSubmit = (e)=>{
  e.preventDefault();
  setamount(cartCtx.totalAmount);
  if(amount === ""){
  alert("please enter amount");
  }else{
    var options = {
      key: "rzp_test_7FGlwF0LwPkrEa",
      key_secret:"5uRNch2wvihC9COie2jpPccJ",
      amount: cartCtx.totalAmount *100,
      currency:"INR",
      name:"Green home foods",
      description:"for testing purpose",
      handler: function(response){
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name:"Green home foods",
        email:"ghf@gmail.com",
        contact:"9843722809"
      },
      notes:{
        address:"Razorpay Corporate office"
      },
      theme: {
        color:"#a1380f"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
  }
}
return (
  <div className={classes.actions}>
      <button onClick={cashOnDelivary}>Cash on Delivary</button>
   <div><b>Enter amount:</b></div>
   <input type="text"placeholder='Enter Amount'value={cartCtx.totalAmount}onChange={(e)=>setamount(e.target.value)} />
   <br/>
   <button onClick={handleSubmit}>submit</button>
  </div>
);
}
export default RazorpayModule;
