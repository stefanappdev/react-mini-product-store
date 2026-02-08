
import {useNavigate,Link} from "react-router-dom"
import { useLoginAuth } from "../contexts/LoginContext.tsx"
import '../styles/Header.module.css'
const Navbar=()=>{
    const auth=useLoginAuth();
    const navigate=useNavigate()

return (<div id='main-nav-container'>
          <span id='company-name'>Novatech Electronics</span>

          <div id='mobile-dropdown'>
            <button id='mobile-dropdown-btn'>Menu</button>
            <nav id='mobile-dropdown-content'> 
             <div>
                <Link to='/'>Home</Link>
            </div>   
              
              <div>
                <Link to='/products'>products</Link>
              </div>
              
              <div>
                <Link to='/about'>about</Link>
              </div>
              
            
            </nav>
          </div>
          

          

          <nav id='desktop-nav'> 
             <div>
                <Link to='/'>Home</Link>
            </div>   
              
              <div>
                <Link to='/products'>products</Link>
              </div>
              
              <div>
                <Link to='/about'>about</Link>
              </div>
              
            
          </nav>



          {auth.isLoggedIn?<button id='login-logout-btn' style={{backgroundColor:'#f10808ff',fontWeight:'bold',color:'white',}} onClick={()=>navigate('/logout')}>Logout?</button>:
          <button id='login-logout-btn' style={{ backgroundColor:'#219727ff',fontWeight:'bold',color:'white',}} onClick={()=>navigate('/login')} >Login?</button>}
</div>)}

export default Navbar;