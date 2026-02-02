
import { Link } from "react-router-dom"
import { useLoginAuth } from "../contexts/LoginContext"

const Navbar=()=>{
    const auth=useLoginAuth();

return (<div id='main-nav-container'>
          

           <span>Novatech Electronics</span>

            <nav id="desktop-main-nav">
            <Link to='/'>Home</Link>

            {auth.isLoggedIn?<></>:<Link to='login'>Login</Link>}

            <Link to='about'>About us</Link>

            <Link to='products'>Products</Link>
          </nav>


          <div id='mobile-dropdown'>
            <img id="mobile-dropdown-btn" alt='menu' src='/images/hamburger.svg'/>
              
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


                {auth.isLoggedIn?<div></div>:<div>
                  <Link className="mobile-dropdown-content-link" to='login'>Login</Link>
                </div>}
              
              
              </nav>
          </div>
        
  

        </div>)}


export default Navbar