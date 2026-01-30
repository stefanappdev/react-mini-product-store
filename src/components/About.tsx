
import { useNavigate } from "react-router-dom"
import '../styles/About.css'

const About=()=>{
    let navigate=useNavigate();

    return(<div id="about-us">

        <h1>About Us</h1>

        <p id="about-us-paragraph">
            At <em> NovaTech Electronics</em>, we believe technology should make life simpler, faster, 
            and more exciting. From everyday essentials to cutting-edge gadgets, 
            we curate a wide range of electronics designed to keep you connected, 
            productive, and entertained. 
            <br/>
            Whether you’re upgrading your home setup or picking up your next 
            must-have device, 
            we’re here to help you make the right choice.
            
        </p>
    
         <button className="back-btn" onClick={()=>navigate('/')}>Go Back</button>
    
    </div>)
}



export default About