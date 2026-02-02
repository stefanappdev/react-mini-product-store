
import { Link,useNavigate } from "react-router-dom"
import { useLoginAuth } from "../contexts/LoginContext"

const Navbar=()=>{
    const auth=useLoginAuth();
    const navigate=useNavigate()

return (<div id='main-nav-container'>
          

           <span>Novatech Electronics</span>

            <nav id="desktop-main-nav">
            <Link to='/'>Home</Link>

            <Link to='about'>About us</Link>

            <Link to='products'>Products</Link>
          </nav>


          <div id='mobile-dropdown'>
          
          
          <span className="mobile-dropdown-btn" style={{color:'white',}}>Menu</span>
              
              <nav id="mobile-dropdown-content">
                <div>
                  <Link className="mobile-dropdown-content-link" to='/'>Home</Link>
                </div>
              
                <div>
                  <Link className="mobile-dropdown-content-link" to='about'>About us</Link>
                </div>
              
                <div>
                  <Link className="mobile-dropdown-content-link" to='products'>Products</Link>
                </div>   

                {auth.isLoggedIn===false?<div>
                  <Link to='login' className="mobile-dropdown-content-link" >Login </Link> 
                </div>:""}
                          
              </nav>


          </div>
        

            {auth.isLoggedIn?<button style={{borderRadius:'5px', width:'100px', height:"35px",borderStyle:'none', padding:'2px', backgroundColor:'#f10808ff',color:'white',}} onClick={()=>navigate('/logout')}>Logout</button>:""}

        </div>)}


export default Navbar