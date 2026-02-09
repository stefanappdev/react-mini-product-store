import { useLoginAuth } from "../contexts/LoginContext.tsx"
import { useNavigate } from "react-router-dom";
import LoginStyles from '../styles/Login.module.css'



const Login=()=>{
   const navigate=useNavigate();
   const Auth=useLoginAuth();
   const handleLogin=()=>{
     Auth.Login()
     
     if(Auth.isLoggedIn){
      navigate('/')
     }
   }
   
   return(<div className="pages" id='Login-page'>
    
    <h1 className={LoginStyles["Login-header"]}>Login Page</h1>

     <button className={LoginStyles['login-btn']} onClick={handleLogin} >Login</button>
  
    
    </div>)
}

export default Login