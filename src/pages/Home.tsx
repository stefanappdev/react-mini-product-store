import {useNavigate} from "react-router-dom"
import HomeStyles from "../styles/Home.module.css"
import '../tailwindstyles.css'


const Home=()=>{
    const navigate=useNavigate();
    return(
        <div className="pages" id='Home'>
      

        <h1 className="text-3xl font-bold ">Welcome to Novatech!</h1>
         <span>Transforming lives with technology</span>

        <img className={HomeStyles["app-logo"]} src="/images/electronics.webp"/>
 
       

        <div>
            

            <button onClick={()=>navigate('/products')} className={HomeStyles['view-products-btn']} >
                See Products
            </button>

            <button onClick={()=>navigate('/about')} className={HomeStyles['about-us-btn']} >
                     About us
            </button>
            
        </div>


        </div>



    )

}



export default Home