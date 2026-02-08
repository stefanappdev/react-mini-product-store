import type { ReactNode } from "react";
import { useLoginAuth } from "../contexts/LoginContext.tsx";
import { Navigate } from "react-router-dom";

type props={
    children:ReactNode
}

const RequireLogin=({children}:props)=>{
    const auth=useLoginAuth();


    return(!auth.isLoggedIn?<div>

            <Navigate to="/login"/>

    </div>:<>{children}</>)

}

export default RequireLogin