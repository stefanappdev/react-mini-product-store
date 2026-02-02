import { Link}from "react-router-dom"
import "../styles/Home.css"
import "../styles/App.css"
import { useLoginAuth } from "../contexts/LoginContext"
import { useNavigate } from "react-router-dom"

const Home=()=>{
    const auth=useLoginAuth()
    const navigate=useNavigate()

    const handleLogout=()=>{
        auth.Logout()
        navigate('/')
    }

    return(

        <div id='Home'>
      

        <h1>Welcome to Novatech!</h1>

        {auth.isLoggedIn&&<span>you are logged in</span>}

        <img className="app-logo" src="/images/electronics.webp"/>

        <nav >
            {auth.isLoggedIn?<button onClick={handleLogout}>Logout</button>:
            <button onClick={()=>navigate('/login')}>go to Login</button>}

            <button id='view-products-btn' className="home-btn">
                <Link className="home-link" to='products'>
                    see products
                </Link>
            </button>

            <button id='about-us-btn' className="home-btn">

            <Link className="home-link" to='about'>
                 About us
            </Link>

            </button>
            
        </nav>


        </div>



    )

}



export default Home