import { useEffect, useState } from "react";
import App from "./App";
import LoginForm from "./Component/Login/LoginForm";

const Parent = props => {
    const [isLoginSuccess,setIsLoginSuccess]=useState(false);
    const [ userName,setUserName]=useState("");
    const [userPhone,setUserPhone]=useState("");
    const [userEmail,setUserEmail]=useState("");
    function parentCallback(childData){
        setUserName(childData.name);
        setUserPhone(childData.phoneNumber);
        setUserEmail(childData.email);
    }
    useEffect(()=>{
      console.log(userName);
      console.log(userPhone);
      console.log(userEmail);
    },[userName,userPhone,userEmail])
    function login(){
        setIsLoginSuccess(true);
    }
    return <div>
      {!isLoginSuccess &&  <LoginForm isLog={login} data={parentCallback}/>}
      {isLoginSuccess && <App uName={userName} uPhone={userPhone} uEmail={userEmail}/>}
    </div>
}
export default Parent;