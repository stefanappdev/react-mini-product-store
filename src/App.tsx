import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import  Home from'./components/Home.tsx';
import Nomatch from "./components/Nomatch.tsx";
import ProductList from "./components/ProductList.tsx";
import About from "./components/About.tsx";
import Item from "./components/Item.tsx";
import './styles/App.css'

function App() {
  

  return (
    <div id='app'>
      <Router>  

      <div id='main-nav-container'>

        
          <nav id="desktop-main-nav">
          <Link to='/'>Home</Link>

          <Link to='about'>About us</Link>

          <Link to='products'>Products</Link>
        </nav>


        <div id='mobile-dropdown'>
          <img id="mobile-dropdown-btn" alt='menu' src='/images/hamburger.svg'/>
            
            <nav id="mobile-dropdown-content">
              <div>
                 <Link className="mobile-dropdown-content-link" to='/'>Home</Link>
              </div>
             
              <div>
                 <Link className="mobile-dropdown-content-link" to='about'>About us</Link>
              </div>
             
               <div>
                 <Link className="mobile-dropdown-content-link" to='products'>Products</Link>
               </div>
             
            </nav>
        </div>
       
 

      </div>
        



        <Routes>
            <Route path='/' element={<Home/>}>

             <Route path='about/view' element={<About/>}/>

              <Route path='products/view' element={<ProductList/>}/>
                 <Route path='product_details/:id' element={<Item/>} />
            </Route>

           

            
            <Route path='products' element={<ProductList/>}/>
            
            <Route path='about' element={<About/>}/>
            <Route path='*' element={<Nomatch/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
