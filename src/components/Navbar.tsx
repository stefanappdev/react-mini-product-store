
import {useNavigate,Link} from "react-router-dom"
import { useLoginAuth } from "../contexts/LoginContext.tsx"
import NavStyles from '../styles/Header.module.css'
const Navbar=()=>{
    const auth=useLoginAuth();
    const navigate=useNavigate()

return (<div className={NavStyles['main-nav-container']}>
          <span  className={NavStyles['company-name']}>Novatech Electronics</span>

          <div  className={NavStyles['mobile-dropdown']}>
            <button  className={NavStyles['mobile-dropdown-btn']}>Menu</button>
            <nav  className={NavStyles['mobile-dropdown-content']}> 
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
          

          

          <nav  className={NavStyles['desktop-nav']}> 
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



          {auth.isLoggedIn?<button className={NavStyles['login-logout-btn']} style={{backgroundColor:'#f10808ff',fontWeight:'bold',color:'white',}} onClick={()=>navigate('/logout')}>Logout?</button>:
          <button  className={NavStyles['login-logout-btn']} style={{ backgroundColor:'#1a751fff',fontWeight:'bold',color:'white',}} onClick={()=>navigate('/login')} >Login?</button>}
</div>)}

export default Navbar;