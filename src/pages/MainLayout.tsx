

import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}


export default MainLayout