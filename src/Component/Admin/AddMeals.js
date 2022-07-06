import classes from "./AddMeals.module.css"
import { useRef,useState } from "react";
const isEmpty=(value)=>value.trim()===""; 
const AddMeals = props => { 

    const[isFormValid,setIsFormValid]=useState({
        name:true,
        description:true,
        price:true
    })
    const mealNameInputRef=useRef();
    const descriptionInputRef=useRef();
    const priceInputRef=useRef();
    const submitAddMealsHandler = event => {
        event.preventDefault();

        const enteredName = mealNameInputRef.current.value;
        const enteredDescription=descriptionInputRef.current.value;
        const enteredPrice=priceInputRef.current.value;

        const enteredNameIsValid=!isEmpty(enteredName);
        const enteredDescriptionIsValid = !isEmpty(enteredDescription);
        const entertedPriceIsValid=!isEmpty(enteredPrice);

        setIsFormValid({
            name:enteredNameIsValid,
            description:enteredDescriptionIsValid,
            price:entertedPriceIsValid
        })

        const valid = enteredDescriptionIsValid && enteredNameIsValid && entertedPriceIsValid;
        if(!valid){
            return;
        }

       const num =Math.random();
        fetch("http://localhost:8100/meals/add",{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id:num,
                name:mealNameInputRef.current.value,
                description:descriptionInputRef.current.value,
                price:priceInputRef.current.value
            })
        })

        mealNameInputRef.current.value="";
        descriptionInputRef.current.value="";
        priceInputRef.current.value="";
        }
    return<form onSubmit={submitAddMealsHandler}>
        <div>
            <label htmlFor="name"><b>Enter Meal name:</b></label><br/>
            <input id="name" type="text" ref={mealNameInputRef}/>
            {!isFormValid.name && <p>Please enter meal name...</p>}
        </div>
        <div>
            <label htmlFor="description"><b>Enter description:</b></label><br/>
            <input id="description" type="text" ref={descriptionInputRef}/>
            {!isFormValid.description && <p>Please enter descritpion...</p>}
        </div>
        <div>
            <label htmlFor="Price"><b>Enter Price:</b></label><br/>
            <input id="Price" type="text" ref={priceInputRef}/>
            {!isFormValid.price && <p>Please enter valid price...</p> }
        </div>
        <div className={classes.actions}>
            <button className={classes.button}>Add Meals</button>
        </div>
    </form>

}
export default AddMeals;