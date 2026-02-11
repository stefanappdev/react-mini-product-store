
import {useNavigate,NavLink} from "react-router-dom"
import { useLoginAuth } from "../contexts/LoginContext.tsx"
import NavStyles from '../styles/Header.module.css'


const Navbar=()=>{
    const auth=useLoginAuth();
    const navigate=useNavigate();

    const isActiveDesktopLinkStyle={
      color:'rgb(6, 182, 212)',
      

    }

    const regularDesktopLinkStyle={
      color:'white',
    }


    const regularMobileLinkStyle={
      color:'white',
    }

       const isActiveMobileLinkStyle={
      color:'rgb(29, 78, 216)',
      

    }
    

return (<div className={NavStyles['main-nav-container']}>
          <span  className={NavStyles['company-name']}>Novatech Electronics</span>

          <div  className={NavStyles['mobile-dropdown']}>
            <button  className={NavStyles['mobile-dropdown-btn']}>Menu</button>
            <nav  className={NavStyles['mobile-dropdown-content']}> 
             <div>
                <NavLink style={({isActive})=>(isActive?isActiveMobileLinkStyle:regularMobileLinkStyle)} to='/'>
                Home
                </NavLink>
            </div>   
              
              <div>
                <NavLink style={({isActive})=>(isActive?isActiveMobileLinkStyle:regularMobileLinkStyle)} to='/products'>products</NavLink>
              </div>
              
              <div>
                <NavLink style={({isActive})=>(isActive?isActiveMobileLinkStyle:regularMobileLinkStyle)} to='/about'>about</NavLink>
              </div>
              
            
            </nav>
          </div>
          

          

          <nav  className={NavStyles['desktop-nav']}> 
             <div>
                <NavLink style={({isActive})=>(isActive?isActiveDesktopLinkStyle:regularDesktopLinkStyle)} to='/'>Home</NavLink>
            </div>   
              
              <div>
                <NavLink style={({isActive})=>(isActive?isActiveDesktopLinkStyle:regularDesktopLinkStyle)} to='/products'>products</NavLink>
              </div>
              
              <div>
                <NavLink style={({isActive})=>(isActive?isActiveDesktopLinkStyle:regularDesktopLinkStyle)} to='/about'>about</NavLink>
              </div>
              
            
          </nav>



          {auth.isLoggedIn?<button className={NavStyles['login-logout-btn']} style={{backgroundColor:'#f10808ff',fontWeight:'bold',color:'white',}} onClick={()=>navigate('/logout')}>Logout?</button>:
          <button  className={NavStyles['login-logout-btn']} style={{ backgroundColor:'#1a751fff',fontWeight:'bold',color:'white',}} onClick={()=>navigate('/login')} >Login?</button>}
</div>)}

export default Navbar;