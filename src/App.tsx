import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React from "react";
import  Home from'./components/Home.tsx';
import Nomatch from "./components/Nomatch.tsx";
import ProductList from "./components/ProductList.tsx";
import Login from "./components/Login.tsx";
import About from "./components/About.tsx";
import Item from "./components/Item.tsx";
import { LoginContextProvider } from "./contexts/LoginContext.tsx";
import './styles/App.css'

import RequireLogin from "./components/RequireLogin.tsx";
import MainLayout from "./components/MainLayout.tsx";
function App() {
  

  return (

    <div id='app'>
    <LoginContextProvider>
      
        <Router>  
         
          
            <Routes>

              <Route path='/' element={<MainLayout/>} >
                <Route path="" index element={<Home/>}/>
                
                <Route path='/products' element={<RequireLogin> <ProductList/> </RequireLogin>}/>
                <Route path='/product/:id' element={<Item/>} />
                
                
                <Route path='/about' element={<About/>}/>

                <Route path='/login' element={<Login/>}/>
              </Route>
              
             
              <Route path='*' element={<Nomatch/>} />
            </Routes>
         
        </Router>
     
    
    </LoginContextProvider>
    </div>
  )
}

export default App
