import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import  Home from'./components/Home.tsx';
import Nomatch from "./components/Nomatch.tsx";
import ProductList from "./components/ProductList.tsx";
import Login from "./components/Login.tsx";
import About from "./components/About.tsx";
import Item from "./components/Item.tsx";
import { LoginContextProvider } from "./contexts/LoginContext.tsx";
import './styles/App.css'
import Navbar from "./components/Navbar.tsx";
import RequireLogin from "./components/RequireLogin.tsx";

function App() {
  

  return (


    <LoginContextProvider>
      <div id='app'>
        <Router>  

          <Navbar/>
          
          <Routes>
              <Route path='/' element={<Home/>}>

              <Route path='about/view' element={<About/>}/>

                <Route path='products/view' element={<RequireLogin><ProductList/></RequireLogin>}/>
                  <Route path='product_details/:id' element={<Item/>} />
              </Route>
              
              <Route path='/products' element={<RequireLogin> <ProductList/> </RequireLogin>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='*' element={<Nomatch/>} />

          </Routes>
        </Router>
      </div>
    </LoginContextProvider>
  )
}

export default App
