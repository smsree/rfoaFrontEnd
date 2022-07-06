import React,{useRef,useState} from "react"
import classes from "./LoginForm.module.css";
const isEmpty=(value)=>value.trim()==="";
const isSixChar=(value)=>value.trim().length===6;
const UserRegistrationForm = props => {
    const [formInputValidity,setFormInputValidity]=useState({
        email:true,
        name:true,
        phoneNumber:true,
        password:true
    })
    const inputNameRef=useRef("");
    const inputEmailRef=useRef("");
    const inputPhoneNumberRef=useRef("");
    const inputCreatePasswordRef=useRef("");
    

    const userRegSubmitHandler = event =>{
        event.preventDefault();
        const enteredName=inputNameRef.current.value;
        const enteredEmail=inputEmailRef.current.value;
        const enteredPhoneNumber=inputPhoneNumberRef.current.value;
        const enteredPassword = inputCreatePasswordRef.current.value;
        const enteredNameValid = !isEmpty(enteredName)
        const enteredEmailValid= !isEmpty(enteredEmail)
        const enteredPhoneNumberValid=!isEmpty(enteredPhoneNumber)
        const enteredPasswordValdi = isSixChar(enteredPassword)
        setFormInputValidity({
            email:enteredEmailValid,
            name:enteredNameValid,
            phoneNumber:enteredPhoneNumberValid,
            password:enteredPasswordValdi
        })
        const formValid = enteredEmailValid && enteredNameValid && enteredPasswordValdi && enteredPhoneNumberValid;
        if(!formValid){
            return;
        }
         fetch("http://localhost:8100/userRegistration/add",{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify({
                email:enteredEmail,
                name:enteredName,
                phoneNumber:enteredPhoneNumber,
                password:enteredPassword
            })
          });
        inputNameRef.current.value="";
        inputEmailRef.current.value="";
        inputPhoneNumberRef.current.value="";
        inputCreatePasswordRef.current.value="";
    }
    return <form onSubmit={userRegSubmitHandler} className={classes.form}>
        <h1>New user Registration form</h1>
        <div>
            <label htmlFor="name">Enter name:</label><br/>
            <input type="text" id="name" ref={inputNameRef}/>
            {!formInputValidity.name && <p>Please enter name:</p>}
        </div>
        <div>
            <label htmlFor="email">Enter email:</label><br/>
            <input type="email" id="email" ref={inputEmailRef}/>
            {!formInputValidity.email && <p>Please enter email:</p>}
        </div>
        <div>
            <label htmlFor="address">Enter phone number:</label><br/>
            <input type="text" id="address" ref={inputPhoneNumberRef}/>
            {!formInputValidity.phoneNumber && <p>Please enter phone number:</p>}
        </div>
        <div>
            <label htmlFor="create">Create password:</label><br/>
            <input type="text" id="create" ref={inputCreatePasswordRef}/>
            {!formInputValidity.password && <p>password must be six charaters:</p>}
        </div>
        
        <button type="submit">Register</button>
        <button type="button" onClick={props.onCloseReg}>close</button>
    </form>
    
}
export default UserRegistrationForm