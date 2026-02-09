import { useNavigate } from "react-router-dom"

import Err404Styles from '../styles/404.module.css'



const Nomatch=()=>{
   
   let navigate=useNavigate();

   return(<div className={`pages ${Err404Styles['error_404_page']}`}>
        <h1>Error 404 !</h1>
        <span>Hmm...Something went wrong here</span>    

        <img src='/images/disconnected.webp'/>

        <button onClick={()=>navigate("/")}>Go Home</button>
    </div>)
}


export default Nomatch