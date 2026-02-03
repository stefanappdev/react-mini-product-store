
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
                
                {!auth.isLoggedIn?<nav id="mobile-dropdown-content">
                  <div>
                    <Link className="mobile-dropdown-content-link" to='/'>Home</Link>
                  </div>
                
                  <div>
                    <Link className="mobile-dropdown-content-link" to='about'>About us</Link>
                  </div>
                
                  <div>
                    <Link className="mobile-dropdown-content-link" to='products'>Products</Link>
                  </div>   

                   <div>
                    <Link className="mobile-dropdown-content-link" to='login'>Login</Link>
                  </div>  
                            
                </nav>:<nav id="mobile-dropdown-content">
                  <div>
                    <Link className="mobile-dropdown-content-link" to='/'>Home</Link>
                  </div>
                
                  <div>
                    <Link className="mobile-dropdown-content-link" to='about'>About us</Link>
                  </div>
                
                  <div>
                    <Link className="mobile-dropdown-content-link" to='products'>Products</Link>
                  </div>   

                   <div>
                    <Link className="mobile-dropdown-content-link" to='logout'>Logout</Link>
                  </div>  

                            
                </nav>}

                  {auth.isLoggedIn?<button id='login-status'>Logged in</button>:
                  <button id='login-status'>Logged out</button>}
          </div>
       

        </div>)}

export default Navbar