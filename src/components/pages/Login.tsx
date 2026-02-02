import { useLoginAuth } from "../../contexts/LoginContext"
import { useNavigate } from "react-router-dom";


const Login=()=>{
   const navigate=useNavigate();
   const Auth=useLoginAuth();
   const handleLogin=()=>{
     Auth.Login()
     
     if(Auth.isLoggedIn){
      navigate('/')
     }
   }
   
   return(<div id='Login-page'>
    
    <h1>Login Page</h1>

    <button onClick={handleLogin}>Login</button>

  
    
    </div>)
}

export default Login