import { useNavigate } from "react-router-dom"
import '../styles/App.css'



const Nomatch=()=>{
   
   let navigate=useNavigate();

   return(<>
        <h1>Error 404 !</h1>
        <span>Hmm...Something went wrong here</span>    

        <button onClick={()=>navigate("/")}>Go Home</button>
    </>)
}


export default Nomatch