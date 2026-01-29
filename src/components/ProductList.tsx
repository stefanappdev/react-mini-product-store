import { products } from "./products";

const ProductList=()=>{

   const PL=products.map(product=>{

        return (<div key={product.id} id={`product-${product.id}`}>

            <img alt={product.name} src=''></img>

            <span>{product.name}</span>


            <button>view Details</button>


        </div>)

   })
   
   
   return (<>
    
        <h1>Our Products</h1>


        <div id='productList'>

            {PL}

        </div>
    
    
    
    </>)


}






export default ProductList