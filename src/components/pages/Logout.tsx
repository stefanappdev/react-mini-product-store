import { useNavigate} from "react-router-dom"
import { useLoginAuth } from "../../contexts/LoginContext"
import '../../styles/Logout.css'
import '../../styles/App.css'



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

      <button onClick={handleLogout} style={{borderRadius:'5px', width:'100px', height:"35px",borderStyle:'none', padding:'2px', backgroundColor:'#f10808ff',color:'white',}}>Logout</button>
    
    </div>
  )
}

export default Logout