
import AppRoutes from "./routes/routes.tsx"; 
import { LoginContextProvider } from "./contexts/LoginContext.tsx";
import './styles/App.module.css'

function App() {
  

  return (
    
    <LoginContextProvider>
    <div id='app'>
       
            <AppRoutes/>
          
   </div>
    </LoginContextProvider>
     
  )
}

export default App
