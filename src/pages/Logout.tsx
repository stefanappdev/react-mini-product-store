import { useNavigate} from "react-router-dom"
import { useLoginAuth } from "../contexts/LoginContext.tsx"
import LogoutStyles from '../styles/Logout.module.css'





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
    <div className="pages" id='Logout-page'>
        
        <h1>Logout page</h1>

      <button className={LogoutStyles["logout-btn"]} onClick={handleLogout} >Logout</button>
    
    </div>
  )
}

export default Logout