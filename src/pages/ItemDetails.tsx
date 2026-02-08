import { useParams,useNavigate } from "react-router-dom";
import { products } from "../products.ts";
import '../styles/products.module.css'
import '../styles/App.module.css'

const ItemDetails=()=>{
    let {productid}=useParams();
    let navigate=useNavigate();
    const item=products.find(product=>product.id.toString()===productid);

    if (item===undefined||item===null){
        return
    }


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

export default ItemDetails;