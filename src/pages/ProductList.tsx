import { Link, useNavigate } from "react-router-dom";
import { products } from "../products.ts";
import ProductStyles from '../styles/products.module.css'






const ProductList=()=>{
   let navigate=useNavigate();
   
   
   const PL=products.map(product=>{

        return (<div key={product.id} className={ProductStyles["product-snapshot"]} id={`product-${product.id}`}>

            <div className={ProductStyles["product-highlight"]}>
                <img className={ProductStyles["product-image"]} alt={product.name} src={product.imageLink}></img>
                <span className={ProductStyles["product-name"]}>{product.name}</span>

            </div>
            
            

            <Link className={ProductStyles["product-details-link"]} to={`/product/${product.id}`} >
                <button>View Details</button>
            </Link>


        </div>)

   })
   
   
   return (
            <div id='products-page' className="pages">
            
                <h1>Our Products</h1>

                
                <>

                    {PL}

                </>
            
                <button className={ProductStyles['go-home-btn']} onClick={()=>{navigate('/')}}>go home</button>

            </div>
   )

}




export default ProductList