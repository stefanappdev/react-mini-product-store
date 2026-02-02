import { Link}from "react-router-dom"
import "../../styles/Home.css"
import "../../styles/App.css"


const Home=()=>{
    
    return(

        <div id='Home'>
      

        <h1>Welcome to Novatech!</h1>
         <span>Transforming lives with technology</span>

        <img className="app-logo" src="/images/electronics.webp"/>

       

        <nav >
            

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