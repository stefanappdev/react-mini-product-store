import { useLoginAuth } from "../contexts/LoginContext"
import { useNavigate } from "react-router-dom";


const Login=()=>{
   const navigate=useNavigate();
   const Auth=useLoginAuth();
   const handleLogin=()=>{
     Auth.Login()
     navigate('/')
   }
   
   return(<>
    
    <h1>Login Page</h1>

    <button onClick={handleLogin}>Login</button>

    {!Auth.isLoggedIn&&<h2>Login first</h2>}
    
    </>)
}

export default Login