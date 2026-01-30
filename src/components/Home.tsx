import { Link,Outlet, }from "react-router-dom"
import "../styles/Home.css"
import "../styles/App.css"
const Home=()=>{

    return(

        <div id='Home'>


        <h1>Welcome to Novatech Electronics!</h1>

        <nav >
            <button id='view-products-btn' className="home-btn">
                <Link className="home-link" to='products/view'>
                    see products
                </Link>
            </button>

            <button id='about-us-btn' className="home-btn">

            <Link className="home-link" to='/about/view'>
                 About us
            </Link>

            </button>
            
            <Outlet/>
        </nav>


        </div>



    )

}



export default Home