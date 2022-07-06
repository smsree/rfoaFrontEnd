import AdminModal from "../UI/AdminModal"
import classes from "./AdminLoginform.module.css"
import React,{useRef,useState} from "react"
import AddMeals from "./AddMeals"
import RemoveMeals from "./RemoveMeals"

const AdminLoginForm = props =>{
    const usernameInputRef=useRef();
    const passwordInputRef=useRef();
    const[isLoginCorrect,setIsLoginCorrect]=useState(false);
    const[isAddMealsClick,setIsAddMealsClick]=useState(false);
    const[isRemoveMealsClick,setIsRemoveMealsClick]=useState(false);

    console.log("AdminForm component");
    const submitFormHandler=(event)=>{
        event.preventDefault();
        if(usernameInputRef.current.value === "root" && passwordInputRef.current.value === "toor"){
            setIsLoginCorrect(true);
        }
    }
    const AdminForm_1= <form onSubmit={submitFormHandler}>
                            <label htmlFor='username'><b>UserName:</b></label>
                            <br/>
                            
                            <input id="username" ref={usernameInputRef}/>
                            <br/>
                          
                            <lable htmlFor='password'><b>Password:</b></lable>
                            <br/>
                         
                            <input id='password' ref={passwordInputRef}/>
                            <br/>
                          
                            <div className={classes.actions}>
                                <button className={classes.button}>Login</button>
                                <button className={classes.button} type="button" onClick={props.onCloseAdmin}>close</button>
                            </div>
   
                        </form>;

    const addMealsHandler=()=>{
        setIsAddMealsClick(true);
        setIsRemoveMealsClick(false);
    }  
    const removeMealsHandler=()=>{
        setIsRemoveMealsClick(true);
        setIsAddMealsClick(false);
    }  
   
    return <AdminModal onClose={props.onCloseAdmin}>
        <div className={classes.form}>
        {!isLoginCorrect && AdminForm_1}
        {isLoginCorrect   &&<button onClick={addMealsHandler} className={classes.buttonAdmin}>Add meals</button>}
        {isLoginCorrect && <button className={classes.buttonAdmin} onClick={removeMealsHandler} >Remove Meals</button>}
        {isLoginCorrect && <form><button type="submit" className={classes.buttonLogout}>Logout</button></form>}
        {isAddMealsClick && !isRemoveMealsClick&& <AddMeals/>}
        {isRemoveMealsClick && !isAddMealsClick && <RemoveMeals/>}
        </div>
  </AdminModal>
}
export default AdminLoginForm