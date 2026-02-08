import React,{ createContext,useContext,useState} from "react";


interface ProviderValues{
    Login:()=>void,
    Logout:()=>void,
    isLoggedIn:boolean,
}

const LoginProviderValues:ProviderValues={

    Login:():void=>{},
     Logout:():void=>{}, 
     isLoggedIn:false
};
const LoginContext=createContext(LoginProviderValues);

type props={
    children:React.ReactNode;
}

const LoginContextProvider=({children}:props)=>{

const[isLoggedIn,setisLoggedIn]=useState(false);

const Login=()=>{
    setisLoggedIn(true)
}

const Logout=()=>{
    setisLoggedIn(false)
}

LoginProviderValues.Login=Login;
LoginProviderValues.Logout=Logout;
LoginProviderValues.isLoggedIn=isLoggedIn

return <LoginContext.Provider value={LoginProviderValues}>
    {children}
</LoginContext.Provider>


}

const useLoginAuth=()=>{
    return useContext(LoginContext)
}

export{LoginContextProvider,useLoginAuth}