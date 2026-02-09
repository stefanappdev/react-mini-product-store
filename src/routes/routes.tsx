import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom"
import Logout from '../pages/Logout.tsx'
import RequireLogin from "../components/RequireLogin.tsx";
import MainLayout from "../pages/MainLayout.tsx";
import  Home from'../pages/Home.tsx';
import Nomatch from "../pages/Nomatch.tsx";
import ProductList from "../pages/ProductList.tsx";
import Login from "../pages/Login.tsx";
import About from "../pages/About.tsx";
import ItemDetails from "../pages/ItemDetails.tsx";

function AppRoutes() {
  return (
     <>

        <Router>
          <Routes>
              <Route path='/' element={<MainLayout/>} >
                <Route path="" index element={<Home/>}/>
                <Route path='/products' element={<RequireLogin> <ProductList/> </RequireLogin>}/>
                <Route path='/product/:productid' element={<ItemDetails/>} />
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='*' element={<Nomatch/>} />
              </Route>
          </Routes>
        </Router>
            </>
  )
}

export default AppRoutes