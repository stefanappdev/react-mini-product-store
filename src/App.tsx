import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import  Home from'./components/pages/Home.tsx';
import Nomatch from "./components/pages/Nomatch.tsx";
import ProductList from "./components/pages/ProductList.tsx";
import Login from "./components/pages/Login.tsx";
import About from "./components/pages/About.tsx";
import Item from "./components/Item.tsx";
import { LoginContextProvider } from "./contexts/LoginContext.tsx";
import './styles/App.css'
import Logout from './components/pages/Logout.tsx'
import RequireLogin from "./components/RequireLogin.tsx";
import MainLayout from "./components/pages/MainLayout.tsx";
function App() {
  

  return (
    
    <LoginContextProvider>
    <div id='app'>
        <Router>  
            <Routes>

              <Route path='/' element={<MainLayout/>} >
                <Route path="" index element={<Home/>}/>
                <Route path='/products' element={<RequireLogin> <ProductList/> </RequireLogin>}/>
                <Route path='/product/:id' element={<Item/>} />
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='*' element={<Nomatch/>} />
              </Route>

            </Routes>
        </Router>
     
   </div>
    </LoginContextProvider>
     
  )
}

export default App
