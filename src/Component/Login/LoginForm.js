import AdminModal from "../UI/AdminModal";
import React,{useState,useEffect,useRef} from "react";
import AdminLoginForm from "../Admin/AdminLoginform";
import UserRegistrationForm from "./UserRegistrationForm";

const LoginForm = props => {
        const [showUserReg,setShowUserReg]=useState(false);
        const inputNameRef=useRef("");
        const [showAdmin,setShowAdmin]=useState(false);
        const [lName,setLName]=useState("-")
        const [lPass,setLPass]=useState("-")
        const [userData,setUserData]=useState({
            name:"",
            email:"",
            phoneNumber:"",
            password:""
        })
        const resource=inputNameRef.current.value;
        useEffect(()=>{
            const fetchMeals=async () => {
                const response = await fetch("http://localhost:8100/userRegistration/find/"+resource);
                const ressponseData = await response.json();
                console.log(resource)
                setUserData(ressponseData);
                
              };
              fetchMeals();
        },[lName])

       
        const loginSubmitHandler=(event)=>{
            event.preventDefault();
            if(userData.email === lName && userData.password === lPass){
                props.isLog();
                props.data(userData);
            }
            else{
                alert("User not found please register as new user");
            }
        }
        const MainLoginForm =   <form onSubmit={loginSubmitHandler}>
                                    <h1>Welcome to Green Home Foods</h1>
                                    <label htmlFor="email"><b>Enter email:</b></label><br/>
                                    <input type="email" id="email" onChange={(event)=>{setLName(event.target.value)}} ref={inputNameRef}/><br/>
                                    <label htmlFor="password"><b>Enter password:</b></label><br/>
                                    <input type="password" id="password" onChange={(event)=>{setLPass(event.target.value)}}/><br/>
                                    <button type="submit">Login</button>
                                    <button type="button" onClick={()=>{setShowUserReg(true)}} >New User</button>
                                    <button type="button" onClick={()=>{setShowAdmin(true)}}>Admin</button>
                                </form>
        
    

    return <div>
          <AdminModal>
            {!showAdmin && MainLoginForm}
            {!showAdmin && showUserReg && <UserRegistrationForm onCloseReg={()=>{setShowUserReg(false)}}/>}
            {showAdmin && <AdminLoginForm onCloseAdmin={()=>{setShowAdmin(false)}}/>}
            </AdminModal>
            
        </div>
}
export default LoginForm;