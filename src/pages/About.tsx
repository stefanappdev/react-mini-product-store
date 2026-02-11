
import { useNavigate } from "react-router-dom"
import AboutStyles from '../styles/About.module.css'
import '../tailwindstyles.css'

const About=()=>{
    let navigate=useNavigate();

    return(<div className={`pages ${AboutStyles['about-us']}`}>

        <h1 className="font-bold text-3xl">About Us</h1>

        <p className={AboutStyles["about-us-paragraph"]}>
            At <em> NovaTech Electronics</em>, 
            we believe technology should make life simpler, faster, 
            and more exciting.
            <br/>
            
            From everyday essentials to cutting-edge gadgets, 
            we curate a wide range of electronics designed to keep you connected, 
            productive, and entertained. 

            <br/>
            Whether you’re upgrading your home setup or picking up your next 
            must-have device, 
            we’re here to help you make the right choice.
            
        </p>
    
         <button className={AboutStyles["back-btn"]} onClick={()=>navigate('/')}>Go Back</button>
    
    </div>)
}



export default About