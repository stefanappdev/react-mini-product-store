import { useNavigate} from "react-router-dom"
import { useLoginAuth } from "../contexts/LoginContext.tsx"
import '../styles/Logout.module.css'
import '../styles/App.module.css'




const Logout = () => {
  const auth=useLoginAuth();
  const navigate=useNavigate()

  const handleLogout=()=>{
    auth.Logout();
    if (auth.isLoggedIn===false){
       navigate('/')
    }
   
  }
  return (
    <div id='Logout-page'>
        
        <h1>Logout page</h1>

      <button id="logout-btn" onClick={handleLogout} >Logout</button>
    
    </div>
  )
}

export default Logout