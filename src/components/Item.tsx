import { useParams,useNavigate } from "react-router-dom";
import { products } from "./products";
import '../styles/products.css'

const Item=()=>{
    let {id}=useParams();
    let navigate=useNavigate();
    const item=products.find(product=>product.id.toString()===id);


    return (<>
        <div className="product-info">

            <h1>{item.name}</h1>
            <br/>

            <img src={item.imageLink} alt={item.name}/>

            <br/>
        
           <span className="product-info-price">Price: ${item.price} USD</span>

           <button className="back-btn" onClick={()=>navigate('/products')}>Go Back</button>
        </div>
    
    </>)
}

export default Item;