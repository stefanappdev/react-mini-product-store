import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import  Home from'./components/Home.tsx';
import Nomatch from "./components/Nomatch.tsx";
import ProductList from "./components/ProductList.tsx";
import About from "./components/About.tsx";

function App() {
  

  return (
    <>
      <Router>  


        <nav>
          <Link to='/'>Home</Link>

          <Link to='about'>About us</Link>

          <Link to='products'>Products</Link>
        </nav>


        <Routes>
            <Route path='/' element={<Home/>}>
              <Route path='products/view' element={<ProductList/>}/>
               <Route path='about/view' element={<About/>}/>
            </Route>

            <Route path='products' element={<ProductList/>}/>

            <Route path='about' element={<About/>}/>
            <Route path='*' element={<Nomatch/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
