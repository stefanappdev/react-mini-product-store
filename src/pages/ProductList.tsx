import { useNavigate,Link } from "react-router-dom";
import { products } from "../products.ts";
import ProductStyles from '../styles/products.module.css'
import '../tailwindstyles.css'




const ProductList=()=>{
   let navigate=useNavigate();
   
   
   const PL=products.map(product=>{

        return (<div key={product.id} className='grid grid-cols-2 gap-4 h-30' id={`product-${product.id}`}>

            <div className='flex justify-center align-center text-center flex-col w-25 h-25 '>
                <img className='w-20 h-20  ' alt={product.name} src={product.imageLink}/>
                <span className=' font-bold '>{product.name}</span>

            </div>
            
            

        <div className="flex justify-center align-center flex-col">
           
            <Link to ={`/product/${product.id}`} >
            <button className="font-bold text-zinc-200 h-10 mrounded-md border-none w-20 bg-blue-500">
                see more

            </button> 
            </Link>
        </div>
            


        </div>)

   })
   
   
   return (
            <div id='products-page' className="pages">
            
                <h1 className="font-bold text-3xl">Our Products</h1>

                
                <>

                    {PL}

                </>
            
                <button className={ProductStyles['go-home-btn']} onClick={()=>{navigate('/')}}>go home</button>

            </div>
   )

}




export default ProductList