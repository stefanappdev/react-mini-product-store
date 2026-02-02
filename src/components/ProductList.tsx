import { Link, useNavigate } from "react-router-dom";
import { products } from "./products";
import '../styles/products.css'
import '../styles/App.css'





const ProductList=()=>{
   let navigate=useNavigate();
   
   
   const PL=products.map(product=>{

        return (<div key={product.id} className="product-snapshot" id={`product-${product.id}`}>

            <div className="product-highlight">
                <img className="product-image" alt={product.name} src={product.imageLink}></img>
                <span className="product-name">{product.name}</span>

            </div>
            
            

            <Link className="product-details-link" to={`/product/${product.id}`} >
                <button>View Details</button>
            </Link>


        </div>)

   })
   
   
   return (
            <div id='products-listing'>
            
                <h1>Our Products</h1>

                
                <>

                    {PL}

                </>
            
                <button id='go-home-btn' onClick={()=>{navigate('/')}}>go home</button>

            </div>
   )

}




export default ProductList