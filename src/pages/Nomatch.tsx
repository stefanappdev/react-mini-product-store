import { useNavigate } from "react-router-dom"
import '../styles/App.module.css'
import '../styles/404.module.css'



const Nomatch=()=>{
   
   let navigate=useNavigate();

   return(<div id='error_404_page'>
        <h1>Error 404 !</h1>
        <span>Hmm...Something went wrong here</span>    

        <img src='/images/disconnected.webp'/>

        <button onClick={()=>navigate("/")}>Go Home</button>
    </div>)
}


export default Nomatch