import {useNavigate} from "react-router-dom"
import "../styles/Home.module.css"
import "../styles/App.module.css"


const Home=()=>{
    const navigate=useNavigate();
    return(
        <div id='Home'>
      

        <h1>Welcome to Novatech!</h1>
         <span>Transforming lives with technology</span>

        <img className="app-logo" src="/images/electronics.webp"/>

       

        <div>
            

            <button onClick={()=>navigate('/products')} id='view-products-btn' className="home-btn">
                See Products
            </button>

            <button onClick={()=>navigate('/about')} id='about-us-btn' className="home-btn">
                     About us
            </button>
            
        </div>


        </div>



    )

}



export default Home